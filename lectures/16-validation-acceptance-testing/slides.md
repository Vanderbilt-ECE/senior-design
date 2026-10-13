---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Validation & Acceptance Testing'
info: |
  ## Senior Design II — Session 5
  Acceptance testing, presenting results to stakeholders, and documenting known issues.
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
glowSeed: 210
---

# Validation & Acceptance Testing

<div class="pt-6 opacity-80 text-lg">
Senior Design II
</div>

<div class="mt-8" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs max-w-md mx-auto>
[ Image needed: handshake/sign-off imagery, or an original graphic ]
</div>

---
glowSeed: 12
---

# Where We Are: Internal Verification → Sponsor Validation

<Timeline :markers="[
  { label: 'Verification', sublabel: 'Session 10' },
  { label: 'Build & Review', sublabel: 'Sessions 12-13' },
  { label: 'Sponsor Validation', sublabel: 'Now', active: true },
]" />

<div v-click class="mt-10 text-center text-sm opacity-70">
Verification asks "did we build it right"; validation asks "did we build the right thing" — confirmed by the sponsor.
</div>

---
glowSeed: 300
---

# Acceptance Testing vs. Verification Testing

<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto">
  <circle cx="160" cy="110" r="90" fill="#1e3a5f" fill-opacity="0.4" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="240" cy="110" r="90" fill="#134e4a" fill-opacity="0.4" stroke="#2dd4bf" stroke-width="2"/>
  <text x="110" y="60" text-anchor="middle" fill="#93c5fd" style="font-size:12px">Verification</text>
  <text x="290" y="60" text-anchor="middle" fill="#5eead4" style="font-size:12px">Acceptance</text>
</svg>

<div v-click class="mt-2 text-sm opacity-70 text-center max-w-2xl mx-auto">
Verification: run by the team against requirements, throughout the build. Acceptance: run/witnessed by or for the sponsor against real-world success criteria — sometimes narrower, sometimes broader than the formal requirements.
</div>

---
glowSeed: 45
---

# Why the Sponsor's "Done" Can Differ

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Requirements were captured in Session 6 — months ago. Sponsor context, priorities, or understanding may have shifted.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Surfacing a gap now — not at the final demo — is far better for everyone.
</div>

---
glowSeed: 91
---

# Designing an Acceptance Test Plan

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Derive acceptance criteria directly from the sponsor's original stated goals (Session 6), cross-checked against the RTM.
</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Involve the sponsor in reviewing the plan <strong>before</strong> running it, not after.
</div>
</div>

---
glowSeed: 133
---

# What Makes an Acceptance Test Credible

<CompareCards leftTitle="Not Credible" rightTitle="Credible" leftIcon="✗" rightIcon="✓" leftKind="bad" rightKind="good">
<template #left>
Cherry-picked best-case demo environment; criteria decided after seeing results.
</template>
<template #right>
Realistic operating conditions; objective, pre-agreed numeric criteria (Session 10 callback).
</template>
</CompareCards>

---
glowSeed: 250
---

# Scheduling and Structuring the Demo

<div class="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Who attends</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Live demo vs. prior evidence</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Time for sponsor questions</div>
</div>

---
glowSeed: 44
---

# Presenting Results: Know Your Audience

<CompareCards leftTitle="Technical Stakeholder" rightTitle="Executive Stakeholder" leftKind="neutral" rightKind="neutral">
<template #left>
Wants technical depth — methodology, edge cases, implementation detail.
</template>
<template #right>
Wants outcomes and business impact — did it work, what does it mean.
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Prepare layered material: an executive summary view and a technical-depth view — not one deck trying to be both.
</div>

---
glowSeed: 400
---

# Presenting Results: Structure

<div class="flex flex-col items-center gap-2 mt-8 max-w-md mx-auto text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-6 py-3 w-full text-center>What was asked for</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-6 py-3 w-full text-center>What was delivered</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-6 py-3 w-full text-center>Evidence it works</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>What's outstanding</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
Sponsors want the outcome first, detail second.
</div>

---
glowSeed: 66
---

# Presenting Quantitative Results Clearly

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-3 py-2">Requirement</th><th class="px-3 py-2">Required</th><th class="px-3 py-2">Measured</th><th class="px-3 py-2">Result</th></tr></thead>
<tbody>
<tr v-click><td class="px-3 py-2 font-mono text-xs">REQ-P-007</td><td class="px-3 py-2 text-center">≤ 500ms</td><td class="px-3 py-2 text-center">412ms</td><td class="px-3 py-2 text-center text-teal-400">Pass</td></tr>
<tr v-click><td class="px-3 py-2 font-mono text-xs">REQ-NF-003</td><td class="px-3 py-2 text-center">≥ 72h</td><td class="px-3 py-2 text-center">65h</td><td class="px-3 py-2 text-center text-red-400">Fail</td></tr>
</tbody>
</table>

---
glowSeed: 210
---

# Handling a Failed Acceptance Criterion Live

<CompareCards leftTitle="Don't" rightTitle="Do">
<template #left>
Panic, improvise excuses, or minimize the failure.
</template>
<template #right>
Acknowledge → explain root cause if known → present remediation plan and timeline.
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
A professionalism moment as much as a technical one (Session 1 callback).
</div>

---
glowSeed: 91
---

# Documenting Known Issues

<PullQuote color="amber">
Undocumented problems are landmines. Documented ones are just a punch list.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Every real shipped system has known issues — a documented list is a credibility signal to a sponsor, not a liability.
</div>

---
glowSeed: 250
---

# Anatomy of a Known Issues Document

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold opacity-70 w-1/3">Issue</td><td class="px-4 py-2 text-xs">Battery life 65h vs. 72h target</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Severity</td><td class="px-4 py-2 text-xs">Degraded</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Root Cause</td><td class="px-4 py-2 text-xs">Higher idle draw than modeled</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Workaround</td><td class="px-4 py-2 text-xs">Sleep mode between samples</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Fix Status</td><td class="px-4 py-2 text-xs">In progress, target: next sprint</td></tr>
</tbody>
</table>

---
glowSeed: 44
---

# Severity Classification

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Blocking</div>
Core function fails
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Degraded</div>
Works with limitations
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>
<div class="font-bold mb-1">Cosmetic</div>
Doesn't affect function
</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
This classification informs what's acceptable to leave open at handoff (Session 16).
</div>

---
glowSeed: 300
---

# When Acceptance Testing Reveals a Requirements Gap

<CompareCards leftTitle="Verification Failure" rightTitle="Requirements Gap" leftKind="neutral" rightKind="neutral">
<template #left>
"We didn't build what was asked."
</template>
<template #right>
"What was asked wasn't quite right."
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Renegotiating scope this late requires sponsor buy-in and faculty advisor involvement — don't unilaterally redefine "done."
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Live Exercise: Mock Acceptance Presentation

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
3-minute mock results summary to a peer "sponsor," including at least one known issue.
</div>

---
glowSeed: 46
---

# Peer Feedback on Mock Presentations

<div class="max-w-xl mx-auto text-center mt-10 text-lg">
Was the result clear? Was the known issue handled credibly, not defensively?
</div>

---
glowSeed: 47
---

# Studio Time: Build Your Real Acceptance Test Plan

<div class="text-center mt-12 text-lg opacity-80">
Draft your actual acceptance test plan and known-issues tracking approach.
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Acceptance vs. Verification', active: true },
  { label: 'Presenting to Stakeholders' },
  { label: 'Known Issues' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Lessons Learned & Technical Retrospective (Mar 25)
</div>

---
layout: center
class: text-center
glowSeed: 229
---

# Thank You

### Questions & Discussion

<div class="pt-6 opacity-80">
Senior Design II
</div>

<div class="pt-8 text-sm opacity-60">
Next: Lessons Learned & Technical Retrospective
</div>
