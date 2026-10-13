<script setup>
defineProps({ delayed: Boolean })
const rows = ['A  Interfaces · Alex', 'B  Hardware · Sam', 'C  Firmware · Jo', 'D  Integrate · Team', 'E  Verify · Priya', 'Shared buffer']
</script>
<template>
<svg viewBox="0 0 880 340" class="w-full max-w-5xl mx-auto diagram" role="img" :aria-label="delayed ? 'Hardware delay shifts integration to week six and verification to week seven, consuming the shared buffer.' : 'Seven-week plan: interfaces week one, hardware weeks two through four, firmware weeks two and three, integration week five, verification week six, and buffer week seven.'">
<g v-for="i in 8" :key="i"><line :x1="245+(i-1)*88" y1="40" :x2="245+(i-1)*88" y2="318" stroke="#ffffff" stroke-opacity="0.13"/><text v-if="i<8" :x="289+(i-1)*88" y="26" fill="#cbd5e1" text-anchor="middle" style="font-size: 19px">W{{ i }}</text></g>
<g v-for="(row,i) in rows" :key="row"><text x="3" :y="74+i*44" style="font-size: 19px" fill="#e2e8f0">{{ row }}</text><line x1="245" :y1="88+i*44" x2="861" :y2="88+i*44" stroke="#ffffff" stroke-opacity="0.08"/></g>
<g fill="#115e59" stroke="#2dd4bf" stroke-width="2"><rect x="247" y="49" width="84" height="32" rx="4"/><rect x="335" y="93" :width="delayed ? 348 : 260" height="32" rx="4"/><rect :x="delayed ? 687 : 599" y="181" width="84" height="32" rx="4"/><rect :x="delayed ? 775 : 687" y="225" width="84" height="32" rx="4"/></g>
<rect x="335" y="137" width="172" height="32" rx="4" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
<rect x="511" y="137" :width="delayed ? 172 : 84" height="32" rx="4" fill="none" stroke="#60a5fa" stroke-dasharray="5 4"/>
<text :x="delayed ? 597 : 553" y="159" fill="#bfdbfe" text-anchor="middle" style="font-size: 17px">{{ delayed ? '2w slack' : 'slack' }}</text>
<rect x="775" y="269" width="84" height="32" rx="4" :fill="delayed ? '#451a03' : '#78350f'" stroke="#fbbf24" stroke-width="2" :stroke-dasharray="delayed ? '5 4' : undefined"/>
<text x="817" y="291" fill="#fde68a" text-anchor="middle" style="font-size: 16px">{{ delayed ? 'used' : 'reserve' }}</text>
<path :d="delayed ? 'M771 189 l8 8 -8 8 -8 -8 Z' : 'M683 189 l8 8 -8 8 -8 -8 Z'" fill="#fbbf24"/>
<path d="M861 313 l8 8 -8 8 -8 -8 Z" fill="#fbbf24"/>
</svg>
</template>
