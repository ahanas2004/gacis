// Slim service index for homepage / nav — keep full copy in services.js
export const serviceCatalog = [
  {
    id: 'air-freight',
    shortTitle: 'Air Freight',
    tagline: 'Time-critical global air charter and scheduled capacity with precision tracking.',
    mode: 'AIR',
    icon: 'Plane',
    image: '/images/air_freight_cargo.png',
    leadTime: '1–3 Days',
    coverage: '150+ Direct Gateways'
  },
  {
    id: 'fcl-freight',
    shortTitle: 'FCL Ocean Freight',
    tagline: 'Dedicated 20ft, 40ft, and High-Cube container allocations on tier-1 global alliances.',
    mode: 'SEA',
    icon: 'Ship',
    image: '/images/sea_freight_vessel.png',
    leadTime: '12–25 Days',
    coverage: '500+ Direct Global Port Pairs'
  },
  {
    id: 'lcl-freight',
    shortTitle: 'LCL Consolidation',
    tagline: 'Cost-effective shared container cargo with scheduled weekly departures.',
    mode: 'SEA',
    icon: 'Boxes',
    image: '/images/lcl-consolidation.png',
    leadTime: '14–28 Days',
    coverage: 'Weekly Scheduled Groupage Lines'
  },
  {
    id: 'exw-fca-shipments',
    shortTitle: 'EXW & FCA Shipments',
    tagline: 'End-to-end first-mile supplier pickup, export documentation, and origin port handoff.',
    mode: 'ROAD',
    icon: 'Truck',
    image: '/images/exw-fca-shipments.png',
    leadTime: '2–5 Days First-Mile',
    coverage: 'Industrial Supplier Parks Across Asia & Europe'
  },
  {
    id: 'reefer-cold-chain',
    shortTitle: 'Reefer Cold Chain',
    tagline: 'Active GDP-compliant temperature logging for pharmaceuticals, perishables, and chemicals.',
    mode: 'COLD',
    icon: 'ShieldCheck',
    image: '/images/industry_pharma.png',
    leadTime: 'Expedited & Monitored',
    coverage: 'Global Cold Chain Gateways'
  },
  {
    id: 'cis-haulage',
    shortTitle: 'CIS Haulage Belt',
    tagline: 'Specialized block trains, Caspian ferries, and overland fleets across Central Asia.',
    mode: 'RAIL',
    icon: 'Train',
    image: '/images/CORRIDOR SPECIALIZATION.png',
    leadTime: '7–14 Days Trans-Caspian',
    coverage: 'Kazakhstan, Uzbekistan, Azerbaijan, Georgia & Caucasus'
  },
  {
    id: 'customs-compliance',
    shortTitle: 'Customs Clearance',
    tagline: 'Licensed in-house customs brokers ensuring rapid, zero-delay border clearance.',
    mode: 'CUSTOMS',
    icon: 'ShieldCheck',
    image: '/images/industry_hazmat.png',
    leadTime: '< 24 Hours Clearance',
    coverage: 'Global Ports & Customs Portals'
  },
  {
    id: 'road-freight',
    shortTitle: 'Road Transport',
    tagline: 'High-density FTL & LTL overland fleets spanning the GCC and Central Asian corridors.',
    mode: 'ROAD',
    icon: 'Truck',
    image: '/images/industry_automotive.png',
    leadTime: '2–7 Days',
    coverage: 'Complete GCC & Trans-Caspian'
  },
  {
    id: 'rail-corridors',
    shortTitle: 'Rail Corridors',
    tagline: 'Trans-Eurasian block trains bridging China, Central Asia, the Caspian, and Europe.',
    mode: 'RAIL',
    icon: 'Train',
    image: '/images/rail-corridors.png',
    leadTime: '10–18 Days',
    coverage: 'Trans-Caspian & Eurasian Belt'
  },
  {
    id: 'project-logistics',
    shortTitle: 'Project Logistics',
    tagline: 'Engineered transport solutions for oversized, industrial, and infrastructure capital assets.',
    mode: 'PROJECT',
    icon: 'Boxes',
    image: '/images/industry_energy.png',
    leadTime: 'Engineered Schedules',
    coverage: 'Global Remote Locations'
  }
];

export default serviceCatalog;
