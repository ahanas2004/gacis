const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'C:\\Users\\ahana\\.gemini\\antigravity-ide\\scratch\\gacis\\public\\images';
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

async function convertAll() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    if (stats.size > 500000) { // Only convert files > 500KB
      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(imagesDir, outputName);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        const outStats = fs.statSync(outputPath);
        const outSizeMB = (outStats.size / 1024 / 1024).toFixed(2);
        const savings = ((1 - outStats.size / stats.size) * 100).toFixed(1);
        console.log(file + ' (' + sizeMB + 'MB) -> ' + outputName + ' (' + outSizeMB + 'MB) [' + savings + '% savings]');
      } catch (e) {
        console.error('Failed to convert ' + file + ':', e.message);
      }
    }
  }
}

convertAll();