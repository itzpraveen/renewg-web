/*
  Generates a 1200x630 Open Graph image at public/og-image.png
*/
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'renewg-logo.png');
const outPath = path.join(publicDir, 'og-image.png');

const logoBase64 = fs.readFileSync(logoPath).toString('base64');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2EB872" />
      <stop offset="1" stop-color="#1C8F55" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="rgba(255,255,255,0.08)"/>
  <image href="data:image/png;base64,${logoBase64}" x="60" y="70" height="90" preserveAspectRatio="xMinYMin meet"/>
  <g fill="#ffffff">
    <text x="60" y="210" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="60" font-weight="700">Redesigning nation's renewable energy</text>
    <text x="60" y="280" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="34" opacity="0.9">Solar EPC • Hybrid Storage • EV Charging</text>
    <text x="60" y="330" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="28" opacity="0.9">Karnataka • PM Surya Ghar • C&amp;I and Residential</text>
  </g>
  <g>
    <rect x="60" y="480" width="440" height="72" rx="12" fill="#ffffff"/>
    <text x="84" y="528" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="36" fill="#1C8F55" font-weight="700">renewg.in</text>
  </g>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Generated', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
