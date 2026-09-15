#!/usr/bin/env node
// Regenerates the Kubernetes conformance wall.
//
//   node tools/build-distributions.mjs [v1.34]
//
// Pulls every certified product for the given Kubernetes version from
// cncf/k8s-conformance, rasterizes the logos vendors point at, dedupes
// identical marks, and writes components/Distributions.vue plus
// public/logos/distros/.
//
// The certified set changes every release, so run this before the talk — a
// stale number is the one thing an audience will fact-check live. Pick a
// version that has finished filling up; the newest one always looks small.
import { chromium } from 'playwright-chromium'
import { createHash } from 'node:crypto'
import { mkdtempSync, rmSync, mkdirSync, writeFileSync, readdirSync, unlinkSync, readFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const VERSION = process.argv[2] || 'v1.34'
const ROOT = new URL('..', import.meta.url).pathname
const LOGO_DIR = join(ROOT, 'public/logos/distros')
const TARBALL = 'https://github.com/cncf/k8s-conformance/archive/refs/heads/master.tar.gz'

// Long marketing names make the wall ragged; the wall is read as a mass.
const SHORTEN = {
  'Alibaba Cloud Container Service for Kubernetes': 'Alibaba Cloud ACK',
  'Amazon Elastic Kubernetes Service (Amazon EKS)': 'Amazon EKS',
  'Amazon Elastic Kubernetes Service Anywhere (Amazon EKS Anywhere)': 'Amazon EKS Anywhere',
  'Amazon Elastic Kubernetes Service Distro (Amazon EKS-D)': 'Amazon EKS-D',
  'CoreWeave Kubernetes Service (CKS)': 'CoreWeave CKS',
  'Lenovo xCloud Container Platform': 'Lenovo xCloud',
  'Nectar Research Cloud Magnum Service': 'Nectar Magnum',
  'OpenShift Container Platform by Red Hat': 'Red Hat OpenShift',
  'Oracle Cloud Infrastructure Container Engine For Kubernetes (OKE)': 'Oracle OKE',
  'OVHcloud Managed Kubernetes Service': 'OVHcloud Kubernetes',
  'Samsung Kubernetes Engine (SKE)': 'Samsung SKE',
  'Switch Cloud Kubernetes (SCK)': 'Switch Cloud SCK',
  'VMware Tanzu Kubernetes Grid Integrated Edition': 'VMware Tanzu Grid',
  'plusserver Kubernetes Engine (PSKE)': 'plusserver PSKE',
}

const field = (text, key) => (text.match(new RegExp(`^\\s*${key}:\\s*(.+?)\\s*$`, 'm')) || [])[1]

function tidy(name) {
  let n = name.replace(/^["']|["']$/g, '').replace(/\s*\(https?:\/\/[^)]*\)/g, '').replace(/\s+/g, ' ').trim()
  const gardener = n.match(/Gardener.*deployed on (\w+)/i)
  if (gardener) return `Gardener on ${gardener[1].toUpperCase()}`
  return SHORTEN[n] || n
}

const work = mkdtempSync(join(tmpdir(), 'k8sconf-'))
try {
  console.log(`fetching cncf/k8s-conformance (${VERSION})…`)
  execFileSync('bash', ['-c',
    `curl -sL ${TARBALL} | tar xz -C ${work} --wildcards '*/${VERSION}/*/PRODUCT.yaml'`])

  const base = join(work, readdirSync(work)[0], VERSION)
  if (!existsSync(base)) throw new Error(`no ${VERSION} directory — check the version exists upstream`)

  const products = readdirSync(base).map(slug => {
    const t = readFileSync(join(base, slug, 'PRODUCT.yaml'), 'utf8')
    return { slug, name: tidy(field(t, 'name') || slug), logo: (field(t, 'product_logo_url') || '').replace(/^["']|["']$/g, '') }
  })
  console.log(`${products.length} products certified against ${VERSION}`)

  console.log('downloading logos…')
  const fetched = new Map()
  await Promise.all(products.filter(p => p.logo).map(async p => {
    try {
      const res = await fetch(p.logo, { signal: AbortSignal.timeout(15000) })
      if (!res.ok) return
      const buf = Buffer.from(await res.arrayBuffer())
      // Vendors point at whatever they have — PDFs, EPS, dead links, HTML error
      // pages. Only SVG can be rasterized reliably here.
      if (!buf.subarray(0, 2000).toString().match(/<svg/i)) return
      fetched.set(p.slug, buf)
    } catch { /* a dead vendor URL is normal; it falls back to the name */ }
  }))
  console.log(`${fetched.size} usable SVG logos`)

  console.log('rasterizing…')
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 600, height: 200 }, deviceScaleFactor: 2 })
  const rendered = new Map()
  for (const [slug, buf] of fetched) {
    const data = `data:image/svg+xml;base64,${buf.toString('base64')}`
    await page.setContent(`<body style="margin:0"><img id="l" src="${data}" style="display:block;height:40px;width:auto"></body>`)
    try {
      await page.waitForFunction(() => { const i = document.getElementById('l'); return i.complete && i.naturalWidth > 0 }, { timeout: 4000 })
      const el = await page.$('#l')
      const box = await el.boundingBox()
      if (!box || box.width < 4 || box.width > 900) continue
      rendered.set(slug, await el.screenshot({ omitBackground: true }))
    } catch { /* unrenderable SVG; falls back to the name */ }
  }
  await browser.close()

  // Some vendors file one submission per cloud (Gardener) or per variant
  // (EKS / EKS-A / EKS-D). Identical marks repeated five times read as a bug.
  const byHash = new Map()
  for (const [slug, png] of rendered) {
    const h = createHash('sha1').update(png).digest('hex')
    if (!byHash.has(h)) byHash.set(h, [])
    byHash.get(h).push(slug)
  }

  mkdirSync(LOGO_DIR, { recursive: true })
  for (const f of readdirSync(LOGO_DIR)) unlinkSync(join(LOGO_DIR, f))

  // ImageMagick is optional. At 40px tall a 128-colour palette is visually
  // identical and roughly a third of the bytes, and these load on every slide
  // because Slidev keeps the whole deck in the DOM.
  let quantize = false
  try { execFileSync('which', ['convert'], { stdio: 'ignore' }); quantize = true }
  catch { console.log('(convert not found — skipping PNG quantization)') }

  const nameOf = Object.fromEntries(products.map(p => [p.slug, p.name]))
  const logos = []
  for (const slugs of byHash.values()) {
    const keep = slugs.sort((a, b) => nameOf[a].length - nameOf[b].length)[0]
    const out = join(LOGO_DIR, `${keep}.png`)
    writeFileSync(out, rendered.get(keep))
    if (quantize) {
      try { execFileSync('convert', [out, '-strip', '-colors', '128', `PNG8:${out}`]) } catch { /* keep the original */ }
    }
    logos.push({ slug: keep, name: nameOf[keep] })
  }
  logos.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

  const names = [...new Set(products.filter(p => !rendered.has(p.slug)).map(p => p.name))]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  const q = s => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  writeFileSync(join(ROOT, 'components/Distributions.vue'), `<script setup>
// GENERATED by tools/build-distributions.mjs — do not edit by hand.
//
// The wall: every product that passed the Kubernetes ${VERSION} conformance suite,
// from cncf/k8s-conformance. Meant to be looked at, not read.
//
// ${products.length} products certified. ${logos.length} logos shown — some vendors file one
// submission per cloud or per variant and the identical marks are deduped. The
// ${names.length} without a usable logo URL are listed by name, so the wall stays complete
// rather than quietly dropping part of the field.
const asset = file => \`\${import.meta.env.BASE_URL}logos/distros/\${file}\`

const LOGOS = [
${logos.map(l => `  { slug: ${q(l.slug)}, name: ${q(l.name)} },`).join('\n')}
]

const NAMES = [
${names.map(n => `  ${q(n)},`).join('\n')}
]
</script>

<template>
  <div class="wall">
    <img
      v-for="l in LOGOS"
      :key="l.slug"
      class="mark"
      :src="asset(l.slug + '.png')"
      :alt="l.name"
    >
    <span v-for="n in NAMES" :key="n" class="distro">{{ n }}</span>
  </div>
</template>

<style scoped>
.wall {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .5rem .9rem;
  margin-top: 1rem;
}

.mark {
  height: 1.15rem;
  width: auto;
  max-width: 6.5rem;
  object-fit: contain;
}

/* Vendors with no usable logo URL still belong on the wall. */
.distro {
  font-size: .55rem;
  letter-spacing: .02em;
  opacity: .6;
  white-space: nowrap;
}
</style>
`)
  console.log(`\nwrote components/Distributions.vue — ${logos.length} logos, ${names.length} names`)
  console.log(`update the footer on the wall slide: "${products.length} products certified against Kubernetes ${VERSION}"`)
} finally {
  rmSync(work, { recursive: true, force: true })
}
