---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Lessons Learned & Technical Retrospective'
info: |
  ## Senior Design II — Session 6
  Structured retrospective frameworks, honest feedback, and converting insight to action.
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
glowSeed: 190
---

# Lessons Learned &<br/>Technical Retrospective

<div class="pt-4 opacity-80 text-lg">
Senior Design II
</div>

---
glowSeed: 12
---

# Where We Are: Acceptance Testing Done, Handoff Next

<Timeline :markers="[
  { label: 'Acceptance Testing', sublabel: 'Session 14' },
  { label: 'Retrospective', sublabel: 'Now', active: true },
  { label: 'Final Handoff', sublabel: 'Session 16' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-70">
This session sits deliberately between acceptance testing and final documentation — reflection before the final push.
</div>

---
glowSeed: 300
---

# Why Retrospectives Matter

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Unreflected experience doesn't reliably become learning.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
This session's output directly feeds the "lessons learned" section of the handoff package (Session 16).
</div>

---
glowSeed: 45
---

# Psychological Safety, Revisited

<PullQuote attribution="Session 5 reprise" color="blue">
A retrospective where everyone just says "it went great" has usually failed at its actual purpose.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Honest retrospectives require the same psychological safety as the original team formation (Project Aristotle, Session 5).
</div>

---
glowSeed: 91
---

# Framework 1: Start / Stop / Continue

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-6>
<div class="text-2xl mb-2">▶️</div>
<div class="font-bold">Start</div>
</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-6>
<div class="text-2xl mb-2">⏹️</div>
<div class="font-bold">Stop</div>
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-6>
<div class="text-2xl mb-2">🔁</div>
<div class="font-bold">Continue</div>
</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Simple, low-overhead, good for teams new to structured retrospectives.
</div>

---
glowSeed: 133
---

# Framework 2: The Sailboat

<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto mt-4">
  <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.2)"/>
  <path d="M200,180 L200,60 L260,100 Z" fill="#134e4a" fill-opacity="0.5" stroke="#2dd4bf" stroke-width="1.5"/>
  <path d="M190,180 L190,80 L150,110 Z" fill="#1e3a5f" fill-opacity="0.5" stroke="#60a5fa" stroke-width="1.5"/>
  <path d="M170,180 Q200,195 230,180 L225,190 L175,190 Z" fill="#3f2d0e" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="150" y1="180" x2="130" y2="210" stroke="#f87171" stroke-width="2"/>
  <line x1="230" y1="180" x2="250" y2="210" stroke="#f87171" stroke-width="2"/>
  <text x="90" y="205" fill="#fca5a5" style="font-size:11px">Anchors</text>
  <text x="270" y="205" fill="#fca5a5" style="font-size:11px">Rocks</text>
  <text x="200" y="45" text-anchor="middle" fill="#5eead4" style="font-size:11px">Wind</text>
  <circle cx="350" cy="150" r="20" fill="#3f2d0e" fill-opacity="0.6" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="350" y="145" text-anchor="middle" fill="#fde68a" style="font-size:9px">Island</text>
</svg>

<div v-click class="mt-2 text-sm opacity-70 text-center">
Wind (pushing forward) · Anchors (holding back) · Rocks (risks ahead) · Island (the goal)
</div>

---
glowSeed: 250
---

# Framework 3: 4Ls

<div class="grid grid-cols-2 gap-4 mt-8 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>Liked</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>Learned</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>Lacked</div>
<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5>Longed For</div>
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Good for surfacing both technical and emotional/experiential reflections.
</div>

---
glowSeed: 44
---

# Choosing a Framework for Today

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Any of the three works — consistency within a team matters more than which framework.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Recommendation: Start/Stop/Continue for time-constrained sessions; Sailboat for teams that responded well to visual framing.
</div>

---
glowSeed: 400
---

# Separating Process From Technical Lessons

<CompareCards leftTitle="Process" rightTitle="Technical" leftKind="neutral" rightKind="neutral">
<template #left>
Team communication, planning accuracy, review discipline, tool choices.
</template>
<template #right>
Architecture decisions (Session 7), debugging approaches (Session 12), what worked or didn't.
</template>
</CompareCards>

---
glowSeed: 66
---

# Technical Retrospective: What to Actually Capture

<div class="grid grid-cols-3 gap-4 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Which architecture decisions held up vs. needed rework</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Which PDR-identified risks materialized</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5>Where estimates were most wrong, and why</div>
</div>

---
glowSeed: 91
---

# Ground Rules for Honest Feedback

<CompareCards leftTitle="Don't" rightTitle="Do">
<template #left>
Generalize ("you always...", "you never...") or attack character.
</template>
<template #right>
Focus on specific behaviors/decisions with concrete examples.
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
The team charter's conflict-resolution process (Session 5) is the fallback if real unresolved tension surfaces.
</div>

---
glowSeed: 133
---

# Giving Feedback: A Simple Structure

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-xl mx-auto text-center text-sm>
"In <strong>[situation]</strong>, when <strong>[behavior]</strong> happened, the impact was <strong>[effect]</strong>."
</div>

<div v-click class="mt-6 max-w-xl mx-auto text-sm opacity-80 text-center">
Example: "In the week before PDR, when the architecture doc wasn't updated, the impact was we presented outdated diagrams."
</div>

---
glowSeed: 250
---

# Receiving Feedback Without Getting Defensive

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Same skill as Session 13's review-feedback guidance — higher emotional stakes at end of semester.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Listen fully before responding; ask clarifying questions; it's okay to need time to process.
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Team Retrospective Session

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Each team runs its own retrospective using the chosen framework, facilitated by a rotating team member.
</div>

---
glowSeed: 46
---

# Work Time

<div class="text-center mt-12 text-lg opacity-80">
~25–30 minutes of protected team time.
</div>

<!--
Instructor/TA should NOT sit in on every team's retrospective by default — presence can suppress honesty; circulate lightly.
-->

---
glowSeed: 91
---

# From Retrospective to Action

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
A retrospective that produces no concrete next actions is just venting.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Convert at least 2–3 items into specific commitments for the remaining weeks.
</div>

---
glowSeed: 210
---

# Individual Reflection Component

<div class="max-w-xl mx-auto text-center mt-10 text-lg">
What will you personally do differently on your next team project or in industry?
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
Feeds the individual component of course grading (Session 1) — and genuinely useful for job interview prep.
</div>

---
glowSeed: 44
---

# Class-Wide Share-Out

<div class="text-center mt-12 text-lg opacity-80">
One insight per team, shared with the whole class.
</div>

<!--
Genuinely useful for the instructor too — patterns here inform next year's version of this course.
-->

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Retrospective Frameworks', active: true },
  { label: 'Process vs. Technical' },
  { label: 'Honest Feedback' },
  { label: 'Insight → Action' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Final Documentation & Handoff (Apr 1) — this session's output becomes direct input.
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
Next: Final Documentation & Handoff
</div>
