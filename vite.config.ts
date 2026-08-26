import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { sites } from '@openai/sites-vite-plugin'

const sitesStaticWorker = (): Plugin => ({
  name: 'sites-static-worker',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'server/index.js',
      source: `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const url = new URL(request.url)
    url.pathname = '/'
    return env.ASSETS.fetch(new Request(url, request))
  },
}\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sites(), sitesStaticWorker()],
})
