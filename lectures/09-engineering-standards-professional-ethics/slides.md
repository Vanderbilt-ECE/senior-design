---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Engineering Standards & Professional Ethics'
info: |
  ## Senior Design I — Session 3
  Reading standards and datasheets critically, and applying a structured ethical decision framework.
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
glowSeed: 140
---

# Engineering Standards & Professional Ethics

<div class="pt-6 opacity-80 text-lg">
Senior Design I
</div>

<div class="mt-8" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs max-w-md mx-auto>
[ Image needed: a standard's cover page next to a datasheet excerpt ]
</div>

---
glowSeed: 8
---

# Why This Lecture Exists

<PullQuote attribution="Rhetorical question for the room" color="amber">
Whose job is it to know the standard applies? Yours — the engineer.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Every requirement your sponsor gives you eventually touches a standard, whether they say so or not. Ignorance of a relevant standard is not a defense — professionally or legally.
</div>

---
glowSeed: 55
---

# What Is a Standard?

<div class="text-sm opacity-80 mb-4">A documented agreement on requirements, specifications, or guidelines to ensure consistency, safety, interoperability.</div>

<svg viewBox="0 0 400 260" class="w-full max-w-md mx-auto">
  <circle cx="150" cy="110" r="90" fill="#134e4a" fill-opacity="0.35" stroke="#2dd4bf" stroke-width="2"/>
  <circle cx="250" cy="110" r="90" fill="#1e3a5f" fill-opacity="0.35" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="200" cy="185" r="90" fill="#3f2d0e" fill-opacity="0.35" stroke="#fbbf24" stroke-width="2"/>
  <text x="105" y="90" text-anchor="middle" fill="#5eead4" style="font-size:14px">Safety</text>
  <text x="295" y="90" text-anchor="middle" fill="#93c5fd" style="font-size:14px">Interoperability</text>
  <text x="200" y="240" text-anchor="middle" fill="#fde68a" style="font-size:14px">Quality</text>
  <text x="200" y="150" text-anchor="middle" fill="white" style="font-size:15px" font-weight="bold">Standards</text>
</svg>

<div v-click class="mt-2 text-center text-sm opacity-70">
Voluntary consensus standards vs. mandatory regulatory standards.
</div>

---
glowSeed: 91
---

# The Standards Bodies Landscape

<table class="w-full text-sm mt-4" border="2 solid white/5" rounded-lg>
<thead>
<tr bg="white/10">
<th class="text-left px-4 py-2">Body</th>
<th class="text-left px-4 py-2">Scope</th>
<th class="text-left px-4 py-2">Example</th>
<th class="text-left px-4 py-2">Typical Use</th>
</tr>
</thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold text-teal-400">IEEE</td><td class="px-4 py-2">Electrical/electronic, professional practice</td><td class="px-4 py-2 font-mono text-xs">802, 830</td><td class="px-4 py-2">Networking, requirements docs</td></tr>
<tr v-click><td class="px-4 py-2 font-bold text-blue-400">IEC</td><td class="px-4 py-2">International electrotechnical</td><td class="px-4 py-2 font-mono text-xs">61508</td><td class="px-4 py-2">Functional safety</td></tr>
<tr v-click><td class="px-4 py-2 font-bold text-amber-400">ISO</td><td class="px-4 py-2">Broad international</td><td class="px-4 py-2 font-mono text-xs">42010</td><td class="px-4 py-2">Architecture description</td></tr>
<tr v-click><td class="px-4 py-2 font-bold text-violet-400">ANSI</td><td class="px-4 py-2">US national coordinator/accreditor</td><td class="px-4 py-2 font-mono text-xs">—</td><td class="px-4 py-2">Accredits US standards</td></tr>
</tbody>
</table>

---
glowSeed: 300
---

# How Standards Get Made and Revised

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Working groups</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Consensus process</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Public comment period</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>Periodic revision</div>
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
⚠️ Citing a withdrawn/superseded standard is a real professional error — "current edition" matters.
</div>

<!--
Show live how to check a standard's current status on the issuing body's website.
-->

---
glowSeed: 45
---

# Finding a Standard (Live Demo)

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 font-bold>Access</div>
<div px-5 py-4 text-sm>Vanderbilt library database access to IEEE Xplore / ANSI standards portal.</div>
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 font-bold>Search Strategy</div>
<div px-5 py-4 text-sm>By keyword vs. by standard number (e.g. "IEC 62368-1" for equipment safety).</div>
</div>

</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: IEEE Xplore / ANSI portal screenshot ]
</div>

---
glowSeed: 133
---

# Anatomy of a Standard Document

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<v-clicks>

- Scope
- Normative references
- Definitions
- Requirements clauses
- Informative annexes

</v-clicks>

</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
<div class="font-bold mb-2">Precise language matters</div>
<code class="text-red-400">shall</code> = mandatory<br/>
<code class="text-amber-400">should</code> = recommended<br/>
<code class="text-teal-400">may</code> = optional
</div>

</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: annotated screenshot of a real standard's table of contents ]
</div>

---
glowSeed: 200
---

# Case Study: Reading a Real Datasheet

<div class="text-sm opacity-80 text-center mt-6">A component relevant to typical capstone projects — e.g. a microcontroller or power regulator.</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-8 text-center opacity-60 text-xs max-w-lg mx-auto>
[ Image needed: full datasheet first page ]
</div>

---
glowSeed: 66
---

# Datasheet Anatomy: Absolute Maximum Ratings

<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-5 text-sm>
⚠️ These are <strong>destruction limits</strong>, not operating targets — exceeding them, even briefly, can cause permanent damage.
</div>

<div v-click class="mt-6 max-w-xl mx-auto text-sm opacity-80 text-center">
Common trap: students design "up to" the absolute max instead of the recommended operating range.
</div>

<div class="mt-6" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: annotated absolute-max ratings table with a red "danger zone" highlight ]
</div>

---
glowSeed: 77
---

# Datasheet Anatomy: Recommended Operating Conditions

<div class="text-sm opacity-80 mb-4">This is the actual design target range — a conservative derating margin:</div>

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-lg mx-auto>

$$
V_{design} \le 0.8 \times V_{max,recommended}
$$

</div>

<svg viewBox="0 0 500 100" class="w-full max-w-xl mx-auto mt-8">
  <line x1="20" y1="50" x2="480" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <rect x="20" y="42" width="250" height="16" fill="#134e4a" fill-opacity="0.5"/>
  <rect x="270" y="42" width="120" height="16" fill="#3f2d0e" fill-opacity="0.6"/>
  <rect x="390" y="42" width="90" height="16" fill="#450a0a" fill-opacity="0.6"/>
  <text x="140" y="30" text-anchor="middle" fill="#5eead4" style="font-size:12px">Design Target</text>
  <text x="330" y="30" text-anchor="middle" fill="#fde68a" style="font-size:12px">Recommended</text>
  <text x="435" y="30" text-anchor="middle" fill="#fca5a5" style="font-size:12px">Absolute Max</text>
</svg>

---
glowSeed: 91
---

# Datasheet Anatomy: Timing Diagrams

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div class="text-sm">

- Setup / hold times
- Rise / fall times
- Propagation delay

</div>

<svg viewBox="0 0 300 140" class="w-full">
  <line x1="20" y1="30" x2="20" y2="110" stroke="rgba(255,255,255,0.3)"/>
  <path d="M20,90 L60,90 L60,50 L140,50 L140,90 L220,90 L220,50 L280,50" fill="none" stroke="#5eead4" stroke-width="2"/>
  <line x1="60" y1="30" x2="60" y2="110" stroke="#fbbf24" stroke-dasharray="3" stroke-width="1"/>
  <line x1="140" y1="30" x2="140" y2="110" stroke="#fbbf24" stroke-dasharray="3" stroke-width="1"/>
  <text x="100" y="120" text-anchor="middle" fill="#fde68a" style="font-size:11px">t_setup</text>
  <text x="180" y="120" text-anchor="middle" fill="#fde68a" style="font-size:11px">t_hold</text>
</svg>

</div>

<div v-click class="mt-4 text-sm opacity-70 text-center">
Misreading a timing diagram causes intermittent, hard-to-debug failures.
</div>

---
glowSeed: 250
---

# Datasheet Anatomy: Footnotes and Fine Print

<CompareCards leftTitle="Typical" rightTitle="Guaranteed Min/Max" leftIcon="⚠️" rightIcon="✓" leftKind="bad" rightKind="good">
<template #left>
A representative value under specific test conditions — <strong>not</strong> a design guarantee.
</template>
<template #right>
The value your design must hold across temperature, voltage, and process variation.
</template>
</CompareCards>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Do not design against typical values.
</div>

<!--
Tell a cautionary anecdote about a design that worked on the bench but failed in the field because of temperature-dependent specs.
-->

---
glowSeed: 310
---

# Safety & Compliance Standards for Capstone Projects

<div class="grid grid-cols-3 gap-4 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
<div class="font-bold mb-1">UL / IEC Product Safety</div>
General equipment safety marks
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
<div class="font-bold mb-1">FCC Part 15</div>
EMI/EMC for anything with a clock or radio
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
<div class="font-bold mb-1">Battery Safety</div>
UN 38.3, IEC 62133 for LiPo
</div>

</div>

<div v-click class="mt-6 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Your project likely doesn't need certification — but should be designed as if it might.
</div>

<div class="mt-4" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs>
[ Image needed: compliance-mark icon row — UL / CE / FCC ]
</div>

---
layout: center
class: text-center
glowSeed: 400
---

# From Standards to Ethics

<div class="text-lg opacity-85 max-w-2xl mx-auto mt-4">
Standards tell you <strong>what</strong> the technical requirement is.<br/>
Ethics governs <strong>how you act</strong> when requirements, sponsors, budgets, and safety are in tension.
</div>

---
glowSeed: 15
---

# Codes of Ethics: IEEE and NSPE

<PullQuote attribution="IEEE Code of Ethics, First Canon" color="teal">
Hold paramount the safety, health, and welfare of the public.
</PullQuote>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Be honest and realistic in claims/estimates</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Avoid conflicts of interest; maintain competence</div>
</div>

---
glowSeed: 190
---

# Five Recurring Ethical Categories

<div class="grid grid-cols-5 gap-3 mt-10 text-center text-xs">

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">🛡️</div>
Public Safety
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">🎓</div>
Competence
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">🗣️</div>
Honesty
</div>
<div v-click border="2 solid orange-800" bg="orange-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">⚖️</div>
Conflicts of Interest
</div>
<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">🔒</div>
Confidentiality / IP
</div>

</div>

---
glowSeed: 88
---

# Conflicts of Interest in a Sponsored Capstone

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
What if a sponsor pressures you to favor their preferred (but worse) component or vendor?
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
What if a team member has a financial stake in a recommended solution?
</div>

</div>

<!--
Ground this in the sponsor project structure students are about to enter.
-->

---
glowSeed: 210
---

# IP and Confidentiality in Sponsor Projects

<div class="text-sm opacity-80 mb-6">NDAs, sponsor ownership of resulting IP, what students can/can't put in a portfolio afterward.</div>

<div class="grid grid-cols-3 gap-3 items-center text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Sponsor idea</div>
<div v-click class="text-2xl opacity-50">→</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Team work product</div>
</div>

<div v-click class="mt-6 text-center text-sm opacity-70">
Who owns what is defined by the sponsor agreement — check it before assuming portfolio rights.
</div>

<div v-click class="mt-2 text-center text-xs opacity-60">
Forward-reference: open-source IP specifics covered in Session 4 (Licensing).
</div>

---
glowSeed: 330
---

# Ethical Decision-Making Framework

<div class="grid grid-cols-3 gap-3 mt-8 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>1. Identify stakeholders</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>2. Identify the conflict</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>3. Identify options</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>4. Weigh vs. code of ethics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>5. Decide</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-3>6. Document reasoning</div>
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Case Study Discussion

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
A realistic scenario adapted from an NSPE Board of Ethical Review case or Markkula Center case.
</div>

<div v-click class="mt-6 text-sm opacity-70">
Groups of 3–4 · Apply the framework · Report back
</div>

<!--
Reserve ~15 minutes; this is the anchor activity of the session.
-->

---
glowSeed: 46
---

# Case Study Debrief

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Compare group answers — highlight where reasonable engineers disagreed and why.
</div>

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Reveal how the actual NSPE Board of Ethical Review ruled, and discuss whether the class agrees.
</div>

</div>

---
glowSeed: 121
---

# When Standards and Ethics Intersect

<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-5 max-w-2xl mx-auto text-sm text-center>
Example: a standard sets a minimum safety margin. Cutting corners to hit budget/schedule crosses from an <strong>engineering tradeoff</strong> into an <strong>ethical violation</strong>.
</div>

---
glowSeed: 500
---

# What This Means for Your Project, Concretely

<Checklist :items="[
  { text: 'Document your standards research in your requirements doc', state: 'check' },
  { text: 'Flag any conflict-of-interest question to your advisor early', state: 'check' },
  { text: 'Flag any IP question to your advisor early — not after it\'s a problem', state: 'check' },
]" />

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Standards Structure', active: true },
  { label: 'Datasheet Literacy' },
  { label: 'Ethical Framework' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Open Source, Licensing & Dependencies (Sep 15) — the IP conversation continues, focused on code.
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
Next: Open Source, Licensing & Dependencies
</div>
