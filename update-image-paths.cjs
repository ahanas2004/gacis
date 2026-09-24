const fs = require('fs');
const path = require('path');

const dataDir = 'C:\\Users\\ahana\\.gemini\\antigravity-ide\\scratch\\gacis\\src\\data';
const files = ['services.js', 'industries.js', 'articles.js', 'serviceCatalog.js'];

// Map of original image names to webp names
const imageMap = {
  'air_freight_cargo.png': 'air_freight_cargo.webp',
  'sea_freight_vessel.png': 'sea_freight_vessel.webp',
  'lcl-consolidation.png': 'lcl-consolidation.webp',
  'exw-fca-shipments.png': 'exw-fca-shipments.webp',
  'REEFER COLD-CHAIN LOGISTICS.png': 'REEFER COLD-CHAIN LOGISTICS.webp',
  'CORRIDOR SPECIALIZATION.png': 'CORRIDOR SPECIALIZATION.webp',
  'industry_hazmat.png': 'industry_hazmat.webp',
  'NTERNATIONAL ROAD TRANSPORT.png': 'NTERNATIONAL ROAD TRANSPORT.webp',
  'rail-corridors.png': 'rail-corridors.webp',
  'ROJECT LOGISTICS and HEAVY-LIFT TRANSPORTATION..png': 'ROJECT LOGISTICS and HEAVY-LIFT TRANSPORTATION..webp',
  'industry_automotive.png': 'industry_automotive.webp',
  'industry_pharma.png': 'industry_pharma.webp',
  'industry_energy.png': 'industry_energy.webp',
  'HIGH-SECURITY ELECTRONICS & AIR CARGO LOGISTICS..png': 'HIGH-SECURITY ELECTRONICS & AIR CARGO LOGISTICS..webp',
  'MARITIME & RETAIL DISTRIBUTION..png': 'MARITIME & RETAIL DISTRIBUTION..webp',
  'industry_manufacturing.png': 'industry_manufacturing.webp',
  'EXTREME ENVIRONMENT PROJECT LOGISTICS..png': 'EXTREME ENVIRONMENT PROJECT LOGISTICS..webp',
  'HAZARDOUS MATERIALS AND CHEMICAL CARGO HANDLING.png': 'HAZARDOUS MATERIALS AND CHEMICAL CARGO HANDLING.webp',
  'diff_compliance.png': 'diff_compliance.webp',
  'diff_network.png': 'diff_network.webp',
  'diff_transform.png': 'diff_transform.webp',
  'ENERGY.png': 'ENERGY.webp',
  'AIR FREIGHT.png': 'AIR FREIGHT.webp',
  'AUTOMOTIVE.png': 'AUTOMOTIVE.webp',
  'MANUFACTURING.png': 'MANUFACTURING.webp',
  'PHARMACEUTICALS.png': 'PHARMACEUTICALS.webp',
  'SEA FREIGHT.png': 'SEA FREIGHT.webp',
  'MULTIMODAL ORCHESTRATION.png': 'MULTIMODAL ORCHESTRATION.webp',
  'HAZMAT.png': 'HAZMAT.webp',
  'REGULATORY & TRADE COMPLIANCE.png': 'REGULATORY & TRADE COMPLIANCE.webp',
  'sustainability-gacis.png': 'sustainability-gacis.webp',
  'about-gacis-office.png': 'about-gacis-office.webp',
  'about-gacis-office - Copy.png': 'about-gacis-office - Copy.webp',
  'hero_bg.png': 'hero_bg.webp',
  'HERO.png': 'HERO.webp',
  'industry_hazmat.png': 'industry_hazmat.webp',
};

function updateFile(filename) {
  const filePath = path.join(dataDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace .png with .webp in image paths
  for (const [png, webp] of Object.entries(imageMap)) {
    const pngPath = '/images/' + png;
    const webpPath = '/images/' + webp;
    content = content.replace(new RegExp(pngPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), webpPath);
  }
  
  // Also add webpSrc property to each object that has an image
  // This is a more complex transformation - we'll just update the image paths for now
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + filename);
}

files.forEach(updateFile);
console.log('All data files updated');