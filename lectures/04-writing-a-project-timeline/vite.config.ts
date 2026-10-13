import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// process.cwd() is the deck directory (e.g. Presentations/01-foo), which is a
// real directory — only the files inside it (like this one) are symlinks.
// Go up two levels to the "Senior Seminar" repo root so fs.allow covers the
// shared slidev_template/ directory that style.css, uno.config.ts, etc. are
// symlinked from.
export default defineConfig({
  server: {
    fs: {
      allow: [resolve(process.cwd(), '../..')],
    },
  },
})
