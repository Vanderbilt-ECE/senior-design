<script setup lang="ts">
interface Item {
  text: string
  state?: 'check' | 'x' | 'warn'
}

withDefaults(defineProps<{
  items: Item[]
}>(), {})

const iconMap: Record<string, string> = {
  check: '✓',
  x: '✗',
  warn: '⚠',
}
const colorMap: Record<string, string> = {
  check: '#2dd4bf',
  x: '#f87171',
  warn: '#fbbf24',
}
</script>

<template>
  <div class="checklist">
    <div
      v-for="(item, i) in items"
      :key="i"
      v-click
      class="checklist-item"
    >
      <span
        class="checklist-icon"
        :style="{ color: colorMap[item.state || 'check'], borderColor: colorMap[item.state || 'check'] }"
      >{{ iconMap[item.state || 'check'] }}</span>
      <span class="checklist-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.checklist {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1rem;
}
.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
}
.checklist-icon {
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
}
.checklist-text {
  font-size: 0.95rem;
}
</style>
