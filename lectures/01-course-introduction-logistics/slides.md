---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Course Introduction & Logistics'
info: |
  ## Senior Design — Course Introduction & Logistics
  Course introduction, structure, and logistics for the year-long Senior Design sequence.
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

# Senior Design

### Course Introduction & Logistics

<div class="pt-6 opacity-80 text-lg">
ECE 4950 / 4960
</div>

<div class="pt-10 text-sm opacity-60">
Vanderbilt ECE · Senior Seminar
</div>

<!--
Arrive early, get the room's AV working before students arrive. Open with energy — this is the first impression of a two-semester relationship.
-->

---
glowSeed: 44
---

# Welcome & Why This Course Exists

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>

<v-clicks>

- Senior Design **synthesizes 4 years of coursework** into one real, open-ended engineering project
- It's **sponsored** — real stakeholders, real constraints, real deadlines
- Distinct from a "project class": **no single right answer**, ambiguity is the point

</v-clicks>

</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-6>

```
4 years of         1 integrated
courses      ──▶    project
```

<div class="mt-4 text-sm opacity-70">
Everything converges: circuits, software, systems, communication — applied to one sponsor problem.
</div>

</div>

</div>

<!--
Ask by show of hands who has done an internship with real deliverables — draw the parallel.
-->

---
glowSeed: 88
---

# What Senior Design Is

<div class="grid grid-cols-3 gap-4 mt-8">

<div v-click border="2 solid teal-700" bg="teal-800/20" rounded-lg overflow-hidden>
<div bg="teal-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>🔁</span>
<span font-bold>Full Lifecycle</span>
</div>
<div px-4 py-4 text-sm>
Requirements → architecture → build → test → deliver
</div>
</div>

<div v-click border="2 solid blue-700" bg="blue-800/20" rounded-lg overflow-hidden>
<div bg="blue-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>🧑‍🤝‍🧑</span>
<span font-bold>Team-Based</span>
</div>
<div px-4 py-3 text-sm>
Sponsor-driven, faculty-advised, team accountability
</div>
</div>

<div v-click border="2 solid orange-700" bg="orange-800/20" rounded-lg overflow-hidden>
<div bg="orange-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>📋</span>
<span font-bold>Process-Graded</span>
</div>
<div px-4 py-3 text-sm>
Graded on process and professionalism — not just whether the widget works
</div>
</div>

</div>

<!--
Speaker notes: frame this as the closest thing to a real engineering job in the degree.
-->

---
glowSeed: 133
---

# What Senior Design Is <span class="text-red-400">NOT</span>

<CompareCards leftTitle="It is NOT" rightTitle="It IS" leftIcon="✗" rightIcon="✓">
<template #left>

- A repeat of a textbook lab with one known correct answer
- Solo work — team accountability is graded explicitly
- "Build whatever you want" — sponsor requirements govern scope
- Optional-effort — treated like a professional job

</template>
<template #right>

- Ambiguous, open-ended, and constraint-driven
- Collaborative, with individual contribution tracked
- Bounded by real sponsor requirements
- A professional simulation with real expectations

</template>
</CompareCards>

<!--
Address the most common misconception directly: "isn't this basically a long lab" — no.
-->

---
glowSeed: 175
---

# Course Structure: Two Semesters, One Project

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg overflow-hidden>
<div bg="teal-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>🍂</span>
<span font-bold>Fall</span>
</div>
<div px-5 py-4 text-sm>

- Form teams, define the problem
- Requirements & architecture
- **Start designing right away — don't wait for spring**
- Design review at the end of the semester

</div>
</div>

<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
<div bg="blue-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>🌱</span>
<span font-bold>Spring</span>
</div>
<div px-5 py-4 text-sm>

- Continue build & integration
- Test, verify, validate
- Hand off documentation
- Final design review + demo day

</div>
</div>

</div>

<div v-click class="mt-10 max-w-3xl mx-auto text-center text-sm" border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
<span class="font-bold text-teal-300">Goal this year:</span> begin designing as early as possible. Design work starts in the fall — the spring is for finishing, not starting.
</div>

---
glowSeed: 60
---

# The Artifact Stack (Overview)

<div class="text-sm opacity-70 mb-4">The paper trail that makes engineering decisions defensible and auditable — each is covered in its own lecture.</div>

<div class="grid grid-cols-2 gap-3 max-w-3xl mx-auto">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>📄 Team charter</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>📑 Requirements document</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>🔗 RTM (traceability matrix)</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>🏗️ Architecture document</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>📊 PDR deck</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>🧪 Test plan</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3 text-sm>⚙️ CI pipeline / repo</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-4 py-3 text-sm font-bold>📦 Final docs & handoff package</div>

</div>

<!--
Don't go deep on each artifact yet — this is a preview; each is covered in its own dedicated lecture.
-->

---
glowSeed: 300
---

# Grading Composition

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div class="text-sm opacity-85">

<v-clicks at="2">

- **Engineering Deliverables & Documentation** — the engineering artifacts: requirements, architecture, test procedures, and technical docs
- **Participation** — attendance and engagement in every lecture and studio session
- **Professionalism** — conducting yourself as a professional engineer throughout the project
- **In-Class Writing Reflections** — weekly handwritten reflections tying course material to your project
- **Peer Review** — end-of-semester teammate evaluations feeding your individual participation score

</v-clicks>

</div>

<div v-click="1">
<BarRow label="Deliverables & Docs" value="50%" pct="50" color="#60a5fa" />
<BarRow label="Participation" value="15%" pct="15" color="#2dd4bf" />
<BarRow label="Professionalism" value="15%" pct="15" color="#2dd4bf" />
<BarRow label="Writing Reflections" value="10%" pct="10" color="#2dd4bf" />
<BarRow label="Peer Review" value="10%" pct="10" color="#2dd4bf" />

<div class="mt-4 text-xs opacity-70">Late work: −10% per day late.</div>
</div>

</div>

<!--
Be explicit that free-riding is visible — git history and peer evaluations both feed the individual participation score.
-->

---
glowSeed: 96
---

# Setting Expectations: Professionalism Rubric

<div class="rtm-like mt-6">

<table class="w-full text-sm" border="2 solid white/5" rounded-lg>
<thead>
<tr bg="white/10">
<th class="text-left px-4 py-2">Area</th>
<th class="text-left px-4 py-2 text-teal-400">Exceeds</th>
<th class="text-left px-4 py-2 text-amber-400">Meets</th>
<th class="text-left px-4 py-2 text-red-400">Below</th>
</tr>
</thead>
<tbody>
<tr v-click><td class="px-4 py-2 font-bold">Sponsor & Advisor Communication</td><td class="px-4 py-2">Proactive, clear, well-timed</td><td class="px-4 py-2">Responsive, professional</td><td class="px-4 py-2">Late, unclear</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">Meetings & Punctuality</td><td class="px-4 py-2">Leads agenda, follows up</td><td class="px-4 py-2">Prepared, on time</td><td class="px-4 py-2">Unprepared, absent</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">Documentation</td><td class="px-4 py-2">Publication-quality</td><td class="px-4 py-2">Clear, complete</td><td class="px-4 py-2">Sparse, unclear</td></tr>
<tr v-click><td class="px-4 py-2 font-bold">Workspace Organization</td><td class="px-4 py-2">Lab space clean, organized, shared responsibly</td><td class="px-4 py-2">Kept tidy and functional</td><td class="px-4 py-2">Cluttered, disruptive</td></tr>
</tbody>
</table>

</div>

<!--
A clean, organized lab workspace is part of professional conduct — sponsors and other teams share the space.
-->

---
glowSeed: 91
---

# Attendance & Participation Policy

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg overflow-hidden>
<div bg="amber-800/40" px-4 py-2 flex items-center gap-2>
<span text-xl>🛠️</span>
<span font-bold>Lecture & Studio Sessions</span>
</div>
<div px-5 py-4 text-sm>
Class alternates between lectures and team studio time. Attendance is taken every session — unexcused absences reduce your Participation score.
</div>
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 flex items-center gap-2>
<span text-xl>📅</span>
<span font-bold>Sponsor & Advisor Meetings</span>
</div>
<div px-5 py-4 text-sm>
Being on time and prepared for weekly project meetings counts toward Professionalism. Excused absences follow the standard course policy.
</div>
</div>

</div>

<!--
Emphasize that sponsors take attendance personally — a no-show at a sponsor meeting reflects on the whole program.
-->

---
glowSeed: 210
---

# Communication Norms

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 flex items-center gap-2>
<div i-carbon:chat text-blue-300 text-xl />
<span font-bold>Channels & Cadence</span>
</div>
<div px-5 py-4 text-sm>

- Primary channel: Slack / Teams / email
- Expected response time during business hours
- Weekly office hours (Thu 1–2 PM or by appointment)

</div>
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 flex items-center gap-2>
<div i-carbon:document text-teal-300 text-xl />
<span font-bold>Weekly Reflection (handwritten)</span>
</div>
<div px-5 py-4 text-sm>

A short handwritten reflection each week on:

- Progress on your project
- How the team is functioning
- How the design principles from this class are being applied to your project

</div>
</div>

</div>

---
glowSeed: 66
---

# How Teams & Sponsor Projects Get Assigned

<div class="grid gap-2 mt-8 text-center text-sm items-center" style="grid-template-columns: 2fr 0.6fr 2fr 0.6fr 2fr 0.6fr 2fr;">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="text-2xl mb-2">📝</div>
Intake forms
</div>
<div v-click class="flex items-center justify-center text-2xl opacity-50">→</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="text-2xl mb-2">🔀</div>
Matching
</div>
<div v-click class="flex items-center justify-center text-2xl opacity-50">→</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
<div class="text-2xl mb-2">📢</div>
Announcement
</div>
<div v-click class="flex items-center justify-center text-2xl opacity-50">→</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg p-4>
<div class="text-2xl mb-2">✏️</div>
Start Designing
</div>

</div>

<div v-click class="mt-8 text-sm opacity-80 text-center">
Criteria: skill mix, stated interests, sponsor fit
</div>

<div v-click class="mt-2 text-xs opacity-60 text-center">
See: Student Interest Intake Form · Corporate/Faculty Sponsor Intake Forms
</div>

---
glowSeed: 302
---

# Where Projects Come From

<div class="grid grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🏢</div>
<div class="font-bold">Corporate Sponsors</div>
</div>

<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🎓</div>
<div class="font-bold">Faculty Research Sponsors</div>
</div>

<div v-click border="2 solid orange-800" bg="orange-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🏛️</div>
<div class="font-bold">Department-Proposed Projects</div>
</div>

<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🧑‍🤝‍🧑</div>
<div class="font-bold">Existing Student Project Teams</div>
</div>

</div>

<div v-click class="mt-8 max-w-2xl mx-auto text-center text-sm" border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg p-4>
What sponsors expect in return: a final deliverable and documentation. Companies retain full ownership of their IP.
</div>

---
glowSeed: 199
---

# The Syllabus Walkthrough

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 flex items-center gap-2>
<div i-carbon:calendar text-teal-300 text-xl />
<span font-bold>Milestones & Logistics</span>
</div>
<div px-5 py-4 text-sm>

- Design review at the end of the fall semester
- Design review at the end of the spring semester
- Demo day at the end of the spring
- Meets Tue/Thu 11:00 AM–12:15 PM, Stevenson Center Rm 306
- Office hours: Thu 1–2 PM or by appointment

</div>
</div>

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg overflow-hidden>
<div bg="white/10" backdrop-blur px-4 py-2 flex items-center gap-2>
<div i-carbon:rule text-amber-300 text-xl />
<span font-bold>Policies</span>
</div>
<div px-5 py-4 text-sm>

- Late work: −10% per day late
- Academic integrity — Vanderbilt Honor Code applies
- AI use: encouraged as a tool, not a crutch — you must be able to explain all work you submit
- Attendance taken every session
- Accommodations: register with Student Access Services (SAS)
- Syllabus is subject to change

</div>
</div>

</div>

<!--
Point students to the syllabus doc; don't read it verbatim, hit the parts they'll actually forget.
-->

---
glowSeed: 250
---

# Tools We Expect You to Use

<div class="text-sm opacity-70 mb-4">Helpful infrastructure that facilitates real design work — set these up with your team.</div>

<div class="grid grid-cols-2 gap-4 max-w-3xl mx-auto">

<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🔀</div>
<div class="font-bold mb-1">Revision Control</div>
<div class="text-sm">GitHub or equivalent — history, branching, code review</div>
</div>

<div v-click border="2 solid blue-800" bg="blue-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">💬</div>
<div class="font-bold mb-1">Communication Channels</div>
<div class="text-sm">Slack, Teams — with your team and your advisor</div>
</div>

<div v-click border="2 solid violet-800" bg="violet-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">📁</div>
<div class="font-bold mb-1">Shared Drive Access</div>
<div class="text-sm">One place for documents, data, and deliverables</div>
</div>

<div v-click border="2 solid amber-800" bg="amber-800/20" rounded-lg px-5 py-4>
<div class="text-2xl mb-2">🗓️</div>
<div class="font-bold mb-1">Weekly Work Sessions</div>
<div class="text-sm">Recurring team time outside of class</div>
</div>

</div>

---
glowSeed: 280
---

# Preview: Fall Topics

<div class="text-sm opacity-70 mb-4">Topics covered this semester — order still being finalized.</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Version control & Git collaboration</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Engineering standards & professional ethics</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Open-source licensing & dependencies</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Research skills for standards & literature</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Team formation & charters</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Stakeholder needs & testable requirements</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Requirements traceability</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>System architecture & interface design</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>AI coding agents & verification</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-4 py-3 font-bold>Preliminary Design Review</div>

</div>

---
glowSeed: 281
---

# Preview: Spring Topics

<div class="text-sm opacity-70 mb-4">Topics covered next semester — order still being finalized.</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Test planning: verification vs. validation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Test-procedure writing</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>CI/CD & test automation</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Build & integration, debugging, living docs</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Code quality & review practices</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Technical-debt management</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Validation & acceptance testing</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Sponsor demo & acceptance report</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Retrospectives & lessons learned</div>
<div v-click border="2 solid white/5" bg="white/5" backdrop-blur-sm rounded-lg px-4 py-3>Final documentation, user manual & handoff</div>
<div v-click border="2 solid teal-800" bg="teal-800/20" rounded-lg px-4 py-3 font-bold>Final presentations & Design Expo</div>

</div>

---
layout: center
class: text-center
glowSeed: 320
---

# Q&A

<div class="text-lg opacity-80 mt-4">Open floor</div>

<!--
Keep a running FAQ doc — questions here often repeat across cohorts and can seed an actual FAQ note in the vault.
-->

---
layout: center
class: text-center
glowSeed: 229
---

# Thank You

### Questions & Discussion

<div class="pt-6 opacity-80">
Senior Design · Vanderbilt ECE
</div>
