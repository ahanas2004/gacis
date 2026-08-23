// Centralized Industries Data Definition — Fully Connected to Shipping & Logistics Architecture
export const industries = [
  {
    id: 'automotive',
    title: 'Automotive & Mobility Supply Chains',
    tagline: 'Just-in-Time (JIT) parts delivery, AOG emergency freight, and tier-1 assembly line supply chains.',
    icon: 'Car',
    image: '/images/diff_network.jpg',
    challenge: 'Unforgiving assembly line schedules where a single missing component causes $50,000/hour line stoppages.',
    solution: 'Dedicated Air Charter corridors, dual-driver TIR road express, and pre-cleared customs manifests for zero-dwell factory feed.',
    metrics: { onTime: '99.84%', transitReduction: '-34%', damageRate: '0.0012%' },
    highlights: ['CKD & SKD Container Staging', 'Emergency On-Board Courier (OBC)', 'Sequenced Line-Side Feeders'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'air-freight', name: 'Air Freight Intelligence', mode: 'AIR' },
      { id: 'road-freight', name: 'Cross-Border Road Transport', mode: 'ROAD' },
      { id: 'customs-compliance', name: 'Customs Brokerage & Clearance', mode: 'CUSTOMS' }
    ],
    connectedCorridors: ['Chennai ⇄ Frankfurt AOG Express', 'Dubai ⇄ Riyadh 14hr Road Linehaul', 'Shanghai ⇄ Almaty Rail Shuttle'],
    shippingEquipment: ['13.6m Mega Curtain-Side Trailers', 'Air-Ride Suspension Box Trucks', 'B777F Air Charter Pallets'],
    logisticsSLA: '28 Hours Door-to-Factory AOG Release',
    customsIntegration: 'Automated Green-Channel Customs Filing via Mirsal II & ATLAS (Germany)'
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals, Biologics & Cold Chain',
    tagline: 'GDP-compliant temperature-controlled air, deepsea, and intermodal cold chain.',
    icon: 'HeartPulse',
    image: '/images/diff_compliance.jpg',
    challenge: 'Strict regulatory temperature compliance (+2°C to +8°C, +15°C to +25°C, -20°C) with zero excursion tolerance.',
    solution: 'Active temperature-controlled reefer containers, tarmac cool-dolly escort, and 24/7 dual-probe IoT sensor telemetry.',
    metrics: { tempIntegrity: '100.00%', auditPass: '100%', clearanceTime: '3.5 Hours' },
    highlights: ['GDP Certified Facilities', 'Dry Ice & Cryogenic Handling', 'High-Priority Customs Green Channel'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'reefer-cargo', name: 'Reefer Cargo & Cold Chain', mode: 'MULTIMODAL' },
      { id: 'air-freight', name: 'Air Freight Intelligence', mode: 'AIR' },
      { id: 'customs-compliance', name: 'Customs Brokerage & Clearance', mode: 'CUSTOMS' }
    ],
    connectedCorridors: ['Hyderabad ⇄ Almaty Pharma Air Bridge', 'Frankfurt ⇄ Dubai Cold Chain Corridor', 'Chennai ⇄ Colombo ⇄ Tashkent'],
    shippingEquipment: ['Envirotainer RKN / RAP Active Air Containers', 'Dual-Genset Reefer Box Trailers', 'PCM Thermal Blankets'],
    logisticsSLA: '±0.0°C Thermal Deviation Guarantee',
    customsIntegration: 'Pre-Arrival MOH & FDA Customs Release with Zero Tarmac Dwell'
  },
  {
    id: 'energy',
    title: 'Energy, Oil & Gas, Mining & Infrastructure',
    tagline: 'Out-of-gauge heavy lift, SPMT hydraulic transport, and critical rig replenishment.',
    icon: 'Zap',
    image: '/images/diff_transform.jpg',
    challenge: 'Extreme weight payloads (300+ Tons) moving to remote desert and mountain extraction basins lacking commercial roads.',
    solution: '3D CAD route engineering, heavy-lift geared vessel chartering, SPMT multi-axle trailers, and police-escorted transport.',
    metrics: { maxPayload: '500+ Tons', remoteReach: '100%', safetyRecord: 'Zero Incidents' },
    highlights: ['Turbine & Vessel Transport', 'Rig Down Emergency Replenishment', 'Bridge Stress Analysis & Civil Permits'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'project-logistics', name: 'Project Cargo & Heavy Lift', mode: 'PROJECT' },
      { id: 'ocean-freight', name: 'Ocean Freight & Seaways', mode: 'SEA' },
      { id: 'cis-haulage', name: 'CIS Countries Haulage', mode: 'RAIL' }
    ],
    connectedCorridors: ['Gulf Energy Projects Corridor', 'Central Asia Tengiz Mining Belt', 'Eurasian Pipeline Networks'],
    shippingEquipment: ['Goldhofer SPMT Hydraulic Trailers', 'Heavy-Lift Geared Ships (2x 400-Ton Cranes)', 'Low-Bed Axle Haulers'],
    logisticsSLA: 'Turnkey Foundation Placement & RAMS Engineering Sign-off',
    customsIntegration: 'Temporary Import Duty Exemption (IPR) & Civil Transport Authorizations'
  },
  {
    id: 'technology',
    title: 'High-Tech Electronics & Semiconductors',
    tagline: 'High-security transport with shock, tilt, and humidity telemetry monitoring.',
    icon: 'Cpu',
    image: '/images/air_freight_cargo.jpg',
    challenge: 'High commercial value cargo vulnerable to theft, moisture, shock damage, and seasonal capacity shortages.',
    solution: 'TAPA TSR-1 certified armed escorts, tamper-evident seals, real-time shock sensor logging, and guaranteed carrier BSA.',
    metrics: { securityRating: '99.99%', claimRatio: '0.0012%', peakCapacity: '2.5x Standard' },
    highlights: ['TAPA TSR-1 Security Standards', 'Active Shock & Tilt Telemetry', 'Direct Bonded Air-to-Consignee Shuttles'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'air-freight', name: 'Air Freight Intelligence', mode: 'AIR' },
      { id: 'lcl-freight', name: 'LCL Groupage Consolidation', mode: 'SEA' },
      { id: 'road-freight', name: 'Cross-Border Road Transport', mode: 'ROAD' }
    ],
    connectedCorridors: ['Shenzhen ⇄ Frankfurt Express', 'Penang ⇄ Dubai Electronics Hub', 'Taipei ⇄ Chennai Air Bridge'],
    shippingEquipment: ['TAPA TSR-1 Sealed Hard-Side Box Trailers', 'ShockWatch IoT Sensor Loggers', 'Vacuum-Sealed Anti-Static Pallets'],
    logisticsSLA: '24/7 Geofenced Satellite Monitoring & Zero-Loss Escort',
    customsIntegration: 'Free Zone (JAFZA/FTZ) Bonded Cross-Dock Transfer without Import Tax Friction'
  },
  {
    id: 'retail',
    title: 'Retail, FMCG & E-Commerce Supply Chains',
    tagline: 'Omnichannel inventory distribution across Gulf and Asian consumer hubs.',
    icon: 'ShoppingBag',
    image: '/images/sea_freight_vessel.jpg',
    challenge: 'Seasonal volume surges, compressed store delivery windows, and high port storage charges.',
    solution: 'Buyer consolidation in free zones (JAFZA / Port Klang), automated CFS de-consolidation, and cross-dock dispatch.',
    metrics: { dwellTimeReduction: '-42%', costEfficiency: '-28%', inventoryAccuracy: '99.9%' },
    highlights: ['Buyer Consolidation Hubs', 'Pick-Pack & Kitting Services', 'Cross-Border Reverse Logistics'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'fcl-freight', name: 'FCL Ocean Freight', mode: 'SEA' },
      { id: 'lcl-freight', name: 'LCL Groupage Consolidation', mode: 'SEA' },
      { id: 'exw-fca-shipments', name: 'EXW & FCA Gate Shipments', mode: 'ROAD' }
    ],
    connectedCorridors: ['Port Klang ⇄ Jebel Ali Retail String', 'Shanghai ⇄ Rotterdam FCL Linehaul', 'Ningbo ⇄ Tashkent LCL Line'],
    shippingEquipment: ['40ft High-Cube Dry Containers', 'Palletized Shrink-Wrapped Unit Loads', 'Cross-Dock Sorting Depots'],
    logisticsSLA: '24-Hour CFS De-Consolidation & Store Delivery',
    customsIntegration: 'Automated E-Commerce Batch Clearance & Preferential Tariff Utilization'
  },
  {
    id: 'industrial',
    title: 'Industrial Manufacturing, Chemicals & Metals',
    tagline: 'Bulk commodity linehaul, raw material staging, and scheduled block train distribution.',
    icon: 'Factory',
    image: '/images/diff_network.jpg',
    challenge: 'Managing heavy bulk cargo shipping economics against factory inventory holding costs.',
    solution: 'Trans-Caspian intermodal rail shuttles, broad-gauge wagon blocks, and contracted ocean container strings.',
    metrics: { co2Reduction: '-48%', volumeCapacity: '25,000+ TEU', demurrageSavings: '85%' },
    highlights: ['Dedicated Rail Block Trains', 'Heavy Coil & Steel Wagon Transport', 'Open Yard Bonded Staging'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'rail-freight', name: 'Intermodal Rail Freight', mode: 'RAIL' },
      { id: 'fcl-freight', name: 'FCL Ocean Freight', mode: 'SEA' },
      { id: 'cis-haulage', name: 'CIS Countries Haulage', mode: 'RAIL' }
    ],
    connectedCorridors: ['Yiwu ⇄ Khorgos ⇄ Tashkent Rail Belt', 'Mundra ⇄ Jebel Ali FCL String', 'Aktau ⇄ Almaty Broad-Gauge Line'],
    shippingEquipment: ['1520mm Broad-Gauge Rail Wagons', 'Open-Top Containers', 'Heavy Coil Transport Skid Racks'],
    logisticsSLA: 'Scheduled Weekly Fixed-Day Block Train Departures',
    customsIntegration: 'Bonded Warehouse Staging & EAEU Customs Union Transit Permits'
  },
  {
    id: 'hazmat-chemical',
    title: 'Dangerous Goods & Battery Supply Chains',
    tagline: 'Class 1–9 hazmat, battery energy storage (ESS), and industrial chemical supply chains.',
    icon: 'ShieldCheck',
    image: '/images/diff_compliance.jpg',
    challenge: 'High regulatory risk, chemical incompatibility rules, strict UN packaging standards, and port hazmat bans.',
    solution: 'IATA DGR & IMDG certified dangerous goods specialists, MSDS validation, UN packaging, and segregated holds.',
    metrics: { complianceScore: '100%', spillRecord: '0.000%', auditApproval: 'Pre-Approved' },
    highlights: ['Class 1–9 Certified Scope', 'UN-Approved Packaging', 'Lithium Battery SOC Monitoring'],
    
    // Direct Shipping & Logistics Connections
    connectedServices: [
      { id: 'hazmat-dg-logistics', name: 'Hazmat & Chemical DG', mode: 'HAZMAT' },
      { id: 'reefer-cargo', name: 'Reefer Cargo & Cold Chain', mode: 'MULTIMODAL' },
      { id: 'customs-compliance', name: 'Customs Brokerage & Clearance', mode: 'CUSTOMS' }
    ],
    connectedCorridors: ['Shanghai ⇄ Dubai Bonded Chemical Hub', 'Frankfurt ⇄ Almaty Hazmat Corridor', 'Chennai ⇄ Rotterdam Seaway'],
    shippingEquipment: ['UN-Certified Drums & Overpacks', 'IMDG Class 3/6.1/8/9 Container Holds', 'Thermal Battery Sensors'],
    logisticsSLA: '2-Hour MSDS Audit & Certified DGD Sign-Off',
    customsIntegration: 'Pre-Cleared Port Dangerous Goods Inspection Permits'
  }
];

export default industries;
