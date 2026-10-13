<script setup lang="ts">
interface Marker {
  label: string
  sublabel?: string
  active?: boolean
  color?: string
}

const props = withDefaults(defineProps<{
  markers: Marker[]
}>(), {})

const defaultColor = '#5eead4'
</script>

<template>
  <div class="timeline">
    <div class="timeline-track" />
    <div class="timeline-markers">
      <div
        v-for="(m, i) in markers"
        :key="i"
        class="timeline-marker"
      >
        <div
          class="timeline-dot"
          :class="{ active: m.active }"
          :style="{ backgroundColor: m.color || (m.active ? defaultColor : 'rgba(255,255,255,0.25)') }"
        />
        <div class="timeline-label" :class="{ active: m.active }">{{ m.label }}</div>
        <div v-if="m.sublabel" class="timeline-sublabel">{{ m.sublabel }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  width: 100%;
  padding: 2.5rem 1rem 0.5rem;
}
.timeline-track {
  position: absolute;
  top: 3.1rem;
  left: 2rem;
  right: 2rem;
  height: 3px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
}
.timeline-markers {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 0 0.25rem;
}
.timeline-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  margin-bottom: 0.6rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}
.timeline-dot.active {
  transform: scale(1.3);
  box-shadow: 0 0 12px 2px currentColor;
}
.timeline-label {
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.75;
}
.timeline-label.active {
  opacity: 1;
  color: #5eead4;
}
.timeline-sublabel {
  font-size: 0.7rem;
  opacity: 0.55;
  margin-top: 0.15rem;
}
</style>
