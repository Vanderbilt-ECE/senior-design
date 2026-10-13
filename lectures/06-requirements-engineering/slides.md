---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: From ConOps to Requirements
info: Senior Seminar · Fall 2026 · Deriving functional and system requirements from the Concept of Operations, and tracing between them
transition: fade-out
lineNumbers: false
mdc: true
duration: 55min
drawings:
  persist: false
vite:
  server:
    fs:
      strict: false
glowSeed: 77
---

<div class="eyebrow">SENIOR SEMINAR · FALL 2026</div>

# From ConOps<br>to Requirements

<div class="text-2xl text-teal-300 mt-2">Functional requirements · System requirements · Traceability</div>

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center mt-10">
<div class="card neutral text-center"><strong>Concept of Operations</strong><p class="text-base opacity-75">How the system is used</p></div>
<div class="arrow">→</div>
<div class="card teal text-center"><strong>Functional reqs</strong><p class="text-base opacity-75">What it must do</p></div>
<div class="arrow">→</div>
<div class="card blue text-center"><strong>System reqs</strong><p class="text-base opacity-75">How well, under what conditions</p></div>
</div>

<!--
Timing: 1 minute.

Opening: “Last session we wrote a Concept of Operations for a camera-equipped quadcopter that inspects campus roofs. We described who uses it, where, and what happens when a flight ends early. Today we turn that story into requirements the team can design against and verify.”

Point at the chain: “Today has one idea. The ConOps tells us how the system is used. From that we derive functional requirements, which say what the system must do. From each functional requirement we derive system requirements, which say how well and under what conditions, in measurable terms. Traceability is the set of links that lets us walk that chain in either direction.”

Transition: “First, where this sits in the engineering process.”

Instructor context: the roof-inspection example and every number in this deck are fictional teaching data, continued from the ConOps & Market Research session.
-->

---
glowSeed: 100
---

# Where we are on the V

<div class="mx-auto max-w-2xl">
<VModel :active="1" />
</div>
<div v-click class="banner text-center mt-3">Last time: how the system is used. Today: what it must do, and how well.</div>

<!--
Timing: 2 minutes.

Opening: “This is the same V-model from last session. We spent last week on the top-left box, the Concept of Operations. Today we move one step down, to Requirements.”

Point out the dashed line from Requirements across to System verification: “Every requirement we write today is something we will have to show evidence for at system verification. If we can't imagine how we would check it, it isn't finished.” Also point out that ConOps pairs with Validation: the ConOps is what we validate against at the end.

Click 1: “Last week answered how the system is used. Today answers what it must do and how well. Architecture, next session, answers which parts do it.”

Transition: “Let's look at the chain we will build.”
-->

---
glowSeed: 182
---

# Each level is derived from the one above

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-stretch mt-8">
<div v-click class="card neutral"><div class="eyebrow">CONOPS</div><h3>Why & how it's used</h3><p class="text-base">Stakeholders, stories, scenarios.<br>Written in the user's language.</p></div>
<div v-after class="arrow self-center">→</div>
<div v-click class="card teal"><div class="eyebrow">FUNCTIONAL</div><h3>What it must do</h3><p class="text-base">One behavior per statement.<br>Solution-neutral.</p></div>
<div v-after class="arrow self-center">→</div>
<div v-click class="card blue"><div class="eyebrow">SYSTEM</div><h3>How well, under what conditions</h3><p class="text-base">Measurable and verifiable.<br>What the team designs to.</p></div>
</div>
<div v-click class="banner mt-7 text-center"><strong class="text-teal-300">Traceability</strong> records every link: each system req has a parent functional req; each functional req has a source in the ConOps.</div>

<!--
Timing: 3 minutes.

Opening: “Requirements are not invented from nothing. Each level is derived from the level above it, and that derivation is what makes them defensible to a sponsor.”

Click 1 — ConOps: “The ConOps is in the user's language: the inspector wants images tied to roof locations so the repair crew can find problems. It explains why.”

Click 2 — Functional requirements: “A functional requirement takes one thing the scenario needs and states it as a behavior of the system: the system shall associate each image with the roof area it shows. It says what, not how; no camera model, no algorithm.”

Click 3 — System requirements: “A system requirement makes that function specific enough to design and check: how accurately, how quickly, under what conditions, through what interface. A test plan can be written directly against it.”

Click 4 — Traceability: “The arrows are the important part. Every system requirement should point to a functional requirement, and every functional requirement to a ConOps story or scenario step. If you can't draw the arrow, either the requirement is unjustified or the ConOps is missing something.”

Transition: “So let's start where the arrows start: the ConOps we already have.”
-->

---
glowSeed: 310
---

# Start from the ConOps you already wrote

<div class="eyebrow mt-2">ROOF-INSPECTION SCENARIO · FROM CONOPS & MARKET RESEARCH</div>
<div class="grid grid-cols-4 gap-3 mt-3">
<div v-click class="card blue text-base"><span class="req">S1</span> <strong>Plan</strong><p>Facilities requests images; pilot reviews site and planned roof areas.</p></div>
<div v-after class="card amber text-base"><span class="req">S2</span> <strong>Capture & locate</strong><p>Images recorded and linked to planned roof areas.</p></div>
<div v-after class="card teal text-base"><span class="req">S3</span> <strong>Stop early</strong><p>Conditions change; flight ends; partial results kept.</p></div>
<div v-after class="card violet text-base"><span class="req">S4</span> <strong>Review</strong><p>Inspector flags concerns; marks areas still needing images.</p></div>
</div>
<div class="grid grid-cols-2 gap-3 mt-4">
<div v-click class="card neutral text-base"><span class="req">US-I</span> <strong>Inspector:</strong> I want images linked to roof locations so that I can direct the repair crew.</div>
<div v-after class="card neutral text-base"><span class="req">US-P</span> <strong>Pilot:</strong> I want a record of unfinished coverage so that I can plan a follow-up flight.</div>
</div>
<div v-click class="banner mt-4 text-center">Break your Part 4 scenario into steps and label each step and story, so every requirement can cite its source.</div>

<!--
Timing: 3 minutes.

Opening: “This is the scenario and two of the user stories from last session, unchanged. The only new thing is that each one now has a short label.”

Click 1 — Scenario: Read the four steps briefly. S1, plan the survey. S2, capture images linked to roof areas. S3, conditions change and the flight ends early with partial results kept. S4, the inspector reviews, flags concerns, and marks areas that still need images.

Click 2 — Stories: The inspector story, US-I, and the pilot story, US-P. Remind them: the benefit clause is the why.

Click 3 — Labels: “Your ConOps assignment let you write Part 4 however it communicated best, so your scenario is probably a narrative. That's fine; you don't need to rewrite it. The first step of deriving requirements is to break that narrative into steps, number them S1, S2, and so on, and label the user stories too. You can add the labels to the ConOps itself or just list them in your requirements document.”

“The labels look trivial, but they are the roots of the traceability tree. When a functional requirement says ‘Source: S3’, anyone can check why it exists. Without them you'd be writing ‘Source: the part where the wind picks up’, which doesn't scale to a matrix with thirty rows.”

Transition: “Now, what is a functional requirement, exactly?”
-->

---
glowSeed: 45
---

# Functional requirements: what the system must do

<div class="banner mt-4 text-xl text-center">The system <span class="shall">shall</span> [verb] [object] [qualifier, if needed].</div>
<div class="grid grid-cols-3 gap-4 mt-6">
<div v-click class="card teal"><h3>A behavior</h3><p class="text-base">One action the system performs. Starts with a verb: capture, associate, record, report.</p></div>
<div v-click class="card blue"><h3>Solution-neutral</h3><p class="text-base">Says <em>what</em>, not <em>how</em>. No part numbers, no algorithms, no product names.</p></div>
<div v-click class="card amber"><h3>Has a source</h3><p class="text-base">Comes from a ConOps step or story. If you can't name one, ask why it's there.</p></div>
</div>
<div v-click class="mt-6 text-center text-lg"><span class="req">FR-3</span> The system <span class="shall">shall</span> associate each image with the roof area it shows. <span class="opacity-60 text-base">· Source: S2, US-I</span></div>

<!--
Timing: 3 minutes.

Opening: “A functional requirement describes one thing the system does. The template is simple: the system shall, a verb, an object, and a qualifier if one is needed. ‘Shall’ marks a binding requirement; ‘should’ and ‘will’ are ambiguous, so we avoid them.”

Click 1 — A behavior: “It's an action. If there's no verb, it's probably a quality, a constraint, or a wish, not a function.”

Click 2 — Solution-neutral: “It says what, not how. ‘Use GPS to geotag images’ is a design decision. ‘Associate each image with the roof area it shows’ leaves room for GPS, visual markers, a flight-plan lookup, or something we haven't thought of. Architecture is where we choose.”

Click 3 — Has a source: “Every functional requirement should point back to a ConOps step or story. That is the first link in the trace.”

Click 4 — Example: Read FR-3. Its sources are S2, capture and locate, and the inspector story. Note that one FR can have more than one source.

Transition: “So how do we get from a scenario to a list like this?”
-->

---
glowSeed: 175
---

# Deriving functional requirements from the scenario

<div class="text-lg opacity-80 mt-2">For each step, ask: <em class="text-teal-300">what must the system do for this step to succeed?</em></div>
<table class="matrix mt-4 text-sm">
<thead><tr><th class="w-24">Source</th><th>Functional requirement</th></tr></thead>
<tbody>
<tr v-click><td><span class="req">S1</span></td><td><span class="req">FR-1</span> The system shall let the operator define the roof areas to inspect before a flight.</td></tr>
<tr v-click><td><span class="req">S2</span></td><td><span class="req">FR-2</span> The system shall capture images of the planned roof areas.</td></tr>
<tr v-click><td><span class="req">S2</span> <span class="req">US-I</span></td><td><span class="req">FR-3</span> The system shall associate each image with the roof area it shows.</td></tr>
<tr v-click><td><span class="req">S4</span> <span class="req">US-P</span></td><td><span class="req">FR-4</span> The system shall track the coverage status of each planned roof area.</td></tr>
<tr v-click><td><span class="req">S3</span></td><td><span class="req">FR-5</span> The system shall retain images and coverage status when a flight ends early.</td></tr>
<tr v-click><td><span class="req">S4</span></td><td><span class="req">FR-6</span> The system shall produce a report of findings and uninspected areas.</td></tr>
</tbody>
</table>

<!--
Timing: 4 minutes.

Opening: “Walk the scenario one step at a time and ask: what must the system do for this step to succeed? Each answer that starts with a verb is a candidate functional requirement.”

Click 1 — FR-1 from S1: the pilot reviews planned roof areas, so the system must let someone define them. Without this, ‘coverage’ has nothing to be measured against.

Click 2 — FR-2 from S2: capture images. The obvious one.

Click 3 — FR-3 from S2 and US-I: associating images with roof areas. This is the inspector's core need.

Click 4 — FR-4 from S4 and US-P: coverage tracking. This came from the pilot's story and is the differentiator we identified in market research.

Click 5 — FR-5 from S3: retain results when a flight ends early. “This one only exists because the ConOps included an exception. If your scenario only covers the happy path, you will miss requirements like this.”

Click 6 — FR-6 from S4: produce a report including uninspected areas.

Ask: “Is there a step with no functional requirement? Is there an FR with no step?” Both are worth checking every time. The answer here is no, but we'll come back to this question when we build the trace matrix.
-->

---
glowSeed: 250
---

# Check each functional requirement

<div class="grid grid-cols-[1fr_1fr] gap-x-5 gap-y-3 mt-5 text-base">
<div v-click class="card red"><strong>Design baked in</strong><p>“The system shall use GPS to geotag images.”</p></div>
<div v-after class="card teal"><strong>Behavior only</strong><p>“The system shall associate each image with the roof area it shows.”</p></div>
<div v-click class="card red"><strong>Compound</strong><p>“The system shall store images and track coverage and produce a report.”</p></div>
<div v-after class="card teal"><strong>One behavior each</strong><p>Split into FR-2, FR-4, FR-6. Each can now be traced and verified alone.</p></div>
<div v-click class="card red"><strong>Describes the user</strong><p>“The pilot shall land when wind increases.”</p></div>
<div v-after class="card teal"><strong>Describes the system</strong><p>“The system shall retain images and coverage status when a flight ends early.”</p></div>
</div>

<!--
Timing: 3 minutes.

Opening: “Three mistakes show up in nearly every first draft of functional requirements.”

Click 1 — Design baked in: GPS is one way to associate an image with a roof area. Writing it into the requirement closes off other options before architecture has even started. If the sponsor truly mandates GPS, that's a constraint, recorded separately with its own source.

Click 2 — Compound: three behaviors joined by ‘and’. If storage works but the report doesn't, did the requirement pass? Split it so each piece can be traced and verified on its own.

Click 3 — Describes the user: requirements describe the system, not people. The pilot's procedures belong in the ConOps or an operating plan. Ask what the system must do in that situation; here, keep the partial results.

Transition: “Functional requirements tell us what. They don't yet tell us how well, and you can't design or test against ‘associate each image with a roof area’ until you know how well. That's the job of system requirements.”
-->

---
glowSeed: 66
---

# System requirements: how well, under what conditions

<div class="text-lg opacity-80 mt-2">Take one functional requirement and ask four questions. Each answer is a measurable system requirement.</div>
<div class="grid grid-cols-2 gap-4 mt-5">
<div v-click class="card teal"><div class="eyebrow">PERFORMANCE</div><strong>How well? How fast? How often?</strong><p class="text-base opacity-80">Accuracy, timing, capacity, rates.</p></div>
<div v-click class="card blue"><div class="eyebrow">INTERFACE</div><strong>Connected to what? In what format?</strong><p class="text-base opacity-80">Users, other systems, data exchanged.</p></div>
<div v-click class="card amber"><div class="eyebrow">CONDITIONS</div><strong>In what environment or situation?</strong><p class="text-base opacity-80">Operating states, failures, interruptions.</p></div>
<div v-click class="card violet"><div class="eyebrow">QUALITY & CONSTRAINTS</div><strong>Within what limits?</strong><p class="text-base opacity-80">Reliability, usability, cost, mandated standards.</p></div>
</div>

<!--
Timing: 3 minutes.

Opening: “A system requirement is specific enough to design to and to verify. The way to get there from a functional requirement is to ask it questions.”

Click 1 — Performance: how accurately, how quickly, how many, how often. ‘Associate each image with a roof area’ becomes ‘correctly for at least 95% of images’.

Click 2 — Interface: what does this function connect to? Who reads its output, in what format, on what device? The report has to be readable by facilities staff.

Click 3 — Conditions: under what circumstances must it still work? Our ConOps already handed us one: the flight ending early. Power loss is another.

Click 4 — Quality and constraints: reliability, usability, and limits imposed from outside: budget, a mandated standard, a regulation. Previously you may have seen these taught as separate ‘non-functional’, ‘performance’, and ‘constraint’ lists. Here they are lenses for deriving system requirements from a function, so each one still has a parent.

Transition: “Let's apply the four questions to one functional requirement.”
-->

---
glowSeed: 210
---

# One function, several system requirements

<div class="card teal mt-4 text-center"><span class="req">FR-4</span> The system shall track the coverage status of each planned roof area. <span class="opacity-60 text-base">· Source: S4, US-P</span></div>
<div class="text-center opacity-50 text-xl my-1">↓ derived into ↓</div>
<div class="grid grid-cols-3 gap-3 text-base">
<div v-click class="card neutral"><div class="eyebrow">BEHAVIOR · DETAIL</div><span class="req">SR-4.1</span> The system shall classify each planned area as <em>Not inspected</em>, <em>Usable image</em>, or <em>Concern flagged</em>.</div>
<div v-click class="card neutral"><div class="eyebrow">CONDITIONS</div><span class="req">SR-4.2</span> An area shall remain <em>Not inspected</em> until the inspector accepts at least one image of it.</div>
<div v-click class="card neutral"><div class="eyebrow">PERFORMANCE</div><span class="req">SR-4.3</span> Coverage status shall update within 10 s of an image being stored.</div>
</div>
<div v-click class="banner mt-4 text-center text-base">Each child adds something measurable. Together they say exactly what “track coverage” means for this project.</div>

<!--
Timing: 4 minutes.

Opening: “FR-4 came from the pilot's story and the review step. On its own, ‘track coverage status’ is too vague to build or test. What statuses? When does an area count as covered? How current is the status?”

Click 1 — SR-4.1: defines the states. Now a tester can check that every area is always in exactly one of three states.

Click 2 — SR-4.2: this is the requirement that prevents the failure from last session's scenario, where a short flight produced forty photos and nobody knew what was missed. An image existing is not enough; a person has to accept it as usable. This one comes from asking ‘under what conditions’.

Click 3 — SR-4.3: a performance requirement. Ten seconds is a fictional teaching value. In a real project the number comes from the sponsor or from analysis: how soon does the pilot need to know an area still needs images?

Click 4 — Summary: each child adds something checkable. Together they define what FR-4 means for this project. Point out the numbering: SR-4.x are children of FR-4. That numbering is already a lightweight trace.

Optional prompt: “What system requirements would you derive from FR-5, retain results when a flight ends early?” Possible answers: each image and its area ID written to non-volatile storage within 5 seconds of capture; after unexpected power loss, at most the image being written is lost.
-->

---
glowSeed: 251
---

# Check each system requirement

<table class="matrix mt-5 text-base">
<thead><tr><th class="w-1/4">Problem</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr v-click><td><strong>Ambiguous</strong></td><td class="text-red-300">“The coverage map shall update quickly.”</td><td class="text-teal-300">“…within 10 s of an image being stored.”</td></tr>
<tr v-click><td><strong>Untestable</strong></td><td class="text-red-300">“The report shall be easy to read.”</td><td class="text-teal-300">“90% of facilities test users shall locate every flagged area in under 2 min, unaided.”</td></tr>
<tr v-click><td><strong>Design, not requirement</strong></td><td class="text-red-300">“Images shall be stored on a 64 GB SD card.”</td><td class="text-teal-300">“The system shall store at least 500 images per flight.”</td></tr>
</tbody>
</table>
<div v-click class="banner mt-6 text-center">Test: could someone outside your team decide pass or fail with no conversation with you?</div>

<!--
Timing: 3 minutes.

Opening: “System requirements are where vagueness hurts most, because these are the statements you will be verified against.”

Click 1 — Ambiguous: ‘quickly’ compared to what? Quantify it and state the condition. (Numbers are fictional.)

Click 2 — Untestable: ‘easy to read’ is a real need, so don't delete it. Replace it with a measurable proxy, here a usability test with a task, a population, a success rate, and a time limit.

Click 3 — Design, not requirement: the SD card is a component choice for architecture and design. The underlying need is capacity: how many images per flight. That number should be justified by the size of the roofs in the ConOps.

Click 4 — The test: “If a stranger could take your requirement and decide pass or fail without asking you what you meant, it's done.”

Transition: “The last thing that makes a requirement defensible is knowing where it came from. That's traceability.”
-->

---
glowSeed: 400
---

# Traceability: links in both directions

<svg viewBox="0 0 860 300" class="w-full max-w-4xl mx-auto mt-2" role="img" aria-label="Trace tree: scenario steps S3 and S4 link to functional requirements FR-4 and FR-5, which link to system requirements SR-4.1, 4.2, 4.3, 5.1 and 5.2.">
  <g stroke="#94a3b8" stroke-width="1.5" opacity=".7" fill="none">
    <path d="M150 85 C 230 85, 230 85, 320 85"/>
    <path d="M150 85 C 230 85, 230 215, 320 215"/>
    <path d="M150 215 C 230 215, 230 215, 320 215"/>
    <path d="M490 85 C 560 85, 560 30, 640 30"/>
    <path d="M490 85 C 560 85, 560 85, 640 85"/>
    <path d="M490 85 C 560 85, 560 140, 640 140"/>
    <path d="M490 215 C 560 215, 560 195, 640 195"/>
    <path d="M490 215 C 560 215, 560 250, 640 250"/>
  </g>
  <g style="font-size:15px" text-anchor="middle">
    <rect x="20" y="62" width="130" height="46" rx="8" fill="#ffffff0d" stroke="#94a3b8"/><text x="85" y="90" fill="#e2e8f0">S4 · Review</text>
    <rect x="20" y="192" width="130" height="46" rx="8" fill="#ffffff0d" stroke="#94a3b8"/><text x="85" y="220" fill="#e2e8f0">S3 · Stop early</text>
    <rect x="320" y="62" width="170" height="46" rx="8" fill="#115e5966" stroke="#2dd4bf"/><text x="405" y="90" fill="#f1f5f9">FR-4 · track coverage</text>
    <rect x="320" y="192" width="170" height="46" rx="8" fill="#115e5966" stroke="#2dd4bf"/><text x="405" y="220" fill="#f1f5f9">FR-5 · retain results</text>
    <g fill="#1e40af55" stroke="#60a5fa">
      <rect x="640" y="12" width="140" height="36" rx="7"/><rect x="640" y="67" width="140" height="36" rx="7"/><rect x="640" y="122" width="140" height="36" rx="7"/>
      <rect x="640" y="177" width="140" height="36" rx="7"/><rect x="640" y="232" width="140" height="36" rx="7"/>
    </g>
    <g fill="#f1f5f9"><text x="710" y="35">SR-4.1</text><text x="710" y="90">SR-4.2</text><text x="710" y="145">SR-4.3</text><text x="710" y="200">SR-5.1</text><text x="710" y="255">SR-5.2</text></g>
  </g>
</svg>
<div class="grid grid-cols-2 gap-4 mt-2 text-base">
<div v-click class="card teal"><strong>Forward →</strong> Is every need covered? Each ConOps step reaches at least one FR, and each FR at least one SR.</div>
<div v-click class="card blue"><strong>← Backward</strong> Why does this exist? Each SR leads to a parent FR, and back to a ConOps source.</div>
</div>

<!--
Timing: 3 minutes.

Opening: “Traceability is just the record of the derivations we've been doing. Here's a slice of it. S4, the review step, led to FR-4. S3, the early stop, led to FR-5, and S4 also feeds FR-5 because the inspector needs those partial results. Each FR fans out into its system requirements.” (SR-5.1 and SR-5.2 are the storage and power-loss requirements from the optional prompt two slides ago.)

Click 1 — Forward: start from the ConOps and follow the arrows right. “Did every step and story produce at least one functional requirement? Did every functional requirement get specific system requirements?” This catches needs you forgot.

Click 2 — Backward: start from any system requirement and follow the arrows left. “Why does SR-4.2 exist? Because of FR-4, because of the review step and the pilot's story.” This catches requirements nobody needs, and it gives you an answer when a sponsor or reviewer asks ‘why is this here?’

Note: a requirement can have more than one parent, as S4 does here. That's normal; record all of them.

Transition: “Drawing a tree works for a slide. For a real project, we keep it as a table.”
-->

---
glowSeed: 133
---

# The trace matrix

<table class="matrix mt-3 text-sm">
<thead><tr><th class="w-28">ConOps source</th><th class="w-2/5">Functional requirement</th><th>System requirements</th></tr></thead>
<tbody>
<tr v-click><td><span class="req">S2</span> <span class="req">US-I</span></td><td><span class="req">FR-3</span> Associate each image with its roof area</td><td><span class="req">SR-3.1</span> Record a roof-area ID with every stored image<br><span class="req">SR-3.2</span> Correct area for ≥ 95% of images in acceptance survey</td></tr>
<tr v-click><td><span class="req">S4</span> <span class="req">US-P</span></td><td><span class="req">FR-4</span> Track coverage status of each planned area</td><td><span class="req">SR-4.1</span> Three states per area<br><span class="req">SR-4.2</span> Not inspected until an image is accepted<br><span class="req">SR-4.3</span> Status updates within 10 s</td></tr>
<tr v-click><td><span class="req">S3</span> <span class="req">S4</span></td><td><span class="req">FR-5</span> Retain images and status when a flight ends early</td><td><span class="req">SR-5.1</span> Image + area ID in non-volatile storage within 5 s<br><span class="req">SR-5.2</span> Power loss loses at most the image being written</td></tr>
<tr v-click><td><span class="req">S4</span></td><td><span class="req">FR-6</span> Report findings and uninspected areas</td><td><span class="req">SR-6.1</span> List every planned area with its status<br><span class="req">SR-6.2</span> Readable on facilities PCs without project software</td></tr>
</tbody>
</table>
<div v-click class="source text-sm">Fictional values. In Test Planning & Requirements Traceability we add verification method and status columns.</div>

<!--
Timing: 3 minutes.

Opening: “This is the same tree, as a table. One row per functional requirement; left column is where it came from, right column is what it became. FR-1 and FR-2 are left off only to fit the slide.”

Click 1 — FR-3: two children. SR-3.1 is the data link; SR-3.2 is how accurate that link must be, checked in an acceptance survey.

Click 2 — FR-4: the three children we derived together.

Click 3 — FR-5: two sources, S3 and S4, and two children. Both children are about what happens when things go wrong.

Click 4 — FR-6: SR-6.2 is an interface requirement. It comes from asking who reads the report and on what.

Click 5 — Note: “Every number here is a teaching value. Later in the course, in the Test Planning session, this same matrix gets more columns: verification method, test procedure, and status. That's the right half of the V. The trace you build now is what those columns attach to.”

Transition: “A matrix is useful because you can read it for problems.”
-->

---
glowSeed: 91
---

# Read the trace for problems

<div class="grid grid-cols-3 gap-4 mt-6">
<div v-click class="card amber"><div class="eyebrow">MISSED NEED</div><h3>Source with no FR</h3><p class="text-base">A story or step that produced nothing. Either the ConOps item is out of scope, or you missed a requirement.</p></div>
<div v-click class="card amber"><div class="eyebrow">GAP</div><h3>FR with no SR</h3><p class="text-base">A function nobody has made specific. It can't be designed or verified yet.</p></div>
<div v-click class="card red"><div class="eyebrow">ORPHAN</div><h3>SR with no parent</h3><p class="text-base">“The system shall stream live 4K video to a phone.” Why? Cut it, or fix the ConOps.</p></div>
</div>
<div v-click class="banner mt-6"><strong class="text-teal-300">When something changes, follow the links.</strong> Sponsor: “the repair crew needs the report on their phones.” Revisit US-I → FR-6 → SR-6.2, and nothing else.</div>

<!--
Timing: 4 minutes.

Opening: “The trace isn't paperwork. It's a tool for finding problems before they reach design.”

Click 1 — Missed need: a ConOps source with no functional requirement. Sometimes that's deliberate, say the sponsor agreed it's out of scope, and you should record that decision. Often it's simply forgotten.

Click 2 — Gap: a functional requirement with no system requirements. It sounds fine but nobody can design or test against it yet. FR-1 and FR-2 would be gaps if we stopped where the slide did.

Click 3 — Orphan: a system requirement with no parent. Live 4K video sounds exciting, and that's exactly the problem. It's gold-plating: cost and schedule spent on something no stakeholder asked for. Two honest options: delete it, or go back to the ConOps and find out whether there's a real need, then add that need with its source.

Click 4 — Change impact: “Sponsors change their minds. When the facilities manager says the repair crew needs the report on their phones, you don't reread the whole document. You follow the links from the affected story: US-I to FR-6 to SR-6.2. Now you know exactly which requirements, and later which tests, need to change.”

Transition: “Now do this on your own project.”
-->

---
glowSeed: 123
---

# Workshop: derive and trace from your ConOps

<div class="text-xl text-teal-300 mt-3">20 minutes · use your own sponsor project</div>
<div class="grid grid-cols-3 gap-5 mt-7">
<div v-click class="card blue"><div class="eyebrow">0–5 MIN</div><h3>Label your sources</h3><p>Break your Part 4 scenario into steps. Label each step and related story.</p></div>
<div v-click class="card teal"><div class="eyebrow">5–12 MIN</div><h3>Derive FRs</h3><p>3–5 functional requirements, each citing a source.</p></div>
<div v-click class="card amber"><div class="eyebrow">12–20 MIN</div><h3>Derive SRs & trace</h3><p>Pick 2 FRs. Use the four questions. Fill in trace rows.</p></div>
</div>
<div v-click class="banner mt-7">Be ready to share: one FR → SR derivation, and one gap or orphan you found.</div>

<!--
Timing: 20 minutes. Reveal all four steps before starting so teams can see the instructions.

Set up: “Use your own ConOps from last session. If your scenario only covers the happy path, add one exception first; that's where the most interesting requirements come from.”

Click 1 — Minutes 0–5: take the operational scenario from Part 4 of your ConOps assignment, break the narrative into steps labeled S1, S2, …, and label any user stories that relate to it.

Click 2 — Minutes 5–12: walk the steps and write three to five functional requirements. Each one cites at least one source ID. Check for design baked in, compound statements, and requirements about the user instead of the system.

Click 3 — Minutes 12–20: choose two FRs and ask the four questions: performance, interface, conditions, quality and constraints. Write measurable system requirements, number them as children (SR-2.1, SR-2.2), and fill in a trace table with the three columns from the matrix slide.

Click 4 — Share-out: in the last two minutes, one or two teams share one derivation and one problem they found reading their trace.

While circulating, ask: “Where did this come from?” “How would someone outside your team decide pass or fail?” “Is that a requirement or a design choice?” It's fine to write TBD for a number you need from the sponsor; record who you'll ask.
-->

---
glowSeed: 500
---

# Your next step: a draft requirements document

<div class="grid grid-cols-2 gap-4 mt-7">
<div v-click class="card teal"><strong>Functional requirements</strong><p>Covering each step of your main scenarios, including exceptions. Each cites a ConOps source.</p></div>
<div v-click class="card blue"><strong>System requirements</strong><p>Measurable children of each FR. Each cites its parent FR. TBD values listed with an owner.</p></div>
<div v-click class="card violet"><strong>Trace matrix</strong><p>ConOps source → FR → SR. No unexplained gaps or orphans.</p></div>
<div v-click class="card amber"><strong>Sponsor review</strong><p>Walk the sponsor through the trace. Confirm the numbers; record what changed.</p></div>
</div>
<div v-click class="banner mt-5 text-center">Draft requirements document due before System Architecture & Design.</div>

<!--
Timing: 2 minutes.

Opening: “Here's what to finish from today's workshop.”

Click 1 — Functional requirements: cover every step of your main scenarios, including at least one exception. Each FR cites a source.

Click 2 — System requirements: every FR has measurable children. Where you need a number you don't have yet, write TBD and name who will supply it, usually the sponsor.

Click 3 — Trace matrix: the three-column table. Read it for missed needs, gaps, and orphans before you submit. A gap you've explained (‘out of scope, agreed with sponsor 10/14’) is fine; an unexplained one isn't.

Click 4 — Sponsor review: the trace is a good meeting agenda. Walk through it from the ConOps side; sponsors recognize their own stories and can tell you quickly whether a number is right. If they disagree with your interpretation, revisit and re-confirm rather than argue.

Click 5 — Due date: before the System Architecture & Design session.
-->

---
glowSeed: 229
---

# Wrap-up

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center mt-8">
<div class="card neutral text-center"><strong>ConOps</strong><p class="text-base opacity-75">Why & how it's used</p></div>
<div class="arrow">→</div>
<div class="card teal text-center"><strong>Functional</strong><p class="text-base opacity-75">What it must do</p></div>
<div class="arrow">→</div>
<div class="card blue text-center"><strong>System</strong><p class="text-base opacity-75">How well, measurably</p></div>
</div>
<div class="text-center text-teal-300 mt-3">Traceability keeps every link, in both directions.</div>
<div v-click class="banner mt-7 text-center">Next session: System Architecture & Design (Oct 20). System requirements are allocated to subsystems and interfaces.</div>
<div v-click class="mt-3 text-center text-sm opacity-60">~3-week gap before the next session: intentional studio and sponsor-meeting time.</div>

<!--
Timing: 1 minute.

Recap: “The ConOps tells us how the system is used. We derive functional requirements from it: what the system must do, without saying how. We derive system requirements from those: how well and under what conditions, measurably. Traceability records every one of those links, so we can find gaps, cut orphans, and see the impact of change.”

Click 1 — Next session: “In architecture, we start assigning system requirements to parts of the system. SR-5.1, storing images within 5 seconds, will land on some subsystem, and that's when the design choices we kept out of today's requirements finally get made.”

Click 2 — Schedule: use the gap for sponsor meetings to confirm your TBD values.

Exit prompt: “Pick one system requirement you wrote today. Could you trace it all the way back to a sentence your sponsor actually said?”
-->
