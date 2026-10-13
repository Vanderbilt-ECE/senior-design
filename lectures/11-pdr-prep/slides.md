---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'PDR Prep'
info: |
  ## Senior Design I — Session 9
  Preparing for the Preliminary Design Review — content, risk, and handling pushback.
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
glowSeed: 65
---

# PDR Prep

<div class="pt-6 opacity-80 text-lg">
Senior Design I · Lecture/Workshop
</div>

<div class="mt-8" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs max-w-md mx-auto>
[ Image needed: conference-room/review-panel photo or illustration ]
</div>

---
glowSeed: 12
---

# This Is a Workshop, Not Just a Lecture

<div class="grid grid-cols-2 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-6>
<div class="text-2xl mb-2">🎓</div>
<div class="font-bold">~35 min Lecture</div>
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-6>
<div class="text-2xl mb-2">🛠️</div>
<div class="font-bold">~35–40 min Workshop</div>
</div>
</div>

---
glowSeed: 300
---

# What a Design Review Actually Is

<PullQuote color="blue">
A review that finds nothing wrong either means a flawless design or an unprepared panel.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
A structured decision gate: does the project have enough evidence to proceed to the next phase with acceptable risk? Not a presentation to impress — a checkpoint to catch problems while they're still cheap to fix.
</div>

---
glowSeed: 45
---

# Why PDR Specifically, At This Point

<Timeline :markers="[
  { label: 'Requirements', sublabel: 'Session 6' },
  { label: 'Architecture', sublabel: 'Session 7' },
  { label: 'PDR', sublabel: 'Now', active: true },
  { label: 'Build Phase', sublabel: 'Spring' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-70">
PDR = Preliminary Design Review — after requirements and architecture are drafted, before detailed design/build begins.
</div>

---
glowSeed: 91
---

# What a PDR Panel Is Actually Evaluating

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">⚙️</div>
<div class="font-bold mb-1">Feasibility</div>
Can this be built with the team's skills, budget, and timeline?
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">⚠️</div>
<div class="font-bold mb-1">Risk Awareness</div>
Does the team know what could go wrong, and have a plan?
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>
<div class="text-2xl mb-2">📋</div>
<div class="font-bold mb-1">Completeness</div>
Documented, not just "in someone's head"?
</div>
</div>

---
glowSeed: 66
---

# What a PDR Panel Is NOT Evaluating

<div class="grid grid-cols-3 gap-3 mt-10 text-center text-sm">
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4>Slide polish</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4>Presentation charisma</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4>Whether the idea is "impressive"</div>
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
A panel that only asks about visual polish isn't doing its job — a team that only prepares polish isn't ready. This is a technical audit, not a popularity contest.
</div>

---
glowSeed: 133
---

# Standard PDR Content Outline

<div class="grid grid-cols-3 gap-3 mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>1. Problem & requirements summary</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>2. System architecture</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>3. Key design decisions & rationale</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>4. Risk assessment</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>5. Project plan/schedule</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-3>6. Open questions</div>
</div>

---
glowSeed: 250
---

# Section Deep-Dive: Requirements Summary

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Don't re-present every requirement — summarize by category, highlight the ones driving major design decisions.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Callback to Session 6: the panel will check that requirements are testable, not vague.
</div>

---
glowSeed: 251
---

# Section Deep-Dive: Architecture Presentation

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Lead with the system-level block diagram, then drill into the highest-risk subsystem.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Don't bury the panel in module-level detail before establishing the big picture (Session 7 callback).
</div>

---
glowSeed: 252
---

# Section Deep-Dive: Design Decision Rationale

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
For each major decision: what was chosen, what alternatives were considered, why this one won.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Reuse the Design Decision Records from Session 7 — this is where "why not X instead?" gets pre-empted.
</div>

---
glowSeed: 253
---

# Section Deep-Dive: Risk Assessment

<RiskMatrix :cells="[
  { row: 1, col: 3, label: 'Wireless range', severity: 'critical' },
  { row: 2, col: 2, label: 'Vendor lead time', severity: 'medium' },
  { row: 3, col: 2, label: 'UI polish', severity: 'low' },
]" />

<div v-click class="mt-4 text-sm opacity-70 text-center">
Present your own risk matrix rather than waiting for the panel to find risks for you — a credibility signal, not a liability.
</div>

---
glowSeed: 254
---

# Section Deep-Dive: Project Plan & Schedule

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Realistic milestone schedule for the build phase, with dependencies and slack identified.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
A schedule with zero slack anywhere is itself a red flag to an experienced panel.
</div>

---
glowSeed: 255
---

# Section Deep-Dive: Open Questions

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
It is not a weakness to present unresolved questions.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
Presenting them shows awareness; hiding them looks worse when discovered.
</div>

---
layout: center
class: text-center
glowSeed: 300
---

# Design Reviews as Decision Gates, Not Performances

<div class="text-lg opacity-85 max-w-2xl mx-auto mt-4">
The goal is an accurate, honest picture of project status — not a sales pitch.
</div>

<div v-click class="mt-6 text-sm opacity-70 max-w-xl mx-auto">
Overselling readiness now creates a much worse conversation at the Final Design Review in spring.
</div>

---
glowSeed: 45
---

# Handling Pushback: Mindset

<CompareCards leftTitle="Don't" rightTitle="Do">
<template #left>
Get defensive — treat the question as a personal attack.
</template>
<template #right>
"That's a fair concern — here's our current thinking, and here's what we still need to figure out."
</template>
</CompareCards>

<div v-click class="mt-4 text-sm opacity-70 text-center">
Tough questions are the panel doing its job.
</div>

---
glowSeed: 46
---

# Handling Pushback: Technique

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Answer the actual question — don't deflect to an easier topic</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>"We don't know yet" is okay — if paired with a plan to find out</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Decide in advance who answers which technical area</div>
</div>

---
glowSeed: 91
---

# Common PDR Panel Questions

<div class="flex flex-col gap-3 max-w-xl mx-auto mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"Why this architecture and not an alternative?"</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"What's your riskiest subsystem and why?"</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"What happens if [key assumption] turns out to be wrong?"</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-5 py-3 text-sm>"What's your fallback if [long-lead part] doesn't arrive on time?"</div>
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Workshop: Building Your PDR Outline

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Build a first-draft PDR outline together, live, using your own project's requirements/architecture material.
</div>

---
glowSeed: 46
---

# Workshop: Requirements Summary & Architecture Slides

<div class="text-center mt-12 text-lg opacity-80">
Work time — instructor/TA circulating.
</div>

<!--
Prioritize checking that each team has actually identified their riskiest subsystem — this is the most commonly under-prepared section.
-->

---
glowSeed: 47
---

# Workshop: Draft Your Risk Matrix

<div class="text-center mt-12 text-lg opacity-80">
Populate a risk matrix for your own project.
</div>

<!--
Push back on risk matrices that are suspiciously empty or vague — "things might go wrong" is not a risk statement.
-->

---
glowSeed: 48
---

# Workshop: Peer Feedback Round

<div class="max-w-xl mx-auto text-center mt-10 text-lg">
Swap outlines with another team — "what question would you ask this team?"
</div>

---
glowSeed: 210
---

# What Happens Between Now and the Actual PDR

<Timeline :markers="[
  { label: 'Finalize Deck', active: true },
  { label: 'Schedule Review' },
  { label: 'Rehearsal (optional)' },
  { label: 'Actual PDR' },
]" />

---
glowSeed: 229
---

# Wrap-up: Fall Semester Recap

<div class="grid grid-cols-3 gap-2 mt-8 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Logistics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Git</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Standards & Ethics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Licensing</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Team Formation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Requirements</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Architecture</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>AI Tools</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-3>PDR Prep</div>
</div>

<div v-click class="mt-8 text-center text-sm opacity-70">
This is the last Fall lecture — Spring Session 1 resumes Jan 12.
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
