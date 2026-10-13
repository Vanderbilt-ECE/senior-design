<script setup lang="ts">
withDefaults(defineProps<{
  leftTitle?: string
  rightTitle?: string
  leftIcon?: string
  rightIcon?: string
  leftKind?: 'good' | 'bad' | 'neutral'
  rightKind?: 'good' | 'bad' | 'neutral'
}>(), {
  leftTitle: 'Don\'t',
  rightTitle: 'Do',
  leftIcon: '✗',
  rightIcon: '✓',
  leftKind: 'bad',
  rightKind: 'good',
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6 mt-4 compare-cards">
    <div
      v-click
      class="compare-card"
      :class="leftKind"
    >
      <div class="compare-header">
        <span class="compare-icon">{{ leftIcon }}</span>
        <span class="font-bold">{{ leftTitle }}</span>
      </div>
      <div class="compare-body">
        <slot name="left" />
      </div>
    </div>

    <div
      v-click
      class="compare-card"
      :class="rightKind"
    >
      <div class="compare-header">
        <span class="compare-icon">{{ rightIcon }}</span>
        <span class="font-bold">{{ rightTitle }}</span>
      </div>
      <div class="compare-body">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.compare-card {
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid;
}
.compare-card.good {
  border-color: rgba(45, 212, 191, 0.5);
  background: rgba(20, 184, 166, 0.12);
}
.compare-card.bad {
  border-color: rgba(248, 113, 113, 0.5);
  background: rgba(239, 68, 68, 0.12);
}
.compare-card.neutral {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
}
.compare-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}
.compare-card.good .compare-header {
  background: rgba(20, 184, 166, 0.25);
}
.compare-card.bad .compare-header {
  background: rgba(239, 68, 68, 0.25);
}
.compare-card.neutral .compare-header {
  background: rgba(255, 255, 255, 0.08);
}
.compare-icon {
  font-size: 1.1rem;
}
.compare-body {
  padding: 0.75rem 1rem 1rem;
  font-size: 0.95rem;
}
</style>
