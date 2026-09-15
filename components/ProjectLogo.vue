<script setup>
// Renders a CNCF project mark. Kubernetes and OpenTelemetry ship full-colour
// SVGs; OpenFeature is monochrome-only in cncf/artwork, so it is drawn as a
// CSS mask we can tint ourselves.
const props = defineProps({
  project: { type: String, required: true },
  active: { type: Boolean, default: true },
  size: { type: String, default: '3.5rem' },
})

// Paths built here are opaque to Vite's asset rewriting, so they must carry
// the deploy base themselves — GitHub Pages serves the deck from a subpath.
const asset = file => `${import.meta.env.BASE_URL}logos/${file}`

const MARKS = {
  kubernetes:    { src: asset('kubernetes-icon-color.svg'),    tinted: false },
  opentelemetry: { src: asset('opentelemetry-icon-color.svg'), tinted: false },
  openfeature:   { src: asset('openfeature-icon-white.svg'),   tinted: true, accent: '#5D5DFF' },
}
</script>

<template>
  <!-- Tinted marks are masks, so the fill follows `active` instead of a filter. -->
  <div
    v-if="MARKS[project].tinted"
    class="project-logo project-logo--masked"
    :class="{ 'is-dim': !active }"
    :style="{
      width: size,
      height: size,
      '--mark': `url(${MARKS[project].src})`,
      '--accent': MARKS[project].accent,
    }"
  />
  <img
    v-else
    class="project-logo"
    :class="{ 'is-dim': !active }"
    :src="MARKS[project].src"
    :alt="project"
    :style="{ width: size, height: size }"
  >
</template>

<style>
.project-logo {
  display: block;
  object-fit: contain;
  transition: filter .4s, background-color .4s, opacity .4s;
}

/* Inactive marks desaturate so only the one being discussed carries brand
   colour. Opacity rather than brightness, so they stay visible on a light
   background instead of washing out to white. */
.project-logo.is-dim {
  filter: grayscale(1) brightness(.8) opacity(.4);
}

.project-logo--masked {
  background-color: var(--accent);
  mask: var(--mark) no-repeat center / contain;
  -webkit-mask: var(--mark) no-repeat center / contain;
}

.project-logo--masked.is-dim {
  filter: none;
  background-color: currentColor;
  opacity: .35;
}
</style>
