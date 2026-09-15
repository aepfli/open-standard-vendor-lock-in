<script setup>
// Corner label naming which standard the slide is about.
defineProps({
  project: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="tag">
    <ProjectLogo :project="project" size="1.1rem" />
    <span>{{ label }}</span>
  </div>
</template>
