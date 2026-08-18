// Centralized Corridor & Route Intelligence Data Definition
export const presetRoutes = [
  {
    id: 'dubai-almaty',
    name: 'Gulf to Central Asia Gateway',
    origin: 'Dubai',
    destination: 'Almaty',
    originFlag: '🇦🇪',
    destFlag: '🇰🇿',
    transitTime: 8.4,
    carbonSavings: 31.8,
    budgetIndex: 72,
    reliability: 98.2,
    optCO2: 1.82,
    convCO2: 2.67,
    avoidedCO2: 0.85,
    handlingPoints: '04',
    primaryMode: 'Multimodal (Sea-Rail-Road)',
    strategy: 'Multimodal rail integration via Bandar Abbas & Tashkent reduces transit volatility while lowering estimated emissions by 31.8%. Recommended for high-value machinery, industrial supplies, and automotive components.',
    sequence: [
      { loc: 'Dubai (Jebel Ali Port)', mode: 'ORIGIN', details: 'Consolidation & Export Customs Clearance', delayRisk: 'Low' },
      { loc: 'Bandar Abbas Terminal', mode: 'SEA', details: 'Fast Feeder Vessel Transit (1.8 Days)', delayRisk: 'Low' },
      { loc: 'Tashkent Intermodal Railhead', mode: 'RAIL', details: 'Trans-Caspian Block Train Corridor (4.2 Days)', delayRisk: 'Medium' },
      { loc: 'Almaty Logistics Park', mode: 'ROAD', details: 'Final Mile Delivery & DDP Settlement (2.4 Days)', delayRisk: 'Low' }
    ],
    nodes: [
      { name: 'Dubai', x: 575, y: 245, code: 'DXB' },
      { name: 'Bandar Abbas', x: 605, y: 228, code: 'BND' },
      { name: 'Tashkent', x: 648, y: 190, code: 'TAS' },
      { name: 'Almaty', x: 675, y: 172, code: 'ALA' }
    ],
    alternatives: [
      {
        type: 'FASTEST',
        label: 'Air Priority Direct',
        time: '1.8 Days',
        cost: '$$$$',
        co2: '5.42 tCO₂e',
        reliability: '99.4%',
        desc: 'Charter or scheduled widebody freighter via Dubai DWC.'
      },
      {
        type: 'BALANCED',
        label: 'Multimodal Rail (Recommended)',
        time: '8.4 Days',
        cost: '$$',
        co2: '1.82 tCO₂e (-31.8%)',
        reliability: '98.2%',
        desc: 'Sea feeder to rail shuttle with customs pre-clearance.'
      },
      {
        type: 'LOW_CARBON',
        label: 'Pure Rail & Inland Water',
        time: '12.6 Days',
        cost: '$',
        co2: '1.14 tCO₂e (-57.3%)',
        reliability: '94.0%',
        desc: 'Maximized rail freight ratio for zero-carbon corporate mandates.'
      }
    ]
  },
  {
    id: 'klang-london',
    name: 'Southeast Asia to Western Europe',
    origin: 'Klang',
    destination: 'London',
    originFlag: '🇲🇾',
    destFlag: '🇬🇧',
    transitTime: 22.5,
    carbonSavings: 44.2,
    budgetIndex: 45,
    reliability: 95.5,
    optCO2: 4.12,
    convCO2: 7.38,
    avoidedCO2: 3.26,
    handlingPoints: '05',
    primaryMode: 'Sea-Air Hybrid',
    strategy: 'Integrated Sea-Air corridor via Colombo Port and Dubai Hub minimizes ocean port bottlenecks while cutting conventional pure-air cargo carbon footprints by over 44%.',
    sequence: [
      { loc: 'Port Klang (Northport)', mode: 'ORIGIN', details: 'Export Staging & Container Loading', delayRisk: 'Low' },
      { loc: 'Colombo Transshipment Port', mode: 'SEA', details: 'Direct Indian Ocean Linehaul (4.8 Days)', delayRisk: 'Medium' },
      { loc: 'Dubai Logistics City (DWC)', mode: 'SEA', details: 'Bonded Cross-Dock to Air Terminal (5.2 Days)', delayRisk: 'Low' },
      { loc: 'Frankfurt Gateway (FRA)', mode: 'AIR', details: 'Direct Airfreight Linehaul (0.8 Days)', delayRisk: 'Low' },
      { loc: 'London Heathrow (LHR)', mode: 'ROAD', details: 'Cross-Channel Bonded Shuttles (1.2 Days)', delayRisk: 'Low' }
    ],
    nodes: [
      { name: 'Klang', x: 775, y: 315, code: 'PKG' },
      { name: 'Colombo', x: 695, y: 320, code: 'CMB' },
      { name: 'Dubai', x: 575, y: 245, code: 'DXB' },
      { name: 'Frankfurt', x: 470, y: 125, code: 'FRA' },
      { name: 'London', x: 450, y: 110, code: 'LHR' }
    ],
    alternatives: [
      {
        type: 'FASTEST',
        label: 'Direct Air Cargo',
        time: '3.2 Days',
        cost: '$$$$$',
        co2: '9.80 tCO₂e',
        reliability: '98.5%',
        desc: 'Direct scheduled flight with minimal dwell times.'
      },
      {
        type: 'BALANCED',
        label: 'Sea-Air Hybrid (Recommended)',
        time: '22.5 Days',
        cost: '$$$',
        co2: '4.12 tCO₂e (-44.2%)',
        reliability: '95.5%',
        desc: 'Equilibrium between 38-day pure ocean and pure air costs.'
      },
      {
        type: 'LOW_CARBON',
        label: 'All-Water Green Ocean',
        time: '36.0 Days',
        cost: '$',
        co2: '1.95 tCO₂e (-73.5%)',
        reliability: '91.0%',
        desc: 'Ultra-low emissions via modern slow-steaming megaships.'
      }
    ]
  },
  {
    id: 'chennai-frankfurt',
    name: 'India Pharma & Auto Express',
    origin: 'Chennai',
    destination: 'Frankfurt',
    originFlag: '🇮🇳',
    destFlag: '🇩🇪',
    transitTime: 4.8,
    carbonSavings: 28.4,
    budgetIndex: 84,
    reliability: 99.1,
    optCO2: 2.30,
    convCO2: 3.21,
    avoidedCO2: 0.91,
    handlingPoints: '03',
    primaryMode: 'Temperature-Safe Air Express',
    strategy: 'GDP-certified cold-chain corridor via Dubai DWC. Continuous real-time telematics and active cooling containers guarantee integrity for pharmaceuticals and precision electronics.',
    sequence: [
      { loc: 'Chennai Air Cargo Terminal', mode: 'ORIGIN', details: 'GDP Thermal Packaging & X-Ray Pre-Check', delayRisk: 'Low' },
      { loc: 'Dubai Pharma Hub (DWC)', mode: 'AIR', details: 'Direct Temperature-Monitored Tarmac Transfer', delayRisk: 'Low' },
      { loc: 'Frankfurt CargoCity South', mode: 'AIR', details: 'Rapid Customs Release & European Distribution', delayRisk: 'Low' }
    ],
    nodes: [
      { name: 'Chennai', x: 705, y: 285, code: 'MAA' },
      { name: 'Dubai', x: 575, y: 245, code: 'DXB' },
      { name: 'Frankfurt', x: 470, y: 125, code: 'FRA' }
    ],
    alternatives: [
      {
        type: 'FASTEST',
        label: 'Direct Airfreight (Recommended)',
        time: '4.8 Days',
        cost: '$$$$',
        co2: '2.30 tCO₂e (-28.4%)',
        reliability: '99.1%',
        desc: 'Optimized routing utilizing modern twin-engine freighters.'
      },
      {
        type: 'BALANCED',
        label: 'Sea-Air via Dubai',
        time: '14.0 Days',
        cost: '$$',
        co2: '1.45 tCO₂e (-54.8%)',
        reliability: '96.2%',
        desc: 'Feeder vessel from Chennai to Jebel Ali, onward air to FRA.'
      },
      {
        type: 'LOW_CARBON',
        label: 'Direct Ocean to Hamburg',
        time: '26.0 Days',
        cost: '$',
        co2: '0.88 tCO₂e (-72.5%)',
        reliability: '93.5%',
        desc: 'Full container linehaul followed by German rail freight.'
      }
    ]
  },
  {
    id: 'colombo-tashkent',
    name: 'Indian Ocean to Silk Corridor',
    origin: 'Colombo',
    destination: 'Tashkent',
    originFlag: '🇱🇰',
    destFlag: '🇺🇿',
    transitTime: 11.2,
    carbonSavings: 38.6,
    budgetIndex: 68,
    reliability: 96.8,
    optCO2: 1.94,
    convCO2: 3.16,
    avoidedCO2: 1.22,
    handlingPoints: '04',
    primaryMode: 'Intermodal Feeder & Rail',
    strategy: 'Direct ocean feeder connection linking Sri Lankan manufacturing hubs with the Iranian and Uzbek rail network, bypassing air congestion.',
    sequence: [
      { loc: 'Colombo Port Hub', mode: 'ORIGIN', details: 'FCL Sealing & Customs Documentation', delayRisk: 'Low' },
      { loc: 'Bandar Abbas Port', mode: 'SEA', details: 'Trans-Arabian Sea Feeder (4.5 Days)', delayRisk: 'Low' },
      { loc: 'Sarakhs Border Crossing', mode: 'RAIL', details: 'Bogie Changeover & Railway Manifesting (3.2 Days)', delayRisk: 'Medium' },
      { loc: 'Tashkent Central Dry Port', mode: 'ROAD', details: 'Bonded Inland Yard Release (3.5 Days)', delayRisk: 'Low' }
    ],
    nodes: [
      { name: 'Colombo', x: 695, y: 320, code: 'CMB' },
      { name: 'Bandar Abbas', x: 605, y: 228, code: 'BND' },
      { name: 'Tashkent', x: 648, y: 190, code: 'TAS' }
    ],
    alternatives: [
      {
        type: 'FASTEST',
        label: 'Air Priority via Dubai',
        time: '2.8 Days',
        cost: '$$$$',
        co2: '4.80 tCO₂e',
        reliability: '98.0%',
        desc: 'Scheduled air connection via DXB hub.'
      },
      {
        type: 'BALANCED',
        label: 'Feeder & Rail Block (Recommended)',
        time: '11.2 Days',
        cost: '$$',
        co2: '1.94 tCO₂e (-38.6%)',
        reliability: '96.8%',
        desc: 'Direct transshipment to Central Asian broad-gauge rail.'
      },
      {
        type: 'LOW_CARBON',
        label: 'All-Rail Belt Connection',
        time: '18.0 Days',
        cost: '$',
        co2: '1.05 tCO₂e (-66.7%)',
        reliability: '93.0%',
        desc: 'Consolidated railcar loading with weekly fixed departures.'
      }
    ]
  }
];

// Helper to calculate custom simulated route
export function calculateSimulatedRoute({ origin, destination, cargoType, priority, mode }) {
  const baseTime = mode === 'AIR' ? 2.5 : mode === 'SEA' ? 24 : mode === 'RAIL' ? 12 : 8.5;
  const timeFactor = priority === 'Urgent' ? 0.7 : priority === 'Express' ? 0.85 : 1.0;
  const calculatedDays = Number((baseTime * timeFactor).toFixed(1));
  
  const baseCarbon = mode === 'AIR' ? 6.2 : mode === 'SEA' ? 1.2 : mode === 'RAIL' ? 1.8 : 3.4;
  const carbonSavings = mode === 'RAIL' ? 48.5 : mode === 'SEA' ? 68.2 : mode === 'Multimodal' ? 35.0 : 18.5;
  
  return {
    origin: origin || 'Dubai',
    destination: destination || 'Almaty',
    transitTime: calculatedDays,
    carbonSavings,
    budgetIndex: priority === 'Urgent' ? 95 : priority === 'Express' ? 80 : 55,
    reliability: priority === 'Urgent' ? 99.5 : 97.8,
    optCO2: Number((baseCarbon * 0.7).toFixed(2)),
    convCO2: baseCarbon,
    avoidedCO2: Number((baseCarbon * 0.3).toFixed(2)),
    strategy: `Algorithmic corridor analysis for ${cargoType || 'General'} freight: Routing configured for ${priority || 'Standard'} priority using ${mode || 'Optimized Multimodal'} lines. Automated border customs and telemetry sensors active.`
  };
}
