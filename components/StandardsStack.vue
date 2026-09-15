<script setup>
// The act map. Appears once per act with that act's box lit. Each standard
// carries the one question its act exists to answer — so the map doubles as
// the outline of the whole talk.
// `active` is a project key, or 'all' for the opening slide where every
// standard is still presented as equally portable.
const props = defineProps({
  active: { type: String, required: true },
})

const isOn = key => props.active === 'all' || props.active === key

// theme · question · standard — the three columns of the talk. Each act takes
// one row and both answers the question and shows what is wrong with it.
const LAYERS = [
  { key: 'kubernetes',    name: 'Kubernetes',    theme: 'Portability', question: 'what do you get?' },
  { key: 'opentelemetry', name: 'OpenTelemetry', theme: 'Progress',    question: 'how does it move?' },
  { key: 'openfeature',   name: 'OpenFeature',   theme: 'Ownership',   question: 'who owns it?' },
]
</script>

<template>
  <div class="stack grid grid-cols-3 gap-8">
    <div
      v-for="layer in LAYERS"
      :key="layer.key"
      class="box"
      :class="{ on: isOn(layer.key) }"
    >
      <div class="flex justify-center mb-5">
        <ProjectLogo :project="layer.key" :active="isOn(layer.key)" />
      </div>
      <div class="theme">{{ layer.theme }}</div>
      <div class="question">{{ layer.question }}</div>
      <div class="name">{{ layer.name }}</div>
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

.theme {
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  opacity: .5;
  margin-bottom: .35rem;
}

.question {
  font-size: 1.35rem;
  line-height: 1.25;
}

.name {
  margin-top: .9rem;
  padding-top: .7rem;
  border-top: 1px solid currentColor;
  font-size: .95rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  opacity: .55;
}

.box.on .question { font-weight: 600; }
.box.on .name { opacity: .8; }
</style>
