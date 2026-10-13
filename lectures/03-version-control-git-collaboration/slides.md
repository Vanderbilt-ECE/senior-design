---
routerMode: hash
presenter: dev
theme: default
highlighter: shiki
css: unocss
colorSchema: dark
title: 'Git: Save, Share, Collaborate'
info: |
  Senior Design I — Commits, branches, pull requests, and merge conflicts.
class: text-center
transition: fade-out
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 55
---

# Git: Save, Share, Collaborate

<div class="pt-8 text-2xl opacity-80">Senior Design I</div>
<div class="pt-12 text-xl">Save checkpoints. Share changes. Work together.</div>

<!--
Today is a practical introduction to working on a shared project. Use one tiny repository throughout the demos: README.md and sensor.py with offset = 0. Have a GitHub remote configured and two local clones ready, representing you and a teammate. Authenticate before class. Use a disposable teaching repository for the direct-to-main introduction, then move to feature branches and PRs.
-->

---
glowSeed: 150
---

# What Is GitHub?

GitHub is a website where your team can store and collaborate on a project.

<div class="grid grid-cols-2 gap-6 mt-8">
<div v-click class="git-box">
<strong class="text-blue-300 text-xl">Git runs on your computer</strong>
<p class="text-lg">It tracks changes to your files and saves your project’s history.</p>
</div>
<div v-click class="git-box git-box-teal">
<strong class="text-teal-300 text-xl">GitHub hosts a shared copy</strong>
<p class="text-lg">Your team shares changes, reviews work, and discusses issues in one place.</p>
</div>
</div>

<div v-click class="git-box git-box-amber mt-8 text-xl">
<strong>A repository (repo)</strong> is your project’s files together with their Git history.
</div>

<!--
Start with the website students may already have seen: a GitHub project page with files, a README, and a history of changes. Reveal the Git box, then the GitHub box, then define repository. Git is the version-control tool; GitHub is a service that hosts Git repositories and adds collaboration features. You can use Git locally without GitHub or an internet connection. Sharing through GitHub requires connecting to the service.
A repository can contain code and documents. Each teammate normally has a local copy to work in, while GitHub hosts the shared copy. Changes do not automatically sync when you save a file; we will walk through how to save and share them. Transition: “Git saves that history as checkpoints called commits.”
-->

---
glowSeed: 77
---

# Commits Are Checkpoints

A **commit** saves a version of your tracked code and documents.

<GitHistory />

<div v-click class="git-box git-box-teal text-xl text-teal-300">You can inspect an earlier checkpoint and recover its saved files.</div>

<!--
Walk left to right. Each circle is a commit: create the project, add sensor code, then fix its offset. A commit records the staged snapshot, plus who made it and a message explaining the change. Saving a file in an editor does not create a commit. Untracked files and unstaged edits are not automatically included.
Git reuses unchanged contents, so a snapshot does not require a fresh copy of every file. Students do not need internal tree/blob terminology.
-->

---
glowSeed: 12
---

# A Commit Has an ID and a Message

<div class="mt-12 font-mono text-3xl"><span class="text-amber-300">a1b2c3d</span> <span class="text-teal-300">Fix sensor offset</span></div>
<div class="grid grid-cols-2 gap-12 mt-10 text-xl">
<div v-click class="git-box"><strong class="text-amber-300">ID / hash</strong><p>Git calculates a fingerprint that identifies the commit.</p></div>
<div v-click class="git-box"><strong class="text-teal-300">Message</strong><p>You explain what changed so someone else can understand it.</p></div>
</div>

<div v-click class="git-box mt-8 opacity-80">A commit is saved locally. Push it when you are ready to share.</div>

<!--
The ID is an illustrative short form of a longer hash. Git calculates it from the commit data, including a reference to the snapshot, parent history, and metadata. The same files can occur in different commits with different IDs. Students will see IDs in git log; they do not need to memorize them. A clear message such as “Fix sensor offset” is more useful than “updates” or “stuff.”
-->

---
glowSeed: 150
---

# Pull Brings Your Teammates’ Changes to You

<GitRemote />

<div v-click class="git-box git-box-teal text-xl text-center"><code>git pull</code> brings remote changes into your current branch.</div>
<div v-click class="git-box mt-4 text-center opacity-75">Git runs on your computer. GitHub hosts the shared repository.</div>

<!--
Trace the arrows in order. Your teammate commits locally and pushes to GitHub. You pull to download and integrate those changes. Nothing moves directly from their laptop into yours. When you push, the direction reverses: your commits go to GitHub, and your teammate pulls.
For the first demo, both clones are on main with an upstream configured. Pull updates the current branch from its configured upstream; it does not update every local branch or automatically bring main into a feature branch. Pull can expose conflicts, which we cover later.
-->

---
glowSeed: 400
---

# The Everyday Commit Workflow

<div class="grid grid-cols-5 gap-3 mt-10 text-center text-xl">
<div v-click class="git-box"><div class="text-blue-300 text-3xl mb-4">1</div><strong>Pull</strong><p class="text-base">Get shared changes</p></div>
<div v-click class="git-box"><div class="text-blue-300 text-3xl mb-4">2</div><strong>Edit</strong><p class="text-base">Change your files</p></div>
<div v-click class="git-box"><div class="text-amber-300 text-3xl mb-4">3</div><strong>Add / stage</strong><p class="text-base">Choose what to save</p></div>
<div v-click class="git-box"><div class="text-teal-300 text-3xl mb-4">4</div><strong>Commit</strong><p class="text-base">Save a checkpoint</p></div>
<div v-click class="git-box"><div class="text-teal-300 text-3xl mb-4">5</div><strong>Push</strong><p class="text-base">Share your commits</p></div>
</div>

<div v-click class="git-box mt-10 text-center text-xl"><code>git status</code> tells you where you are along the way.</div>

<!--
Say the sequence aloud: pull, edit, add, commit, push. Start with a clean working directory and the intended branch; use git status before pulling. If work is already in progress, save it appropriately before integrating remote changes.
Explain staging as choosing the contents of the next checkpoint. If you stage a file and edit it again, stage again to include the newer edits. Commit is local; push shares commits. Another person may push while you work, so a rejected push can mean you need to integrate newer remote changes first. Do not force-push to bypass that.
-->

---
glowSeed: 5
---

# Demo: Save and Share a Checkpoint

<div class="text-teal-300 mb-6">Switch to the terminal • change the sensor offset</div>

<div v-click>

```bash
git status
git pull
# Edit sensor.py and save the file
git diff
git add sensor.py
git diff --staged
git commit -m "Fix sensor offset"
git push
git log --oneline -3
```

</div>

<!--
First use the teammate clone to commit and push a small README change. In your clone, show that it is absent, then pull and show it appears. Edit sensor.py from offset = 0 to offset = 5. Run status before and after staging so students see the distinction. Show the staged diff, commit, then push. In the teammate clone, pull and show the offset change arrives.
This direct-to-main demo illustrates the mechanics in a teaching repository. Explain that the next section adds a branch and review before work joins main.
-->

---
glowSeed: 91
---

# Branches Give a Change Its Own Workspace

A **branch** is a named line of work that shares earlier commits.

<GitHistory mode="branches" />

<div v-click class="git-box git-box-teal text-xl text-teal-300">Commits on your feature branch leave main unchanged until merged.</div>

<!--
Reuse the checkpoint picture. At a shared commit, work splits into a feature branch. The blue line is main; the gold line is feature/sensor. These are histories inside the same repository, not separate project folders. Switching branches updates the files in your working directory. A branch name points to its latest commit and moves when you commit on that branch. Commit or otherwise save work appropriately before switching.
-->

---
glowSeed: 229
---

# What Would You Use a Branch For?

<div class="grid grid-cols-3 gap-8 mt-12 text-xl">
<div v-click class="git-box"><strong>Add a feature</strong><p class="text-lg">Build sensor calibration without interrupting main.</p></div>
<div v-click class="git-box git-box-amber"><strong>Fix a bug</strong><p class="text-lg">Isolate a correction so teammates can review it.</p></div>
<div v-click class="git-box git-box-teal"><strong>Update documents</strong><p class="text-lg">Propose changes to setup instructions or a report.</p></div>
</div>

<div v-click class="git-box mt-10 text-xl">Keep each branch focused on one task.</div>

<!--
Branches also make experiments practical: an idea can be tried without immediately changing the shared main branch. They are useful for documentation as well as code. Teams can work in parallel, but overlapping edits may still need coordination. Keep this focused on one shared repository and a simple feature-branch workflow rather than comparing branching strategies.
-->

---
glowSeed: 210
---

# Share Your Branch Through GitHub

<GitRemote branches />

<div class="text-center text-xl"><code>git push -u origin feature/sensor</code></div>
<div v-click class="git-box mt-4 text-center opacity-80">The first push publishes the branch and sets up future pull / push.</div>

<!--
Return to the familiar shared-repository picture. Repositories can contain multiple branches. The command publishes feature/sensor and sets its upstream. After that, ordinary git pull and git push on that branch use its upstream.
A teammate can fetch the new branch and switch to a local tracking branch. Pull alone does not switch branches or update every branch. To bring new main commits into feature/sensor, fetch and merge origin/main while on the feature branch; this is separate from pulling that feature branch's upstream.
-->

---
glowSeed: 6
---

# Demo: Work on a Feature Branch

<div class="text-teal-300 mb-6">Switch to the terminal • add calibration instructions</div>

<div v-click>

```bash
git switch main
git pull
git switch -c feature/sensor
# Edit README.md and save
git add README.md
git commit -m "Document sensor calibration"
git push -u origin feature/sensor
git log --oneline --graph --all
```

</div>

<!--
Begin with a clean working directory. After committing, switch to main and show that the new instructions are absent. Switch back to feature/sensor and show they return. Show the graph and explain the two names. The first push requires the branch name and -u; later pushes can use git push. Leave this branch ready for the PR demo.
-->

---
glowSeed: 88
---

# A Pull Request Proposes a Merge

Ask your teammates to review a branch before it joins **main**.

<GitHistory mode="pr" />

<div v-click class="git-box git-box-teal text-lg text-teal-300">The dotted arrow is a proposal. Opening a PR does not merge the branches.</div>

<!--
A pull request, or PR, is a GitHub review conversation about integrating changes. Point from the feature branch toward main. The arrow indicates the proposed direction, not an already-created merge commit. A PR is different from git pull: pull updates your local branch, while a PR asks for review and integration on GitHub.
-->

---
glowSeed: 44
---

# From Pull Request to Shared Code

<div class="grid grid-cols-4 gap-4 mt-10 text-xl">
<div v-click class="git-box"><div class="text-blue-300 mb-4">1. Open</div>Explain what changed and how you checked it.</div>
<div v-click class="git-box"><div class="text-amber-300 mb-4">2. Review</div>A teammate reads the diff and asks questions.</div>
<div v-click class="git-box"><div class="text-teal-300 mb-4">3. Merge</div>After approval and checks, integrate into main.</div>
<div v-click class="git-box"><div class="text-blue-300 mb-4">4. Pull</div>Everyone updates their local main.</div>
</div>

<div v-click class="git-box mt-12 opacity-80">Need revisions? Commit and push to the same branch; the PR updates.</div>

<!--
Show the base branch as main and the compare branch as feature/sensor. A useful description says why the change is needed and how it was tested. Review is about correctness and clarity, not just an approval button. Follow the team's merge permissions and required checks. Merging changes the remote main branch; local copies still need updating. The exact history shape depends on the selected merge method, which is outside today's scope.
-->

---
glowSeed: 5
---

# Demo: Propose, Review, Merge

<div class="git-box mt-8 text-xl">

<v-clicks>

1. Open a PR from <code>feature/sensor</code> into <code>main</code>.
2. Read the diff and explain how you tested the change.
3. Review and merge the PR on GitHub.
4. Return to the terminal and update local main.

</v-clicks>

</div>

<div v-click>

```bash
git switch main
git pull
git log --oneline -4
```

</div>

<!--
Switch to the terminal first. If GitHub CLI is installed and authenticated, use gh pr create --base main --head feature/sensor, then gh pr diff and gh pr view --web to show the review UI. Otherwise open GitHub directly for PR creation and review, then return to the terminal for the listed commands.
Use a teammate reviewer if repository rules require approval; authors cannot approve their own PR. Arrange this before class or use a demo repo without that requirement. Show that main contains the calibration instructions after pulling. Explain that Git itself does not provide a pull-request interface.
-->

---
glowSeed: 320
---

# A Merge Conflict Needs a Human Decision

Git cannot automatically combine some competing edits.

<div class="grid grid-cols-2 gap-10 mt-10 text-xl">
<div v-click class="git-box"><strong class="text-blue-300">main changed this line</strong><pre class="mt-5">offset = 10</pre></div>
<div v-click class="git-box git-box-amber"><strong class="text-amber-300">Your branch changed it too</strong><pre class="mt-5">offset = 5</pre></div>
</div>

<div v-click class="git-box mt-9 text-xl text-teal-300">Discuss the intended result, then edit the file to match it.</div>

<!--
Both branches started from offset = 0 and changed the same line differently. Git needs a person to decide the intended result. Conflicts are a normal part of collaboration, not evidence that history has been lost. Many edits, even within the same file, merge automatically. Conflicts can also involve deleted or renamed files. This example uses plain text; binary documents may require choosing a version and manually combining work in their editor.
-->

---
glowSeed: 77
---

# Resolve, Stage, and Finish the Merge

<div class="grid grid-cols-2 gap-10 mt-8">
<div>

Git marks the competing text:

```text
<<<<<<< HEAD
offset = 5
=======
offset = 10
>>>>>>> origin/main
```

</div>
<div class="git-box text-xl">

<v-clicks>

1. Talk through which result is correct.
2. Edit the file and remove the markers.
3. Test the result.
4. Stage, commit, and push.

</v-clicks>

</div>
</div>

<div v-click class="git-box mt-5 text-lg opacity-80"><code>git status</code> lists the files that still need attention.</div>

<!--
This example assumes you are on a feature branch and run git merge origin/main. HEAD is the current feature branch side; origin/main is the incoming side. Labels differ in other operations. The intended answer might be 5, 10, or something else entirely; do not blindly accept one side. Remove all conflict markers and test the actual behavior. For this ordinary merge, git add marks a file resolved and git commit completes the merge. Rebase has a different continuation command and is outside today's demo.
-->

---
glowSeed: 6
---

# Demo: Resolve a Conflict Together

<div class="text-teal-300 mb-6">Switch to the terminal • two different sensor offsets</div>

<div v-click>

```bash
# On a prepared feature branch, with a clean working directory
git fetch origin
git merge origin/main
git status
# Resolve sensor.py in your editor, then test
git add sensor.py
git commit -m "Resolve sensor offset conflict"
git push
```

</div>

<!--
Prepare this demo before class in the disposable repository. From one common commit with offset = 0, create and publish a feature/conflict branch changing it to 5. In the teammate clone, change main to offset = 10 and push. Return to feature/conflict with a clean working directory. The listed fetch and merge now produce a predictable conflict.
Ask students which offset is correct and what evidence they would need. Edit the file to the agreed value, remove markers, and run the appropriate test or inspect output. Show status after staging and after committing. Push updates the feature branch; its PR still needs review and merge. If necessary, git merge --abort backs out of this in-progress merge.
-->

---
glowSeed: 88
---

# .gitignore Keeps Local Files Out of Commits

A `.gitignore` file lists patterns Git should ignore for **untracked files**.

<div class="grid grid-cols-2 gap-6 mt-6">
<div v-click class="git-box">

<strong class="text-blue-300">Example .gitignore</strong>

```text
# Local credentials
.env

# Generated files
build/
__pycache__/

# macOS metadata
.DS_Store
```

</div>
<div class="space-y-4">
<div v-click class="git-box git-box-teal"><strong>Share the rules</strong><p class="text-lg">Commit the .gitignore file so the team uses the same exclusions.</p></div>
<div v-click class="git-box git-box-amber"><strong>Already tracked?</strong><p class="text-lg">Adding a pattern does not stop tracking an existing file or erase its history.</p></div>
</div>
</div>

<!--
Put .gitignore in the repository root for these examples. It is a plain text file, with one pattern per line; # starts a comment. These patterns exclude a local .env file, build output, Python caches, and macOS metadata. Choose patterns that fit the project, rather than ignoring source files or every document.
Reveal the example, then the sharing box, then the already-tracked caveat. Show git status before and after adding a temporary ignored file if time permits. Commit .gitignore itself. For an already tracked file that should remain local, git rm --cached filename removes it from tracking while leaving the working copy, then commit that change with team coordination. Ignoring or untracking does not erase earlier commits. If a real secret was committed, revoke or rotate it.
-->

---
glowSeed: 229
---

# Good Git Etiquette

<div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-xl">
<div v-click class="git-box"><strong class="text-blue-300">Start up to date</strong><div class="text-lg mt-2">Check your branch and status. Pull before beginning.</div></div>
<div v-click class="git-box"><strong class="text-teal-300">Make focused commits</strong><div class="text-lg mt-2">Use clear messages and review what you staged.</div></div>
<div v-click class="git-box"><strong class="text-blue-300">Keep shared code usable</strong><div class="text-lg mt-2">Test changes and ask for review before merging.</div></div>
<div v-click class="git-box"><strong class="text-teal-300">Coordinate with teammates</strong><div class="text-lg mt-2">Discuss overlapping work and resolve conflicts together.</div></div>
<div v-click class="git-box"><strong class="text-blue-300">Keep secrets out</strong><div class="text-lg mt-2">Ignore credentials, generated files, and local settings.</div></div>
<div v-click class="git-box"><strong class="text-teal-300">Respect shared history</strong><div class="text-lg mt-2">Avoid force-pushing shared branches.</div></div>
</div>

<!--
Close by returning to the workflow: pull, edit, stage, commit, push; use a feature branch and PR when collaborating. Small, coherent changes are easier to review and recover. Read git diff --staged before committing, and use .gitignore for files that should stay local. Ignoring a file does not remove it if it is already tracked. If a credential was exposed, revoke or rotate it; deleting the current file alone does not remove history. Ask for help before rewriting shared history. Leave time for questions.
-->
