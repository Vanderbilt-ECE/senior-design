<script setup>
defineProps({ critical: Boolean })
</script>
<template>
<svg viewBox="0 0 880 260" class="w-full max-w-5xl mx-auto diagram" role="img" :aria-label="critical ? 'Critical path A, B, D, E takes six weeks. Firmware branch has one week of slack.' : 'Interface definition splits into hardware and firmware work, which join at integration before verification.'">
<defs><marker :id="critical ? 'arr-c' : 'arr-d'" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#94a3b8" stroke-width="1.5"/></marker></defs>
<g fill="none" :stroke="critical ? '#fbbf24' : '#94a3b8'" stroke-width="3" :marker-end="`url(#${critical ? 'arr-c' : 'arr-d'})`">
<path d="M175 110 H205 V60 H235"/><path d="M425 60 H455 V110 H495"/><path d="M665 130 H700"/>
</g>
<g fill="none" stroke="#60a5fa" stroke-width="3" :marker-end="`url(#${critical ? 'arr-c' : 'arr-d'})`"><path d="M175 150 H205 V205 H235"/><path d="M425 205 H455 V150 H495"/></g>
<g :stroke="critical ? '#fbbf24' : '#2dd4bf'" stroke-width="2" fill="#102936">
<rect x="5" y="88" width="170" height="84" rx="9"/><rect x="235" y="18" width="190" height="84" rx="9"/><rect x="495" y="88" width="170" height="84" rx="9"/><rect x="700" y="88" width="175" height="84" rx="9"/>
</g>
<rect x="235" y="163" width="190" height="84" rx="9" fill="#142741" stroke="#60a5fa" stroke-width="2"/>
<g text-anchor="middle" fill="#f1f5f9" style="font-size: 21px">
<text x="90" y="120">A · Interfaces</text><text x="90" y="149" fill="#cbd5e1">1 week</text>
<text x="330" y="50">B · Hardware</text><text x="330" y="79" fill="#cbd5e1">3 weeks</text>
<text x="330" y="195">C · Firmware</text><text x="330" y="224" fill="#cbd5e1">2 weeks</text>
<text x="580" y="120">D · Integrate</text><text x="580" y="149" fill="#cbd5e1">1 week</text>
<text x="788" y="120">E · Verify</text><text x="788" y="149" fill="#cbd5e1">1 week</text>
</g>
</svg>
</template>
