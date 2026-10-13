---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'AI Coding Agents & Long-Running Development'
info: |
  ## Senior Design I — Session 8
  Prompting, verification, failure modes, and ethics of AI-assisted development.
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
glowSeed: 180
---

# AI Coding Agents &<br/>Long-Running Development

<div class="pt-4 opacity-80 text-lg">
Senior Design I
</div>

<!--
Split-screen visual (human reviewing code alongside an AI agent's diff) as a future backdrop.
-->

---
glowSeed: 12
---

# Why This Gets Its Own Lecture

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
AI coding agents are already part of how software gets built professionally.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
The question isn't "should you use them" — it's "how do you use them responsibly and effectively."
</div>

<!--
Poll the room — who has already used an AI coding tool this semester?
-->

---
glowSeed: 300
---

# The Current Landscape (Fall 2026)

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Terminal / Agentic</div>
Claude Code, OpenAI Codex — large, multi-file, long-running tasks
</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5>
<div class="font-bold mb-1">IDE-Integrated</div>
GitHub Copilot Agent Mode, Cursor — tight feedback loop, scoped changes
</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Fully Autonomous</div>
Devin-class — highest autonomy, least predictable reliability
</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
This landscape changes fast — treat specific product names as examples of categories, not permanent recommendations.
</div>

---
glowSeed: 45
---

# What These Tools Are Actually Good At

<div class="grid grid-cols-2 gap-4 mt-10">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ Boilerplate generation</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ Test scaffolding</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ Syntax translation</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ Explaining unfamiliar code</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ First-draft documentation</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4 text-sm>✓ Large refactors with a precise, scoped instruction</div>
</div>

---
glowSeed: 46
---

# What These Tools Are NOT Good At (Yet)

<div class="grid grid-cols-2 gap-4 mt-8">
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4 text-sm>✗ Deep architectural judgment calls</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4 text-sm>✗ Understanding unstated project context</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-4 text-sm>✗ Catching subtle logic errors in their own code</div>
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
Reported finding: ~75% of agents broke previously working code during long-term maintenance work, even after initially passing tests.
</div>

---
glowSeed: 66
---

# Prompt Engineering: Why It Matters for Code

<CompareCards leftTitle="Vague" rightTitle="Specific" leftIcon="✗" rightIcon="✓">
<template #left>
"Add error handling to the sensor code."
</template>
<template #right>
"Add error handling to readSensor() in sensor.py for I2C timeout (REQ-F-012), matching the try/except pattern used in motor.py."
</template>
</CompareCards>

<div v-click class="mt-4 text-xs opacity-60 text-center">
Vague prompts produce vague, generically "plausible" code that may not fit your actual codebase.
</div>

---
glowSeed: 91
---

# Technique: Provide Context, Not Just Instructions

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Point the agent at relevant existing files/conventions rather than describing them from scratch.
</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Reference actual requirement IDs (Session 6) so generated code traces to a real requirement.
</div>
</div>

---
glowSeed: 133
---

# Technique: Scope Tightly

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
Keep the task small enough to review in one sitting.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
"Tight ticket scope with clear acceptance criteria" — the single highest-leverage practice cited across 2026 industry guidance.
</div>

---
glowSeed: 250
---

# Technique: Require Tests Before/With the Change

<div class="grid grid-cols-4 gap-2 mt-10 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Prompt</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Generated code + tests</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Run tests</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-3>Review</div>
</div>

<div v-click class="mt-8 text-sm opacity-70 text-center">
This is your first line of defense against silent regressions.
</div>

---
glowSeed: 5
---

# Live Demo: Prompting an Agent for a Scoped Task

<div class="text-center mt-12 text-lg opacity-80">
A real prompt-to-code cycle on a sample repo, narrating decisions.
</div>

<!--
Show a case where the first output is subtly wrong — this is more instructive than a clean success.
-->

---
glowSeed: 400
---

# Verification Strategy: Treat Output Like a Junior Engineer's PR

<Checklist :items="[
  { text: 'Read every line before merging — do not skim', state: 'check' },
  { text: 'Run the full test suite locally, not just what the agent wrote', state: 'check' },
  { text: 'Diff review every touched file, not just the ones you expected', state: 'check' },
]" />

---
glowSeed: 44
---

# Verification Strategy: Trace Back to Requirements

<div border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 max-w-xl mx-auto text-center>

$$
\text{Output} \overset{?}{=} \text{Requirement} + \text{Edge Cases}
$$

</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Does the generated code actually satisfy the specific requirement it was meant to address? (Session 6 callback)
</div>

---
glowSeed: 210
---

# Failure Mode: Context Loss on Long Sessions

<svg viewBox="0 0 400 100" class="w-full max-w-xl mx-auto mt-6">
  <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.2)"/>
  <path d="M20,30 L380,70" stroke="#f87171" stroke-width="3" fill="none"/>
  <text x="30" y="20" fill="#5eead4" style="font-size:11px">Full context</text>
  <text x="330" y="65" fill="#fca5a5" style="font-size:11px">Degraded</text>
</svg>

<div class="grid grid-cols-3 gap-3 mt-6 text-center text-xs">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Periodic re-grounding</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Smaller sessions</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-3>Explicit checkpoints</div>
</div>

---
glowSeed: 45
---

# Failure Mode: Plausible-but-Wrong Code

```python {3}
def average(values):
    total = sum(values)
    return total / len(values)  # ZeroDivisionError if values is empty
```

<div v-click class="mt-4 max-w-xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
Looks idiomatic and confident but is subtly incorrect — the most dangerous failure mode because it doesn't look wrong.
</div>

---
glowSeed: 46
---

# Failure Mode: Silent Regressions in Untouched Code

<div class="grid grid-cols-2 gap-8 mt-8 text-center text-sm">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Intended Scope</div>
sensor.py
</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg p-5>
<div class="font-bold mb-1">Actual Diff Scope</div>
sensor.py, config.py, utils.py
</div>
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Multi-file edits can break something outside the stated scope of the task.
</div>

---
glowSeed: 300
---

# Workflow: Feature Branches + PR Review, Even for AI Code

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
No auto-merge of AI-generated changes, ever.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
"Skip midnight merges of PRs that merely appear correct." Ties directly back to the branching/PR discipline from Session 2.
</div>

---
glowSeed: 15
---

# Ethics of Attribution: Academic Integrity

<PullQuote attribution="A useful bar to clear" color="amber">
If you can't explain it, you didn't really write it — even if you typed the prompt.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-4 text-center text-sm opacity-80">
AI assistance is acceptable under the course's AI-use policy — but claiming sole authorship of substantially AI-generated, unreviewed work is not.
</div>

---
glowSeed: 66
---

# Ethics of Attribution: Sponsor & IP Context

<div class="grid grid-cols-3 gap-3 items-center mt-8 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Is this code/data sponsor-confidential?</div>
<div class="text-2xl opacity-50">→</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>Check policy before using external AI tools</div>
</div>

<div v-click class="mt-6 text-xs opacity-60 text-center">
Never paste sponsor-confidential material into a third-party AI tool without confirming it's permitted (Session 3 callback).
</div>

---
glowSeed: 91
---

# Licensing Wrinkle: AI Tools Can Reproduce Training Data

<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5 max-w-2xl mx-auto text-sm text-center>
AI-generated code can closely resemble licensed training examples — provenance is harder to audit than a normal dependency (Session 4 callback).
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Treat AI-suggested large code blocks with the same scrutiny as copy-pasted code from an unknown source.
</div>

---
glowSeed: 250
---

# Building Your Team's AI-Use Policy

<div class="text-sm opacity-80 mb-4 text-center">Decide as a team:</div>

<CompareCards leftTitle="AI-Appropriate" rightTitle="Human-First" leftIcon="🤖" rightIcon="🧑‍💻" leftKind="neutral" rightKind="neutral">
<template #left>

- Boilerplate
- Tests
- Documentation

</template>
<template #right>

- Architecture decisions
- Safety-critical logic

</template>
</CompareCards>

---
layout: center
class: text-center
glowSeed: 45
---

# Live Exercise: Draft Your Team's AI-Use Policy

<div class="text-lg opacity-85 mt-4 max-w-xl mx-auto">
10–15 minutes — draft a short, specific policy statement.
</div>

<!--
Push teams to be specific — "we'll use AI responsibly" is not a policy, it's a slogan.
-->

---
glowSeed: 229
---

# Wrap-up & Preview

<Timeline :markers="[
  { label: 'Landscape', active: true },
  { label: 'Prompting' },
  { label: 'Verification' },
  { label: 'Failure Modes' },
  { label: 'Ethics & Policy' },
]" />

<div v-click class="mt-10 text-center text-sm opacity-80">
Next session: PDR Prep (Lecture/Workshop) — Nov 17
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
Next: PDR Prep
</div>
