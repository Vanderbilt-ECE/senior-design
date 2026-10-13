<script setup lang="ts">
withDefaults(defineProps<{
  attribution?: string
  color?: string
}>(), {
  color: 'teal',
})
</script>

<template>
  <div class="pull-quote" :class="`accent-${color}`">
    <div class="quote-mark">&ldquo;</div>
    <div class="quote-body">
      <slot />
    </div>
    <div v-if="attribution" class="quote-attribution">&mdash; {{ attribution }}</div>
  </div>
</template>

<style scoped>
.pull-quote {
  position: relative;
  max-width: 46rem;
  margin: 1.5rem auto;
  padding: 1.75rem 2rem 1.5rem 3.25rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  text-align: left;
}
.quote-mark {
  position: absolute;
  top: 0.25rem;
  left: 1rem;
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 800;
  opacity: 0.45;
  font-family: Georgia, serif;
}
.accent-teal .quote-mark { color: #2dd4bf; }
.accent-blue .quote-mark { color: #60a5fa; }
.accent-orange .quote-mark { color: #fb923c; }
.accent-amber .quote-mark { color: #fbbf24; }
.accent-red .quote-mark { color: #f87171; }
.accent-violet .quote-mark { color: #a78bfa; }

.quote-body {
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.5;
}
.quote-attribution {
  margin-top: 0.85rem;
  font-size: 0.9rem;
  opacity: 0.65;
}
</style>
