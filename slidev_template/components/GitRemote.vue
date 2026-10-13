<script setup>
defineProps({ branches: Boolean })
</script>

<template>
  <svg viewBox="0 0 840 275" class="w-full my-4" role="img" aria-label="A teammate pushes commits to GitHub, then you pull them into your local repository">
    <rect x="305" y="15" width="230" height="76" rx="10" fill="#134e4a" stroke="#2dd4bf" stroke-width="2"/>
    <rect x="25" y="177" width="230" height="76" rx="10" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
    <rect x="585" y="177" width="230" height="76" rx="10" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
    <g fill="white" text-anchor="middle" style="font-size: 21px">
      <text x="420" y="46">GitHub repository</text><text x="140" y="209">{{ branches ? 'Teammate’s repo' : 'Your local repo' }}</text><text x="700" y="209">{{ branches ? 'Your local repo' : 'Teammate’s repo' }}</text>
    </g>
    <g fill="#cbd5e1" text-anchor="middle" style="font-size: 16px">
      <text x="420" y="73">{{ branches ? 'main + feature/sensor' : 'Shared commits' }}</text>
      <text x="140" y="235">{{ branches ? 'Fetch, then switch branches' : 'On your computer' }}</text>
      <text x="700" y="235">{{ branches ? 'main + feature/sensor' : 'On their computer' }}</text>
    </g>
    <path d="M605 178 L510 103 M514 119 L508 100 L528 103" fill="none" stroke="#fbbf24" stroke-width="3"/>
    <path d="M328 102 L234 167 M239 150 L231 170 L251 168" fill="none" stroke="#5eead4" stroke-width="3"/>
    <text x="576" y="125" fill="#fde68a" style="font-size: 21px">1. push</text>
    <text x="135" y="123" fill="#5eead4" style="font-size: 21px">{{ branches ? '2. fetch' : '2. pull' }}</text>
  </svg>
</template>
