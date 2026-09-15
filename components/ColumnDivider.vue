<script setup>
// Vertical separator for a two-column slide, with an optional label sitting on
// the line. Built as rule / label / rule in a flex column rather than knocking
// the label out of a continuous border, so it makes no assumption about the
// slide's background colour.
defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="column-divider" :class="{ labelled: label }">
    <span class="rule" />
    <span v-if="label" class="label">{{ label }}</span>
    <span class="rule" />
  </div>
</template>

<style scoped>
.column-divider {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* Clear of the headings above and the slide edge below. */
  top: 5.5rem;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .9rem;
  pointer-events: none;
}

.rule {
  width: 1px;
  background: currentColor;
  opacity: .25;
}

/* Content on these slides is top-aligned while the layout is full height, so a
   centred label lands below the text. Sit it a third of the way down, which is
   inside the content band on both slides that use this. */
.rule:first-child { flex: 1; }
.rule:last-child { flex: 2; }

/* With no label the two segments butt together and read as one line. */
.column-divider:not(.labelled) { gap: 0; }

.label {
  font-size: .72rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .55;
  white-space: nowrap;
}
</style>
