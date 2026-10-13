---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Code Quality & Review'
info: |
  ## Senior Design II — Session 4
  Coding standards, automated check tiers, review as mentorship, and technical debt.
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
glowSeed: 155
---

# Code Quality & Review

<div class="pt-6 opacity-80 text-lg">
Senior Design II
</div>

<div class="mt-8" border="2 dashed white/20" rounded-lg p-3 text-center opacity-60 text-xs max-w-md mx-auto>
[ Image needed: split — messy uncommented code vs. clean reviewed code ]
</div>

---
glowSeed: 12
---

# Why Code Quality Is a Team Topic

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Code that only the original author can understand is a liability the moment they're unavailable.
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Callback to Session 5: this is an accountability/team-function issue as much as a technical one.
</div>

---
glowSeed: 300
---

# What "Code Quality" Actually Means

<div class="grid grid-cols-4 gap-3 mt-10 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>Readability</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>Maintainability</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>Consistency</div>
<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5>Testability</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
Not just "does it work."
</div>

---
glowSeed: 45
---

# Coding Standards: Consistency Beats "Correctness"

<PullQuote color="teal">
The best style guide is the one everyone actually follows.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Most style debates have no objectively correct answer — but a team split on style creates constant friction and noisy diffs. Pick a standard, document it, enforce it automatically.
</div>

---
glowSeed: 91
---

# Automated Checks, Tier 1: Linters & Formatters

<CompareCards leftTitle="Before (unformatted)" rightTitle="After (auto-formatted)">
<template #left>

```python
def  calc(x,y ,z):
  return x+y*z
```

</template>
<template #right>

```python
def calc(x, y, z):
    return x + y * z
```

</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Linters (ESLint, Pylint, RuboCop) catch style/bug patterns. Formatters (Prettier, Black, gofmt) auto-fix formatting.
</div>

---
glowSeed: 250
---

# Automated Checks, Tier 2: Static Analysis / SAST

<table class="w-full text-sm mt-6" border="2 solid white/5" rounded-lg>
<thead><tr bg="white/10"><th class="text-left px-3 py-2">Tool</th><th class="text-left px-3 py-2">Scope</th></tr></thead>
<tbody>
<tr v-click><td class="px-3 py-2 font-bold text-teal-400">SonarQube/Cloud</td><td class="px-3 py-2 text-sm">40+ languages, quality gates</td></tr>
<tr v-click><td class="px-3 py-2 font-bold">Semgrep</td><td class="px-3 py-2 text-sm">Custom pattern-based rules</td></tr>
<tr v-click><td class="px-3 py-2 font-bold">Snyk Code</td><td class="px-3 py-2 text-sm">ML-assisted, security scanning (Session 4 callback)</td></tr>
</tbody>
</table>

---
glowSeed: 44
---

# Automated Checks, Tier 3: AI-Assisted Review

<div class="grid grid-cols-4 gap-2 mt-8 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>CodeRabbit</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Qodo</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Greptile</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Copilot Code Review</div>
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
Same caveat as Session 8: verify AI suggestions before accepting — they can be plausible-but-wrong just like AI-generated code.
</div>

---
glowSeed: 400
---

# Wiring Automated Checks Into CI

<div class="flex flex-col items-center gap-2 mt-8 max-w-md mx-auto text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-6 py-3 w-full text-center>1. Formatter (zero-controversy)</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-6 py-3 w-full text-center>2. Linter</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-6 py-3 w-full text-center>3. Static analysis</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>4. AI review (supplement, not replacement)</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
Callback to Session 11: these run as required CI checks, blocking merge on failure.
</div>

---
glowSeed: 5
---

# Live Demo: Setting Up a Linter + Formatter

<div class="text-center mt-12 text-lg opacity-80">
Add a linter/formatter config to the sample repo — wire it into the Session 11 CI workflow.
</div>

---
glowSeed: 210
---

# What Automated Tools Can't Catch

<svg viewBox="0 0 400 200" class="w-full max-w-lg mx-auto mt-4">
  <circle cx="150" cy="100" r="90" fill="#1e3a5f" fill-opacity="0.4" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="250" cy="100" r="90" fill="#134e4a" fill-opacity="0.4" stroke="#2dd4bf" stroke-width="2"/>
  <text x="105" y="60" text-anchor="middle" fill="#93c5fd" style="font-size:12px">Automated-checkable</text>
  <text x="300" y="60" text-anchor="middle" fill="#5eead4" style="font-size:12px">Needs human judgment</text>
</svg>

<div v-click class="mt-2 text-sm opacity-70 text-center max-w-xl mx-auto">
Whether the code does the right thing architecturally, duplicates existing functionality, or fits the team's broader design.
</div>

---
glowSeed: 66
---

# Code Review as Mentorship

<PullQuote color="blue">
The best reviewers ask questions, not just issue corrections.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Reviewing a teammate's unfamiliar subsystem builds cross-team understanding that helps at integration time (Session 12 callback).
</div>

---
glowSeed: 133
---

# What Good Review Comments Look Like

<CompareCards leftTitle="Vague" rightTitle="Specific">
<template #left>
"This is wrong."
</template>
<template #right>
"nit: this loop is O(n²) — consider a set lookup since `ids` can be large here."
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Specific, actionable, explains "why." Distinguish blocking issues from suggestions (e.g. "nit:" prefix).
</div>

---
glowSeed: 250
---

# Receiving Review Feedback Professionally

<CompareCards leftTitle="Don't" rightTitle="Do">
<template #left>
Get defensive; argue the reviewer is wrong without explanation.
</template>
<template #right>
Assume good intent; ask clarifying questions; explain your reasoning if you disagree.
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Escalate to the team's decision-rights process (Session 5 charter) if truly stuck.
</div>

---
glowSeed: 300
---

# Review Turnaround Time and Team Norms

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Slow reviews block teammates and encourage risky workarounds.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Set and honor a team SLA (e.g., review within 24 hours) — revisit as part of the team charter (Session 5).
</div>

---
glowSeed: 91
---

# Naming Technical Debt Honestly

<CompareCards leftTitle="Deliberate Debt" rightTitle="Accidental Debt" leftIcon="📝" rightIcon="👻" leftKind="good" rightKind="bad">
<template #left>
Documented, tracked, a conscious tradeoff (Session 12 deviation-documentation callback).
</template>
<template #right>
Undocumented, invisible — the actual danger.
</template>
</CompareCards>

---
glowSeed: 44
---

# Tracking and Planning to Pay Down Debt

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Tag tech-debt issues distinctly from bugs — visible, prioritized, revisited.
</div>

<div v-click class="mt-8 max-w-xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
With the semester ending in April, be realistic about what's worth paying down vs. documenting for the handoff package (Session 16).
</div>

---
layout: center
class: text-center
glowSeed: 45
---

# Live Exercise: Review a Real Pull Request

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Write review comments in pairs on a sample PR with real issues — style, a logic bug, a design question.
</div>

---
glowSeed: 46
---

# Studio Time: Apply This to Your Own Repo

<div class="text-center mt-12 text-lg opacity-80">
Set up/tighten linting and static analysis CI checks; clear any backlog of un-reviewed PRs.
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Coding Standards', active: true },
  { label: 'Automated Check Tiers' },
  { label: 'Review as Mentorship' },
  { label: 'Tech Debt Tracking' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Validation & Acceptance Testing (Mar 2)
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
Next: Validation & Acceptance Testing
</div>
