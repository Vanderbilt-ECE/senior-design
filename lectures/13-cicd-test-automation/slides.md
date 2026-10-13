---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'CI/CD & Test Automation'
info: |
  ## Senior Design II — Session 2 (Short Lesson)
  CI/CD basics, GitHub Actions, and connecting automation to the RTM.
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
glowSeed: 60
---

# CI/CD & Test Automation

<div class="pt-6 opacity-80 text-lg">
Senior Design II · Short Lesson
</div>

---
glowSeed: 12
---

# What CI/CD Is, in One Slide

<div class="grid grid-cols-4 gap-2 mt-10 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Commit</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Build</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Test</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>Deploy</div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8 text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<strong>Continuous Integration</strong> — automatically build and test every change as it's pushed.
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<strong>Continuous Delivery/Deployment</strong> — automatically prepare or ship a release once it passes.
</div>
</div>

---
glowSeed: 300
---

# Why This Matters for a Capstone Project

<PullQuote color="teal">
CI turns your RTM from a snapshot into a live dashboard.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Automated tests catch regressions the moment they're introduced, not weeks later during integration crunch (Session 12).
</div>

---
glowSeed: 45
---

# The Practical Default: GitHub Actions

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Already integrated with your course GitHub org (Session 2) — no new accounts, no new infrastructure.
</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Workflow files live in <code>.github/workflows/</code>, triggered on push/PR.
</div>
</div>

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pytest
```

---
glowSeed: 66
---

# What to Automate First

<div class="flex flex-col items-center gap-2 mt-8 max-w-md mx-auto text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-6 py-3 w-full text-center>1. Linting / static checks</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-6 py-3 w-full text-center>2. Unit tests</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-6 py-3 w-full text-center>3. Build verification</div>
<div class="opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 w-full text-center>4. Integration/simulation tests</div>
</div>

---
glowSeed: 5
---

# Live Demo: A Minimal GitHub Actions Workflow

<div class="text-center mt-12 text-lg opacity-80">
Run tests on every PR — watch the pass/fail status check appear directly on the PR.
</div>

<!--
Pre-test this demo repo beforehand — CI demos are exactly the kind of thing that breaks live if untested.
-->

---
glowSeed: 91
---

# Connecting CI Status to Branch Protection

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Require the CI check to pass before a PR can merge.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
This is what makes "main is always deployable" (GitHub Flow, Session 2) actually true, not aspirational.
</div>

---
glowSeed: 210
---

# CI/CD for Embedded/Hardware-Adjacent Projects

<CompareCards leftTitle="Automatable" rightTitle="Manual" leftIcon="✓" rightIcon="🔧" leftKind="good" rightKind="neutral">
<template #left>

- Firmware unit tests
- HAL-layer mocking
- Static analysis
- Simulation-based logic tests

</template>
<template #right>

- Physical hardware-in-the-loop tests
- Verified by test/inspection instead

</template>
</CompareCards>

---
glowSeed: 300
---

# Test Automation and Your RTM

<RTMTable :rows="[
  { id: 'REQ-F-012', description: 'Log sensor readings every 60s', method: 'Test (CI: unit-tests.yml)', status: 'pass' },
  { id: 'REQ-HW-004', description: 'Enclosure IP rating', method: 'Inspection (manual)', status: 'pending' },
]" />

<div v-click class="mt-4 text-xs opacity-60 text-center">
Reference the CI job/workflow in each automated test's RTM row, not just a manual test procedure.
</div>

---
glowSeed: 500
---

# Common Pitfalls

<Checklist :items="[
  { text: 'Flaky tests that fail intermittently — worse than no automated test', state: 'x' },
  { text: 'Overbuilding pipeline complexity before there\'s anything worth automating', state: 'x' },
]" />

---
layout: center
class: text-center
glowSeed: 45
---

# Studio Time: Set Up Your Team's First Workflow

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
Set up or extend a GitHub Actions workflow for your own repo.
</div>

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'CI/CD Basics', active: true },
  { label: 'GitHub Actions' },
  { label: 'RTM Connection' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: Build & Integration (Jan 26) — automated tests start catching real integration problems.
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
Next: Build & Integration
</div>
