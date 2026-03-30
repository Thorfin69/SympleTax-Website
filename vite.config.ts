import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { buildSitemapXml } from './src/app/data/sitemapXml'

function sympletaxSitemapPlugin(): Plugin {
  return {
    name: 'sympletax-sitemap-xml',
    closeBundle() {
      const base = String(process.env.VITE_SITE_ORIGIN ?? 'https://www.sympletax.com').replace(
        /\/$/,
        ''
      )
      const xml = buildSitemapXml(base)
      const outDir = path.resolve(__dirname, 'dist')
      const publicDir = path.resolve(__dirname, 'public')
      fs.mkdirSync(outDir, { recursive: true })
      for (const name of ['sitemap.xml', 'sympletax.xml'] as const) {
        fs.writeFileSync(path.join(outDir, name), xml, 'utf8')
        fs.writeFileSync(path.join(publicDir, name), xml, 'utf8')
      }
    },
  }
}

function injectSiteOriginInHtml(): Plugin {
  return {
    name: 'sympletax-html-site-origin',
    transformIndexHtml(html) {
      const origin = String(process.env.VITE_SITE_ORIGIN ?? 'https://www.sympletax.com').replace(
        /\/$/,
        ''
      )
      return html.replace(/__SITE_ORIGIN__/g, origin)
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    injectSiteOriginInHtml(),
    sympletaxSitemapPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
