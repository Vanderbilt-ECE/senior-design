---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Open Source, Licensing & Dependencies'
info: |
  ## Senior Design I — Session 4
  License types, compatibility, SBOMs, and build-vs-reuse decisions.
class: text-center
transition: fade-out
lineNumbers: false
drawings:
  persist: false
mdc: true
vite:
  server:
    fs:
      strict: false
glowSeed: 88
---

# Open Source, Licensing & Dependencies

<div class="pt-6 opacity-80 text-lg">
Senior Design I
</div>

<!--
Dependency graph illustration as a future backdrop. Frame as risk management, not bureaucracy.
-->

---
glowSeed: 12
---

# Why This Matters for a Capstone Team

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">📦</div>
<div class="font-bold mb-1">Nearly Universal</div>
<div class="text-sm">Almost every project pulls in open-source libraries, frameworks, or reference code.</div>
</div>

<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">⚖️</div>
<div class="font-bold mb-1">Real Exposure</div>
<div class="text-sm">Choosing wrong creates legal exposure for your sponsor — avoidable with 20 minutes of diligence.</div>
</div>

</div>

---
glowSeed: 300
---

# What a License Actually Grants and Restricts

<div class="text-sm opacity-80 mb-4 text-center">Copyright is the default (all rights reserved) — a license carves out permissions.</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Can I use it commercially?</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Can I modify it?</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Can I redistribute it?</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>Must I share my changes?</div>
</div>

---
glowSeed: 45
---

# Permissive Licenses: MIT

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>

- Minimal restrictions: use, modify, redistribute — even in closed-source products
- Just keep the copyright notice
- Most common license on GitHub — low friction, low protection for the original author

</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4 text-xs font-mono>
Permission is hereby granted, free of charge...<br/>
<span class="text-teal-400">to deal in the Software without restriction</span>...<br/>
The above copyright notice ... <span class="text-amber-400">shall be included</span> in all copies.
</div>

</div>

---
glowSeed: 91
---

# Permissive Licenses: BSD and Apache-2.0

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead>
<tr bg="white/10">
<th class="text-left px-4 py-2">License</th>
<th class="text-left px-4 py-2">Key Trait</th>
<th class="text-left px-4 py-2">Patent Grant</th>
</tr>
</thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold">MIT</td><td class="px-4 py-2">Simplest, minimal text</td><td class="px-4 py-2 opacity-50">No</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">BSD (2/3-clause)</td><td class="px-4 py-2">3-clause adds non-endorsement</td><td class="px-4 py-2 opacity-50">No</td></tr>
<tr v-click><td class="px-4 py-2 font-bold text-teal-400">Apache-2.0</td><td class="px-4 py-2">Explicit patent grant + retaliation clause</td><td class="px-4 py-2 text-teal-400">Yes</td></tr>
</tbody>
</table>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Apache-2.0 matters most if the project touches patented techniques.
</div>

---
glowSeed: 133
---

# Copyleft Licenses: GPL Family

<svg viewBox="0 0 500 90" class="w-full max-w-2xl mx-auto mt-6">
  <line x1="20" y1="45" x2="480" y2="45" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <rect x="20" y="37" width="120" height="16" fill="#134e4a" fill-opacity="0.5"/>
  <rect x="140" y="37" width="150" height="16" fill="#1e3a5f" fill-opacity="0.5"/>
  <rect x="290" y="37" width="190" height="16" fill="#450a0a" fill-opacity="0.6"/>
  <text x="80" y="25" text-anchor="middle" fill="#5eead4" style="font-size:12px">Public Domain</text>
  <text x="215" y="25" text-anchor="middle" fill="#93c5fd" style="font-size:12px">Permissive</text>
  <text x="385" y="25" text-anchor="middle" fill="#fca5a5" style="font-size:12px">Strong Copyleft</text>
</svg>

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="font-bold mb-1">GPL</div>
Derivative works must be released under GPL too — "viral" in the historical sense.
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="font-bold mb-1">LGPL</div>
Relaxes this for dynamic linking — common way to use GPL-family code in closed products.
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="font-bold mb-1">AGPL</div>
Extends copyleft to network use (SaaS) — matters for web/cloud components.
</div>
</div>

---
glowSeed: 66
---

# Why License Choice for YOUR Output Matters Too

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Not just what you consume — what license will your team apply to your own repo?
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
Sponsor agreements typically dictate this — check before assuming MIT-by-default.
</div>

<!--
This connects directly back to the IP ownership discussion from Session 3.
-->

---
glowSeed: 210
---

# License Compatibility: The Core Problem

<div class="text-sm opacity-80 mb-4">Combining code under incompatible licenses in one distributed product can create an unenforceable or legally exposed release.</div>

<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-5 max-w-2xl mx-auto text-sm text-center>
Classic example: GPL code cannot be combined into a proprietary/closed product without releasing the whole combined work under GPL.
</div>

<table class="w-full text-sm mt-6 text-center" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="px-3 py-2"></th><th class="px-3 py-2">MIT</th><th class="px-3 py-2">Apache-2.0</th><th class="px-3 py-2">GPL</th></tr></thead>
<tbody>
<tr v-click><td class="px-3 py-2 font-bold text-left">MIT</td><td class="px-3 py-2 text-teal-400">✓</td><td class="px-3 py-2 text-teal-400">✓</td><td class="px-3 py-2 text-teal-400">✓</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">Apache-2.0</td><td class="px-3 py-2 text-teal-400">✓</td><td class="px-3 py-2 text-teal-400">✓</td><td class="px-3 py-2 text-red-400">✗*</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">GPL</td><td class="px-3 py-2 text-red-400">✗</td><td class="px-3 py-2 text-red-400">✗*</td><td class="px-3 py-2 text-teal-400">✓</td></tr>
</tbody>
</table>
<div class="text-xs opacity-50 mt-2 text-center">*GPLv3 is Apache-2.0 compatible one-way; GPLv2 is not.</div>

---
glowSeed: 320
---

# Reading a License in Practice

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 font-bold>Where to Find It</div>
<div px-5 py-4 text-sm>
<code>LICENSE</code> file · <code>package.json</code> / <code>pyproject.toml</code> metadata
</div>
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 font-bold>SPDX Identifiers</div>
<div px-5 py-4 text-sm font-mono>
MIT · Apache-2.0 · GPL-3.0-only
</div>
</div>

</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: real repo's LICENSE/SPDX identifier screenshot ]
</div>

<!--
Live demo — open a real popular repo, find its LICENSE file and SPDX identifier.
-->

---
glowSeed: 44
---

# Live Demo: License Scanning a Dependency Tree

<div class="mt-6 text-sm opacity-80">Run a license scanner against a sample <code>requirements.txt</code> / <code>package.json</code>.</div>

<div v-click class="mt-6 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
⚠️ Transitive dependencies are the trap — your direct imports might all be MIT while a dependency of a dependency is GPL.
</div>

---
glowSeed: 190
---

# What Is an SBOM?

<div class="text-sm opacity-80 mb-4 text-center">A machine-readable inventory of every component, version, license, and dependency in your build.</div>

```json
{
  "name": "sensor-driver",
  "version": "2.3.1",
  "license": "Apache-2.0",
  "hash": "sha256:9f2a...",
  "supplier": "npm registry"
}
```

<div v-click class="mt-4 text-center text-sm opacity-70">
Two dominant formats: <strong>SPDX</strong> and <strong>CycloneDX</strong>
</div>

---
glowSeed: 250
---

# Why SBOMs Are Increasingly Required

<Timeline :markers="[
  { label: 'Log4Shell', sublabel: '2021' },
  { label: 'US EO 14028', sublabel: '2021' },
  { label: 'EU CRA', sublabel: '2024', active: true },
  { label: 'Standard Practice', sublabel: 'Now' },
]" />

<div v-click class="mt-10 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Even outside strict regulatory scope, sponsors increasingly expect an SBOM as a deliverable — treat it as professional practice.
</div>

---
glowSeed: 400
---

# SBOM Tooling Landscape

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead>
<tr bg="white/10">
<th class="text-left px-4 py-2">Tool</th>
<th class="text-left px-4 py-2">Format</th>
<th class="text-left px-4 py-2">Best Fit</th>
</tr>
</thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold text-teal-400">Syft (Anchore)</td><td class="px-4 py-2">SPDX / CycloneDX</td><td class="px-4 py-2">30+ ecosystems, fast CLI</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">cdxgen (OWASP)</td><td class="px-4 py-2">CycloneDX (native)</td><td class="px-4 py-2">Broad language coverage</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">Dependency-Track</td><td class="px-4 py-2">Both (ingest)</td><td class="px-4 py-2">Centralized continuous monitoring</td></tr>
</tbody>
</table>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Recommended for this course: <strong>Syft</strong> or <strong>cdxgen</strong> — free, fast, good enough for capstone scale.
</div>

---
glowSeed: 5
---

# Live Demo: Generating an SBOM

```bash
syft dir:. -o spdx-json > sbom.spdx.json
```

<div v-click class="mt-6 text-sm opacity-70 text-center">
Run against the sample project repo — walk through the resulting file's structure.
</div>

<!--
Have this pre-tested before class — tool output formats change between versions.
-->

---
glowSeed: 288
---

# Dependency Vulnerability Scanning

<div class="text-sm opacity-80 mb-4">SBOMs also enable vulnerability tracking — a known-CVE dependency shows up immediately once inventoried.</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: GitHub Dependabot alert screenshot ]
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Dependency-Track / GitHub Dependabot — the practical tools most teams will actually touch.
</div>

---
glowSeed: 55
---

# Build vs. Buy vs. Reuse Decision Framework

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-2xl mx-auto>

$$
\text{Score} = w_1 L + w_2 M + w_3 S + w_4 F
$$

<div class="text-xs opacity-60 mt-2">License fit · Maintenance activity · Security track record · Requirement fit</div>

</div>

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>License Compatibility</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Maintenance Activity</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Community Size</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Security Track Record</div>
</div>

---
glowSeed: 500
---

# Red Flags When Evaluating a Dependency

<Checklist :items="[
  { text: 'No license file at all (default = all rights reserved)', state: 'x' },
  { text: 'Abandoned project — no commits in years', state: 'x' },
  { text: 'Single maintainer, bus-factor of one', state: 'x' },
  { text: 'No tests, no CI', state: 'x' },
]" />

---
glowSeed: 91
---

# Applying This to Your Own BOM

<div class="text-sm opacity-80 mb-4 text-center">Once teams form (Session 5), each team produces a licensing/dependency audit as part of their architecture doc.</div>

<table class="w-full text-sm mt-4" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-4 py-2">Dependency</th><th class="text-left px-4 py-2">License</th><th class="text-left px-4 py-2">Verdict</th></tr></thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-mono text-xs">numpy</td><td class="px-4 py-2">BSD-3-Clause</td><td class="px-4 py-2 text-teal-400">OK</td></tr>
<tr v-click><td class="px-4 py-2 font-mono text-xs">some-gpl-lib</td><td class="px-4 py-2">GPL-3.0</td><td class="px-4 py-2 text-red-400">Flag for review</td></tr>
</tbody>
</table>

---
glowSeed: 133
---

# Common Student Mistakes

<CompareCards leftTitle="Wrong Assumption" rightTitle="Reality" leftIcon="✗" rightIcon="✓">
<template #left>

- "It's on GitHub, so it's free to use"
- Copy-pasting from Stack Overflow without checking

</template>
<template #right>

- Public repos without a LICENSE file are NOT automatically open source
- Forum code is often CC-BY-SA — has attribution requirements

</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
This surprises almost every cohort — spend real time here.
</div>

---
glowSeed: 210
---

# Where This Connects to AI-Generated Code

<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5 max-w-2xl mx-auto text-sm text-center>
AI coding assistants can reproduce licensed code verbatim from training data — provenance is murkier.
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Forward-reference to Session 8 (AI Coding Agents) for full treatment.
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'License Types', active: true },
  { label: 'Compatibility' },
  { label: 'SBOMs' },
  { label: 'Build vs. Reuse' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Team & Project Kickoff (Sep 22) — sponsor assignments announced.
</div>

<div v-click class="mt-2 text-center text-xs opacity-60">
Bring laptops next class — team formation activities are interactive.
</div>

---
layout: center
class: text-center
glowSeed: 229
---

# Thank You

### Questions & Discussion

<div class="pt-6 opacity-80">
Senior Design I
</div>

<div class="pt-8 text-sm opacity-60">
Next: Team & Project Kickoff
</div>
