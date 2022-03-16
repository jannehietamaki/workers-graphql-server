import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  await build({
    plugins: [NodeModulesPolyfillPlugin()],
    bundle: true,
    sourcemap: true,
    format: 'esm',
    target: 'esnext',
    entryPoints: [path.join(__dirname, 'src', 'index.ts')],
    outdir: path.join(__dirname, 'dist'),
    outExtension: { '.js': '.mjs' },
  })
} catch (e) {
  console.log('Failed!', e)
  process.exitCode = 1
}
