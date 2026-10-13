---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Build & Integration'
info: |
  ## Senior Design II — Session 3
  Managing build-phase chaos, debugging toolkit, deviations, and living documentation.
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
glowSeed: 40
---

# Build & Integration

<div class="pt-6 opacity-80 text-lg">
Senior Design II
</div>

<div class="mt-8" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs max-w-md mx-auto>
[ Image needed: bench debugging setup photo — oscilloscope, logic analyzer, breadboard ]
</div>

---
glowSeed: 12
---

# Where We Are: Design Is Done, Now It Meets Reality

<Timeline :markers="[
  { label: 'Architecture', sublabel: 'Session 7' },
  { label: 'RTM', sublabel: 'Session 10' },
  { label: 'Build & Integration', sublabel: 'Now', active: true },
]" />

<div v-click class="mt-10 text-center text-sm opacity-70">
The build phase is where those documents get stress-tested against physical/software reality.
</div>

---
glowSeed: 300
---

# Why Build Phase Feels Chaotic

<PullQuote color="amber">
Integration is where your interface definitions get graded, whether you meant them to or not.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Multiple subsystems, built by different people, meeting for the first time — integration surfaces every unstated assumption. Naming it explicitly reduces panic when it happens.
</div>

---
glowSeed: 45
---

# Managing Chaos: Structure

<CompareCards leftTitle="Big Bang" rightTitle="Incremental" leftIcon="💥" rightIcon="🧩" leftKind="bad" rightKind="good">
<template #left>
Bring up all subsystems at once — known anti-pattern, hard to isolate failures.
</template>
<template #right>
Bring up subsystems incrementally, verifying each interface as it comes online.
</template>
</CompareCards>

---
glowSeed: 46
---

# Managing Chaos: Communication

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Daily/frequent short syncs during build phase specifically — more frequent than the general team cadence from Session 5.
</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Integration issues are usually interface issues — the people on both sides need to talk directly.
</div>
</div>

---
glowSeed: 91
---

# Debugging Toolkit: Serial/UART

<div class="text-sm opacity-80 mb-4 text-center">Cheapest, most universal embedded debugging tool.</div>

```text
[12.041s] INFO  sensor: init OK, addr=0x48
[12.043s] INFO  sensor: sample=23.4C
[12.501s] WARN  sensor: read timeout, retry 1/3
[12.502s] ERROR sensor: bus NACK — check wiring
```

<div v-click class="mt-4 text-sm opacity-70 text-center">
Structured/leveled logging (info/warn/error), timestamps, and a way to disable it in production.
</div>

---
glowSeed: 133
---

# Debugging Toolkit: Logic Analyzers

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
When to reach for one: digital signal timing, protocol-level debugging (I2C, SPI, UART framing errors).
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Reading a capture: setup/hold violations, unexpected glitches, protocol decode.
</div>
</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: annotated logic-analyzer capture with protocol decode ]
</div>

---
glowSeed: 250
---

# Debugging Toolkit: Oscilloscopes

<div class="text-sm opacity-80 mb-4 text-center">When you need actual analog behavior — noise, ringing, rise/fall time, power rail stability.</div>

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto text-center>

$$
t_r \le t_{r,max}
$$

</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: annotated oscilloscope trace with rise-time measurement ]
</div>

---
glowSeed: 44
---

# Debugging Toolkit: Simulation

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-3 py-2"></th><th class="px-3 py-2">Simulation</th><th class="px-3 py-2">Physical</th></tr></thead>
<tbody>
<tr v-click><td class="px-3 py-2 font-bold text-left">Speed</td><td class="px-3 py-2 text-center">Fast</td><td class="px-3 py-2 text-center">Slow</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">Fidelity</td><td class="px-3 py-2 text-center">Approximate</td><td class="px-3 py-2 text-center">Ground truth</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">Risk</td><td class="px-3 py-2 text-center">None</td><td class="px-3 py-2 text-center">Can damage hardware</td></tr>
</tbody>
</table>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Software-side: unit tests and mocked hardware interfaces (Session 11 callback) let you debug logic without hardware in the loop.
</div>

---
glowSeed: 400
---

# A Debugging Methodology, Not Just Tools

<div class="flex flex-col items-center gap-2 mt-8 max-w-md mx-auto text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>Reproduce reliably</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>Isolate variables</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>Form a hypothesis</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>Test the hypothesis</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-6 py-3 w-full text-center>Fix, then verify nothing else broke</div>
</div>

---
glowSeed: 66
---

# Common Integration Failure Patterns

<Checklist :items="[
  { text: 'Interface mismatch — voltage levels, data format, timing assumptions (most common)', state: 'x' },
  { text: 'Power budget surprises when subsystems combine', state: 'x' },
  { text: 'Timing/race conditions absent in isolated subsystem testing', state: 'x' },
]" />

---
glowSeed: 5
---

# Live Demo: Diagnosing a Deliberately Broken Integration

<div class="text-center mt-12 text-lg opacity-80">
A staged realistic integration bug — walking through the debugging methodology live.
</div>

<!--
Resist the urge to jump straight to the answer — narrate the false leads too; that's the actually useful part for students.
-->

---
glowSeed: 210
---

# When to Deviate From the Original Design

<PullQuote attribution="A rule worth internalizing" color="red">
A documented deviation is an engineering decision. An undocumented one is a landmine for whoever debugs this next.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Not every deviation is a failure — new information during build legitimately changes the plan.
</div>

---
glowSeed: 91
---

# Documenting Deviations Properly

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold opacity-70 w-1/3">What Changed</td><td class="px-4 py-2 text-xs">Sensor part substituted</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Why</td><td class="px-4 py-2 text-xs">Original part had 12-week lead time</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Original Design</td><td class="px-4 py-2 text-xs">BME280</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Impact on Requirements/RTM</td><td class="px-4 py-2 text-xs">REQ-P-003 re-verification needed</td></tr>
</tbody>
</table>

---
glowSeed: 300
---

# Living Documentation: What It Means in Practice

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Architecture docs, interface definitions, and the RTM should be updated as reality diverges from the plan.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
A PDR-era document that nobody updated becomes actively misleading by Final Design Review (Session 14) time.
</div>

---
glowSeed: 45
---

# Version Control Discipline During Build Phase

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
This is when Git discipline (Session 2) gets tested hardest.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
Resist bypassing PR review "just this once" during a crunch — that's exactly when review catches the most expensive bugs.
</div>

---
glowSeed: 400
---

# Tracking Integration Status Against the RTM

<RTMTable :rows="[
  { id: 'REQ-F-012', description: 'Log sensor readings every 60s', method: 'Test', status: 'pass' },
  { id: 'REQ-P-007', description: 'Scan cycle ≤ 500ms', method: 'Test', status: 'in-progress' },
  { id: 'REQ-NF-003', description: 'Battery life ≥ 72 hours', method: 'Test', status: 'blocked' },
]" />

---
layout: center
class: text-center
glowSeed: 45
---

# Studio Time: Team Integration Work

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Work on your own integration tasks — instructor/TA circulating for hands-on debugging help.
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Managing Chaos', active: true },
  { label: 'Debugging Toolkit' },
  { label: 'Deviations' },
  { label: 'Living Docs' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Code Quality & Review (Feb 16)
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
Next: Code Quality & Review
</div>
