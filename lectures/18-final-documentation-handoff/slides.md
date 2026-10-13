---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Final Documentation & Handoff'
info: |
  ## Senior Design II — Session 7 (Final Lecture)
  Assembling the complete handoff package — technical docs, user guide, executive summary.
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
glowSeed: 229
---

# Final Documentation & Handoff

<div class="pt-6 opacity-80 text-lg">
Senior Design II
</div>

---
glowSeed: 12
---

# This Is the Last Lecture — Here's Why It Matters Most

<PullQuote color="teal">
The project isn't done when it works. It's done when someone else can pick it up.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Everything built across both semesters is worthless to a future user/maintainer/sponsor if it can't be understood without you in the room.
</div>

---
glowSeed: 300
---

# What "Handoff" Means in This Context

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">🏢</div>
Sponsor
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">🧑‍💻</div>
Future Maintainer
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">🗄️</div>
Department Archive
</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Each needs to understand, maintain, extend, or evaluate what was built — without access to the team that built it.
</div>

---
glowSeed: 45
---

# The Anatomy of a Complete Handoff Package

<Checklist :items="[
  { text: 'Technical documentation', state: 'check' },
  { text: 'User guide', state: 'check' },
  { text: 'Executive summary', state: 'check' },
  { text: 'Lessons learned (Session 15)', state: 'check' },
  { text: 'Known issues (Session 14)', state: 'check' },
  { text: 'Source code + SBOM (Session 4)', state: 'check' },
  { text: 'Build/setup instructions', state: 'check' },
]" />

---
glowSeed: 91
---

# Technical Documentation: What Belongs In It

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>As-built architecture & interfaces (Session 12 deviations reflected)</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Design rationale (Design Decision Records, Session 7)</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Full RTM with final verification status (Session 10)</div>
</div>

---
glowSeed: 133
---

# Writing for an Absent Reader

<CompareCards leftTitle="Assumes Shared Context" rightTitle="Absent-Reader Ready" leftIcon="✗" rightIcon="✓" leftKind="bad" rightKind="good">
<template #left>
"As discussed in the sponsor meeting, we used the usual sensor config."
</template>
<template #right>
"We used a BME280 (I2C, addr 0x76) configured for 1Hz sampling — see REQ-P-007."
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Assume zero shared context. Every diagram needs a legend; every claim needs evidence or an "assumed, not verified" flag.
</div>

---
glowSeed: 250
---

# User Guide: Purpose and Audience

<div class="max-w-2xl mx-auto text-center mt-6 text-sm opacity-80">
Distinct from technical documentation — written for someone operating the system, not modifying its internals.
</div>

<div class="grid grid-cols-4 gap-2 mt-8 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Setup/Installation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Normal Operation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Troubleshooting</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Safety Notes</div>
</div>

---
glowSeed: 44
---

# User Guide: Practical Writing Techniques

<div class="grid grid-cols-2 gap-8 mt-10">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Step-by-step procedures with expected outcomes stated explicitly: "you should now see the LED turn green."
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Screenshots/photos for physical setup steps — don't describe in prose what's better shown visually.
</div>
</div>

---
glowSeed: 400
---

# Executive Summaries: What They're For

<PullQuote color="amber">
If a non-technical stakeholder can't tell you what your project does after reading your executive summary, it isn't one yet.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
A reader who will never read the full technical documentation needs to understand what was built, why it matters, and its status in under two minutes.
</div>

---
glowSeed: 66
---

# Executive Summaries: Structure

<div class="flex flex-col items-center gap-2 mt-8 max-w-md mx-auto text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-6 py-3 w-full text-center>Problem</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-6 py-3 w-full text-center>What was built</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-6 py-3 w-full text-center>Key outcomes/results</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>Status/next steps</div>
</div>

---
glowSeed: 5
---

# Live Example: Rewriting a Technical Paragraph

<div class="text-center mt-12 text-lg opacity-80">
Take a dense technical paragraph and rewrite it live for a non-technical audience.
</div>

<!--
Use a real (volunteered) excerpt from a team's own documentation if possible — much more effective than a generic example.
-->

---
glowSeed: 210
---

# Integrating the Lessons-Learned Section

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Pull directly from Session 15's retrospective output, framed for a reader who wasn't there.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
What's genuinely useful to a future team vs. just internal team history — filter accordingly.
</div>

---
glowSeed: 91
---

# Integrating the Known Issues Section

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Pull directly from Session 14's known-issues documentation, updated to final status.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Be explicit about permanent limitations vs. open items a future team could address.
</div>

---
glowSeed: 300
---

# Source Code, SBOM, and Build Instructions

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Final SBOM reflects the actual shipped dependency set — not the Fall-semester draft (Session 4 callback).
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Clear build/setup instructions — assume the reader has a clean environment with nothing pre-installed.
</div>
</div>

---
glowSeed: 44
---

# Organizing the Package: Navigation Matters

```text
handoff/
├── README.md          ← routes readers to what they need
├── technical/
├── user-guide/
├── executive-summary.md
├── lessons-learned.md
├── known-issues.md
└── source/ + sbom.json
```

<div v-click class="mt-4 text-sm opacity-70 text-center">
A well-organized structure with a top-level README that routes readers to the right document for their need.
</div>

---
glowSeed: 500
---

# Common Handoff Documentation Failures

<Checklist :items="[
  { text: 'Documentation describes the intended design, not what was actually built', state: 'x' },
  { text: 'Executive summary that\'s really just a compressed technical summary', state: 'x' },
  { text: 'Missing or stale build instructions assuming outdated tools/versions', state: 'x' },
]" />

---
layout: center
class: text-center
glowSeed: 45
---

# Studio Time: Assemble Your Handoff Package

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Assemble and cross-check your actual handoff package against the checklist.
</div>

---
glowSeed: 91
---

# Final Delivery Logistics

<Checklist :items="[
  { text: 'Package submitted to sponsor and/or department', state: 'check' },
  { text: 'Deadline confirmed', state: 'check' },
  { text: 'Demo Day logistics confirmed', state: 'check' },
]" />

---
glowSeed: 229
---

# Course Wrap-up: Full Two-Semester Recap

<div class="grid grid-cols-4 gap-2 mt-6 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Logistics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Git</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Ethics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Licensing</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Teams</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Requirements</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Architecture</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>AI Tools</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>PDR</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Testing</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>CI/CD</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Build & Integration</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Code Quality</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Validation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-2>Retrospective</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-2>Handoff</div>
</div>

---
layout: center
class: text-center
glowSeed: 229
---

# Closing Remarks

<div class="text-lg opacity-85 max-w-2xl mx-auto mt-4">
This course simulated real engineering practice more closely than almost anything else in the degree.
</div>

<div v-click class="mt-6 text-sm opacity-70 max-w-xl mx-auto">
The artifact stack you built — requirements, RTM, architecture docs, PDR, handoff package — is genuinely reusable professional muscle memory.
</div>

<!--
This is the last lecture of the entire sequence — end with something genuine, not just logistics.
-->

---
layout: center
class: text-center
glowSeed: 229
---

# Thank You

### Congratulations, Senior Design I & II

<div class="pt-6 opacity-80">
Two semesters. One project. A real engineering practice.
</div>

<div class="pt-8 text-sm opacity-60">
Good luck at Demo Day.
</div>
