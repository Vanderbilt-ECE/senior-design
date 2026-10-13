---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'System Architecture & Design'
info: |
  ## Senior Design I — Session 7
  Decomposition, block diagrams, interfaces, HW/SW partitioning, and design rationale.
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
glowSeed: 99
---

# System Architecture & Design

<div class="pt-6 opacity-80 text-lg">
Senior Design I
</div>

---
glowSeed: 12
---

# Where We Are in the Process

<div class="grid grid-cols-4 gap-2 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Requirements</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>Architecture</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Build & Test</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Validation</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Requirements (Session 6) are now roughly stable — today, requirements become architecture.
</div>

<!--
Acknowledge the 3-week gap since Session 6 — check in on where teams actually are with their requirements docs.
-->

---
glowSeed: 210
---

# What Is System Architecture?

<div class="text-center max-w-2xl mx-auto mt-6 text-sm opacity-80">
The high-level structure of a system: its major components, their responsibilities, and how they interact.
</div>

<PullQuote color="blue">
Architecture is the decisions that are hard to change later.
</PullQuote>

<div v-click class="mt-4 text-center text-sm opacity-70">
Architecture is a set of decisions, not a diagram — the diagram just communicates the decisions.
</div>

---
glowSeed: 45
---

# Why Architecture Comes Before Detailed Design

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div class="text-sm">
Detailed design (specific part numbers, code modules) is expensive to redo. Architecture-level mistakes are cheaper to catch early.

<div class="mt-4" border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>

$$
\text{Cost}(t) \propto e^{kt}
$$

</div>
</div>

<svg viewBox="0 0 260 160" class="w-full">
  <line x1="20" y1="140" x2="240" y2="140" stroke="rgba(255,255,255,0.2)"/>
  <line x1="20" y1="140" x2="20" y2="10" stroke="rgba(255,255,255,0.2)"/>
  <path d="M20,135 Q100,125 160,80 T230,15" fill="none" stroke="#f87171" stroke-width="3"/>
  <text x="60" y="155" fill="white" style="font-size:10px">Concept</text>
  <text x="185" y="155" fill="white" style="font-size:10px">Deployed</text>
  <text x="8" y="80" fill="white" style="font-size:10px" transform="rotate(-90 8 80)">Cost to fix</text>
</svg>

</div>

---
glowSeed: 66
---

# System Decomposition: Top-Down

<div class="text-sm opacity-70 mb-4 text-center">Start from the whole system, break into major subsystems by function — not by team member convenience.</div>

<svg viewBox="0 0 500 180" class="w-full max-w-2xl mx-auto">
  <rect x="200" y="10" width="100" height="34" rx="6" fill="#134e4a" stroke="#2dd4bf" stroke-width="2"/>
  <text x="250" y="31" text-anchor="middle" fill="white" style="font-size:12px">System</text>
  <line x1="250" y1="44" x2="100" y2="80" stroke="rgba(255,255,255,0.3)"/>
  <line x1="250" y1="44" x2="250" y2="80" stroke="rgba(255,255,255,0.3)"/>
  <line x1="250" y1="44" x2="400" y2="80" stroke="rgba(255,255,255,0.3)"/>
  <rect x="50" y="80" width="100" height="34" rx="6" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="100" y="101" text-anchor="middle" fill="white" style="font-size:11px">Sensing</text>
  <rect x="200" y="80" width="100" height="34" rx="6" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="250" y="101" text-anchor="middle" fill="white" style="font-size:11px">Processing</text>
  <rect x="350" y="80" width="100" height="34" rx="6" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="400" y="101" text-anchor="middle" fill="white" style="font-size:11px">Comms</text>
</svg>

---
glowSeed: 91
---

# Defining Subsystem Boundaries

<CompareCards leftTitle="Tangled" rightTitle="Clean" leftIcon="🕸️" rightIcon="✂️" leftKind="bad" rightKind="good">
<template #left>
Constant back-and-forth data/control flow across the boundary — probably drawn wrong.
</template>
<template #right>
Narrow, well-defined interface. High internal cohesion within each block.
</template>
</CompareCards>

---
glowSeed: 133
---

# Block Diagrams: Conventions

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Blocks = components/subsystems.<br/>Arrows = signals, data, power, or control flow — <strong>label which!</strong>
</div>

<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5 text-sm>
Consistent notation matters — a block diagram is a communication tool, not art.
</div>

</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: annotated example block diagram with a legend ]
</div>

---
glowSeed: 250
---

# Block Diagrams: Levels of Abstraction

<div class="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="font-bold mb-1">System-Level</div>
Black box
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Subsystem-Level</div>
What a PDR panel wants first
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>
<div class="font-bold mb-1">Module-Level</div>
Details available on request
</div>
</div>

---
glowSeed: 5
---

# Live Demo: Building a Block Diagram

<div class="text-center mt-12 text-lg opacity-80">
Live decomposition from a sample set of requirements — thinking aloud.
</div>

<!--
Use a diagramming tool visible to the class (whiteboard, draw.io) — the live decision-making is the point, not the polished result.
-->

---
glowSeed: 300
---

# Interface Definitions

<div class="text-sm opacity-70 mb-4 text-center">For every arrow in the block diagram, define:</div>

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Signal type</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Protocol</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Voltage/logic level</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Data format</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Timing constraints</div>
</div>

<div v-click class="mt-6 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
This is what prevents "it worked on my subsystem" integration failures later (Session 12).
</div>

---
glowSeed: 45
---

# HW/SW Partitioning: The Core Question

<div class="text-center max-w-xl mx-auto mt-6 text-lg">
For any given function — should it live in hardware or software?
</div>

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Flexibility needed?</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Timing-critical?</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Power budget?</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Cost per unit?</div>
</div>

---
glowSeed: 46
---

# HW/SW Partitioning: A Worked Tradeoff

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4 max-w-lg mx-auto text-sm text-center>

$$
f_{sample} \le \frac{1}{T_{compute}}
$$

</div>

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-3 py-2"></th><th class="px-3 py-2">Hardware</th><th class="px-3 py-2">Software</th></tr></thead>
<tbody>
<tr v-click><td class="px-3 py-2 font-bold text-left">Latency</td><td class="px-3 py-2 text-center">Near-zero</td><td class="px-3 py-2 text-center">Bounded by compute</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">Flexibility</td><td class="px-3 py-2 text-center">Fixed</td><td class="px-3 py-2 text-center">High</td></tr>
<tr v-click><td class="px-3 py-2 font-bold text-left">Dev Time</td><td class="px-3 py-2 text-center">Longer</td><td class="px-3 py-2 text-center">Shorter</td></tr>
</tbody>
</table>

---
glowSeed: 500
---

# Common Partitioning Mistakes

<Checklist :items="[
  { text: 'Over-engineering flexibility into hardware that will never change', state: 'x' },
  { text: 'Pushing timing-critical work into software without accounting for OS/scheduling jitter', state: 'x' },
]" />

---
glowSeed: 91
---

# Documenting Design Rationale

<div class="text-sm opacity-70 mb-4 text-center">For every major architecture decision: what was chosen, what alternatives were considered, why this one won.</div>

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold opacity-70 w-1/3">Decision</td><td class="px-4 py-2 text-xs">I2C vs. SPI for sensor bus</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Chosen</td><td class="px-4 py-2 text-xs">I2C</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Alternatives</td><td class="px-4 py-2 text-xs">SPI (rejected: pin count)</td></tr>
<tr v-click><td class="px-4 py-2 font-bold opacity-70">Rationale</td><td class="px-4 py-2 text-xs">Fewer pins, adequate speed for 10Hz sampling</td></tr>
</tbody>
</table>

<div v-click class="mt-4 text-xs opacity-60 text-center">
This record is what a PDR panel actually probes — "why not X instead?"
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Live Exercise: Design Decision Record

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Draft one DDR for a real decision you've already made (or are about to make) in your own project.
</div>

<!--
Circulate and probe — "what alternative did you NOT choose, and why?" is often the question teams haven't actually answered yet.
-->

---
glowSeed: 210
---

# Traceability: Architecture Back to Requirements

<table class="w-full text-sm mt-8" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-4 py-2">Requirement</th><th class="text-left px-4 py-2">Architecture Element</th></tr></thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-mono text-xs">REQ-F-012</td><td class="px-4 py-2 text-sm">Sensing subsystem</td></tr>
<tr v-click><td class="px-4 py-2 font-mono text-xs">REQ-P-007</td><td class="px-4 py-2 text-sm">Processing subsystem</td></tr>
</tbody>
</table>

<div v-click class="mt-6 max-w-xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
If a block doesn't trace to a requirement, ask why it's in the design — scope creep risk.
</div>

---
glowSeed: 300
---

# Risk Identification at the Architecture Level

<RiskMatrix :cells="[
  { row: 1, col: 3, label: 'RF module', severity: 'critical' },
  { row: 2, col: 2, label: 'Power supply', severity: 'medium' },
  { row: 3, col: 1, label: 'Enclosure', severity: 'low' },
]" />

<div v-click class="mt-4 text-sm opacity-70 text-center">
Which subsystem is highest risk — least proven, tightest margin, longest lead time?
</div>

---
glowSeed: 44
---

# Choosing Diagramming Tools

<div class="grid grid-cols-4 gap-3 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>draw.io / diagrams.net</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Lucidchart</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>KiCad / EDA tools</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>PowerPoint SmartArt</div>
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Consistency across the team's documentation matters more than which specific tool.
</div>

---
glowSeed: 400
---

# What Goes Into the Architecture Document

<Checklist :items="[
  { text: 'System-level block diagram', state: 'check' },
  { text: 'Subsystem descriptions', state: 'check' },
  { text: 'Interface definitions', state: 'check' },
  { text: 'HW/SW partitioning rationale', state: 'check' },
  { text: 'Design decision records', state: 'check' },
  { text: 'Risk list', state: 'check' },
]" />

---
glowSeed: 66
---

# Common PDR Panel Questions (Preview)

<div class="flex flex-col gap-3 max-w-xl mx-auto mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"Why this partition and not another?"</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"What's your riskiest subsystem?"</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"How do these interfaces get tested independently?"</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
Full PDR prep is Session 9 — this previews what today's work needs to withstand.
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Studio Time

<div class="text-lg opacity-85 mt-4">
Work on your own block diagrams and interface definitions — instructor/TA circulating.
</div>

<!--
This session runs long on studio time deliberately — architecture work benefits from in-room support more than most topics.
-->

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Decomposition', active: true },
  { label: 'Block Diagrams' },
  { label: 'Interfaces' },
  { label: 'Partitioning' },
  { label: 'Rationale' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: AI Coding Agents & Long-Running Development (Nov 3)
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
Next: AI Coding Agents & Long-Running Development
</div>
