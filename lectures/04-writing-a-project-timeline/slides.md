---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Writing a Project Timeline'
info: 'Senior Seminar • Lecture 04 • Planning a senior design project'
transition: fade-out
lineNumbers: false
mdc: true
fonts:
  sans: DM Sans
drawings:
  persist: false
layout: center
class: cover
glowSeed: 229
exportFilename: 04-writing-a-project-timeline
---

<div class="kicker">Senior Seminar / 04</div>

# Writing a<br>Project Timeline

<div class="lead mt-6">A plan your team can build, test, and revise.</div>
<div class="small mt-10">Senior Design · Fall 2026</div>

<!--
Ask who has worked on a project spanning two semesters. This lecture develops a planning skill, not a particular software skill. By the end, students should be able to break down work, identify dependencies, anchor a schedule, and update it with evidence.
Source: Obsidian, Senior Seminar/Lectures/04 - Writing a Project Timeline.md. The sensor logger is an illustrative teaching example, not a real team's schedule.
-->

---
glowSeed: 100
---

# What your timeline should tell you

<div class="lead">Your team needs a shared answer every week.</div>
<div class="grid grid-cols-2 gap-5 mt-6">
<div v-click class="card"><div class="text-teal-300 font-bold mb-2">What can start now?</div>Tasks with their prerequisites satisfied.</div>
<div v-click class="card"><div class="text-blue-300 font-bold mb-2">Who owns the next result?</div>A person responsible for evidence of completion.</div>
<div v-click class="card"><div class="text-amber-300 font-bold mb-2">What could delay the demo?</div>Dependencies, uncertainty, and outside waits.</div>
<div v-click class="card"><div class="text-violet-300 font-bold mb-2">What changed this week?</div>A revised forecast and an explicit response.</div>
</div>

<!--
A two-semester project crosses holidays, competing classes, parts orders, and sponsor availability. Avoid the unsupported claim that planning is the number-one cause of failure. The useful claim is practical: a visible plan helps the team make decisions while there is time to act.
Reveal each question and invite an example of who would need that answer.
-->

---
glowSeed: 123
---

# Effort and duration use different clocks

<div class="grid grid-cols-2 gap-6 mb-5">
<div class="card teal"><h2>Effort</h2>Time spent doing the work.<div class="small mt-2">Estimate in person-hours.</div></div>
<div class="card"><h2>Duration</h2>Time from start to finish.<div class="small mt-2">Include waits and actual availability.</div></div>
</div>
<table class="deck-table"><thead><tr><th>Illustrative task</th><th>Effort</th><th>Calendar duration</th></tr></thead><tbody><tr><td>Order and receive a sensor</td><td>1 hour</td><td>3 weeks with shipping</td></tr><tr><td>Implement a data logger</td><td>8 hours</td><td>1 week at 8 available hours</td></tr></tbody></table>
<div v-click class="banner">Four teammates do not make every task four times faster.</div>

<!--
Estimates are examples, not measured averages. Ask what happens if the developer has only two hours available this week. Duration depends on effort, availability, dependencies, and external waiting. A shipping delay has little effort but can dominate the schedule. Include exams and shared lab equipment in availability.
-->

---
glowSeed: 180
---

# Work breakdown for the sensor logger

<div class="lead">A deliverable becomes small, verifiable tasks.</div>
<svg viewBox="0 0 880 265" class="w-full max-w-5xl mx-auto diagram" role="img" aria-label="Sensor logger breaks into sensing, data storage, and enclosure deliverables. Sensing breaks into interface definition, sensor receipt, and a bench test.">
<g fill="none" stroke="#64748b" stroke-width="2"><path d="M440 58 V85 H150 V108 M440 85 V108 M440 85 H730 V108"/><path d="M150 158 V185 H145 V210 M150 185 H440 V210 M440 185 H735 V210"/></g>
<rect x="315" y="8" width="250" height="50" rx="8" fill="#115e59" stroke="#2dd4bf"/>
<g fill="#172b40" stroke="#60a5fa"><rect x="30" y="108" width="240" height="50" rx="8"/><rect x="320" y="108" width="240" height="50" rx="8"/><rect x="610" y="108" width="240" height="50" rx="8"/></g>
<g fill="#182a31" stroke="#2dd4bf"><rect x="10" y="210" width="270" height="48" rx="8"/><rect x="305" y="210" width="270" height="48" rx="8"/><rect x="600" y="210" width="270" height="48" rx="8"/></g>
<g fill="#f1f5f9" text-anchor="middle" style="font-size: 22px"><text x="440" y="40">Sensor logger</text><text x="150" y="140">Sensing</text><text x="440" y="140">Data storage</text><text x="730" y="140">Enclosure</text><text x="145" y="240">Define interface</text><text x="440" y="240">Order / receive sensor</text><text x="735" y="240">Run bench test</text></g>
</svg>
<div v-click class="banner">Near-term tasks should fit within about one working week of effort.</div>

<!--
This is a partial work breakdown structure (WBS): only the sensing branch is expanded. The lines show decomposition, not execution order. A project may also be grouped by phase, then deliverable, then task. Break near-term work down until an owner can estimate it and demonstrate completion. Separate ordering, waiting, and bench testing in the detailed schedule. Long calendar waits do not violate the small-effort rule.
-->

---
glowSeed: 350
---

# A task needs a finish line

<div class="grid grid-cols-2 gap-6 mt-7">
<div class="card red"><h2>Too vague</h2><div class="text-2xl mt-4">“Work on sensor integration.”</div><div class="small mt-6">What result would let another teammate continue?</div></div>
<div v-click class="card teal"><h2>Ready to schedule</h2><div class="text-xl">“Log 60 seconds of timestamped IMU data with no missing samples at 50 Hz.”</div><div class="small mt-5">Owner: Jo<br>Effort: 6 hours<br>Depends on: sensor received + interface agreed<br>Evidence: saved log + test script</div></div>
</div>
<div v-click class="banner">A completion test replaces weeks of “almost done.”</div>

<!--
The acceptance threshold is invented for this example. Teams should derive their actual thresholds from requirements. A single accountable owner may coordinate several contributors. Ask how a teammate would reproduce the test. The saved output and script make the definition of done reviewable. Split this task further if it cannot be estimated confidently.
-->

---
glowSeed: 182
---

# Dependencies determine the order

<div class="lead">Hardware and firmware can overlap after interfaces agree.</div>
<DependencyGraph />
<div class="grid grid-cols-2 gap-6 mt-5">
<div v-click class="small"><strong class="text-teal-300">Integration waits for both branches.</strong><br>A finished firmware task alone cannot unblock it.</div>
<div v-click class="small"><strong class="text-blue-300">Parallel work needs capacity.</strong><br>These branches assume separate owners.</div>
</div>

<!--
This graph shows five work packages, not the complete WBS. Durations are illustrative calendar weeks. A is interface definition, B hardware procurement and bench readiness, C firmware using a mock sensor, D integration, E verification. B includes waiting and should be broken into ordering, waiting, and bench-test tasks in an execution plan. C can proceed independently only because the interface is defined and a mock is available. Resource conflicts can remove the assumed overlap.
-->

---
glowSeed: 205
---

# The critical path sets the earliest finish

<DependencyGraph critical />
<div class="grid grid-cols-2 gap-6 mt-5">
<div class="card amber"><div class="font-bold text-amber-300">A + B + D + E = 6 weeks</div><div class="small mt-2">The longest dependent chain has no slack in this six-week plan.</div></div>
<div v-click class="card"><div class="font-bold text-blue-300">A + C + D + E = 5 weeks</div><div class="small mt-2">Firmware can slip one week before integration moves.</div></div>
</div>

<!--
Ask students to calculate both paths before revealing the firmware result. The critical path is the longest-duration path in this dependency network. Its six-week finish assumes the estimates hold and resources are available. Firmware has one week of total float (slack). More than one week's delay matters, and a change can create a different critical path. There may also be multiple critical paths. Shared project buffer comes later and is separate from this branch's slack.
-->

---
glowSeed: 310
---

# Milestones record a result

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="card"><h2>A task takes time</h2>Run the integrated logger test.<div class="small mt-4">Owner + start + finish + evidence</div></div>
<div class="card teal"><h2>A milestone is a checkpoint</h2>Integrated logger passes the agreed test.<div class="small mt-4">Zero duration at a specific point in time</div></div>
</div>
<svg viewBox="0 0 880 100" class="w-full max-w-5xl mx-auto mt-6 diagram" role="img" aria-label="Three milestones: design agreed, first integrated log, demo accepted.">
<path d="M65 30 H815" stroke="#64748b" stroke-width="3"/>
<g fill="#2dd4bf"><path d="M120 18 l12 12 -12 12 -12 -12 Z"/><path d="M440 18 l12 12 -12 12 -12 -12 Z"/><path d="M760 18 l12 12 -12 12 -12 -12 Z"/></g>
<g text-anchor="middle" fill="#e2e8f0" style="font-size: 21px"><text x="120" y="78">Design agreed</text><text x="440" y="78">First integrated log</text><text x="760" y="78">Demo accepted</text></g>
</svg>

<!--
A milestone is not another week-long bar. The work that makes it possible belongs in tasks before it. Specify what evidence makes each checkpoint pass. “Demo accepted” requires an agreement on the acceptance criteria and who can approve them. Some milestones are external commitments, others are internal targets.
-->

---
glowSeed: 150
---

# Course anchors for your plan

<div class="small mb-4">Current course planning notes · Confirm dates against the published course calendar.</div>
<table class="deck-table"><thead><tr><th>Checkpoint</th><th>Planning date</th><th>Work to schedule before it</th></tr></thead><tbody><tr><td>Preliminary Design Review</td><td>Dec 3 / 8, 2026</td><td>Feasibility evidence + rehearsal</td></tr><tr><td>Sponsor demo / acceptance</td><td>Mar 23, 2027</td><td>Test results + agreed demo scope</td></tr><tr><td>Final presentations / expo</td><td>Apr 13 / 15, 2027</td><td>Reliable demo + presentation</td></tr></tbody></table>
<div v-click class="banner">Each team also needs sponsor availability, purchase lead times, and its own internal checkpoints.</div>

<!--
Sources: Obsidian, Senior Seminar/Fall 2026 Week-by-Week Schedule.md, weeks 15–16; Senior Seminar/Spring 2027 Week-by-Week Schedule.md, weeks 11 and 14. These are planning notes with open questions, not newly assigned deadlines. Fall notes put PDR part 1 on December 3 and part 2 on December 8 if needed. Spring notes place the sponsor acceptance studio March 23 and expo sessions April 13 and 15. Dates refer to the 2026–27 academic year. Verify the final course calendar before students commit. Include fall break, Thanksgiving, winter break, and spring break in capacity planning.
-->

---
glowSeed: 229
---

# Forward and backward planning must meet

<div class="grid grid-cols-2 gap-6 mt-7">
<div v-click class="card"><h2>Forward from today</h2>Available people and prerequisites determine the earliest feasible finish.</div>
<div v-click class="card teal"><h2>Backward from the deadline</h2>Required evidence determines the latest safe start.</div>
</div>
<svg viewBox="0 0 880 145" class="w-full max-w-5xl mx-auto mt-4 diagram" role="img" aria-label="Forward plan needs six weeks of work and one week of buffer, but the deadline is in five weeks: a two-week gap.">
<g style="font-size: 20px" fill="#e2e8f0"><text x="0" y="36">Needed</text><text x="0" y="96">Available</text></g>
<rect x="145" y="13" width="540" height="36" rx="4" fill="#115e59" stroke="#2dd4bf"/><rect x="685" y="13" width="90" height="36" rx="4" fill="#78350f" stroke="#fbbf24"/>
<text x="415" y="38" fill="#f1f5f9" style="font-size: 20px" text-anchor="middle">6 weeks of work</text><text x="730" y="38" fill="#fde68a" style="font-size: 17px" text-anchor="middle">buffer</text>
<path d="M145 83 H595" stroke="#60a5fa" stroke-width="5"/><path d="M595 65 V110" stroke="#60a5fa" stroke-width="3"/><text x="370" y="120" fill="#bfdbfe" style="font-size: 20px" text-anchor="middle">5 weeks until deadline</text><path d="M605 82 H775" stroke="#f87171" stroke-width="3"/><text x="690" y="120" fill="#fca5a5" style="font-size: 20px" text-anchor="middle">2-week gap</text>
</svg>
<div v-click class="text-xl text-amber-300">A gap requires a scope, sequence, resource, or deadline decision.</div>

<!--
This is an illustrative five-week constraint, not one of the course dates. Six weeks of forecast work plus one week of reserve cannot fit in five weeks. Work backward through dependencies and compare with the forward estimate. Options: reduce agreed scope, use an available component, change sequencing where technically valid, or negotiate an external date. More people help only if the work can actually be divided. Do not silently reduce the estimate to fit the chart.
-->

---
glowSeed: 100
---

# Risk and buffer belong in the schedule

<div class="grid grid-cols-2 gap-6 mt-6">
<div v-click class="card teal"><h2>Test uncertainty early</h2>Can the sensor produce usable data at the required rate?<div class="small mt-4">Run a small bench experiment before committing the full design.</div></div>
<div v-click class="card amber"><h2>Keep recovery time visible</h2>Reserve time for a failed test, a replacement part, or integration rework.<div class="small mt-4">Choose the amount from uncertainty and consequences.</div></div>
</div>
<div v-click class="banner"><strong>Example:</strong> 6 weeks of forecast work + 1 week of shared reserve = a 7-week commitment.</div>
<div class="small mt-4">A 20–30% allowance can start a discussion. It is not a universal rule or a guarantee.</div>

<!--
The source note proposes 20–30% buffer. Qualify that as a heuristic rather than prescribing the same percentage for every task. Our example uses one explicitly visible week (about 17% of six weeks), purely to demonstrate the mechanics. Discuss the actual risks before choosing a reserve. Avoid adding the same uncertainty both to every task and again as project buffer without noticing the double count. Buffer cannot make an impossible technical assumption true. Use an early experiment to reduce uncertainty.
-->

---
glowSeed: 175
---

# External waits need their own tasks

<div class="grid grid-cols-3 gap-5 mt-7">
<div v-click class="card"><div i-carbon:delivery class="text-4xl text-blue-300 mb-4"/><h2>Parts</h2><div class="text-xl">Confirm stock, purchasing steps, and delivery time.</div></div>
<div v-click class="card"><div i-carbon:user-speaker class="text-4xl text-teal-300 mb-4"/><h2>People</h2><div class="text-xl">Book sponsor reviews and shared lab access.</div></div>
<div v-click class="card"><div i-carbon:document class="text-4xl text-amber-300 mb-4"/><h2>Approvals</h2><div class="text-xl">Identify safety or research review when applicable.</div></div>
</div>
<div v-click class="banner">Record a request date, an expected response date, an owner, and a fallback.</div>
<div class="small mt-4">Identify these at kickoff. Start each request as soon as its prerequisites are ready.</div>

<!--
Avoid assuming every part can be ordered on day one. You may need specifications and purchasing approval first. The actionable habit is to discover lead times early and initiate requests as soon as possible. For a research or safety review, consult the relevant university process before affected work begins. Do not promise a standard approval duration. Ask: what wait in your project is outside your team's control?
-->

---
glowSeed: 123
---

# A schedule table makes the work explicit

<div class="small mb-5">Illustrative seven-week slice · Task IDs connect dependencies to the chart.</div>
<table class="deck-table compact"><thead><tr><th>Task</th><th>Owner</th><th>Start</th><th>Finish</th><th>Needs</th><th>Status</th></tr></thead><tbody><tr><td>A · Interfaces</td><td>Alex</td><td>W1</td><td>W1</td><td>Scope agreed</td><td>Ready</td></tr><tr><td>B · Hardware</td><td>Sam</td><td>W2</td><td>W4</td><td>A</td><td>Waiting on A</td></tr><tr><td>C · Firmware</td><td>Jo</td><td>W2</td><td>W3</td><td>A + mock</td><td>Waiting on A</td></tr><tr><td>D · Integrate</td><td>Alex*</td><td>W5</td><td>W5</td><td>B + C</td><td>Blocked</td></tr><tr><td>E · Verify</td><td>Priya</td><td>W6</td><td>W6</td><td>D</td><td>Blocked</td></tr></tbody></table>
<div class="small mt-4">*Alex coordinates the team. Each task also links to its completion test and evidence.</div>
<div v-click class="text-xl mt-5 text-teal-300">A shared spreadsheet is enough. A board also needs dates and dependencies.</div>

<!--
Statuses are a snapshot before week one starts. “Needs” is a predecessor relationship, not just a note. Map A–E to the graph. These are summary work packages for teaching: expand hardware into specific order, receipt, and bench test tasks. For dates use calendar dates in a real plan, with holiday availability made explicit. Choose a tool everyone can maintain. This lecture does not require a particular commercial product. The diagram abbreviates D's owner as Team, while Alex is accountable here.
-->

---
glowSeed: 180
---

# The same plan as a Gantt chart

<ScheduleChart />
<div class="grid grid-cols-2 gap-6 mt-3 small">
<div><strong class="text-teal-300">Solid bars:</strong> scheduled work<br><strong class="text-blue-300">Dashed blue:</strong> firmware's one-week slack</div>
<div><strong class="text-amber-300">Amber:</strong> shared reserve and milestones<br>First integrated log: W5 · Demo: end of W7</div>
</div>

<!--
This replaces the vague Build phase from slide 3 with a seven-week planning slice. It does not claim the entire senior design project lasts seven weeks. Read the weekly columns left to right. Hardware and firmware overlap. The graph/table carry the explicit dependency links. Integration finishes at the end of week five, verification at week six, and the team reserves week seven before its example demo. Diamonds are zero-duration milestones. Firmware's one week of slack is local to that branch; the shared reserve protects the final commitment. Hardware's three-week duration includes external waiting.
-->

---
glowSeed: 350
---

# A one-week delay consumes the reserve

<ScheduleChart delayed />
<div class="grid grid-cols-2 gap-6 mt-3 small">
<div><strong class="text-amber-300">Hardware now finishes in W5.</strong><br>Integration shifts to W6. Verification shifts to W7.</div>
<div v-click><strong class="text-red-300">The demo date still fits, with no reserve left.</strong><br>Another critical delay requires a new decision.</div>
</div>

<!--
Compare with the previous chart. A one-week extension to hardware shifts every downstream task by a week because B lies on the critical path. The internal integrated-log milestone moves from W5 to W6. The external demo remains at the end of W7, but the shared reserve is fully consumed. The amber “used” row is an accounting reminder, not another scheduled task. Ask what would happen instead if firmware slipped just one week: integration would stay in W5. Recalculate if the delay is larger or resources change.
-->

---
glowSeed: 182
---

# The weekly timeline review

<v-clicks>
<div class="card flex gap-5 mb-4"><div class="text-3xl text-teal-300 font-bold">1</div><div><strong>Check evidence.</strong> What finished, and what is still blocked?</div></div>
<div class="card flex gap-5 mb-4"><div class="text-3xl text-teal-300 font-bold">2</div><div><strong>Update the forecast.</strong> Re-estimate remaining work and downstream dates.</div></div>
<div class="card flex gap-5 mb-4"><div class="text-3xl text-teal-300 font-bold">3</div><div><strong>Choose a response.</strong> Assign the next action and communicate affected commitments.</div></div>
</v-clicks>
<div class="small mt-5">Keep the original baseline alongside the current forecast and a short change log.</div>

<!--
Make this a standing team-meeting item. Recording the old and new dates allows the team to explain what changed rather than rewriting history. A completed task needs evidence, not just a percentage. Review outstanding purchase and sponsor requests. When a forecast misses a commitment, discuss scope and recovery with the relevant stakeholder early. A revised timeline is expected when new information arrives.
-->

---
glowSeed: 310
---

# Team exercise: your next checkpoint

<div class="lead">Take 8 minutes. Sketch a plan your team could use next week.</div>
<div class="grid grid-cols-2 gap-6">
<div class="card"><h2>Build the draft</h2><ol class="text-xl"><li>Choose one concrete milestone.</li><li>List 5–8 tasks with owners and “done” tests.</li><li>Estimate effort and calendar duration.</li><li>Draw dependencies and reserve time.</li></ol></div>
<div class="card teal"><h2>Discuss as a team</h2><div class="text-xl mt-4">Which task can start now?</div><div class="text-xl mt-4">Which delay would move the milestone?</div><div class="text-xl mt-4">What external wait or assumption is missing?</div></div>
</div>

<!--
Suggested timing: five minutes to draft and three minutes for the team to discuss and critique its plan. This is a classroom exercise, not a newly invented graded assignment. If teams do not yet know their sponsor constraints, label assumptions instead of inventing firm dates. Ask each team to mark its highest-uncertainty task and the first action to reduce that uncertainty.
-->

---
layout: center
class: text-center
glowSeed: 229
---

# Before your team commits to a date

<div class="grid grid-cols-3 gap-5 mt-8 text-left">
<div class="card teal"><h2>Work</h2><div class="text-xl">Small tasks.<br>Named owners.<br>Visible evidence.</div></div>
<div class="card"><h2>Sequence</h2><div class="text-xl">Dependencies.<br>Real capacity.<br>A critical path.</div></div>
<div class="card amber"><h2>Uncertainty</h2><div class="text-xl">Early experiments.<br>Explicit waits.<br>Time to recover.</div></div>
</div>
<div v-click class="text-2xl mt-9 text-teal-300">What is the first assumption your team should test?</div>
<div class="small mt-5">Revisit the plan every week.</div>

<!--
Close by asking each team for one assumption it will investigate next. The plan should make the next useful action clear and expose a threatened commitment early enough to respond. Return to the exercise drafts during the next team check-in.
-->
