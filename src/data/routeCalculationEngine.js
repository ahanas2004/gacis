// ═══════════════════════════════════════════════════════════════════════════
// GACIS Multimodal Route Calculation Engine
// Real-time logistics calculations based on Haversine distances,
// GLEC Framework v3.0 emission factors, and segment-by-segment transit modeling
// ═══════════════════════════════════════════════════════════════════════════

// ─── Hub / Port / Terminal Database ───────────────────────────────────────
// All coordinates are real geographic positions (WGS84)
export const hubDatabase = {
  'dubai': {
    id: 'dubai', label: 'Dubai (DXB / Jebel Ali)', shortLabel: 'Dubai',
    flag: '🇦🇪', country: 'UAE',
    lat: 25.2048, lng: 55.2708,
    type: 'multimodal',
    capabilities: ['seaport', 'airport', 'freezone', 'cold-chain', 'dg-certified'],
    portName: 'Jebel Ali Port',
    customsDwell: 0.5,
    transshipmentTime: 0.4,
    region: 'gulf'
  },
  'almaty': {
    id: 'almaty', label: 'Almaty Logistics Park', shortLabel: 'Almaty',
    flag: '🇰🇿', country: 'Kazakhstan',
    lat: 43.2220, lng: 76.8512,
    type: 'inland',
    capabilities: ['rail-terminal', 'dry-port', 'bonded-warehouse'],
    portName: 'Almaty Dry Port',
    customsDwell: 0.6,
    transshipmentTime: 0.3,
    region: 'central-asia'
  },
  'chennai': {
    id: 'chennai', label: 'Chennai Port / Airport', shortLabel: 'Chennai',
    flag: '🇮🇳', country: 'India',
    lat: 13.0827, lng: 80.2707,
    type: 'multimodal',
    capabilities: ['seaport', 'airport', 'cold-chain', 'pharma-gdp'],
    portName: 'Chennai Port Trust',
    customsDwell: 0.7,
    transshipmentTime: 0.4,
    region: 'south-asia'
  },
  'frankfurt': {
    id: 'frankfurt', label: 'Frankfurt CargoCity', shortLabel: 'Frankfurt',
    flag: '🇩🇪', country: 'Germany',
    lat: 50.0379, lng: 8.5622,
    type: 'multimodal',
    capabilities: ['airport', 'rail-terminal', 'cold-chain', 'pharma-gdp', 'dg-certified'],
    portName: 'Frankfurt CargoCity South',
    customsDwell: 0.3,
    transshipmentTime: 0.3,
    region: 'europe'
  },
  'london': {
    id: 'london', label: 'London Heathrow / Tilbury', shortLabel: 'London',
    flag: '🇬🇧', country: 'United Kingdom',
    lat: 51.4700, lng: -0.4543,
    type: 'multimodal',
    capabilities: ['airport', 'seaport', 'cold-chain'],
    portName: 'London Heathrow / Tilbury Port',
    customsDwell: 0.4,
    transshipmentTime: 0.3,
    region: 'europe'
  },
  'tashkent': {
    id: 'tashkent', label: 'Tashkent Rail Dry Port', shortLabel: 'Tashkent',
    flag: '🇺🇿', country: 'Uzbekistan',
    lat: 41.2995, lng: 69.2401,
    type: 'rail-hub',
    capabilities: ['rail-terminal', 'dry-port', 'bonded-warehouse'],
    portName: 'Tashkent Intermodal Railhead',
    customsDwell: 0.7,
    transshipmentTime: 0.4,
    region: 'central-asia'
  },
  'colombo': {
    id: 'colombo', label: 'Colombo Port', shortLabel: 'Colombo',
    flag: '🇱🇰', country: 'Sri Lanka',
    lat: 6.9271, lng: 79.8612,
    type: 'seaport',
    capabilities: ['seaport', 'transshipment-hub', 'cold-chain'],
    portName: 'Colombo International Container Terminal',
    customsDwell: 0.6,
    transshipmentTime: 0.5,
    region: 'south-asia'
  },
  'klang': {
    id: 'klang', label: 'Port Klang', shortLabel: 'Klang',
    flag: '🇲🇾', country: 'Malaysia',
    lat: 3.0319, lng: 101.3685,
    type: 'seaport',
    capabilities: ['seaport', 'transshipment-hub', 'freezone'],
    portName: 'Port Klang (Northport)',
    customsDwell: 0.5,
    transshipmentTime: 0.4,
    region: 'southeast-asia'
  },
  'riyadh': {
    id: 'riyadh', label: 'Riyadh Dry Port', shortLabel: 'Riyadh',
    flag: '🇸🇦', country: 'Saudi Arabia',
    lat: 24.7136, lng: 46.6753,
    type: 'inland',
    capabilities: ['dry-port', 'rail-terminal', 'bonded-warehouse'],
    portName: 'Riyadh Dry Port (SAR)',
    customsDwell: 0.6,
    transshipmentTime: 0.4,
    region: 'gulf'
  },
  'aktau': {
    id: 'aktau', label: 'Aktau Caspian Port', shortLabel: 'Aktau',
    flag: '🇰🇿', country: 'Kazakhstan',
    lat: 43.6500, lng: 51.1500,
    type: 'seaport',
    capabilities: ['seaport', 'rail-terminal', 'caspian-gateway'],
    portName: 'Port of Aktau',
    customsDwell: 0.5,
    transshipmentTime: 0.5,
    region: 'caspian'
  },
  'istanbul': {
    id: 'istanbul', label: 'Istanbul Ambarli / IST', shortLabel: 'Istanbul',
    flag: '🇹🇷', country: 'Turkey',
    lat: 41.0082, lng: 28.9784,
    type: 'multimodal',
    capabilities: ['seaport', 'airport', 'rail-terminal', 'cold-chain'],
    portName: 'Ambarli Port / Istanbul Airport',
    customsDwell: 0.4,
    transshipmentTime: 0.4,
    region: 'europe'
  },
  'mumbai': {
    id: 'mumbai', label: 'Mumbai JNPT / BOM', shortLabel: 'Mumbai',
    flag: '🇮🇳', country: 'India',
    lat: 19.0760, lng: 72.8777,
    type: 'multimodal',
    capabilities: ['seaport', 'airport', 'cold-chain', 'dg-certified'],
    portName: 'Jawaharlal Nehru Port Trust',
    customsDwell: 0.7,
    transshipmentTime: 0.5,
    region: 'south-asia'
  },
  'jeddah': {
    id: 'jeddah', label: 'Jeddah Islamic Port', shortLabel: 'Jeddah',
    flag: '🇸🇦', country: 'Saudi Arabia',
    lat: 21.5433, lng: 39.1728,
    type: 'seaport',
    capabilities: ['seaport', 'freezone', 'cold-chain'],
    portName: 'Jeddah Islamic Port',
    customsDwell: 0.6,
    transshipmentTime: 0.4,
    region: 'gulf'
  },
  'baku': {
    id: 'baku', label: 'Baku Alat Port', shortLabel: 'Baku',
    flag: '🇦🇿', country: 'Azerbaijan',
    lat: 40.4093, lng: 49.8671,
    type: 'seaport',
    capabilities: ['seaport', 'rail-terminal', 'caspian-gateway'],
    portName: 'Port of Alat',
    customsDwell: 0.6,
    transshipmentTime: 0.5,
    region: 'caspian'
  },
  'karachi': {
    id: 'karachi', label: 'Karachi Port / KHI', shortLabel: 'Karachi',
    flag: '🇵🇰', country: 'Pakistan',
    lat: 24.8607, lng: 67.0011,
    type: 'multimodal',
    capabilities: ['seaport', 'airport', 'bonded-warehouse'],
    portName: 'Karachi Port Trust',
    customsDwell: 0.8,
    transshipmentTime: 0.5,
    region: 'south-asia'
  },
  'hamburg': {
    id: 'hamburg', label: 'Hamburg Port / HAM', shortLabel: 'Hamburg',
    flag: '🇩🇪', country: 'Germany',
    lat: 53.5511, lng: 9.9937,
    type: 'multimodal',
    capabilities: ['seaport', 'rail-terminal', 'cold-chain'],
    portName: 'Port of Hamburg',
    customsDwell: 0.3,
    transshipmentTime: 0.3,
    region: 'europe'
  }
};

// ─── Cargo Type Configuration ─────────────────────────────────────────────
export const cargoTypes = {
  'Industrial Machinery': {
    label: 'Industrial Machinery & Parts',
    weightFactorPerTEU: 14.0,
    handlingExtra: 0,
    costMultiplier: 1.0,
    reliabilityPenalty: 0,
    specialReqs: [],
    description: 'Heavy lift rated, standard stowage'
  },
  'Pharmaceuticals': {
    label: 'GDP Pharmaceuticals (+2\u00B0C to +8\u00B0C)',
    weightFactorPerTEU: 8.5,
    handlingExtra: 0.5,
    costMultiplier: 1.35,
    reliabilityPenalty: -0.3,
    specialReqs: ['cold-chain', 'pharma-gdp'],
    description: 'Active temperature-controlled containers required'
  },
  'Automotive CKD': {
    label: 'Automotive Assembly Parts (CKD)',
    weightFactorPerTEU: 11.5,
    handlingExtra: 0.3,
    costMultiplier: 1.1,
    reliabilityPenalty: 0,
    specialReqs: [],
    description: 'Knock-down kit palletization and sequence loading'
  },
  'High-Tech Electronics': {
    label: 'High-Value Microelectronics',
    weightFactorPerTEU: 7.0,
    handlingExtra: 0.3,
    costMultiplier: 1.25,
    reliabilityPenalty: -0.2,
    specialReqs: [],
    description: 'High-value security escort and insurance coverage'
  },
  'Dangerous Goods': {
    label: 'Dangerous Goods (IATA DGR)',
    weightFactorPerTEU: 10.0,
    handlingExtra: 1.0,
    costMultiplier: 1.55,
    reliabilityPenalty: -1.5,
    specialReqs: ['dg-certified'],
    description: 'IATA/IMDG Class certification and segregation required'
  }
};

// ─── Priority Level Configuration ─────────────────────────────────────────
export const priorityLevels = {
  'Standard': {
    label: 'Standard (Balanced Transit & Cost)',
    transitMultiplier: 1.0,
    costIndexAdd: 0,
    reliabilityBase: 96.5,
    description: 'Optimal balance of cost and speed'
  },
  'Express': {
    label: 'Express (Priority Linehaul)',
    transitMultiplier: 0.82,
    costIndexAdd: 25,
    reliabilityBase: 98.0,
    description: 'Priority slots on all segments'
  },
  'Urgent': {
    label: 'Urgent Charter / Next-Flight-Out',
    transitMultiplier: 0.62,
    costIndexAdd: 45,
    reliabilityBase: 99.2,
    description: 'Dedicated charter / premium express linehaul'
  }
};

// ─── Transport Mode Emission Factors & Speeds ─────────────────────────────
// Based on GLEC Framework v3.0 / IMO Fourth GHG Study / UIC Rail Data
const TRANSPORT_MODES = {
  sea: {
    label: 'Sea Freight',
    speedKmPerDay: 16 * 1.852 * 24,
    co2PerTonneKm: 0.010,
    portDwell: 0.8,
    costFactor: 1.0,
    reliabilityBase: 94.5
  },
  air: {
    label: 'Air Cargo',
    speedKmPerDay: 850 * 24,
    co2PerTonneKm: 0.572,
    groundHandling: 0.8,
    costFactor: 8.5,
    reliabilityBase: 98.5
  },
  rail: {
    label: 'Block Train',
    speedKmPerDay: 650,
    co2PerTonneKm: 0.028,
    terminalDwell: 0.6,
    costFactor: 2.8,
    reliabilityBase: 93.5
  },
  road: {
    label: 'Road Haulage',
    speedKmPerDay: 500,
    co2PerTonneKm: 0.078,
    borderDelay: 0.4,
    costFactor: 3.5,
    reliabilityBase: 96.0
  }
};

// ─── Haversine Distance Calculation ───────────────────────────────────────
function toRad(deg) {
  return deg * (Math.PI / 180);
}

export function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const ROUTING_FACTORS = {
  sea: 1.35,
  air: 1.08,
  rail: 1.22,
  road: 1.32
};

function routedDistance(lat1, lng1, lat2, lng2, mode) {
  const gcDist = haversineDistance(lat1, lng1, lat2, lng2);
  return gcDist * (ROUTING_FACTORS[mode] || 1.2);
}

// ─── Connectivity Graph ───────────────────────────────────────────────────
const CONNECTIVITY = {
  dubai: {
    sea: ['aktau', 'colombo', 'chennai', 'mumbai', 'karachi', 'jeddah', 'klang'],
    air: ['frankfurt', 'london', 'istanbul', 'chennai', 'mumbai', 'tashkent', 'almaty', 'klang', 'colombo', 'karachi', 'riyadh', 'jeddah', 'baku', 'hamburg'],
    road: ['riyadh', 'jeddah'],
    rail: []
  },
  aktau: {
    sea: ['dubai', 'baku'],
    rail: ['tashkent', 'almaty', 'baku'],
    road: ['almaty'],
    air: []
  },
  tashkent: {
    rail: ['aktau', 'almaty', 'baku'],
    road: ['almaty'],
    air: ['dubai', 'istanbul', 'frankfurt'],
    sea: []
  },
  almaty: {
    rail: ['tashkent', 'aktau'],
    road: ['tashkent'],
    air: ['dubai', 'istanbul', 'frankfurt'],
    sea: []
  },
  chennai: {
    sea: ['colombo', 'dubai', 'klang', 'mumbai', 'karachi', 'jeddah'],
    air: ['dubai', 'frankfurt', 'london', 'istanbul', 'mumbai'],
    road: ['mumbai'],
    rail: ['mumbai']
  },
  colombo: {
    sea: ['dubai', 'chennai', 'klang', 'mumbai', 'karachi', 'jeddah'],
    air: ['dubai', 'chennai', 'frankfurt', 'london'],
    road: [],
    rail: []
  },
  klang: {
    sea: ['colombo', 'chennai', 'dubai', 'mumbai', 'jeddah', 'hamburg'],
    air: ['dubai', 'frankfurt', 'london', 'istanbul', 'chennai'],
    road: [],
    rail: []
  },
  frankfurt: {
    air: ['dubai', 'chennai', 'klang', 'colombo', 'istanbul', 'mumbai', 'london', 'tashkent', 'almaty'],
    rail: ['hamburg', 'istanbul'],
    road: ['hamburg', 'london'],
    sea: []
  },
  london: {
    air: ['dubai', 'chennai', 'klang', 'colombo', 'istanbul', 'mumbai', 'frankfurt'],
    road: ['frankfurt', 'hamburg'],
    sea: ['hamburg'],
    rail: ['frankfurt', 'hamburg']
  },
  istanbul: {
    air: ['dubai', 'frankfurt', 'london', 'chennai', 'tashkent', 'almaty', 'baku'],
    sea: ['klang', 'colombo', 'jeddah', 'hamburg'],
    rail: ['frankfurt', 'baku', 'tashkent'],
    road: ['frankfurt', 'baku']
  },
  riyadh: {
    road: ['dubai', 'jeddah'],
    air: ['dubai', 'frankfurt', 'london', 'istanbul', 'chennai'],
    rail: [],
    sea: []
  },
  mumbai: {
    sea: ['dubai', 'colombo', 'klang', 'chennai', 'jeddah', 'karachi'],
    air: ['dubai', 'frankfurt', 'london', 'chennai', 'istanbul'],
    road: ['chennai'],
    rail: ['chennai']
  },
  jeddah: {
    sea: ['dubai', 'colombo', 'chennai', 'mumbai', 'klang', 'karachi', 'istanbul'],
    road: ['riyadh'],
    air: ['dubai', 'frankfurt', 'london', 'istanbul', 'chennai'],
    rail: []
  },
  baku: {
    sea: ['aktau'],
    rail: ['tashkent', 'aktau', 'istanbul'],
    road: ['istanbul'],
    air: ['istanbul', 'dubai', 'frankfurt']
  },
  karachi: {
    sea: ['dubai', 'colombo', 'chennai', 'mumbai', 'jeddah', 'klang'],
    air: ['dubai', 'frankfurt', 'istanbul'],
    road: [],
    rail: []
  },
  hamburg: {
    sea: ['klang', 'colombo', 'istanbul', 'london'],
    rail: ['frankfurt', 'london', 'istanbul'],
    road: ['frankfurt', 'london'],
    air: ['dubai', 'istanbul']
  }
};

// ─── Pathfinding: BFS ─────────────────────────────────────────────────────

// Core BFS that searches using only the specified mode list
function bfsRoute(originId, destId, allowedModes, maxHops = 5) {
  const queue = [[originId, []]];
  const visited = new Set([originId]);

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const conns = CONNECTIVITY[current];
    if (!conns) continue;

    for (const mode of allowedModes) {
      const reachable = conns[mode] || [];
      for (const next of reachable) {
        if (visited.has(next)) continue;
        const newPath = [...path, { from: current, to: next, mode }];
        if (next === destId) return newPath;
        if (newPath.length < maxHops) {
          visited.add(next);
          queue.push([next, newPath]);
        }
      }
    }
  }

  return null; // No route found with these modes
}

function findRoute(originId, destId, preferredMode) {
  if (originId === destId) return null;

  const originConns = CONNECTIVITY[originId];
  if (!originConns) return buildFallbackRoute(originId, destId, preferredMode);

  // For AIR mode, try direct first, then via hub
  if (preferredMode === 'AIR') {
    if (originConns.air && originConns.air.includes(destId)) {
      return [{ from: originId, to: destId, mode: 'air' }];
    }
    // Try via Dubai hub
    if (originConns.air && originConns.air.includes('dubai') &&
        CONNECTIVITY.dubai?.air?.includes(destId)) {
      return [
        { from: originId, to: 'dubai', mode: 'air' },
        { from: 'dubai', to: destId, mode: 'air' }
      ];
    }
    // Fall back to BFS with air-first order
    const airResult = bfsRoute(originId, destId, ['air', 'road', 'rail', 'sea']);
    if (airResult) return airResult;
  }

  // For SEA mode, prefer sea-dominant paths
  if (preferredMode === 'SEA') {
    const seaResult = bfsRoute(originId, destId, ['sea', 'road']);
    if (seaResult) return seaResult;
    const seaRailResult = bfsRoute(originId, destId, ['sea', 'rail', 'road']);
    if (seaRailResult) return seaRailResult;
  }

  // For RAIL mode, prefer rail-dominant paths
  if (preferredMode === 'RAIL') {
    const railResult = bfsRoute(originId, destId, ['rail', 'road']);
    if (railResult) return railResult;
    const railSeaResult = bfsRoute(originId, destId, ['rail', 'sea', 'road']);
    if (railSeaResult) return railSeaResult;
  }

  // For MULTIMODAL — the key fix:
  // First try sea + rail + road (NO air) to get proper multimodal routes
  if (preferredMode === 'Multimodal') {
    const multiResult = bfsRoute(originId, destId, ['sea', 'rail', 'road']);
    if (multiResult) return multiResult;
  }

  // Final fallback: try all modes
  const fullResult = bfsRoute(originId, destId, ['sea', 'rail', 'road', 'air']);
  if (fullResult) return fullResult;

  return buildFallbackRoute(originId, destId, preferredMode);
}

function getModeOrder(preferredMode) {
  switch (preferredMode) {
    case 'AIR': return ['air', 'road', 'rail', 'sea'];
    case 'SEA': return ['sea', 'road', 'rail', 'air'];
    case 'RAIL': return ['rail', 'sea', 'road', 'air'];
    default: return ['sea', 'rail', 'road', 'air']; // Multimodal
  }
}

function buildFallbackRoute(originId, destId, preferredMode) {
  const mode = preferredMode === 'AIR' ? 'air' :
               preferredMode === 'SEA' ? 'sea' :
               preferredMode === 'RAIL' ? 'rail' : 'road';
  return [{ from: originId, to: destId, mode }];
}

// ─── Segment Calculations ─────────────────────────────────────────────────
function calculateSegmentTransit(fromHub, toHub, mode) {
  const dist = routedDistance(fromHub.lat, fromHub.lng, toHub.lat, toHub.lng, mode);
  const modeConfig = TRANSPORT_MODES[mode];
  const travelDays = dist / modeConfig.speedKmPerDay;

  let dwellDays = 0;
  if (mode === 'sea') dwellDays = modeConfig.portDwell;
  else if (mode === 'air') dwellDays = modeConfig.groundHandling;
  else if (mode === 'rail') dwellDays = modeConfig.terminalDwell;
  else if (mode === 'road') dwellDays = modeConfig.borderDelay;

  return {
    distanceKm: Math.round(dist),
    travelDays: Number(travelDays.toFixed(2)),
    dwellDays: Number(dwellDays.toFixed(1)),
    totalDays: Number((travelDays + dwellDays).toFixed(1)),
    mode
  };
}

function calculateSegmentCO2(distanceKm, mode, cargoWeightTonnes) {
  const modeConfig = TRANSPORT_MODES[mode];
  const co2kg = distanceKm * modeConfig.co2PerTonneKm * cargoWeightTonnes;
  return co2kg / 1000;
}

function calculateCostIndex(segments, priority, cargoType) {
  const cargoConfig = cargoTypes[cargoType] || cargoTypes['Industrial Machinery'];
  const priorityConfig = priorityLevels[priority] || priorityLevels['Standard'];

  let baseCost = 0;
  for (const seg of segments) {
    const modeConfig = TRANSPORT_MODES[seg.mode];
    baseCost += (seg.distanceKm / 1000) * modeConfig.costFactor;
  }

  const normalized = Math.min(100, Math.max(15, baseCost * 3.5));
  const adjusted = normalized * cargoConfig.costMultiplier + priorityConfig.costIndexAdd;
  return Math.min(100, Math.round(adjusted));
}

function calculateReliability(segments, priority, cargoType) {
  const cargoConfig = cargoTypes[cargoType] || cargoTypes['Industrial Machinery'];
  const priorityConfig = priorityLevels[priority] || priorityLevels['Standard'];

  // Start from priority baseline, apply a small per-segment penalty
  // More segments = more handoff risk, but not multiplicatively catastrophic
  let combinedReliability = priorityConfig.reliabilityBase;

  for (const seg of segments) {
    const modeConfig = TRANSPORT_MODES[seg.mode];
    // Penalty: each segment reduces reliability by (100 - modeReliability) * 0.15
    const segPenalty = (100 - modeConfig.reliabilityBase) * 0.15;
    combinedReliability -= segPenalty;
  }

  // Additional segment-count penalty: each hop beyond 2 adds 0.3% risk
  if (segments.length > 2) {
    combinedReliability -= (segments.length - 2) * 0.3;
  }

  combinedReliability += cargoConfig.reliabilityPenalty;
  return Number(Math.min(99.8, Math.max(90.0, combinedReliability)).toFixed(1));
}

function assessDelayRisk(mode, segmentCount, position) {
  if (position === 0) return 'Low';
  const riskMap = {
    sea: segmentCount > 3 ? 'Medium' : 'Low',
    air: 'Low',
    rail: 'Medium',
    road: segmentCount > 3 ? 'Medium' : 'Low'
  };
  return riskMap[mode] || 'Low';
}

// ─── Text Generation Helpers ──────────────────────────────────────────────
function generateSequenceDetails(fromHub, toHub, mode, transitDays, position, totalSegments) {
  if (position === 0) {
    return 'Consolidation & Export Customs Clearance';
  }

  const modeDescriptions = {
    sea: ['Direct Ocean Linehaul', 'Feeder Vessel Service', 'Coastal Feeder & Transshipment', 'Trans-Ocean Container Linehaul'],
    air: ['Direct Airfreight Linehaul', 'Scheduled Freighter Connection', 'Air Cargo Express Service'],
    rail: ['Block Train Corridor', 'Intermodal Rail Shuttle', 'Trans-Caspian Rail Connection', 'Railway Linehaul Service'],
    road: ['Final Mile Delivery & DDP Settlement', 'Cross-Border Road Haulage', 'Bonded Trucking Connection', 'Inland Road Transfer']
  };

  const descs = modeDescriptions[mode] || ['Transfer Connection'];
  const desc = descs[position % descs.length];

  if (position === totalSegments - 1) {
    return `Final Mile Delivery & DDP Settlement (${transitDays} Days)`;
  }

  return `${desc} (${transitDays} Days)`;
}

function getPrimaryModeLabel(segments) {
  const distByMode = {};
  for (const seg of segments) {
    distByMode[seg.mode] = (distByMode[seg.mode] || 0) + seg.distanceKm;
  }

  const modes = Object.keys(distByMode);
  if (modes.length === 1) {
    const modeLabels = { sea: 'Full Container Sea Freight', air: 'Direct Air Cargo', rail: 'Trans-Eurasian Block Train', road: 'Full Truck Load (FTL)' };
    return modeLabels[modes[0]] || modes[0];
  }

  const sorted = modes.sort((a, b) => (distByMode[b] || 0) - (distByMode[a] || 0));
  const labels = { sea: 'Sea', air: 'Air', rail: 'Rail', road: 'Road' };
  return `Multimodal (${sorted.map(m => labels[m]).join('-')})`;
}

function generateStrategy(originHub, destHub, segments, carbonSavings, cargoType) {
  const modeSet = new Set(segments.map(s => s.mode));
  const modesUsed = [...modeSet].map(m => TRANSPORT_MODES[m].label).join(', ');

  const hubsVisited = [];
  for (let i = 1; i < segments.length; i++) {
    const hub = hubDatabase[segments[i - 1]?.to];
    if (hub && hub.id !== originHub.id && hub.id !== destHub.id) {
      hubsVisited.push(hub.shortLabel);
    }
  }
  const viaText = hubsVisited.length > 0 ? ` via ${hubsVisited.join(' & ')}` : '';

  const cargoRec = {
    'Industrial Machinery': 'high-value machinery, industrial supplies, and automotive components',
    'Pharmaceuticals': 'temperature-sensitive pharmaceuticals, medical devices, and biotech shipments',
    'Automotive CKD': 'automotive assembly kits, OEM parts, and JIT production components',
    'High-Tech Electronics': 'semiconductor equipment, precision electronics, and high-value tech cargo',
    'Dangerous Goods': 'classified dangerous goods requiring IATA DGR / IMDG Code compliance'
  };

  return `Multimodal corridor integration${viaText} reduces transit volatility while lowering estimated emissions by ${carbonSavings}%. Using ${modesUsed} combination with automated customs pre-clearance. Recommended for ${cargoRec[cargoType] || 'general commercial cargo'}.`;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN CALCULATION FUNCTION
// ═══════════════════════════════════════════════════════════════════════════

export function calculateFullRoute({
  originId,
  destId,
  cargoType = 'Industrial Machinery',
  priority = 'Standard',
  mode = 'Multimodal'
}) {
  const originHub = hubDatabase[originId];
  const destHub = hubDatabase[destId];

  if (!originHub || !destHub || originId === destId) {
    return null;
  }

  const cargoConfig = cargoTypes[cargoType] || cargoTypes['Industrial Machinery'];
  const priorityConfig = priorityLevels[priority] || priorityLevels['Standard'];
  const cargoWeight = cargoConfig.weightFactorPerTEU;

  // 1. Find optimal route segments
  const routeSegments = findRoute(originId, destId, mode);
  if (!routeSegments || routeSegments.length === 0) return null;

  // 2. Calculate each segment
  const detailedSegments = routeSegments.map((seg) => {
    const from = hubDatabase[seg.from];
    const to = hubDatabase[seg.to];
    const transit = calculateSegmentTransit(from, to, seg.mode);
    const co2 = calculateSegmentCO2(transit.distanceKm, seg.mode, cargoWeight);
    return { ...seg, ...transit, co2Tonnes: Number(co2.toFixed(3)) };
  });

  // 3. Total transit time
  const rawTransitDays = detailedSegments.reduce((sum, s) => sum + s.totalDays, 0);
  const totalRawDays = rawTransitDays + originHub.customsDwell + destHub.customsDwell + cargoConfig.handlingExtra;
  const adjustedTransitDays = Number((totalRawDays * priorityConfig.transitMultiplier).toFixed(1));

  // 4. Total CO2 optimized
  const optCO2 = Number(detailedSegments.reduce((sum, s) => sum + s.co2Tonnes, 0).toFixed(2));

  // 5. Conventional CO2 benchmark
  // Benchmark: if the same total route distance were covered entirely by road trucking
  // This represents the realistic "conventional" alternative for the same trade lane
  const totalRouteDist = detailedSegments.reduce((s, seg) => s + seg.distanceKm, 0);
  const gcDist = haversineDistance(originHub.lat, originHub.lng, destHub.lat, destHub.lng);
  const convCO2 = Number(
    (totalRouteDist * TRANSPORT_MODES.road.co2PerTonneKm * cargoWeight / 1000).toFixed(2)
  );

  // 6. Carbon savings percentage
  const carbonSavings = convCO2 > 0
    ? Number(((1 - optCO2 / convCO2) * 100).toFixed(1))
    : 0;

  // 7. Cost index
  const costIndex = calculateCostIndex(detailedSegments, priority, cargoType);

  // 8. Reliability
  const reliability = calculateReliability(detailedSegments, priority, cargoType);

  // 9. Handling points
  const uniqueHubs = new Set();
  for (const seg of routeSegments) {
    uniqueHubs.add(seg.from);
    uniqueHubs.add(seg.to);
  }
  const handlingPoints = String(uniqueHubs.size).padStart(2, '0');

  // 10. Build route sequence for UI
  const sequence = [];
  const allHubIds = [routeSegments[0].from, ...routeSegments.map(s => s.to)];

  for (let i = 0; i < allHubIds.length; i++) {
    const hub = hubDatabase[allHubIds[i]];
    const isOrigin = i === 0;
    const seg = isOrigin ? null : detailedSegments[i - 1];

    sequence.push({
      loc: hub?.portName || hub?.shortLabel || allHubIds[i],
      mode: isOrigin ? 'ORIGIN' : seg.mode.toUpperCase(),
      details: isOrigin
        ? 'Consolidation & Export Customs Clearance'
        : generateSequenceDetails(
            hubDatabase[routeSegments[i - 1].from],
            hub, seg.mode, seg.totalDays, i, allHubIds.length
          ),
      delayRisk: assessDelayRisk(seg?.mode || 'road', allHubIds.length, i)
    });
  }

  // 11. Primary mode label
  const primaryMode = getPrimaryModeLabel(detailedSegments);

  // 12. Strategy text
  const strategy = generateStrategy(originHub, destHub, detailedSegments, carbonSavings, cargoType);

  // 13. Generate alternatives
  const alternatives = generateAlternatives(originId, destId, cargoType, priority, adjustedTransitDays, optCO2, carbonSavings);

  return {
    origin: originHub.shortLabel,
    destination: destHub.shortLabel,
    originFlag: originHub.flag,
    destFlag: destHub.flag,
    transitTime: adjustedTransitDays,
    carbonSavings: Math.max(0, carbonSavings),
    budgetIndex: costIndex,
    reliability,
    optCO2,
    convCO2: Math.max(optCO2 + 0.1, convCO2),
    avoidedCO2: Number(Math.max(0, convCO2 - optCO2).toFixed(2)),
    handlingPoints,
    primaryMode,
    strategy,
    sequence,
    alternatives,
    _meta: {
      totalDistanceKm: detailedSegments.reduce((s, seg) => s + seg.distanceKm, 0),
      segmentCount: detailedSegments.length,
      cargoWeight,
      gcDistKm: Math.round(gcDist)
    }
  };
}

// ─── Alternative Route Generation ─────────────────────────────────────────
function generateAlternatives(originId, destId, cargoType, priority, balancedDays, balancedCO2, balancedSavings) {
  const originHub = hubDatabase[originId];
  const destHub = hubDatabase[destId];
  const cargoConfig = cargoTypes[cargoType] || cargoTypes['Industrial Machinery'];
  const cargoWeight = cargoConfig.weightFactorPerTEU;

  const gcDist = haversineDistance(originHub.lat, originHub.lng, destHub.lat, destHub.lng);

  // FASTEST: Air priority
  const airDist = gcDist * ROUTING_FACTORS.air;
  const airTransitRaw = airDist / TRANSPORT_MODES.air.speedKmPerDay +
                        TRANSPORT_MODES.air.groundHandling +
                        originHub.customsDwell + destHub.customsDwell;
  const airTransit = Number(Math.max(1.2, airTransitRaw).toFixed(1));
  const airCO2 = Number((airDist * TRANSPORT_MODES.air.co2PerTonneKm * cargoWeight / 1000).toFixed(2));

  // LOW_CARBON: Max rail + sea
  const railSeaDist = gcDist * 1.3;
  const railSeaSpeed = (TRANSPORT_MODES.rail.speedKmPerDay + TRANSPORT_MODES.sea.speedKmPerDay) / 2;
  const railSeaTransitRaw = railSeaDist / railSeaSpeed +
                             TRANSPORT_MODES.rail.terminalDwell * 2 +
                             TRANSPORT_MODES.sea.portDwell +
                             originHub.customsDwell + destHub.customsDwell +
                             cargoConfig.handlingExtra;
  const lowCarbonTransit = Number(Math.max(balancedDays * 1.4, railSeaTransitRaw).toFixed(1));
  const lowCarbonCO2Weighted = (railSeaDist * 0.7 * TRANSPORT_MODES.rail.co2PerTonneKm +
                                 railSeaDist * 0.3 * TRANSPORT_MODES.sea.co2PerTonneKm) *
                                cargoWeight / 1000;
  const lowCarbonCO2 = Number(Math.max(0.3, lowCarbonCO2Weighted).toFixed(2));
  const lowCarbonSavings = Number(((1 - lowCarbonCO2 / (airCO2 || 1)) * 100).toFixed(1));

  return [
    {
      type: 'FASTEST',
      label: 'Air Priority Direct',
      time: `${airTransit} Days`,
      cost: airTransit < 2.5 ? '$$$$$' : '$$$$',
      co2: `${airCO2} tCO\u2082e`,
      reliability: `${Number(Math.min(99.5, TRANSPORT_MODES.air.reliabilityBase + 0.5)).toFixed(1)}%`,
      desc: `Charter or scheduled widebody freighter via ${originHub.shortLabel === 'Dubai' ? 'Dubai DWC' : 'direct routing'}.`
    },
    {
      type: 'BALANCED',
      label: 'Multimodal Optimized (Recommended)',
      time: `${balancedDays} Days`,
      cost: '$$',
      co2: `${balancedCO2} tCO\u2082e (-${Math.max(0, balancedSavings).toFixed(1)}%)`,
      reliability: `${Number(Math.max(93.0, calculateReliability(
        [{ mode: 'sea' }, { mode: 'rail' }], priority, cargoType
      ))).toFixed(1)}%`,
      desc: 'Optimized multimodal corridor with customs pre-clearance and end-to-end tracking.'
    },
    {
      type: 'LOW_CARBON',
      label: 'Pure Rail & Inland Water',
      time: `${lowCarbonTransit} Days`,
      cost: '$',
      co2: `${lowCarbonCO2} tCO\u2082e (-${Math.max(0, lowCarbonSavings).toFixed(1)}%)`,
      reliability: `${Number(Math.max(89.0, TRANSPORT_MODES.rail.reliabilityBase - 1)).toFixed(1)}%`,
      desc: 'Maximized rail freight ratio for zero-carbon corporate mandates.'
    }
  ];
}

// ─── Dropdown Helpers ─────────────────────────────────────────────────────
export function getOriginOptions() {
  return Object.values(hubDatabase).map(hub => ({
    value: hub.id,
    label: `${hub.flag} ${hub.label}, ${hub.country}`
  }));
}

export function getDestinationOptions(originId) {
  return Object.values(hubDatabase)
    .filter(hub => hub.id !== originId)
    .map(hub => ({
      value: hub.id,
      label: `${hub.flag} ${hub.label}, ${hub.country}`
    }));
}

export function getCargoOptions() {
  return Object.entries(cargoTypes).map(([key, config]) => ({
    value: key,
    label: config.label
  }));
}

export function getPriorityOptions() {
  return Object.entries(priorityLevels).map(([key, config]) => ({
    value: key,
    label: config.label
  }));
}

export const modeOptions = [
  { value: 'Multimodal', label: 'Optimal Multimodal (Sea-Rail-Road)' },
  { value: 'AIR', label: 'Air Cargo Express Line' },
  { value: 'RAIL', label: 'Trans-Eurasian Block Train' },
  { value: 'SEA', label: 'Deepsea Container Line' }
];
