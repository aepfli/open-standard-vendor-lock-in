<script setup>
// Renders a project's mark in one of two forms.
//
// `mark` — the icon alone, used small inside the <StandardsStack> boxes, which
// print the project's name in type underneath. Kubernetes and OpenTelemetry
// ship full-colour SVGs; OpenFeature's mark is monochrome by design, so it is
// drawn as a CSS mask filled with currentColor — that way it follows the
// slide's ink colour instead of needing a separate file per theme.
//
// `lockup` — the official horizontal logo, mark plus wordmark, as each project
// publishes it. Used by <Tag> in the top corner, where the wordmark replaces
// the label rather than sitting next to it.
defineProps({
  project: { type: String, required: true },
  variant: { type: String, default: 'mark' },
  active: { type: Boolean, default: true },
  size: { type: String, default: '3.5rem' },
  // Lockups have wildly different proportions — Kubernetes is 4.3:1, the
  // OpenFeature wordmark 6.6:1 — so they are sized by WIDTH and left to find
  // their own height. Matching their heights instead would make the
  // wordmark-only mark tower over the other two.
  width: { type: String, default: '7rem' },
})

// Paths built here are opaque to Vite's asset rewriting, so they must carry
// the deploy base themselves — GitHub Pages serves the deck from a subpath.
const asset = file => `${import.meta.env.BASE_URL}logos/${file}`

const MARKS = {
  kubernetes:    { src: asset('kubernetes-icon-color.svg'),    mono: false },
  opentelemetry: { src: asset('opentelemetry-icon-color.svg'), mono: false },
  openfeature:   { src: asset('openfeature-icon-white.svg'),   mono: true },
}

const LOCKUPS = {
  kubernetes:    { src: asset('kubernetes-horizontal.png'),    alt: 'Kubernetes' },
  opentelemetry: { src: asset('opentelemetry-horizontal.png'), alt: 'OpenTelemetry' },
  openfeature:   { src: asset('openfeature-horizontal.png'),   alt: 'OpenFeature' },
}
</script>

<template>
  <img
    v-if="variant === 'lockup'"
    class="project-logo project-logo--lockup"
    :class="{ 'is-dim': !active }"
    :src="LOCKUPS[project].src"
    :alt="LOCKUPS[project].alt"
    :style="{ width }"
  >
  <div
    v-else-if="MARKS[project].mono"
    class="project-logo project-logo--mono"
    :class="{ 'is-dim': !active }"
    :style="{ width: size, height: size, '--mark': `url(${MARKS[project].src})` }"
    role="img"
    :aria-label="project"
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
  transition: filter .4s, opacity .4s;
}

.project-logo--lockup {
  height: auto;
}

/* Inactive marks desaturate so only the one being discussed carries colour.
   Opacity rather than brightness, so they stay visible on a light background
   instead of washing out to white. */
.project-logo.is-dim {
  filter: grayscale(1) brightness(.8) opacity(.4);
}

/* The white source SVG is used purely as a stencil; currentColor supplies the
   ink, so the mark reads correctly on both light and dark slides. */
.project-logo--mono {
  background-color: currentColor;
  mask: var(--mark) no-repeat center / contain;
  -webkit-mask: var(--mark) no-repeat center / contain;
}

.project-logo--mono.is-dim {
  filter: none;
  opacity: .35;
}
</style>
