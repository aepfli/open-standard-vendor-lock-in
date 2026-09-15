<script setup>
// Renders a CNCF project mark. Kubernetes and OpenTelemetry ship full-colour
// SVGs; OpenFeature's mark is monochrome by design, so it is drawn as a CSS
// mask filled with currentColor — that way it follows the slide's ink colour
// instead of needing a separate black and white file per theme.
defineProps({
  project: { type: String, required: true },
  active: { type: Boolean, default: true },
  size: { type: String, default: '3.5rem' },
})

// Paths built here are opaque to Vite's asset rewriting, so they must carry
// the deploy base themselves — GitHub Pages serves the deck from a subpath.
const asset = file => `${import.meta.env.BASE_URL}logos/${file}`

const MARKS = {
  kubernetes:    { src: asset('kubernetes-icon-color.svg'),    mono: false },
  opentelemetry: { src: asset('opentelemetry-icon-color.svg'), mono: false },
  openfeature:   { src: asset('openfeature-icon-white.svg'),   mono: true },
}
</script>

<template>
  <div
    v-if="MARKS[project].mono"
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
