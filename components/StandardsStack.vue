<script setup>
// The three-box "where are we in the talk" slide. Appears once per topic
// switch with a different box lit.
// `active` is a project key, or 'all' for the opening slide where every
// standard is still presented as equally portable.
const props = defineProps({
  active: { type: String, required: true },
})

const isOn = key => props.active === 'all' || props.active === key

const LAYERS = [
  { key: 'kubernetes',    name: 'Kubernetes',    caption: 'conformant distribution' },
  { key: 'opentelemetry', name: 'OpenTelemetry', caption: 'traces · metrics · logs' },
  { key: 'openfeature',   name: 'OpenFeature',   caption: 'vendor-neutral flags' },
]
</script>

<template>
  <div class="stack grid grid-cols-3 gap-8 text-2xl">
    <div
      v-for="layer in LAYERS"
      :key="layer.key"
      class="box"
      :class="{ on: isOn(layer.key) }"
    >
      <div class="flex justify-center mb-5">
        <ProjectLogo :project="layer.key" :active="isOn(layer.key)" />
      </div>
      {{ layer.name }}
      <div class="text-sm opacity-60 mt-2">{{ layer.caption }}</div>
    </div>
  </div>
</template>

<style scoped>
.box {
  text-align: center;
  border: 1px solid currentColor;
  border-radius: .75rem;
  padding: 2rem 1.5rem;
  opacity: .3;
  transition: opacity .4s, border-color .4s;
}

.box.on {
  opacity: 1;
  border-width: 2px;
}
</style>
