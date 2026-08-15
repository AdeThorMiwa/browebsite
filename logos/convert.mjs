import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const files = [
  { input: 'bro-icon-dark.svg',    scale: 4 },
  { input: 'bro-icon-green.svg',   scale: 4 },
  { input: 'bro-wordmark-white.svg', scale: 4 },
  { input: 'bro-wordmark-dark.svg',  scale: 4 },
  { input: 'bro-lockup-dark.svg',    scale: 4 },
  { input: 'bro-lockup-green.svg',   scale: 4 },
  { input: 'bro-lockup-light.svg',   scale: 4 },
]

for (const { input, scale } of files) {
  const svg = readFileSync(join(__dirname, input), 'utf8')
  const resvg = new Resvg(svg, { fitTo: { mode: 'zoom', value: scale } })
  const png = resvg.render().asPng()
  const out = input.replace('.svg', '.png')
  writeFileSync(join(__dirname, out), png)
  console.log(`✓ ${out}`)
}

// favicon at 64x64 and 192x192
const faviconSvg = readFileSync(join(__dirname, '../public/favicon.svg'), 'utf8')

const fav32 = new Resvg(faviconSvg, { fitTo: { mode: 'width', value: 64 } })
writeFileSync(join(__dirname, '../public/favicon-64.png'), fav32.render().asPng())
console.log('✓ favicon-64.png')

const fav192 = new Resvg(faviconSvg, { fitTo: { mode: 'width', value: 192 } })
writeFileSync(join(__dirname, '../public/favicon-192.png'), fav192.render().asPng())
console.log('✓ favicon-192.png')
