---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Team & Project Kickoff'
info: |
  ## Senior Design I — Session 5
  Preparing for team formation, the research behind high-performing teams, and the elements of a team charter.
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
glowSeed: 33
---

# Team & Project Kickoff

<div class="pt-6 opacity-80 text-lg">
Senior Design I
</div>

<!--
Set expectations for productive collaboration before teams begin working together.
-->

---
glowSeed: 12
---

# Today's Agenda

<div class="grid grid-cols-2 gap-4 mt-8">
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>🎉 Preparing for team formation</div>
<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5 text-sm>🧠 What makes teams actually work (research-backed)</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5 text-sm>📝 What makes a useful team charter</div>
<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5 text-sm>📅 Preparing for sponsor collaboration</div>
</div>

---
glowSeed: 400
---

# Preparing for Team Formation

<div border="2 dashed white/20" rounded-lg p-8 text-center opacity-70 text-sm max-w-2xl mx-auto>
[ Team and sponsor-project assignments will be shared once they are finalized. ]
</div>

<!--
Use this time to set expectations for how teams will begin working together.
-->

---
glowSeed: 401
---

# Preparing for Your Sponsor Project

<div border="2 dashed white/20" rounded-lg p-8 text-center opacity-70 text-sm max-w-2xl mx-auto>
[ Each team will receive a sponsor project with a real stakeholder, constraints, and an open-ended engineering problem. ]
</div>

<div v-click class="mt-6 text-sm opacity-60 text-center">
Full requirements-gathering comes later; this is an orientation to the kind of work ahead.
</div>

---
glowSeed: 91
---

# Why Teams Fail

<div class="text-sm opacity-70 mb-6 text-center">Before discussing why they succeed — the common failure funnel:</div>

<div class="flex flex-col items-center gap-2 mt-6 max-w-md mx-auto">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 text-sm w-full text-center>Vague goals</div>
<div class="text-lg opacity-40">↓</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-6 py-3 text-sm w-full text-center>Misaligned expectations</div>
<div class="text-lg opacity-40">↓</div>
<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-6 py-3 text-sm w-full text-center>Resentment</div>
<div class="text-lg opacity-40">↓</div>
<div v-click border="2 solid red-800" bg="red-800/20" rounded-lg px-6 py-3 text-sm w-full text-center>Collapse</div>
</div>

---
glowSeed: 55
---

# Tuckman's Stages of Group Development

<svg viewBox="0 0 500 220" class="w-full max-w-2xl mx-auto mt-10">
  <g transform="translate(0 28.5) scale(1 0.85)">
  <line x1="30" y1="190" x2="470" y2="190" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <line x1="30" y1="190" x2="30" y2="20" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <path d="M40,150 Q100,100 160,160 T280,60 T440,40" fill="none" stroke="#2dd4bf" stroke-width="3"/>
  <text x="40" y="170" fill="#93c5fd" style="font-size:12px">Forming</text>
  <text x="140" y="185" fill="#fca5a5" style="font-size:12px">Storming</text>
  <text x="240" y="90" fill="#fde68a" style="font-size:12px">Norming</text>
  <text x="380" y="30" fill="#5eead4" style="font-size:12px">Performing</text>
  <text x="10" y="110" fill="white" style="font-size:11px" transform="rotate(-90 10 110)">Performance</text>
  </g>
</svg>

<div v-click class="mt-4 max-w-2xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
You will storm. That's normal. What matters is what you do next.
</div>

<!--
Tuckman's stages are a useful way to name common team dynamics, not a rigid progression.

Forming: The group first comes together. Members are polite and tentative, getting oriented to the task, rules, and one another. They often rely on a designated leader for direction, and real conflict is mostly avoided.

Storming: As people assert opinions and vie for roles, friction emerges. Disagreements about goals, approaches, or leadership surface. It can be uncomfortable, but this is where the group begins establishing real dynamics rather than maintaining a polite facade.

Norming: The group begins resolving those tensions. Members develop shared norms, build trust, and settle into roles and working agreements. Cohesion grows, and people become more willing to give and receive feedback.

Performing: The team functions efficiently toward its goals. Members work interdependently with minimal supervision, roles are flexible, and disagreements can be handled constructively without derailing progress.

Adjourning: Added in 1977 with Mary Ann Jensen, this is when a group disbands after completing its task, as in project teams, task forces, or classes. It can involve reflection, closure, and sometimes a sense of loss as the group relationship ends.

Practical caveats:
- Groups do not always move through these stages linearly; they can return to storming when members join or circumstances change.
- Not every group reaches performing; some remain in storming or norming.
- Use this as a facilitation mental model, while recognizing that real group dynamics are messier and more context-dependent than a fixed sequence.
-->

---
glowSeed: 210
---

# What Actually Predicts High-Performing Teams

<PullQuote attribution="Google's Project Aristotle research" color="teal">
Psychological safety was the single strongest predictor of team effectiveness — stronger than who was on the team.
</PullQuote>

<div v-click class="max-w-2xl mx-auto mt-6 text-center text-sm opacity-80">
Psychological safety: the shared belief that the team is safe for interpersonal risk-taking — asking dumb questions, admitting mistakes, disagreeing.
</div>

---
glowSeed: 66
---

# Building Psychological Safety, Practically

<CompareCards leftTitle="Don't" rightTitle="Do">
<template #left>

- Punish "I don't know"
- Attack the person in critique
- Let one voice dominate

</template>
<template #right>

- Model admitting your own uncertainty/mistakes
- Separate idea critique from person critique
- Normalize "I think I made an error"

</template>
</CompareCards>

---
glowSeed: 300
---

# Roles: What Do Engineering Teams Actually Need?

<div class="text-sm opacity-70 mb-4 text-center">Not necessarily formal titles, but functions:</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Technical Lead(s)</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Integration Owner</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Documentation Owner</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Sponsor-Comm Point Person</div>
</div>

<div v-click class="mt-6 max-w-2xl mx-auto text-center text-sm" border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
Roles can rotate — but ambiguity about who owns what is the #1 early failure mode.
</div>

---
glowSeed: 88
---

# Accountability Structures

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 font-bold>Visible Signals</div>
<div px-5 py-4 text-sm>
Weekly check-ins, task boards (GitHub Projects/Issues), individual commit history.
</div>
</div>

<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg overflow-hidden>
<div bg="amber-800/40" px-4 py-2 font-bold>Escalation Path</div>
<div px-5 py-4 text-sm>
Peer → team → advisor, when someone isn't pulling weight.
</div>
</div>

</div>

<!--
Be direct that free-riding has a real, visible cost via the individual grading component (callback to Session 1).
-->

---
glowSeed: 400
---

# What Is a Team Charter?

<div class="max-w-2xl mx-auto text-center mt-8 text-lg">
A living document the team writes together — defining goals, roles, communication norms, and conflict-resolution process.
</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
Not a bureaucratic exercise if done well — it's what you point back to in month 4 when things get tense.
</div>

---
glowSeed: 44
---

# Charter Component: Shared Goals & Success

<div class="max-w-xl mx-auto text-center mt-10 text-lg">
What does "success" look like for this team beyond just the grade?
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Aligning on this early prevents later disagreement about scope/ambition.
</div>

---
glowSeed: 45
---

# Charter Component: Roles & Decision Rights

<div class="text-sm opacity-70 mb-4 text-center">Who owns which technical area — and how decisions get made when the team disagrees.</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Majority vote</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Technical lead has final say</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>Consensus required</div>
</div>

---
glowSeed: 46
---

# Charter Component: Communication Norms

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>Meeting cadence, expected response time</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>Which channel for what — urgent vs. FYI</div>
</div>

<div v-click class="mt-6 text-sm opacity-70 text-center">
Conflict escalation: what happens before it reaches the faculty advisor.
</div>

---
glowSeed: 47
---

# Charter Component: Working Agreements

<Checklist :items="[
  { text: 'Core hours / availability', state: 'check' },
  { text: 'How work gets divided and estimated', state: 'check' },
  { text: 'What counts as done for a task', state: 'check' },
]" />

---
glowSeed: 91
---

# Preparing for the First Sponsor Meeting

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-5 text-sm>
Professional email and communication norms for working with a sponsor.
</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 text-sm>
Prepare questions before meeting a sponsor — not a blank slate.
</div>
</div>

---
glowSeed: 133
---

# First Sponsor Meeting: What NOT to Do

<Checklist :items="[
  { text: 'Show up without reading what the sponsor already provided', state: 'x' },
  { text: 'Over-promise scope in the first meeting', state: 'x' },
  { text: 'Let one person dominate sponsor communication going forward', state: 'x' },
]" />

---
glowSeed: 500
---

# Immediate Action Items

<Checklist :items="[
  { text: 'Review the team charter template and note your priorities', state: 'check' },
  { text: 'Prepare questions for your future sponsor project', state: 'check' },
  { text: 'Review the Git branching strategy you will use with your team', state: 'check' },
]" />

---
glowSeed: 610
---

# What Happens Next

<div class="flex items-stretch justify-center gap-2 mt-14 text-center">
  <div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5 w-48 flex="~ col" justify-center>
    <div class="text-2xl mb-2">🤝</div>
    <div class="font-bold">Team Formation</div>
  </div>
  <div class="text-3xl opacity-40 self-center">→</div>
  <div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-5 w-48 flex="~ col" justify-center>
    <div class="text-2xl mb-2">🗣️</div>
    <div class="font-bold">First Team<br/>Meeting</div>
  </div>
  <div class="text-3xl opacity-40 self-center">→</div>
  <div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5 w-48 flex="~ col" justify-center>
    <div class="text-2xl mb-2">🧭</div>
    <div class="font-bold">First Project Advisor<br/>Meeting</div>
  </div>
  <div class="text-3xl opacity-40 self-center">→</div>
  <div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-5 w-52 flex="~ col" justify-center>
    <div class="text-2xl mb-2">📋</div>
    <div class="font-bold">Stakeholder Needs &<br/>Requirements Definition</div>
  </div>
</div>

<div v-click class="mt-10 text-center text-sm opacity-70">
Each step gives your team the context and working agreements needed for the next one.
</div>

---
glowSeed: 611
---

# First Team Meeting: Establish Your Foundation

<div class="grid grid-cols-2 gap-5 mt-7 max-w-5xl mx-auto">
  <div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-5>
    <div class="font-bold text-lg mb-3">Set up how you will work together</div>
    <ul class="text-sm space-y-2">
      <li>Complete the team charter</li>
      <li>Set up communication channels</li>
      <li>Agree on meeting times</li>
      <li>Identify technical expertise and initial roles</li>
    </ul>
  </div>
  <div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg p-5>
    <div class="font-bold text-lg mb-3">Prepare to understand the project</div>
    <div class="text-sm leading-relaxed">
      Write a shared list of important questions for your project advisor. The goal is to leave the first advisor meeting with a clear grasp of the project’s details, constraints, and context.
    </div>
  </div>
</div>

<div v-click class="mt-7 max-w-4xl mx-auto text-center text-sm" border="2 solid amber-800" bg="amber-800/20" rounded-lg p-4>
Come prepared to contribute: a team charter is useful only when everyone has helped create it.
</div>

---
glowSeed: 612
---

# First Project Advisor Meeting: Arrive Prepared

<div class="grid grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
  <div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-6>
    <div class="text-2xl mb-3">📤</div>
    <div class="font-bold text-lg mb-2">Before the meeting</div>
    <div class="text-sm">Send your completed team charter to the project advisor ahead of time.</div>
  </div>
  <div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg p-6>
    <div class="text-2xl mb-3">📝</div>
    <div class="font-bold text-lg mb-2">Bring your questions</div>
    <div class="text-sm">Use the shared question list from your first team meeting to guide the conversation.</div>
  </div>
</div>

<div class="mt-7 max-w-5xl mx-auto">
  <div class="text-center text-sm opacity-70 mb-3">Leave the meeting understanding:</div>
  <div class="grid grid-cols-3 gap-4 text-center text-sm">
    <div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4><strong>Expectations</strong><br/><span class="opacity-70">What success looks like</span></div>
    <div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4><strong>Meeting cadence</strong><br/><span class="opacity-70">How often you can meet</span></div>
    <div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4><strong>Project goals</strong><br/><span class="opacity-70">What the project needs to accomplish</span></div>
  </div>
</div>

---
layout: center
class: text-center
glowSeed: 613
---

# Every Meeting Needs a Goal

<div class="max-w-4xl mx-auto mt-10 text-xl opacity-90">
Before scheduling or joining any team or advisor meeting, ask:
</div>

<div class="grid grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto text-left">
  <div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-6>
    <div class="text-2xl mb-3">❓</div>
    <div class="font-bold text-xl">Why are we meeting?</div>
    <div class="mt-2 text-sm opacity-80">Name the decision, question, problem, or update that requires people’s time.</div>
  </div>
  <div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg p-6>
    <div class="text-2xl mb-3">✅</div>
    <div class="font-bold text-xl">What must we accomplish?</div>
    <div class="mt-2 text-sm opacity-80">Define the result you need by the end of the meeting.</div>
  </div>
</div>

<div v-click class="mt-8 max-w-3xl mx-auto text-center text-sm" border="2 solid violet-800" bg="violet-800/20" rounded-lg p-4>
This is especially important for project-advisor meetings and every group meeting. If there is no goal, use an async update instead.
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
Next: Stakeholder Needs & System Requirements
</div>
