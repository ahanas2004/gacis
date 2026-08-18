// Centralized Industries Data Definition
export const industries = [
  {
    id: 'automotive',
    title: 'Automotive & Mobility',
    tagline: 'Just-in-Time (JIT) parts delivery and tier-1 assembly line supply chains.',
    icon: 'Car',
    image: '/images/diff_network.jpg',
    challenge: 'Unforgiving production line schedules with zero tolerance for border transit delays or stockouts.',
    solution: 'Dedicated charter corridors, cross-border GPS-fenced TIR trucking, and automated emergency AOG/critical part dispatch.',
    metrics: { onTime: '99.8%', transitReduction: '34%', damageRate: '<0.01%' },
    highlights: ['CKD & SKD Container Staging', 'Emergency On-Board Courier (OBC)', 'Sequenced Line-Side Feeders']
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals & Healthcare',
    tagline: 'GDP-compliant temperature-controlled air and intermodal cold chain.',
    icon: 'HeartPulse',
    image: '/images/diff_compliance.jpg',
    challenge: 'Strict regulatory temperature compliance (+2°C to +8°C, +15°C to +25°C) and unbroken telemetry audit trails.',
    solution: 'Active temperature-controlled air containers (Envirotainer/CSafe), tarmac thermal blanket protection, and live calibrated sensor loggers.',
    metrics: { tempIntegrity: '100%', auditPass: '100%', clearanceTime: '<3.5 hrs' },
    highlights: ['GDP Certified Facilities', 'Dry Ice & Cryogenic Handling', 'High-Priority Customs Green Channel']
  },
  {
    id: 'energy',
    title: 'Energy, Oil & Infrastructure',
    tagline: 'Out-of-gauge heavy lift and critical rig replenishment for extraction basins.',
    icon: 'Zap',
    image: '/images/diff_transform.jpg',
    challenge: 'Remote inland locations with extreme dimensional and weight constraints lacking commercial infrastructure.',
    solution: 'Engineered route surveys, heavy-lift Antonov freighters, hydraulic modular trailers (SPMT), and dedicated civil transport escorts.',
    metrics: { maxPayload: '450 Tons', remoteReach: '100%', safetyRecord: '0 Incidents' },
    highlights: ['Turbine & Vessel Transport', 'Rig Down Emergency Replenishment', 'Bridge Stress Analysis & Civil Permits']
  },
  {
    id: 'technology',
    title: 'Technology & High-Value Electronics',
    tagline: 'High-security transport with shock, tilt, and humidity telemetry monitoring.',
    icon: 'Cpu',
    image: '/images/air_freight_cargo.jpg',
    challenge: 'High theft vulnerability, sensitive micro-circuitry, and sharp seasonal demand spikes.',
    solution: 'Geofenced transit corridors, armed tarmac escorts, tamper-evident seals, and dedicated blocked space allocations (BSA).',
    metrics: { securityRating: '99.9%', claimRatio: '0.002%', peakCapacity: '2.5x Standard' },
    highlights: ['TAPA TSR-1 Security Standards', 'Active Shock & Tilt Telemetry', 'Direct Bonded Air-to-Consignee Shuttles']
  },
  {
    id: 'retail',
    title: 'Retail, FMCG & E-Commerce',
    tagline: 'Omnichannel inventory distribution across the Gulf and Asian consumer hubs.',
    icon: 'ShoppingBag',
    image: '/images/sea_freight_vessel.jpg',
    challenge: 'Seasonal inventory surges, rapid return processing, and compressed delivery expectations.',
    solution: 'Buyer consolidation programs in free zones (JAFZA/Port Klang), cross-dock sorting, and automated customs batch declarations.',
    metrics: { dwellTimeReduction: '42%', costEfficiency: '-28%', inventoryAccuracy: '99.9%' },
    highlights: ['Buyer Consolidation Hubs', 'Pick-Pack & Kitting Services', 'Cross-Border Reverse Logistics']
  },
  {
    id: 'industrial',
    title: 'Industrial Manufacturing & Raw Materials',
    tagline: 'Bulk commodity linehaul and scheduled block train container distribution.',
    icon: 'Factory',
    image: '/images/diff_network.jpg',
    challenge: 'Balancing bulk freight transport economics against raw material inventory holding costs.',
    solution: 'Scheduled Trans-Caspian intermodal rail shuttles and FCL ocean contracts with extended free time.',
    metrics: { co2Reduction: '-48%', volumeCapacity: '25,000+ TEU', demurrageSavings: '85%' },
    highlights: ['Dedicated Rail Block Trains', 'Heavy Coil & Steel Wagon Transport', 'Open Yard Bonded Staging']
  }
];
