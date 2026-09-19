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
    const fallback = await env.ASSETS.fetch(new Request(url, request))
    const path = new URL(request.url).pathname
    const pages = {
      '/nl/it-consultant-mkb': {
        lang: 'nl',
        title: 'IT-consultant voor MKB | AI-automatisering | BigTreeTech',
        description: 'Senior IT-consultant voor het MKB. Eén technologiepartner voor praktisch advies, AI-automatisering en professionele websites in Nederland.',
      },
      '/agency-technology-partner': {
        lang: 'en',
        title: 'White-label Technology Partner for Agencies | BigTreeTech',
        description: 'Extend your agency with senior web, software, automation, cloud, and security delivery coordinated by one accountable technology partner.',
      },
    }
    const page = pages[path]
    if (!page) return fallback

    const html = await fallback.text()
    const title = page.title
    const description = page.description
    const canonical = 'https://bigtreetech.it' + path
    const localized = html
      .replace('<html lang="en">', '<html lang="' + page.lang + '">')
      .replace(/<title>[^<]*<\\/title>/, '<title>' + title + '</title>')
      .replace(/<meta name="description" content="[^"]*" \\/>/, '<meta name="description" content="' + description + '" />')
      .replace(/<link rel="canonical" href="[^"]*" \\/>/, '<link rel="canonical" href="' + canonical + '" />')
      .replace(/<meta property="og:title" content="[^"]*" \\/>/, '<meta property="og:title" content="' + title + '" />')
      .replace(/<meta property="og:description" content="[^"]*" \\/>/, '<meta property="og:description" content="' + description + '" />')
      .replace(/<meta property="og:url" content="[^"]*" \\/>/, '<meta property="og:url" content="' + canonical + '" />')
    return new Response(localized, { status: 200, headers: { 'content-type': 'text/html; charset=UTF-8' } })
  },
}\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sites(), sitesStaticWorker()],
})
