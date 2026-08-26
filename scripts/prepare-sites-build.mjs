import { mkdir, readdir, rename, rm } from 'node:fs/promises'
import { join } from 'node:path'

const outputDirectory = new URL('../dist/', import.meta.url)
const clientDirectory = new URL('../dist/client/', import.meta.url)
const preservedEntries = new Set(['.openai', 'client', 'server'])

await rm(clientDirectory, { recursive: true, force: true })
await mkdir(clientDirectory, { recursive: true })

for (const entry of await readdir(outputDirectory)) {
  if (preservedEntries.has(entry)) continue

  await rename(
    join(outputDirectory.pathname, entry),
    join(clientDirectory.pathname, entry),
  )
}
