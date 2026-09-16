<script setup>
// Corner label naming which standard the slide is about. The project's official
// lockup carries its own wordmark, so `label` is no longer set in type beside
// it — it stays as the accessible name and as the call site's documentation.
defineProps({
  project: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="tag" :aria-label="label">
    <ProjectLogo :project="project" variant="lockup" />
  </div>
</template>
