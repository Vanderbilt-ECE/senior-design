---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Test Planning & Requirements Traceability'
info: |
  ## Senior Design II — Session 1
  Verification vs. validation, test procedure anatomy, and building the RTM.
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
glowSeed: 70
---

# Test Planning &<br/>Requirements Traceability

<div class="pt-4 opacity-80 text-lg">
Senior Design II
</div>

---
glowSeed: 12
---

# Welcome Back / Where We Are

<Timeline :markers="[
  { label: 'Fall: PDR', sublabel: 'Nov' },
  { label: 'Spring Begins', sublabel: 'Jan', active: true },
  { label: 'Build & Test', sublabel: 'Spring' },
  { label: 'Demo Day', sublabel: 'Apr' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Fall ended with PDR; Spring begins with turning approved design into a verified, working system.
</div>

<!--
Quick round of "one sentence: what changed in your design since PDR feedback?" to re-engage the room.
-->

---
glowSeed: 300
---

# Verification vs. Validation

<CompareCards leftTitle="Verification" rightTitle="Validation" leftIcon="✅" rightIcon="🎯" leftKind="neutral" rightKind="neutral">
<template #left>
"Did we build the thing right?" — does it meet the specified requirements?
</template>
<template #right>
"Did we build the right thing?" — does it actually satisfy the sponsor's real need?
</template>
</CompareCards>

---
glowSeed: 45
---

# Why This Distinction Actually Matters

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
A system can perfectly satisfy every written requirement and still fail validation — if the requirements themselves were incomplete or misunderstood.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Callback to Session 6 elicitation. This is why sponsor validation happens separately from internal verification testing (Session 14).
</div>

---
glowSeed: 91
---

# The Anatomy of a Good Test Procedure

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold opacity-70 w-1/3">Test ID</td><td class="px-4 py-2 font-mono text-xs">TP-014</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Linked Requirement</td><td class="px-4 py-2 font-mono text-xs">REQ-P-007</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Objective</td><td class="px-4 py-2 text-xs">Confirm scan cycle latency</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Preconditions</td><td class="px-4 py-2 text-xs">Bench power, calibrated sensor</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Steps</td><td class="px-4 py-2 text-xs">1. Trigger scan 2. Measure elapsed time</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Pass/Fail Criteria</td><td class="px-4 py-2 text-xs">≤ 500ms</td></tr>
</tbody>
</table>

---
glowSeed: 133
---

# Writing Testable Steps

<CompareCards leftTitle="Before" rightTitle="After">
<template #left>
"Check that it works."
</template>
<template #right>
"Measure the time from trigger to LED indicator; record in ms. Pass if ≤ 500ms."
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Each step should be concrete and repeatable by someone who wasn't in the room when it was written.
</div>

---
glowSeed: 250
---

# Pass/Fail Criteria Must Be Objective

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-xl mx-auto text-center>

$$
|V_{measured} - V_{expected}| \le 0.05\,V_{expected}
$$

</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Numeric thresholds, not subjective judgment, wherever possible.
</div>

---
glowSeed: 400
---

# Test Types: Unit / Integration / System

<svg viewBox="0 0 400 200" class="w-full max-w-lg mx-auto mt-4">
  <rect x="20" y="20" width="360" height="160" rx="10" fill="#1e3a5f" fill-opacity="0.3" stroke="#60a5fa" stroke-width="2"/>
  <text x="200" y="40" text-anchor="middle" fill="#93c5fd" style="font-size:13px">System</text>
  <rect x="60" y="55" width="280" height="110" rx="10" fill="#134e4a" fill-opacity="0.4" stroke="#2dd4bf" stroke-width="2"/>
  <text x="200" y="75" text-anchor="middle" fill="#5eead4" style="font-size:13px">Integration</text>
  <rect x="120" y="90" width="160" height="60" rx="10" fill="#3f2d0e" fill-opacity="0.5" stroke="#fbbf24" stroke-width="2"/>
  <text x="200" y="125" text-anchor="middle" fill="#fde68a" style="font-size:13px">Unit</text>
</svg>

---
glowSeed: 44
---

# Test Types: Functional / Performance / Stress

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Functional</div>
Does it do the right thing under normal conditions?
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Performance</div>
Does it meet quantitative targets?
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Stress/Edge-Case</div>
Does it fail gracefully outside normal bounds?
</div>
</div>

---
glowSeed: 91
---

# The Requirements Traceability Matrix, In Full

<RTMTable :rows="[
  { id: 'REQ-F-012', description: 'Log sensor readings every 60s', method: 'Test', status: 'pass' },
  { id: 'REQ-NF-003', description: 'Battery life ≥ 72 hours', method: 'Test', status: 'in-progress' },
  { id: 'REQ-P-007', description: 'Scan cycle ≤ 500ms', method: 'Test', status: 'pass' },
  { id: 'REQ-C-002', description: 'BOM cost ≤ $500', method: 'Inspection', status: 'pass' },
]" />

<div v-click class="mt-4 text-xs opacity-60 text-center">
Prove, with evidence, that every requirement was actually verified — nothing falls through the cracks.
</div>

---
glowSeed: 210
---

# Building Your RTM: Step 1 — Import Requirements

<div class="max-w-2xl mx-auto text-center mt-10 text-lg">
Pull directly from the Fall requirements document — don't retype, copy the actual requirement IDs.
</div>

<!--
This is mechanical, not creative — the RTM's value comes from completeness and consistency, not cleverness.
-->

---
glowSeed: 211
---

# Building Your RTM: Step 2 — Assign Verification Methods

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
<div class="font-bold mb-1">Test</div>
Execute and measure
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
<div class="font-bold mb-1">Analysis</div>
Calculation/simulation
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
<div class="font-bold mb-1">Inspection</div>
Visual/documentation check
</div>
<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-4>
<div class="font-bold mb-1">Demonstration</div>
Show under operating conditions
</div>
</div>

---
glowSeed: 212
---

# Building Your RTM: Step 3 — Link to Test Procedures

<div class="max-w-2xl mx-auto text-center mt-10 text-lg">
Each "Test"-verified requirement links to a specific test procedure ID.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Many-to-many is normal — one test can verify multiple requirements; one requirement may need multiple tests.
</div>

---
glowSeed: 213
---

# Building Your RTM: Step 4 — Track Status Over Time

<div class="grid grid-cols-5 gap-2 mt-10 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Not Started</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-3>In Progress</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-3>Passed</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-3>Failed</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Blocked</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
The RTM becomes a live dashboard of project verification progress, not a one-time document.
</div>

---
glowSeed: 91
---

# Test Prioritization: Risk-Based Coverage

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-xl mx-auto text-center>

$$
\text{Test Priority} = \text{Likelihood} \times \text{Impact}
$$

</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
You will not have time to exhaustively test everything — reuse the risk-matrix skill from PDR prep (Session 9).
</div>

---
glowSeed: 500
---

# Common Test Planning Mistakes

<Checklist :items="[
  { text: 'Writing test procedures after the fact to match what the system does', state: 'x' },
  { text: 'No plan for who runs which tests and when', state: 'x' },
  { text: 'Ignoring failure/edge-case testing until forced by a demo failure', state: 'x' },
]" />

---
glowSeed: 5
---

# Live Demo: Building One RTM Row End-to-End

<div class="grid grid-cols-3 gap-2 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Verification method chosen</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Test procedure written</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>RTM row completed</div>
</div>

---
glowSeed: 210
---

# Test Environment & Tooling Considerations

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
What equipment/instrumentation does verification require? Is it available, and when?
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Forward-reference to Session 11 (CI/CD) for how automated tests fit in for software-heavy requirements.
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Studio Time: Start Your RTM

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Begin populating your own RTM using your actual, post-PDR-feedback requirements.
</div>

---
glowSeed: 500
---

# Deliverable for This Unit

<Checklist :items="[
  { text: 'All requirements listed in the RTM', state: 'check' },
  { text: 'Verification methods assigned to each', state: 'check' },
]" />

<div v-click class="mt-6 text-sm opacity-70 text-center">
Due before Session 12 (Build & Integration).
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Verification vs. Validation', active: true },
  { label: 'Test Procedures' },
  { label: 'RTM Construction' },
  { label: 'Risk-Based Priority' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: CI/CD & Test Automation (Short Lesson) — Jan 21
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
Next: CI/CD & Test Automation
</div>
