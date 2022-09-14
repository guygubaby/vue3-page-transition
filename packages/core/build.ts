import type { Format, Plugin } from 'esbuild'
import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

const finish = (format: Format) => console.log(`${format} Build finished`)

const buildBundle = async (format: Format) => {
  const ext = format === 'esm' ? 'mjs' : 'js'
  const outfile = `dist/index.${ext}`

  await build({
    format,
    entryPoints: ['./src/index.ts'],
    external: ['vue', 'vue-router'],
    charset: 'utf8',
    outfile,
    target: ['es2016'],
    bundle: true,
    plugins: [sassPlugin() as Plugin],
  })

  finish(format)
}

const buildAll = async () => {
  const formats: Format[] = ['esm', 'cjs']
  const jobs = formats.map(format => buildBundle(format))
  await Promise.all(jobs)
}

buildAll().catch(console.error)
