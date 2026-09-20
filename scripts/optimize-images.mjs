import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

const photos = [
  'hero_bg.png',
  'air_freight_cargo.png',
  'diff_compliance.png',
  'diff_network.png',
  'diff_transform.png',
  'sea_freight_vessel.png',
  'industry_automotive.png',
  'industry_pharma.png',
  'industry_energy.png',
  'industry_electronics.png',
  'industry_retail.png',
  'industry_manufacturing.png',
  'industry_hazmat.png',
  'industry_construction.png'
];

async function optimizePhoto(file) {
  const input = path.join(imagesDir, file);
  if (!fs.existsSync(input)) {
    console.warn('skip missing', file);
    return;
  }

  const base = file.replace(/\.[^.]+$/, '');
  const image = sharp(input);
  const meta = await image.metadata();
  const width = Math.min(meta.width || 1920, 1920);

  const pngBuffer = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 7 })
    .toBuffer();

  await fs.promises.writeFile(input, pngBuffer);

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(imagesDir, `${base}.webp`));

  console.log(`${file}: ${meta.width}x${meta.height} → png ${pngBuffer.length} bytes + webp`);
}

async function heroSrcset() {
  const input = path.join(imagesDir, 'hero_bg.png');
  if (!fs.existsSync(input)) return;

  for (const w of [768, 1280, 1920]) {
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(path.join(imagesDir, `hero_bg-${w}.webp`));
  }
}

async function compactLogo() {
  const png = path.join(imagesDir, 'logo.png');
  if (!fs.existsSync(png)) return;

  await sharp(png)
    .resize({ width: 256, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'logo-256.png'));

  await sharp(png)
    .resize({ width: 32, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'favicon.png'));
}

await Promise.all(photos.map(optimizePhoto));
await heroSrcset();
await compactLogo();
console.log('image optimization complete');
