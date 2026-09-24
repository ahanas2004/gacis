const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'C:\\Users\\ahana\\.gemini\\antigravity-ide\\scratch\\gacis\\public\\images';

// Convert logo.png
const logoPath = path.join(imagesDir, 'logo.png');
if (fs.existsSync(logoPath)) {
  const stats = fs.statSync(logoPath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  const outputName = 'logo.webp';
  const outputPath = path.join(imagesDir, outputName);
  
  sharp(logoPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath)
    .then(() => {
      const outStats = fs.statSync(outputPath);
      const outSizeMB = (outStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - outStats.size / stats.size) * 100).toFixed(1);
      console.log('logo.png (' + sizeMB + 'MB) -> ' + outputName + ' (' + outSizeMB + 'MB) [' + savings + '% savings]');
    })
    .catch(e => console.error('Failed to convert logo.png:', e.message));
}