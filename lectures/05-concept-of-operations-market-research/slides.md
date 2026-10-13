---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: Concept of Operations & Market Research
info: Senior Seminar · Fall 2026 · From user needs to a defensible project direction
transition: fade-out
lineNumbers: false
mdc: true
duration: 55min
drawings:
  persist: false
glowSeed: 229
---

<div class="eyebrow">SENIOR SEMINAR · FALL 2026</div>

# Concept of Operations<br>& Market Research

<div class="grid grid-cols-2 gap-8 items-center mt-6">
<div>
<div class="text-2xl text-teal-300">Tell the story of the system in use.</div>
<div v-click class="card neutral mt-6">Mission: inspect roofs without routine climbs.<br>Proposed system: a camera-equipped quadcopter.</div>
</div>
<VModel focus />
</div>

<!--
Timing: 1 minute.

Opening: “Imagine campus facilities staff need to check roofs for visible signs of damage. Today they may need someone to climb onto a roof or hire an inspection service. Our mission is to obtain useful roof-condition information without routine climbs.”

Explain the proposed system: a quadcopter is an aircraft with four rotors. The candidate project includes the aircraft, camera, ground controls, image-processing or reporting software, and the people operating it. The mission is broader than building an aircraft that flies.

Click 1 — “We are considering a camera-equipped quadcopter, but we should compare it with existing drones, services, and non-flying alternatives before committing to a design.”

ConOps means Concept of Operations: a description of how the system would be used, by whom, and for what outcome. The focus today is intended use and evidence, not motor selection or flight-control design.

Transition: “First, where does that work fit in the engineering process?”

Instructor context: all configurations, capability assignments, and prices later in this deck are invented teaching data. The 13-slide session is about 55 minutes including the workshop, or 52 if the optional chart is skipped.
-->

---
glowSeed: 100
---

# V-model

<div class="mt-8 flex items-center justify-center">
<VModel :active="$clicks - 1" />
</div>
<div class="absolute left-0 top-0 h-1 w-1 opacity-0 pointer-events-none">
<span v-click>1</span><span v-click>2</span><span v-click>3</span><span v-click>4</span><span v-click>5</span><span v-click>6</span><span v-click>7</span><span v-click>8</span><span v-click>9</span>
</div>
<div class="source">Each click highlights the next point in the model</div>

<!--
Timing: 5 minutes.

Opening: “The V-model organizes the work from the purpose of the system through design and implementation, then back up through evidence. Each click highlights one point. The left side defines what the system should accomplish. The bottom is where the system is built. The right side checks whether the result meets the intended need and the agreed requirements.”

Click 1 — Concept of Operations: “The ConOps describes how people will use the system, in what setting, to accomplish what mission.” For the roof-inspection example, it includes facilities staff, the pilot, the inspector, the roof site, the inspection workflow, and the outcome the sponsor needs. This is the operational intent that guides the rest of the model.

Click 2 — Requirements: “Requirements turn the operational need into statements the team can design against and later check.” A requirement should say what must be achieved or constrained in a way that can be evaluated. For example, the team may need evidence that images can be associated with planned roof areas. The requirement is not yet a choice of camera or software.

Click 3 — Architecture: “Architecture assigns the needed functions to major parts of the system and defines how those parts work together.” In this example, the aircraft, camera, ground controls, location record, storage, and report workflow are architectural elements. Architecture makes the system boundary and interfaces visible before detailed component choices.

Click 4 — Detailed design: “Detailed design specifies the components, interfaces, data, and behavior needed to implement the architecture.” This is where the team works out choices such as sensor configuration, data formats, mounting, software behavior, and how a coverage record is updated. Those choices should trace back to the requirements and operating scenario.

Click 5 — Implementation: “Implementation produces the configured hardware, software, procedures, and supporting materials.” The system may include purchased parts, code, integration work, user instructions, and the people who operate it. The point at the bottom is where the design becomes a working system that can be evaluated.

Click 6 — Unit test: “Unit tests check individual components or small pieces in isolation.” Examples include checking that a camera interface records an image, that a location record stores the expected fields, or that a software function marks a planned area as incomplete. Passing a unit test does not show that the whole inspection workflow works.

Click 7 — Integration test: “Integration tests check that connected components exchange information and work together.” For example, the aircraft or camera output may need to flow into storage, then into the location and coverage record. This level can reveal interface problems even when each component passed its own unit tests.

Click 8 — System verification: “System verification asks whether the completed system meets its defined requirements.” The team uses planned tests, inspection, analysis, or demonstrations to collect objective evidence. A verification result might show that the system records the required data or operates within a specified constraint.

Click 9 — Validation: “Validation asks whether the system solves the user's operational problem in the intended context.” For the roof-inspection mission, an inspector should be able to use the resulting images and coverage information to identify what was reviewed, what needs attention, and what still requires a follow-up. A system can pass a technical requirement and still fail to support the real task, so validation returns to the ConOps.

Transition: “Now that the model connects operational intent to evidence, we can describe the inspection workflow before choosing components.”

Instructor reference: https://www.nasa.gov/reference/5-0-product-realization/ . This is a simplified teaching model; the exact lifecycle and evidence methods can vary by project.
-->

---
glowSeed: 182
---

# ConOps: the system in use

<div class="text-xl mt-4">Who uses it, in what setting, to accomplish what mission?</div>
<div class="grid grid-cols-2 gap-4 mt-5">
<div v-click class="card teal"><strong>Mission + people</strong><p>Facilities staff need roof images; a pilot flies and an inspector reviews.</p></div>
<div v-click class="card blue"><strong>Operating context</strong><p>Campus buildings, changing weather, and people near the site.</p></div>
<div v-click class="card violet"><strong>Scenarios</strong><p>Plan → capture images → review → flag areas needing attention.</p></div>
<div v-click class="card amber"><strong>Goals + open questions</strong><p>Useful images tied to roof locations. What if a flight stops early?</p></div>
</div>

<!--
Timing: 4 minutes.

Opening: “Our system boundary includes the mission workflow, not just the flying machine. Think of a facilities employee asking for an inspection and eventually receiving information they can act on.”

Click 1 — Mission + people: Facilities staff request the work and explain the concern. The pilot operates the aircraft and makes flight decisions. The inspector reviews images and identifies areas needing attention. The repair crew uses the report to locate those areas. One person may perform several roles, but their needs are different.

Click 2 — Operating context: “The roof is outdoors, weather changes, and buildings may have nearby trees, people, or other obstacles.” Record site access, applicable operating permissions, equipment limits, staffing, and weather assumptions for later investigation. We are not establishing flight procedures or numerical operating limits in this example.

Click 3 — Scenarios: “Describe the sequence: request the inspection, plan it, capture images, review them, and communicate findings.” A quadcopter flight is only part of that sequence.

Click 4 — Goals + open questions: “Success is usable information tied to a roof location, not simply a folder of photographs.” If the flight ends early, how do we distinguish inspected areas from areas still needing images? What level of detail would let the inspector assess the type of concern the sponsor cares about?

Transition: “Now investigate existing ways to accomplish that mission.”

Instructor reference: https://www.nasa.gov/reference/system-engineering-handbook-appendix/ . This is a compact course ConOps outline.
-->

---
glowSeed: 100
---

# Research the landscape, then look for a need

<div class="text-xl text-teal-300 mt-4">Alternatives → feature / price landscape → unmet need → ConOps goal</div>
<div class="grid grid-cols-3 gap-5 mt-5">
<div v-click class="card teal"><h3>Direct</h3><p>Roof-inspection drone systems and services</p><div class="text-base opacity-75 mt-5">Same users and core workflow.</div></div>
<div v-click class="card blue"><h3>Adjacent</h3><p>Camera drones and image-mapping tools</p><div class="text-base opacity-75 mt-5">A related workflow or capability.</div></div>
<div v-click class="card amber"><h3>DIY / alternatives</h3><p>Custom quadcopters; pole cameras and manual inspection</p><div class="text-base opacity-75 mt-5">Include today's workaround.</div></div>
</div>
<div v-click class="banner mt-6 text-base">Use vendor docs for claims; reviews and demos for friction; papers and patents for technical context. Record URL, date, and uncertainty.</div>

<!--
Timing: 3 minutes.

Opening: “Search for ways to accomplish the mission, not only products that resemble the machine you want to build.”

Click 1 — Direct: “Look at roof-inspection drone systems and inspection services. Both compete with a proposed system because they can deliver the outcome facilities staff want.” A service may sell an inspection or report rather than hardware.

Click 2 — Adjacent: “General camera drones can capture images. Mapping tools can organize imagery spatially. They may solve part of the workflow without being designed specifically for roof inspection.”

Click 3 — DIY / alternatives: “A custom quadcopter with an open-source flight stack is one approach. A pole-mounted camera or manual inspection may be another.” Compare reach, visibility, effort, and the information delivered. Do not assume the flying solution is automatically best. DIY means do-it-yourself; using open-source components does not remove integration work.

Click 4 — Sources: Use vendor documentation for advertised capabilities and prices. Use demonstrations, reviews, and user interviews to investigate difficulties. Here “friction” means extra work, uncertainty, or delay. Papers and patents may describe techniques but do not establish that a product implements them.

Transition: “To compare such different approaches, define what each column actually means.”
-->

---
glowSeed: 310
---

# Capture evidence you can compare

<div class="grid grid-cols-3 gap-5 mt-8">
<div v-click class="card blue"><h3>Capability</h3><p>What does “supported” mean?</p><div class="text-base opacity-75 mt-4">Built in, manual workaround, absent, or unknown.</div></div>
<div v-click class="card amber"><h3>Cost basis</h3><p>What does the price include?</p><div class="text-base opacity-75 mt-4">Same workload, hardware, setup, and recurring fees.</div></div>
<div v-click class="card teal"><h3>Source + limits</h3><p>Can someone check the claim?</p><div class="text-base opacity-75 mt-4">URL, date, operating limits, and uncertainty.</div></div>
</div>
<div v-click class="banner mt-7">Use “?” when a claim is unverified. A missing detail is not an absent feature.</div>

<!--
Timing: 2 minutes.

Opening: “Comparisons become misleading when the labels look the same but the underlying assumptions differ.”

Click 1 — Capability: “A camera's megapixel count alone does not establish whether an inspector can recognize the relevant roof feature.” Ask what image detail is needed in the intended conditions. Camera, motion, distance, and processing are design choices to investigate. Define location support too: approximate coordinates attached to a file are not necessarily a useful reference on a roof plan.

Click 2 — Cost basis: Compare a common workload. Our fictional example assumes ten roof surveys in the first year and counts equipment plus recurring cash fees. A real comparison should also account for training, labor, maintenance, travel, and service charges. Record what is included rather than treating a purchase price as total cost.

Click 3 — Source + limits: Save the source and access date. In a full matrix, record imaging performance, flight endurance or pole reach, operating limits, obstacle sensing, portability, training needs, data access, and known limitations.

Click 4 — Unknown: “If the documentation does not explain how interrupted surveys are handled, use a question mark and investigate.”

Transition: “The next table is a deliberately small fictional example of that method.”
-->

---
glowSeed: 175
---

# Build a comparison you can defend

<div class="text-base opacity-70 mb-5">Fictional configurations · year-one cash budget for 10 roof surveys · excludes staff time</div>
<table class="matrix">
<thead><tr><th>Alternative / user</th><th>Year 1<br>cash cost</th><th>Remote<br>images</th><th>Roof<br>links</th><th>Coverage<br>record</th><th>Report</th><th>Approach</th></tr></thead>
<tbody>
<tr v-click><td>Pole camera<br><small>Facilities crew</small></td><td>$800</td><td>✓</td><td>—</td><td>—</td><td>—</td><td>Ground operated</td></tr>
<tr v-click><td>Camera drone<br><small>General imaging</small></td><td>$2,000</td><td>✓</td><td>✓</td><td>—</td><td>—</td><td>Packaged aircraft</td></tr>
<tr v-click><td>DIY quadcopter<br><small>Technical team</small></td><td>$3,500</td><td>✓</td><td>✓</td><td>✓</td><td>—</td><td>Custom integration</td></tr>
<tr v-click><td>Inspection system<br><small>Inspection team</small></td><td>$8,000</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>Aircraft + software</td></tr>
</tbody>
</table>
<div v-click class="mt-5 text-base text-amber-200">✓ = supported in this example · — = absent. In real research, use “?” for unverified claims.</div>

<!--
Timing: 4 minutes.

Opening: “These are invented configurations and budgets, not claims about real vendors or every product in a category. They support the method, not a purchasing decision. All four use the same assumed workload: ten roof surveys in year one. Staff time is excluded.”

Define the four capability columns before revealing rows:
• Remote images: capture roof imagery while the operator remains off the roof. This does not guarantee every area is visible.
• Roof links: associate an image with an identifiable area on the roof plan.
• Coverage record: retain which planned areas have usable images and which still need inspection.
• Report: produce a shareable summary connecting findings with images and roof locations.

Click 1 — Pole camera, USD 800: This example provides images from the ground. Staff organize locations, coverage, and reporting separately. Actual usefulness depends on roof height and sight lines.

Click 2 — Camera drone, USD 2,000: This fictional package adds roof-location links, but no coverage record or integrated report. Do not imply that all camera drones have exactly these features.

Click 3 — DIY quadcopter, USD 3,500: This hypothetical configuration includes camera integration, location links, and coverage tracking, but report preparation remains manual. It represents integration effort, not a bare airframe.

Click 4 — Inspection system, USD 8,000: This hypothetical aircraft-and-software package provides all four. More checkmarks do not by themselves establish better fit or image quality.

Click 5 — Legend: “A dash means absent from this defined configuration. Unknown facts in real research get a question mark.” An inspection service should also be compared in a real study; it is omitted here to keep the worked table readable.

Transition: “The optional chart plots the exact same budgets and capability counts.”
-->

---
glowSeed: 123
---

# A gap on the map is a hypothesis

<div class="eyebrow">OPTIONAL DISCUSSION · 3 MINUTES</div>

<div class="grid grid-cols-[1.45fr_1fr] gap-6 items-center mt-3">
<MarketMap />
<div class="space-y-4">
<div v-click class="card teal"><strong>Possible opening</strong><p>Clear roof coverage and reports at a campus-scale budget.</p></div>
<div v-click class="card amber"><strong>Now test it</strong><p>Do users need it? Can the team support it? What cost is missing?</p></div>
</div>
</div>
<div class="text-sm opacity-65 mt-3">Same fictional data as the matrix · capability count is a rough lens, not a quality score.</div>

<!--
Timing: optional, 3 minutes.

Opening: “Moving right means a larger first-year cash budget. Moving up counts how many of our four defined capabilities a configuration supplies.”

Point out the pole camera at USD 800 and one capability; camera drone at USD 2,000 and two; DIY quadcopter at USD 3,500 and three; inspection system at USD 8,000 and four. Each point comes directly from the fictional table. The count does not measure flight performance, image quality, or usability.

Click 1 — Possible opening: “The empty upper-left region suggests a question: can a campus team get useful coverage tracking and reports at a lower budget?” It does not prove an opportunity exists.

Click 2 — Now test it: The apparent gap could disappear when we include developer time, training, maintenance, or alternatives we missed. Ask users whether incomplete coverage and manual reporting actually cause problems.

Optional prompt: “What would convince you this is worth building?” Useful answers include observing a report being prepared, asking how an interrupted inspection is recorded, and checking existing products against those needs.

Transition: “Let's turn the comparison into a specific user problem.”
-->

---
glowSeed: 350
---

# Turn observations into a design direction

<div class="grid grid-cols-3 gap-5 mt-8">
<div v-click class="card blue"><div class="eyebrow">BASELINE</div><h3>What works well?</h3><p>Remote images and location tagging are available.</p><div class="text-blue-300 mt-4">Avoid rediscovering solved work.</div></div>
<div v-click class="card amber"><div class="eyebrow">FRICTION</div><h3>What is painful?</h3><p>After a short flight, staff may not know which roof areas were missed.</p><div class="text-amber-300 mt-4">Walk through an image review.</div></div>
<div v-click class="card teal"><div class="eyebrow">UNMET NEED</div><h3>What is missing here?</h3><p>Show usable images, their roof locations, and areas still uninspected.</p><div class="text-teal-300 mt-4">Validate with users.</div></div>
</div>
<div v-click class="banner mt-7">Write “not found in the alternatives we reviewed,” not “no one offers this.”</div>

<!--
Timing: 2 minutes.

Opening: “A list of features is not yet an argument for your project. We need to connect the evidence to something a user struggles with.”

Click 1 — Baseline: In our worked example, remote imagery and location tagging are available. Reproducing those capabilities alone does not explain why the sponsor needs our project.

Click 2 — Friction: “Suppose wind ends a flight halfway through. The inspector receives forty photographs but cannot tell whether every planned roof area has a usable view.” A missing area might be mistaken for an area with no visible concern. This is an invented scenario to investigate, not a documented finding about a real product.

Click 3 — Unmet need: “The possible need is a clear distinction between areas reviewed, areas with concerns, and areas still lacking usable images.” A flight path or image count alone is not proof of adequate coverage. A person may need to reject blurred or obstructed images.

Click 4 — Qualify the claim: Say which alternatives were checked and what remains uncertain. Avoid claiming that no existing inspection system provides this.

Transition: “Now write that need from the perspective of the person doing the work.”
-->

---
glowSeed: 182
---

# User stories feed your ConOps

<div class="banner mt-4">As a <span class="text-blue-300">[role]</span>, I want to <span class="text-teal-300">[action]</span>, so that <span class="text-amber-300">[benefit]</span>.</div>
<div class="space-y-4 mt-6">
<div v-click class="card blue"><strong>Inspector:</strong> I want images linked to roof locations so that I can direct the repair crew.</div>
<div v-click class="card teal"><strong>Pilot:</strong> I want a record of unfinished coverage so that I can plan a follow-up flight.</div>
<div v-click class="card violet"><strong>Map into ConOps:</strong> roles → stakeholders; benefits → goals; related actions → scenarios.</div>
</div>

<!--
Timing: 3 minutes.

Opening: “The role, action, and benefit make a story useful. The benefit explains why the feature matters.”

Click 1 — Inspector: Read the first story. “An image of a possible defect is hard to act on if the repair crew cannot locate it. The inspector needs an understandable connection between that image and the roof.” The eventual implementation could use a roof plan, labeled zones, coordinates, or another method; this story does not choose one.

Click 2 — Pilot: Read the second story. “If an inspection is interrupted, the pilot needs to know which areas require another attempt.” This describes planning information, not automatic permission to resume flying. Any follow-up depends on the operating plan and conditions.

Click 3 — Map into ConOps: The inspector and pilot become stakeholder roles. Directing repairs and completing coverage become goals. Planning, flying, reviewing, and following up become scenarios.

A third role might be the facilities manager: “I want a report showing unresolved areas so that I can decide what work to schedule.”

Distinguish needs from design choices: “I want a 4K camera” specifies a possible technology. Ask what the inspector needs to see and why; later justify camera resolution, stabilization, and operating distance against that task.

Transition: “Let's connect the stories into one mission, including an interruption.”
-->

---
glowSeed: 310
---

# Stories become an operational scenario

<div class="eyebrow mt-4">TEST THE ASSUMPTION: “ONE FLIGHT FINISHES THE INSPECTION.”</div>
<div class="grid grid-cols-2 gap-4 mt-5">
<div v-click class="card blue"><strong>1 · Plan the survey</strong><p>Facilities requests roof images; the pilot reviews the site and conditions.</p></div>
<div v-click class="card amber"><strong>2 · Capture and locate</strong><p>The quadcopter records images linked to the planned roof areas.</p></div>
<div v-click class="card teal"><strong>3 · Stop when conditions change</strong><p>Increasing wind ends the flight early; the team retains partial results.</p></div>
<div v-click class="card violet"><strong>4 · Review and follow up</strong><p>The inspector flags concerns and marks areas still needing usable images.</p></div>
</div>

<!--
Timing: 4 minutes.

Opening: “The assumption we are testing is that one flight finishes the inspection. A ConOps should explain what the team does when the real world breaks that assumption.”

Click 1 — Plan: Facilities requests images of a particular roof. The pilot reviews the site, planned areas, conditions, and the applicable operating arrangements. The inspector clarifies what the images must show. We are describing responsibilities, not teaching a flight checklist.

Click 2 — Capture: The camera-equipped quadcopter records images associated with the planned roof areas. This connects hardware, data, and the inspection task without choosing a particular camera or navigation algorithm.

Click 3 — Stop: Conditions change; in our scenario, increasing wind leads the pilot to end the flight under the operating plan. Partial images and coverage information are retained. We do not specify a universal wind threshold or flight maneuver; those depend on the actual system and operating requirements.

Click 4 — Review: The inspector checks image usefulness, flags possible concerns, and marks areas without adequate evidence. The team can plan another inspection when appropriate. Completing a flight, having images, and completing an inspection are three different outcomes.

Ask: “What should the report say about an area with no usable image?” Expected answer: uninspected or insufficient evidence, not clear of defects.

Transition: “That operational need gives us a concrete direction for the proposed design.”
-->

---
glowSeed: 175
---

# State the difference you can support

<div class="text-base opacity-75 mt-4">For [user] who [need], our [category] provides [benefit]. Unlike [alternative], we [difference].</div>
<div v-click class="card teal mt-7 text-2xl leading-relaxed">For campus facilities teams, our proposed quadcopter inspection system links roof images to locations and shows what still needs inspection.</div>
<div v-click class="card blue mt-5 text-xl leading-relaxed">Unlike the fictional Camera Drone in our matrix, it records unfinished coverage and produces a report for the repair crew.</div>
<div v-click class="mt-5 text-base text-amber-200">A proposed direction to validate—not a claim that the system already exists.</div>

<!--
Timing: 3 minutes.

Opening: “We can now state a proposed difference that serves a person, rather than merely saying our drone has impressive hardware.”

Click 1 — Target and benefit: Campus facilities staff need to connect roof images with locations and know what remains uninspected. The candidate system combines a quadcopter, camera, ground controls, and a way to review and organize inspection data.

Click 2 — Comparison: The fictional Camera Drone row provides images and roof links but lacks the coverage record and report columns. Our proposal would add those two capabilities. That is a specific comparison within the teaching example; it is not a claim about real camera drones as a class.

Click 3 — Proposal: We still need to validate whether users value this difference, whether existing products already meet it, and whether the team can build it within scope. The fictional Inspection System already has all four capabilities, so capability alone is not uniqueness. Cost, usability, or fit would need evidence too.

Engineering connection: “Enough detail to recognize the sponsor's chosen roof concern” is the need. Sensor choice, stabilization, endurance, and data processing are coupled engineering decisions to justify later. Building a new airframe from scratch is not automatically required; integrating an existing platform may better serve the mission.

Transition: “Use the same reasoning on your own sponsor project.”
-->

---
glowSeed: 123
---

# Workshop: start your feature matrix

<div class="text-xl text-teal-300 mt-3">20 minutes · use your own sponsor project</div>
<div class="grid grid-cols-3 gap-5 mt-7">
<div v-click class="card blue"><div class="eyebrow">0–5 MIN</div><h3>Find 3+ alternatives</h3><p>Search direct, adjacent, and DIY approaches.</p></div>
<div v-click class="card teal"><div class="eyebrow">5–15 MIN</div><h3>Compare with evidence</h3><p>Record capabilities, cost basis, sources, and unknowns.</p></div>
<div v-click class="card amber"><div class="eyebrow">15–20 MIN</div><h3>Make one inference</h3><p>Draft a user story and an unmet-need hypothesis.</p></div>
</div>
<div v-click class="banner mt-7">Be ready to share: one comparison, one uncertainty, one question for a user.</div>

<!--
Timing: 20 minutes. Reveal all four click steps before starting so teams can see the instructions.

Set up: “Use your own sponsor project, not necessarily the roof-inspection example. One person searches while another records comparisons; switch roles partway through.”

Click 1 — Minutes 0–5: Find three or more plausible alternatives, including another way to accomplish the mission. A team proposing a quadcopter should consider inspection services and ground-based approaches as well as aircraft.

Click 2 — Minutes 5–15: Define a few relevant comparison columns. Record sources, dates, cost assumptions, operating limits, and unknowns. Do not spend the entire activity chasing an unpublished price.

Click 3 — Minutes 15–20: Draft one user story and one tentative unmet-need statement. Example: “We found image capture, but have not confirmed how these options show missing coverage after a shortened flight. We need to ask an inspector how that information is handled today.”

Click 4 — Share-out: Use the last two minutes for one or two teams to share one comparison, one uncertainty, and one question for a user.

While circulating, ask: “What counts as supported?” “Are the cost assumptions comparable?” “Does this solve the sponsor's mission or just resemble your preferred design?” Treat a hypothesis as a question to test, not a research finding.

Transition: “Here is what to complete before Requirements Engineering.”
-->

---
glowSeed: 182
---

# Your next step: a draft ConOps

<div class="grid grid-cols-2 gap-4 mt-7">
<div v-click class="card teal"><strong>Mission + context</strong><p>Purpose, roles, environment, constraints, and open assumptions.</p></div>
<div v-click class="card blue"><strong>Comparison matrix</strong><p>3+ platforms, feature/price evidence, sources, and limitations.</p></div>
<div v-click class="card violet"><strong>User stories + scenario</strong><p>5+ stories across at least 2 roles; connect several into a narrative.</p></div>
<div v-click class="card amber"><strong>Differentiation statement</strong><p>A defensible difference tied to a user need.</p></div>
</div>
<div v-click class="banner mt-5">Research → story of use → defensible direction.<br>Next: turn the ConOps into formal, testable requirements.</div>

<!--
Timing: 2 minutes.

Opening: “The draft ConOps should let a sponsor understand and challenge the intended operation before detailed design.”

Click 1 — Mission + context: Explain the outcome, roles, operating setting, constraints, and open assumptions. For the example, the mission is useful roof-condition information without routine climbs; a quadcopter is the proposed approach.

Click 2 — Comparison: Include at least three alternatives, relevant features and costs, sources, and limitations. Use actual evidence for your project; the prices in this deck are fictional.

Click 3 — Stories + scenario: Write at least five stories across at least two roles, such as pilot and inspector. Link several into a sequence and include an exception where relevant. Explain how the mission ends and what remains unresolved.

Click 4 — Difference: State a useful difference supported by the comparison and a user need. “We designed a quadcopter” describes an artifact, not why the sponsor needs it.

Click 5 — Recap: “Research tells us what exists. ConOps describes how people need to use the proposed system. Next we translate that into requirements we can evaluate.”

Exit prompt: “Which assumption would most change your project if it were false?” For example, whether imagery alone can answer the sponsor's inspection question.

Complete the matrix and stories before Requirements Engineering. Announce any deadline from the actual course schedule; none is assumed here.
-->
