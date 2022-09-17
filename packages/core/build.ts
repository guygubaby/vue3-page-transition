import { readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Format, Plugin } from 'esbuild'
import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

const finish = (format: Format) => console.log(`${format} Build finished`)

const injectStyle = async (file: string) => {
  const isEsModule = file.endsWith('.mjs')
  const injectStyleStr = isEsModule ? 'import "./index.css"\n' : 'require("./index.css")\n'
  const raw = await readFile(file, 'utf-8')
  await writeFile(file, injectStyleStr + raw)
}

const postBuild = async () => {
  const cwd = process.cwd()
  const distFolder = resolve(cwd, 'dist')
  const files = (await readdir(distFolder))
    .filter(file => file.endsWith('js'))
    .map(file => resolve(distFolder, file))
  await Promise.all(files.map(injectStyle))
}

const injectImportStylePlugin: Plugin = {
  name: 'esbuild-plugin-inject-import-style',
  setup(build) {
    build.onEnd(async ({ errors, warnings }) => {
      const isSuccess = errors.length === 0 && warnings.length === 0
      if (isSuccess)
        await postBuild()
    })
  },
}

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
    plugins: [
      sassPlugin({
        type: 'css',
      }) as Plugin,
      injectImportStylePlugin,
    ],
  })

  finish(format)
}

const buildAll = async () => {
  const formats: Format[] = ['esm', 'cjs']
  const jobs = formats.map(format => buildBundle(format))
  await Promise.all(jobs)
}

buildAll().catch(console.error)
