import { join } from 'path'
import { copyFileSync } from 'fs'

const copyReadme = () => {
  const srcPath = join(__dirname, '../README.md')
  const cwd = process.cwd()
  const destPath = join(cwd, 'README.md')
  copyFileSync(srcPath, destPath)
}

copyReadme()
