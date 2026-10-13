<script setup lang="ts">
const props = defineProps<{ focus?: boolean; active?: number }>()
const stages = [
  { x: 15, y: 35, label: 'Concept of Operations', right: 'Validation', rx: 610 },
  { x: 90, y: 115, label: 'Requirements', right: 'System verification', rx: 535 },
  { x: 165, y: 195, label: 'Architecture', right: 'Integration test', rx: 460 },
  { x: 200, y: 275, label: 'Detailed design', right: 'Unit test', rx: 425 },
]

const nodeOpacity = (index: number) => {
  if (props.active === undefined)
    return props.focus && index !== 0 ? .22 : 1
  return props.active === index ? 1 : .42
}

const lineOpacity = (leftIndex: number, rightIndex: number) => {
  if (props.active === undefined)
    return props.focus ? .12 : .45
  return props.active === leftIndex || props.active === rightIndex ? .8 : .25
}

const nodeFill = (index: number, fallback: string) => props.active === index ? '#115e59' : fallback
const nodeStroke = (index: number, fallback: string) => props.active === index ? '#2dd4bf' : fallback
</script>

<template>
  <svg viewBox="0 0 830 410" class="w-full max-w-4xl mx-auto" role="img" aria-label="V-model: ConOps pairs with validation; requirements with system verification; architecture with integration; detailed design with unit testing.">
    <path d="M120 65 L415 365 L710 65" fill="none" stroke="#60a5fa" stroke-width="4" :style="{ opacity: props.active === undefined ? (props.focus ? .15 : .5) : .3 }" />
    <g v-for="(s, i) in stages" :key="s.label">
      <line :x1="s.x + 200" :y1="s.y + 24" :x2="s.rx" :y2="s.y + 24" stroke="#94a3b8" stroke-dasharray="5 7" :style="{ opacity: lineOpacity(i, 8 - i) }" />
      <rect :x="s.x" :y="s.y" width="205" height="48" rx="8" :fill="nodeFill(i, i === 0 ? '#115e59' : '#172554')" :stroke="nodeStroke(i, i === 0 ? '#2dd4bf' : '#60a5fa')" :style="{ opacity: nodeOpacity(i) }" />
      <text :x="s.x + 102.5" :y="s.y + 29" text-anchor="middle" fill="#f1f5f9" :style="{ fontSize: '16px', opacity: nodeOpacity(i) }">{{ s.label }}</text>
      <g :style="{ opacity: nodeOpacity(8 - i) }">
        <rect :x="s.rx" :y="s.y" width="205" height="48" rx="8" :fill="nodeFill(8 - i, '#172554')" :stroke="nodeStroke(8 - i, '#60a5fa')" />
        <text :x="s.rx + 102.5" :y="s.y + 29" text-anchor="middle" fill="#f1f5f9" style="font-size:16px">{{ s.right }}</text>
      </g>
    </g>
    <rect x="315" y="345" width="200" height="45" rx="8" fill="#292524" stroke="#fbbf24" :style="{ opacity: nodeOpacity(4) }" />
    <text x="415" y="374" text-anchor="middle" fill="#fbbf24" :style="{ fontSize: '17px', opacity: nodeOpacity(4) }">Implementation</text>
  </svg>
</template>
