// Builds every lecture in lectures/ with Slidev and assembles a static site in _site/
// (landing page + one sub-folder per lecture), ready for GitHub Pages.
//
//   node scripts/build-site.mjs                 # full build
//   node scripts/build-site.mjs 05 07           # only lectures whose folder starts with 05 / 07
//   SITE_BASE=/ node scripts/build-site.mjs     # override the URL base (default /senior-design/)
import { execSync } from 'node:child_process'
import { copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, '_site')
const base = (process.env.SITE_BASE ?? '/senior-design/').replace(/\/?$/, '/')
const only = process.argv.slice(2)

const lstatSyncSafe = (p) => { try { return lstatSync(p) } catch { return null } }
// Speaker notes are the <!-- ... --> blocks at the start of a line (outside code fences). Slidev bundles
// them into the built JS even when presenter mode is off, so the published site is built from a copy of
// slides.md with them removed. The source file is restored afterwards. Set KEEP_NOTES=1 to keep them.
function stripNotes(md) {
  let inFence = false
  let inNote = false
  return md
    .split('\n')
    .filter((line) => {
      if (inNote) {
        if (line.includes('-->')) inNote = false
        return false
      }
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      if (!inFence && line.startsWith('<!--')) {
        inNote = !line.includes('-->')
        return false
      }
      return true
    })
    .join('\n')
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const unquote = (s) => s.trim().replace(/^(['"])(.*)\1$/, '$2')

function readMeta(dir) {
  const md = readFileSync(join(root, 'lectures', dir, 'slides.md'), 'utf8')
  const fm = md.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
  const title = unquote(fm.match(/^title:\s*(.+)$/m)?.[1] ?? dir)
  const info = fm.match(/^info:\s*([\s\S]*?)(?=^\S|$(?![\s\S]))/m)?.[1] ?? ''
  const description = info
    .replace(/^[|>][-+]?\s*$/m, '')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('##'))
    .map(unquote)
    .join(' ')
    // Some decks prefix a "Senior Seminar · Fall 2026 ·" style line; keep only the descriptive tail.
    .replace(/^Senior Seminar\s*[•·]\s*(Fall 2026\s*[•·]\s*|Lecture \d+\s*[•·]\s*)/, '')
    .replace(/^Senior Design I+ — /, '')
  const number = dir.match(/^(\d+)/)[1]
  return { dir, number, title, description }
}

const lectures = readdirSync(join(root, 'lectures'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^\d+-/.test(d.name))
  .map((d) => d.name)
  .sort()

const selected = only.length ? lectures.filter((d) => only.some((p) => d.startsWith(p))) : lectures

if (!only.length) rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

// All decks share one dependency set (slidev_template/package.json): install it once and link it
// into each deck, instead of a ~500 MB install per lecture.
const sharedModules = join(root, 'slidev_template', 'node_modules')
if (!existsSync(sharedModules)) {
  execSync('npm ci --no-audit --no-fund', {
    cwd: join(root, 'slidev_template'),
    stdio: 'inherit',
    env: { ...process.env, PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: '1' },
  })
}

for (const dir of selected) {
  const cwd = join(root, 'lectures', dir)
  console.log(`\n=== ${dir} ===`)
  const link = join(cwd, 'node_modules')
  if (!existsSync(link) && !lstatSyncSafe(link)) symlinkSync('../../slidev_template/node_modules', link)
  const slides = join(cwd, 'slides.md')
  const backup = join(cwd, '.slides.md.bak')
  const strip = !process.env.KEEP_NOTES
  if (strip) {
    copyFileSync(slides, backup)
    writeFileSync(slides, stripNotes(readFileSync(slides, 'utf8')))
  }
  try {
    execSync(`npx slidev build --base ${base}${dir}/ --out ${join(outDir, dir)}`, { cwd, stdio: 'inherit' })
  } finally {
    if (strip) {
      copyFileSync(backup, slides)
      rmSync(backup)
    }
  }
}

const meta = lectures.map(readMeta)
const tiles = meta
  .map(
    (m) => `      <a class="tile" href="${m.dir}/">
        <span class="num">${m.number}</span>
        <h2>${esc(m.title)}</h2>
        <p>${esc(m.description)}</p>
        <span class="open">Open slides →</span>
      </a>`,
  )
  .join('\n')

writeFileSync(
  join(outDir, 'index.html'),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Senior Design — Lecture Slides</title>
  <meta name="description" content="Lecture slides for the Vanderbilt ECE Senior Design sequence.">
  <style>
    :root { --bg:#0b1020; --card:#141b2f; --card-hover:#1b2542; --border:#27324f; --text:#e8ecf6; --muted:#9aa6c4; --accent:#6aa8ff; }
    @media (prefers-color-scheme: light) {
      :root { --bg:#f5f7fb; --card:#fff; --card-hover:#f0f5ff; --border:#d9e0ee; --text:#14192b; --muted:#5a6684; --accent:#2563eb; }
    }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--bg); color:var(--text); font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }
    .wrap { max-width:1100px; margin:0 auto; padding:0 16px 64px; }
    header { padding:72px 0 40px; }
    header .eyebrow { color:var(--accent); font-weight:600; letter-spacing:.08em; text-transform:uppercase; font-size:.8rem; }
    h1 { font-size:clamp(2rem,5vw,3rem); margin:.3em 0 .2em; line-height:1.15; }
    header p { color:var(--muted); max-width:60ch; margin:0; font-size:1.05rem; }
    .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; }
    .tile { position:relative; display:flex; flex-direction:column; gap:6px; padding:20px; background:var(--card); border:1px solid var(--border); border-radius:14px; color:inherit; text-decoration:none; transition:transform .12s, border-color .12s, background .12s; }
    .tile:hover, .tile:focus-visible { transform:translateY(-3px); border-color:var(--accent); background:var(--card-hover); outline:none; }
    .num { font-size:.8rem; font-weight:700; color:var(--accent); letter-spacing:.06em; }
    .tile h2 { margin:0; font-size:1.15rem; line-height:1.3; }
    .tile p { margin:0; color:var(--muted); font-size:.9rem; flex:1; }
    .open { margin-top:10px; font-size:.85rem; font-weight:600; color:var(--accent); }
    footer { margin-top:48px; color:var(--muted); font-size:.85rem; }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="eyebrow">Vanderbilt ECE · Senior Design</div>
      <h1>Lecture Slides</h1>
      <p>Pick a lecture to open its slides. Inside a deck: arrow keys to navigate, <kbd>o</kbd> for the overview, <kbd>f</kbd> for fullscreen.</p>
    </header>
    <main class="grid">
${tiles}
    </main>
    <footer>Built with Slidev and hosted on GitHub Pages.</footer>
  </div>
</body>
</html>
`,
)
writeFileSync(join(outDir, '.nojekyll'), '')
console.log(`\nSite written to ${outDir}`)
