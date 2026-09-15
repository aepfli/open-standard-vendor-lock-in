<script setup>
// Act indicator. Each act answers exactly one of the three questions, so this
// stays fixed for the whole act — it tells the audience which question the
// slide in front of them is in service of, not what the slide itself is.
defineProps({
  active: { type: String, required: true },
})

const QUESTIONS = [
  { key: 'get',  label: 'what you get' },
  { key: 'move', label: 'how it moves' },
  { key: 'own',  label: 'who owns it' },
]
</script>

<template>
  <div class="ask">
    <span
      v-for="(q, i) in QUESTIONS"
      :key="q.key"
      class="ask-q"
      :class="{ on: q.key === active }"
    >
      <span class="ask-n">{{ i + 1 }}</span>{{ q.label }}
    </span>
  </div>
</template>

<style>
.ask {
  position: absolute;
  top: 1.2rem;
  left: 1.6rem;
  display: flex;
  gap: 1.4rem;
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.ask-q {
  opacity: .25;
  transition: opacity .4s;
}

.ask-q.on {
  opacity: .85;
  font-weight: 600;
}

.ask-n {
  display: inline-block;
  margin-right: .45rem;
  opacity: .5;
}
</style>
