<script setup>
defineProps({ mode: { type: String, default: 'commits' } })
</script>

<template>
  <svg viewBox="0 0 840 250" class="w-full my-4" role="img" :aria-label="mode === 'commits' ? 'Three commits form a sequence of saved checkpoints' : 'A feature branch splits from main'">
    <g fill="none" stroke="#64748b" stroke-width="4">
      <path d="M100 85 H650"/>
      <path v-if="mode !== 'commits'" d="M280 85 L430 180 H620"/>
    </g>
    <g stroke="#60a5fa" stroke-width="3" fill="#1e3a5f">
      <circle cx="100" cy="85" r="16"/><circle cx="280" cy="85" r="16"/><circle cx="650" cy="85" r="16"/>
    </g>
    <g v-if="mode === 'commits'" fill="#e2e8f0" text-anchor="middle" style="font-size: 20px">
      <text x="100" y="135">Create project</text>
      <text x="280" y="170">Add sensor code</text>
      <text x="650" y="135">Fix sensor offset</text>
      <text x="280" y="205" fill="#94a3b8" style="font-size: 17px">Each circle is a saved checkpoint</text>
    </g>
    <g v-else>
      <g stroke="#fbbf24" stroke-width="3" fill="#3f2d0e"><circle cx="430" cy="180" r="16"/><circle cx="620" cy="180" r="16"/></g>
      <text x="695" y="92" fill="#93c5fd" style="font-size: 22px">main</text>
      <text x="670" y="187" fill="#fde68a" style="font-size: 20px">feature/sensor</text>
      <text x="100" y="38" fill="#cbd5e1" style="font-size: 18px">Shared history</text>
      <text x="420" y="228" fill="#cbd5e1" style="font-size: 18px">Work on the change here</text>
      <g v-if="mode === 'pr'">
        <path d="M620 160 Q620 125 646 104" fill="none" stroke="#5eead4" stroke-width="3" stroke-dasharray="7 5"/>
        <path d="M634 106 L650 100 L647 116" fill="none" stroke="#5eead4" stroke-width="3"/>
        <text x="430" y="128" fill="#5eead4" style="font-size: 18px">PR: propose merging</text>
      </g>
    </g>
  </svg>
</template>
