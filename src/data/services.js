// Centralized Services Data Definition — 10 Core Multimodal Services
export const services = [
  {
    id: 'air-freight',
    title: 'Air Freight Intelligence',
    shortTitle: 'Air Freight',
    tagline: 'Time-critical global air charter and scheduled capacity with precision tracking.',
    mode: 'AIR',
    icon: 'Plane',
    leadTime: '1–3 Days',
    coverage: '150+ Direct Gateways',
    co2Profile: 'High Speed / Monitored Carbon Index',
    image: '/images/air_freight_cargo.jpg',
    overview: 'High-velocity air freight architecture engineered for time-critical electronics, automotive AOG spares, pharmaceutical cold chain, and urgent high-value industrial goods across the Gulf, Central Asia, and Europe.',
    
    provenMetrics: [
      { value: '99.84%', label: 'Flight Departure SLA', sub: 'Across 150+ global airport gateways' },
      { value: '3.8 Hours', label: 'Tarmac-to-Release Speed', sub: 'Pre-cleared electronic manifesting' },
      { value: '0.0012%', label: 'Cargo Damage Ratio', sub: 'Zero-loss handling protocol' },
      { value: '$1.4M+', label: 'Annual Client Demurrage Saved', sub: 'Automated pre-manifest filing' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Executes High-Velocity Air Freight',
      summary: 'We eliminate airport bottlenecks by bypassing standard freight forwarder queues through direct Block Space Agreements (BSA) and dedicated tarmac cross-docking hubs.',
      pillars: [
        {
          title: 'Direct Tarmac Handoff & Apron Transfer',
          detail: 'Airside tarmac escorts in Dubai (DXB/DWC) and Frankfurt (FRA) transfer cargo directly from plane to bonded feeder vehicles within 120 minutes of touchdown.'
        },
        {
          title: 'Guaranteed Block Space (BSA)',
          detail: 'Tier-1 carrier allocations on Emirates SkyCargo, Lufthansa Cargo, and Qatar Airways Cargo guarantee capacity even during Q4 peak seasons.'
        },
        {
          title: 'AOG & Express Charter Command Desk',
          detail: 'Dedicated 24/7 charter team capable of positioning full freighter aircraft (B747-8F, B777F, AN-124) anywhere globally within 4 hours.'
        },
        {
          title: 'Sensor-Level Cargo Telemetry',
          detail: 'Every air unit load device (ULD) is equipped with shock, tilt, temperature, and light sensors broadcasting live via satellite.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Emergency Automotive AOG Flight Saved European Assembly Line from $2.1M Downtime',
      clientSector: 'Global Tier-1 Automotive Manufacturer',
      challenge: 'Critical robotic stamping dies delayed in South India, threatening total shutdown of a Munich assembly line within 36 hours.',
      solution: 'GACIS mobilized an emergency air charter from Chennai (MAA) to Frankfurt (FRA) with dual-pilot non-stop routing and pre-filed tarmac customs release.',
      results: [
        'Total Transit Time: 28 Hours door-to-factory',
        'Customs Clearance Time: 22 Minutes from flight touchdown',
        'Financial Impact: Prevented an estimated $2.1M in assembly line stoppage penalties'
      ]
    },

    technicalSpecs: [
      { label: 'Carrier Alliances', value: 'Emirates SkyCargo, Lufthansa Cargo, Qatar Airways, Cathay Cargo' },
      { label: 'Temperature Tolerances', value: 'GDP Compliant (-20°C, +2°C to +8°C, +15°C to +25°C)' },
      { label: 'Max Payload Aircraft', value: 'Up to 120,000 kg (B747-8F / Antonov AN-124)' },
      { label: 'Compliance Standards', value: 'IATA DGR, CEIV Pharma, AEO Certified, ISO 9001:2015' }
    ],

    features: [
      'Scheduled block space agreements (BSA) with tier-1 global air carriers',
      'Full and part charter solutions for oversized and urgent project cargo',
      'Temperature-controlled cold chain (GDP compliant, +2°C to +25°C)',
      'Direct customs pre-clearance at Dubai (DXB/DWC), Frankfurt (FRA), and Almaty (ALA)',
      'Door-to-airport and airport-to-door expedited courier handoffs'
    ],
    capabilities: [
      { name: 'Priority Express', detail: 'Guaranteed next-flight-out dispatch for critical AOG and medical supplies.' },
      { name: 'Standard Consolidation', detail: 'Scheduled 2x weekly consolidations optimizing cargo load factors and rates.' },
      { name: 'Sea-Air Hybrid', detail: 'Transshipment through Dubai Hub reducing pure air costs by up to 45%.' },
      { name: 'Dangerous Goods (DGR)', detail: 'IATA-certified handling of Class 1–9 hazmat materials.' }
    ],
    corridors: ['Dubai ⇄ Almaty', 'Klang ⇄ London', 'Chennai ⇄ Frankfurt', 'Colombo ⇄ Dubai'],
    workflow: [
      { step: '01', title: 'Origin Pickup & DGR Check', desc: 'Secure transit to cargo terminal and automated dimensioning.' },
      { step: '02', title: 'Export Pre-Clearance', desc: 'Digital airway bill issuance and electronic customs manifesting.' },
      { step: '03', title: 'Linehaul & Transshipment', desc: 'Real-time cargo tracking through primary hub gateways.' },
      { step: '04', title: 'Destination Bonded Release', desc: 'Direct tarmac transfer to final-mile temperature-controlled vehicles.' }
    ]
  },
  {
    id: 'fcl-freight',
    title: 'FCL — Full Container Load Shipping',
    shortTitle: 'FCL Ocean Freight',
    tagline: 'Dedicated 20ft, 40ft, and High-Cube container allocations on tier-1 global alliances.',
    mode: 'SEA',
    icon: 'Ship',
    leadTime: '12–25 Days',
    coverage: '500+ Direct Global Port Pairs',
    co2Profile: 'Optimal Carbon Efficiency per TEU',
    image: '/images/sea_freight_vessel.jpg',
    overview: 'High-volume containerized ocean transport providing exclusive container use for enterprise manufacturers, automotive suppliers, and industrial distributors with guaranteed vessel space.',
    
    provenMetrics: [
      { value: '98.9%', label: 'Vessel Slot Guarantee Rate', sub: 'Zero peak-season cargo rollovers' },
      { value: '1.2 Days', label: 'Average Port Dwell Time', sub: 'Pre-lodged customs release' },
      { value: '450,000+', label: 'TEUs Handled Annually', sub: 'Across major ocean strings' },
      { value: '$2.8M', label: 'Port Storage Costs Saved', sub: 'Direct rail-side container handoffs' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Prevents Container Rollovers & Demurrage',
      summary: 'We bypass spot-market container shortages by deploying direct carrier service contracts and integrating coastal marine terminals directly with inland rail dry ports.',
      pillars: [
        {
          title: 'Multi-Alliance Slot Guarantees',
          detail: 'Direct long-term volume commitments with 2M (Maersk/MSC), Ocean Alliance (CMA CGM/COSCO), and THE Alliance prevent cargo rollovers even during peak seasons.'
        },
        {
          title: 'Automated VGM & Terminal Gate-In',
          detail: 'Integrated weighbridge sensors issue instant Verified Gross Mass (VGM) certificates, securing immediate terminal gate-in approval.'
        },
        {
          title: 'Direct On-Dock Rail Loading',
          detail: 'Container vessels discharge directly onto waiting rail block trains at Aktau, Jebel Ali, and Mundra, cutting 4+ days of port dwell time.'
        },
        {
          title: 'AIS Satellite Fleet Telemetry',
          detail: 'Satellite tracking monitors vessel position, speed, weather routing, and berth schedules to pre-alert destination transport teams.'
        }
      ]
    },

    provenCaseStudy: {
      title: '450 TEU Machinery Shipment Moved from Shanghai to Almaty with Zero Rollovers in Peak Season',
      clientSector: 'Heavy Industrial Equipment Supplier',
      challenge: 'High port congestion in East Asia threatened a 3-week delay for heavy industrial components bound for a Central Asian plant.',
      solution: 'GACIS routed the shipment via direct FCL ocean string to Lianyungang, seamlessly transferring onto a dedicated Eurasian block train.',
      results: [
        'Total Transit Time: 16 Days vs industry average of 34 days',
        'Cost Savings: $380,000 saved in avoided port storage and demurrage fees',
        'Capacity: 100% on-time vessel departure and rail connection'
      ]
    },

    technicalSpecs: [
      { label: 'Container Types', value: '20ft, 40ft Standard Dry, 40ft High Cube, Open Top, Flat Rack, Reefer' },
      { label: 'Carrier Partnerships', value: 'MSC, Maersk, CMA CGM, COSCO, ONE, Hapag-Lloyd' },
      { label: 'Security Seals', value: 'ISO 17712 High-Security Bolt Seals with GPS anti-tamper telemetry' },
      { label: 'Inland Connections', value: 'Direct on-dock rail interchange at major global ports' }
    ],

    features: [
      'Direct carrier contracts across major alliances (2M, Ocean Alliance, THE Alliance)',
      'Full equipment inventory: Standard Dry 20ft/40ft/40HC, Open Top, Flat Rack, and Reefer',
      'Port-to-port and door-to-door shipping with intermodal rail/road linehauls',
      'Verified Gross Mass (VGM) automated weighing and terminal gate-in coordination',
      'Marine transit insurance with comprehensive all-risk coverage'
    ],
    capabilities: [
      { name: 'Contracted Slot Guarantees', detail: 'Peak-season capacity locks preventing cargo rollovers at primary transshipment hubs.' },
      { name: 'Port Dwell Minimization', detail: 'Direct pre-lodged customs documentation ensuring instant release upon vessel discharge.' },
      { name: 'Inland Dry Port Integration', detail: 'Synchronized rail transfers from coastal ports to inland container depots.' },
      { name: 'Special Equipment Allocations', detail: 'Heavy-duty flat racks and open tops for out-of-gauge industrial machinery.' }
    ],
    corridors: ['Chennai ⇄ Jebel Ali', 'Shanghai ⇄ Aktau', 'Port Klang ⇄ Rotterdam', 'Mundra ⇄ Hamburg'],
    workflow: [
      { step: '01', title: 'Empty Container Dispatch', desc: 'Pre-inspected watertight equipment positioned directly at shipper facility.' },
      { step: '02', title: 'Factory Loading & Sealing', desc: 'High-security bolt seal application and electronic VGM weighing certification.' },
      { step: '03', title: 'Ocean Linehaul Navigation', desc: 'AIS satellite tracking with automated congestion avoidance.' },
      { step: '04', title: 'Port Discharge & Delivery', desc: 'Immediate transition to bonded rail block trains or regional road fleets.' }
    ]
  },
  {
    id: 'lcl-consolidation',
    title: 'LCL — Less than Container Load Consolidation',
    shortTitle: 'LCL Consolidation',
    tagline: 'Cost-effective shared container cargo with scheduled weekly departures.',
    mode: 'SEA',
    icon: 'Boxes',
    leadTime: '14–28 Days',
    coverage: 'Weekly Scheduled Groupage Lines',
    co2Profile: 'Maximized Cubic Utilization Efficiency',
    image: '/images/diff_compliance.jpg',
    overview: 'Economical sea freight solution for smaller cargo volumes (1 to 15 CBM) with consolidated groupage containers, dedicated packing hubs, and zero minimum volume penalties.',
    
    provenMetrics: [
      { value: '100%', label: 'Fixed Weekly Departures', sub: 'Guaranteed sailing schedules' },
      { value: '0% CBM', label: 'Minimum Volume Penalty', sub: 'Pay strictly for space used' },
      { value: '24 Hours', label: 'CFS De-Consolidation Speed', sub: 'Bonded warehouse devanning' },
      { value: '-42%', label: 'Cost Savings vs Pure FCL', sub: 'For cargo volumes under 12 CBM' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Maximizes LCL Cubic Efficiency & Cargo Safety',
      summary: 'We operate our own bonded Container Freight Stations (CFS) in Dubai, Klang, Chennai, and Hamburg, eliminating third-party co-loader delays and damaged cargo risks.',
      pillars: [
        {
          title: 'Direct In-House Groupage Lines',
          detail: 'We build direct container consolidations without middleman brokers, ensuring your cargo remains under GACIS custody from origin to destination.'
        },
        {
          title: '3D Volumetric Scanning & Load Optimization',
          detail: 'Laser scanners measure exact dimensions and load density, generating automated 3D stowage plans that protect fragile cargo beneath heavy goods.'
        },
        {
          title: 'Package-Level Barcode & RFID Tracking',
          detail: 'Every pallet and carton is scanned at receipt, container loading, vessel transshipment, and CFS devanning with live status updates.'
        },
        {
          title: 'Transparent No-Surprise Pricing',
          detail: 'All destination port and CFS fees are locked upfront in a single itemized quotation with zero hidden local charges.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Consolidated LCL Supply Chain Saved $145,000 for European Industrial Electronics Importers',
      clientSector: 'Industrial Automation & Robotics Distributor',
      challenge: 'Multiple regional suppliers across Malaysia and India needed frequent small-lot shipments without paying full container costs.',
      solution: 'GACIS implemented a buyer\'s consolidation program, collecting LCL lots into weekly dedicated GACIS groupage containers via Port Klang and Dubai.',
      results: [
        'Cost Reduction: 42% savings compared to booking individual small-freight forwarders',
        'Customs Efficiency: Consolidated 18 vendor invoices under a single customs declaration',
        'Zero Damage Rate: 100% intact arrival across 86 consecutive groupage containers'
      ]
    },

    technicalSpecs: [
      { label: 'Minimum Chargeable', value: '1 CBM / 1,000 kg' },
      { label: 'CFS Network', value: 'Dubai JAFZA, Port Klang, Hamburg, Chennai, Singapore, Almaty' },
      { label: 'Cargo Protection', value: 'Pallet shrink-wrapping, corner guards, heat-treated ISPM 15 timber' },
      { label: 'Tracking Tech', value: 'Carton-level barcode scan with instant digital Proof of Delivery (POD)' }
    ],

    features: [
      'Weekly fixed-day departures from primary manufacturing hubs in Asia and Europe',
      'Direct de-consolidation at GACIS bonded container freight stations (CFS)',
      'Precision volumetric scanning and palletized shrink-wrap cargo protection',
      'Transparent CBM/weight pricing with no hidden destination port charges',
      'Door-to-door pickup from suppliers with single bill of lading'
    ],
    capabilities: [
      { name: 'Buyer\'s Consolidation', detail: 'Combine shipments from multiple regional vendors into a single dedicated container.' },
      { name: 'Bonded CFS Operations', detail: 'Secure sorting, customs clearance, and palletizing in climate-controlled depots.' },
      { name: 'Barcode & QR Item Tracking', detail: 'Package-level scanning from origin warehouse intake to final consignee delivery.' },
      { name: 'Hazardous & DGR LCL', detail: 'Segregated consolidation for compatible certified chemical and industrial goods.' }
    ],
    corridors: ['Chennai ⇄ Dubai Hub', 'Klang ⇄ Almaty', 'Colombo ⇄ London', 'Ningbo ⇄ Tashkent'],
    workflow: [
      { step: '01', title: 'Cargo Intake at CFS', desc: 'Dimensions, weight, and packaging verified with barcode labeling.' },
      { step: '02', title: 'Container Stowage Optimization', desc: 'Computerized load planning ensuring weight distribution and cargo safety.' },
      { step: '03', title: 'Ocean Transit to Gateway', desc: 'Consolidated customs manifestation under master ocean bill of lading.' },
      { step: '04', title: 'De-Consolidation & Dispatch', desc: 'Instant devanning at destination CFS and final-mile distribution.' }
    ]
  },
  {
    id: 'exw-fca-shipments',
    title: 'EXW & FCA Factory Gate Shipments',
    shortTitle: 'EXW & FCA Shipments',
    tagline: 'End-to-end first-mile supplier pickup, export documentation, and origin port handoff.',
    mode: 'ROAD',
    icon: 'Truck',
    leadTime: '2–5 Days First-Mile',
    coverage: 'Industrial Supplier Parks Across Asia & Europe',
    co2Profile: 'Consolidated Route Optimization',
    image: '/images/diff_network.jpg',
    overview: 'Specialized origin logistics for international buyers purchasing under Incoterms 2020 EXW (Ex Works) or FCA (Free Carrier). GACIS takes custody directly at the seller\'s warehouse.',
    
    provenMetrics: [
      { value: '99.6%', label: 'First-Mile On-Time Pickup', sub: 'Synchronized supplier dispatch' },
      { value: '2 Hours', label: 'Average Factory Gate Release', sub: 'Pre-inspected cargo documents' },
      { value: '100%', label: 'Export Compliance Accuracy', sub: 'Zero customs hold delays' },
      { value: '12,000+', label: 'Factory Pickups Annually', sub: 'Across Asia, GCC & Europe' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Protects Buyers in EXW & FCA Origin Logistics',
      summary: 'We eliminate supplier communication friction and export documentation risks by deploying local multilingual origin desks directly inside primary industrial clusters.',
      pillars: [
        {
          title: 'Local Supplier Coordination Desks',
          detail: 'Our local origin agents speak the vendor\'s language, inspect cargo readiness, verify packing lists, and coordinate factory loading schedules.'
        },
        {
          title: 'Export Customs & Tax Exemption Management',
          detail: 'We handle export declarations, EUR.1 certificates, and origin tax refunds, ensuring seamless legal transfer of custody at origin.'
        },
        {
          title: 'First-Mile Fleet Flexibility',
          detail: 'Curtain-side, tail-lift, low-bed, and temperature-controlled trucks positioned within 4 hours of supplier release notification.'
        },
        {
          title: 'Pre-Shipment Quality & Weight Audits',
          detail: 'Cargo is weighed, photo-documented, and inspected for physical damage before leaving the supplier\'s dock.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Turnkey EXW Origin Pickup of 32 Factories Across South India for German Machinery Manufacturer',
      clientSector: 'Industrial Plant Equipment Supplier',
      challenge: 'Managing EXW procurement across 32 disparate suppliers with varying readiness dates without incurring individual port storage fees.',
      solution: 'GACIS deployed a milk-run fleet program, consolidating factory pickups into a central bonded warehouse near Chennai port before single-container dispatch.',
      results: [
        'Efficiency Gain: Reduced total origin transit cost by 31%',
        'Zero Demurrage: Consolidated export documentation resulted in 100% green-channel customs clearance',
        'Visibility: Live buyer dashboard tracking all 32 supplier order releases simultaneously'
      ]
    },

    technicalSpecs: [
      { label: 'Incoterms Covered', value: 'EXW (Ex Works), FCA (Free Carrier), FAS (Free Alongside Ship)' },
      { label: 'Documentation Handled', value: 'Export License, EUR.1, Certificate of Origin, Legalized Invoices, Dangerous Goods Declarations' },
      { label: 'Fleet Equipment', value: 'Tail-lift box trucks, curtain-siders, air-ride suspension trailers, low-bed heavy haulers' },
      { label: 'Geographic Reach', value: 'China, India, UAE, Saudi Arabia, Germany, Turkey, Vietnam' }
    ],

    features: [
      'First-mile factory pickup with tail-lift, curtain-side, or low-bed vehicles',
      'Comprehensive export documentation: Export Licenses, EUR.1, and Certificates of Origin',
      'Export customs filing, physical terminal handling, and port/airport gate-in',
      'Supplier coordination desk managing order readiness and factory release dates',
      'Pre-shipment quality checks, labeling, and pallet rework before port entry'
    ],
    capabilities: [
      { name: 'EXW Complete Turnkey', detail: 'Full origin liability pickup, handling local factory loading and export customs.' },
      { name: 'FCA Named Hub Transfer', detail: 'Takeover at inland terminal, bonded warehouse, or origin container depot.' },
      { name: 'Multi-Vendor Collection', detail: 'Scheduled milk-run pickups across multiple factories in an industrial cluster.' },
      { name: 'Export Compliance Audit', detail: 'Dual-use goods screening and export compliance certification.' }
    ],
    corridors: ['South India Industrial Belt ⇄ Chennai Port', 'Shenzhen Factory Hubs ⇄ Yantian', 'Bavaria Manufacturing ⇄ Frankfurt Airport'],
    workflow: [
      { step: '01', title: 'Purchase Order Verification', desc: 'Contact supplier to confirm cargo readiness, packing lists, and dimensions.' },
      { step: '02', title: 'Factory Floor Pickup', desc: 'Dispatch verified transport to supplier premises with loading supervision.' },
      { step: '03', title: 'Export Customs Lodgment', desc: 'Electronic export declaration and port terminal gate-in handling.' },
      { step: '04', title: 'Mainline Carrier Handoff', desc: 'Direct transfer to scheduled air or ocean linehaul with onboard confirmation.' }
    ]
  },
  {
    id: 'reefer-cold-chain',
    title: 'Reefer Cold Chain',
    shortTitle: 'Reefer Cold Chain',
    tagline: 'Active GDP-compliant temperature logging for pharmaceuticals, perishables, and chemicals.',
    mode: 'COLD',
    icon: 'ShieldCheck',
    leadTime: 'Expedited & Monitored',
    coverage: 'Global Cold Chain Gateways',
    co2Profile: 'Energy-Efficient Eco-Reefer Fleets',
    image: '/images/diff_compliance.jpg',
    overview: 'Unbroken cold-chain logistics maintaining strict thermal ranges (-25°C to +25°C) with continuous active data logging for pharmaceuticals (GDP certified), fresh food, and fine chemicals.',
    
    provenMetrics: [
      { value: '99.98%', label: 'Thermal Integrity SLA', sub: 'Zero temperature excursion incidents' },
      { value: '±0.2°C', label: 'Precision Sensor Tolerance', sub: 'Calibrated dual-probe telemetry' },
      { value: '100%', label: 'GDP Pharma Compliance', sub: 'Full audit trail certification' },
      { value: '24/7/365', label: 'Active Control Desk Escort', sub: 'Instant remote reefer adjustment' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Guarantees Unbroken Pharmaceutical Cold Chains',
      summary: 'We eliminate thermal excursion risks by combining GDP-certified refrigerated containers, dual diesel-genset backups, thermal tarmac cool-dollies, and 24/7 IoT temperature telemetry.',
      pillars: [
        {
          title: 'Active IoT Telemetry & Remote Control',
          detail: 'Real-time sensors transmit temperature, humidity, door openings, and compressor status every 60 seconds to our central cold chain command center.'
        },
        {
          title: 'Thermal Apron Escorts at Airports',
          detail: 'Active cool-dollies and insulated tarmac blankets protect pharma shipments during tarmac transfer between aircraft and airport cold rooms.'
        },
        {
          title: 'Dual Diesel Generator Linehauls',
          detail: 'Reefer containers on rail and road routes carry redundant diesel gensets to guarantee uninterrupted cooling across desert and arctic extremes.'
        },
        {
          title: 'Rigorous 24-Point Pre-Trip Inspection (PTI)',
          detail: 'Every reefer unit undergoes 6 hours of pre-cooling, micro-filter sterilization, and compressor stress testing prior to loading.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Zero-Excursion Cold Chain Movement of $14M Vaccine Inventory Across Gulf & Central Asia',
      clientSector: 'Global Pharmaceutical Corporation',
      challenge: 'Transporting temperature-sensitive biologics (+2°C to +8°C) across 4,500 km of desert terrain with ambient temperatures exceeding +48°C.',
      solution: 'GACIS deployed GDP-certified active reefer containers backed by dual gensets, live satellite telemetry, and green-channel customs clearance.',
      results: [
        'Thermal Deviation: 0.00°C variation throughout 11 days of multimodal transit',
        'Regulatory Approval: 100% compliance audit clearance by Ministry of Health inspectors',
        'Value Protected: Complete $14.2M pharmaceutical cargo batch delivered intact'
      ]
    },

    technicalSpecs: [
      { label: 'Thermal Ranges', value: 'Deep Frozen (-25°C to -18°C), Chilled (+2°C to +8°C), Controlled Ambient (+15°C to +25°C)' },
      { label: 'Certifications', value: 'EU GDP (Good Distribution Practice), WHO Cold Chain Standard, IATA CEIV' },
      { label: 'Backup Power', value: 'Under-mount / Clip-on Dual Diesel Generator Sets (72-hour autonomous fuel)' },
      { label: 'Data Logging', value: 'NIST-traceable digital dataloggers with PDF graph generation upon delivery' }
    ],

    features: [
      'GDP compliant processes certified for pharmaceutical and biologics transportation',
      'Thermal ranges: Deep Frozen (-20°C), Chilled (+2°C to +8°C), Controlled Ambient (+15°C to +25°C)',
      'Real-time temperature, humidity, and door-opening sensor telemetry with alert thresholds',
      'Thermal blanket insulation, dry ice replenishment, and phase change materials (PCM)',
      'Backup diesel gensets on rail and road linehauls across desert and winter routes'
    ],
    capabilities: [
      { name: 'Pharma Cold Chain', detail: 'Vaccines, APIs, and life-science reagents with unbroken thermal audit trails.' },
      { name: 'Perishable Produce & Dairy', detail: 'Controlled atmosphere (CA) reefer containers extending product shelf life.' },
      { name: 'Tarmac Thermal Escort', detail: 'Rapid cool-dolly apron transfers minimizing ambient tarmac exposure.' },
      { name: 'Pre-Trip Inspection (PTI)', detail: 'Rigorous 24-point pre-cooling and diagnostic check before equipment release.' }
    ],
    corridors: ['Hyderabad ⇄ Almaty', 'Frankfurt ⇄ Dubai Pharma Corridor', 'Chennai ⇄ Colombo ⇄ Tashkent'],
    workflow: [
      { step: '01', title: 'Reefer PTI & Pre-Cooling', desc: 'Equipment thermal validation and sensor calibration prior to loading.' },
      { step: '02', title: 'Monitored Cold Loading', desc: 'Sealed cold-dock transfer with continuous thermal data loggers activated.' },
      { step: '03', title: 'Active Transit Telemetry', desc: 'Live temperature transmission with 24/7 central control desk monitoring.' },
      { step: '04', title: 'Direct Bonded Cold Delivery', desc: 'Instant temperature graph handoff and receipt at consignee cold warehouse.' }
    ]
  },
  {
    id: 'cis-haulage',
    title: 'CIS Countries Haulage & Trans-Caspian Belt',
    shortTitle: 'CIS Haulage Belt',
    tagline: 'Specialized block trains, Caspian ferries, and overland fleets across Central Asia.',
    mode: 'RAIL',
    icon: 'Train',
    leadTime: '7–14 Days Trans-Caspian',
    coverage: 'Kazakhstan, Uzbekistan, Azerbaijan, Georgia & Caucasus',
    co2Profile: 'Intermodal Rail Carbon Reduction (-60%)',
    image: '/images/diff_transform.jpg',
    overview: 'Our signature trade corridor. Dedicated multimodal logistics bridging the Gulf, India, and China to Kazakhstan (Almaty/Astana), Uzbekistan (Tashkent), and the Caspian basin via direct railheads and road linehauls.',
    
    provenMetrics: [
      { value: '8.4 Days', label: 'Dubai to Almaty Transit', sub: '-60% faster than traditional ocean' },
      { value: '12,000+', label: 'Monthly TEU Rail Capacity', sub: 'Trans-Caspian block trains' },
      { value: '100%', label: 'TIR Carnet Border Release', sub: 'Zero border duty holds' },
      { value: '2 Direct', label: 'Operational Desks in Region', sub: 'Almaty & Tashkent GACIS offices' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Dominates the Trans-Caspian & Eurasian Corridor',
      summary: 'We own the Middle Corridor logistics chain by operating direct Caspian feeder slots between Aktau and Baku, synchronized with broad-gauge 1520mm rail block trains.',
      pillars: [
        {
          title: 'Synchronized Caspian Sea-Rail Ferry Slots',
          detail: 'Our direct berth allocations at Aktau (SCO) and Kuryk ports eliminate 5+ days of vessel waiting time for Caspian crossings.'
        },
        {
          title: 'Broad-Gauge 1520mm Railhead Mastery',
          detail: 'Dedicated wagon blocks on KTZ (Kazakhstan Railways) and UTY (Uzbekistan Railways) enable non-stop container transit across Central Asia.'
        },
        {
          title: 'TIR Carnet & Bonded Transit Pre-Clearance',
          detail: 'Automated electronic TIR manifest lodgment ensures trucks pass border crossings at Khorgos, Aktau, and Tashkent without unloading cargo.'
        },
        {
          title: 'Direct In-Country GACIS Operating Desks',
          detail: 'Native GACIS logistics teams in Almaty and Tashkent oversee final customs release, bonded warehouse storage, and door delivery.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Trans-Caspian Multimodal Bridge Reduced Transit from 38 Days to 9 Days for Mining Major',
      clientSector: 'Global Energy & Mining Equipment Supplier',
      challenge: 'Transporting heavy mining components from Dubai and India to inland Uzbekistan without risking winter road closures or port bottlenecks.',
      solution: 'GACIS deployed a Sea-Rail Middle Corridor route: Jebel Ali sea feeder to Aktau Caspian port, transferring onto a scheduled broad-gauge block train to Tashkent.',
      results: [
        'Speed Improvement: 9.2 Days total delivery vs 38 days traditional maritime route',
        'Cost Savings: 34% cheaper than pure air freight for 180 metric tons of cargo',
        'Reliability: 100% on-time arrival across 45 consecutive block train dispatches'
      ]
    },

    technicalSpecs: [
      { label: 'Rail Gauge', value: '1520mm Broad Gauge (CIS network) & 1435mm Standard Gauge' },
      { label: 'Caspian Ferry Terminals', value: 'Aktau Port (Kazakhstan), Kuryk Port, Alyat / Baku Port (Azerbaijan)' },
      { label: 'Customs Regime', value: 'TIR Carnet, Eurasian Economic Union (EAEU) Customs Transit, E-Manifest' },
      { label: 'GACIS Regional Hubs', value: 'Almaty Logistics Park, Tashkent Railway Terminal, Baku Free Zone' }
    ],

    features: [
      'Trans-Caspian Middle Corridor routing via Aktau/Kuryk and Alyat/Baku ports',
      'Synchronized rail block trains operating on 1520mm broad-gauge network',
      'Full TIR Carnet clearance eliminating transit duties at border checkpoints',
      'Direct GACIS operating desk in Almaty, Kazakhstan and Tashkent, Uzbekistan',
      'Heavy-lift flatcars and low-loaders for mining and oilfield equipment'
    ],
    capabilities: [
      { name: 'Dubai ⇄ Aktau ⇄ Almaty', detail: 'Direct sea-rail corridor cutting conventional transit from 35 days down to 10 days.' },
      { name: 'China ⇄ Central Asia Block Trains', detail: 'Scheduled container trains from Yiwu/Chongqing to Dostyk/Altynkol.' },
      { name: 'Inland Dry Port Warehousing', detail: 'Bonded storage and distribution at Almaty Logistics Park and Tashkent.' },
      { name: 'Oversized Oilfield Transit', detail: 'Specialized hydraulic axle trailers for Tengiz and Kashagan energy basins.' }
    ],
    corridors: ['Dubai ⇄ Aktau ⇄ Almaty', 'Chennai ⇄ Dubai ⇄ Tashkent', 'Yiwu ⇄ Khorgos ⇄ Astana'],
    workflow: [
      { step: '01', title: 'Gateway Consolidation', desc: 'Assembly at primary coastal transshipment hub with customs manifest.' },
      { step: '02', title: 'Trans-Caspian Vessel Crossing', desc: 'Feeder vessel ferry sync with port railhead marshaling.' },
      { step: '03', title: 'Eurasian Rail Block Linehaul', desc: 'Broad-gauge container train transit with GPS and armed security escort.' },
      { step: '04', title: 'Central Asian Consignee Yard', desc: 'Final-mile DDP delivery with customs seal release.' }
    ]
  },
  {
    id: 'customs-compliance',
    title: 'Customs Brokerage & Trade Compliance',
    shortTitle: 'Customs Clearance',
    tagline: 'Licensed in-house customs brokers ensuring rapid, zero-delay border clearance.',
    mode: 'CUSTOMS',
    icon: 'ShieldCheck',
    leadTime: '< 24 Hours Clearance',
    coverage: 'Global Ports & Customs Portals',
    co2Profile: '100% Paperless Digital Manifests',
    image: '/images/diff_compliance.jpg',
    overview: 'In-house licensed customs brokers delivering tariff classification (HS Code), Free Trade Agreement (FTA) optimization, bonded warehouse operations, and zero-delay regulatory compliance.',
    
    provenMetrics: [
      { value: '4.2 Hours', label: 'Average Customs Release', sub: '92% green-channel clearances' },
      { value: '100%', label: 'In-House Licensed Brokers', sub: 'Zero third-party sub-contracting' },
      { value: '$3.4M', label: 'Duty Saved via FTA Audit', sub: 'Optimized origin tariffs' },
      { value: '99.94%', label: 'Compliance Audit Score', sub: 'Zero customs fines or holds' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Achieves 4.2-Hour Customs Release Velocity',
      summary: 'We connect directly to national customs portals via automated EDI interfaces and pre-lodge declarations while vessels are still 48 hours away from port.',
      pillars: [
        {
          title: 'Direct EDI Customs API Integration',
          detail: 'Real-time data links to Mirsal II (UAE), ICEGATE (India), ATLAS (Germany), and EAEU Customs lodge declarations instantly.'
        },
        {
          title: 'In-House Tariff Engineering Team',
          detail: 'Certified tariff specialists audit HS Code classifications to legally maximize Free Trade Agreement (CEPA, FTA, EUR.1) duty exemptions.'
        },
        {
          title: 'Pre-Arrival Declaration Lodgment',
          detail: 'Documentation is verified, submitted, and duty-prepaid 48 hours prior to vessel berthing or flight touchdown.'
        },
        {
          title: 'Authorized Economic Operator (AEO) Status',
          detail: 'AEO tier-3 certification grants GACIS priority green-channel release without physical container inspection delays.'
        }
      ]
    },

    provenCaseStudy: {
      title: '$3.4M Annual Duty Savings Engineered for Global Medical Device Manufacturer',
      clientSector: 'Healthcare & Life Sciences Enterprise',
      challenge: 'Client was paying standard 8% import tariffs due to misclassified HS Codes across multiple GCC and Asian entry ports.',
      solution: 'GACIS customs specialists conducted a comprehensive tariff audit, re-classifying 140 SKUs under preferential FTA concessions.',
      results: [
        'Duty Savings: $3,420,000 saved annually across GCC import gateways',
        'Clearance Speed: Reduced average port release time from 4 days to 3.5 hours',
        'Compliance: 100% clearance accuracy verified by national customs authority audits'
      ]
    },

    technicalSpecs: [
      { label: 'Customs Systems', value: 'Mirsal II (Dubai), ICEGATE (India), ATLAS (Germany), EAEU Customs, Dubai Trade' },
      { label: 'Accreditations', value: 'AEO Certified (Authorized Economic Operator), Licensed Customs Brokerage' },
      { label: 'Duty Schemes', value: 'Inward Processing Relief (IPR), Bonded Warehousing, Duty Drawback, Temporary Admission' },
      { label: 'Trade Agreements', value: 'UAE-India CEPA, GCC Common Tariff, EUR.1, ASEAN-India FTA' }
    ],

    features: [
      'Direct integration with Mirsal II (UAE), ICEGATE (India), and international customs platforms',
      'Authorized Economic Operator (AEO) certified procedural expediting',
      'Bonded warehouse storage and deferred duty payment execution',
      'Comprehensive tariff advisory and Free Trade Agreement (FTA) origin audits',
      'Post-clearance compliance documentation archiving'
    ],
    capabilities: [
      { name: 'Import & Export Declarations', detail: 'Instant electronic filing eliminating port dwell times.' },
      { name: 'Duty & Tax Optimization', detail: 'Legitimate utilization of preferential origin tariffs and duty drawback schemes.' },
      { name: 'Special Economic Zones (SEZ)', detail: 'Transfers between free zones and mainland jurisdictions without tax friction.' },
      { name: 'Regulatory Approvals', detail: 'Support for health, agricultural, telecom, and industrial conformity certificates.' }
    ],
    corridors: ['GCC Common Customs', 'ASEAN Trade Corridors', 'CIS Customs Union', 'EU Inward Processing'],
    workflow: [
      { step: '01', title: 'Document Verification', desc: 'Optical verification of Commercial Invoice, Packing List, and BL/AWB.' },
      { step: '02', title: 'HS Code & Tariff Audit', desc: 'Verification against current customs nomenclature and preferential duty rates.' },
      { step: '03', title: 'Pre-Arrival Declaration', desc: 'Electronic lodgment with customs before cargo touchdown or vessel berthing.' },
      { step: '04', title: 'Green Channel Clearance', desc: 'Instant release notification and direct out-of-charge cargo dispatch.' }
    ]
  },
  {
    id: 'road-freight',
    title: 'Cross-Border Road & Overland Transport',
    shortTitle: 'Road Transport',
    tagline: 'High-density FTL & LTL overland fleets spanning the GCC and Central Asian corridors.',
    mode: 'ROAD',
    icon: 'Truck',
    leadTime: '2–7 Days',
    coverage: 'Complete GCC & Trans-Caspian',
    co2Profile: 'Euro 6 Compliant Fleet Routing',
    image: '/images/diff_network.jpg',
    overview: 'Modern GPS-monitored fleet operations engineered for regional cross-border agility, border crossing pre-clearance, and last-mile industrial delivery across Saudi Arabia, UAE, Oman, and Central Asia.',
    
    provenMetrics: [
      { value: '99.5%', label: 'Overland On-Time Delivery', sub: 'Across 15+ land border crossings' },
      { value: '1.5 Hours', label: 'Average Border Crossing', sub: 'Pre-cleared TIR Carnet trucks' },
      { value: '1,800+', label: 'Active GPS Fleet Units', sub: 'Euro 6 compliant modern trucks' },
      { value: '0.00%', label: 'Cargo Loss Incidents', sub: 'Geo-fenced route monitoring' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Dominates Regional Road & Border Logistics',
      summary: 'We operate telematics-enabled fleets equipped with automated border pre-clearance, dual-driver shifts, and 24/7 central control desk monitoring.',
      pillars: [
        {
          title: 'TIR Carnet Non-Intrusive Border Clearance',
          detail: 'Sealed GACIS trucks clear GCC and Central Asian land borders without cargo unloading or physical duty inspection.'
        },
        {
          title: '24/7 Telematics & Geo-Fenced Escort',
          detail: 'Satellite GPS tracks truck speed, engine diagnostics, fuel, door sensors, and route deviation in real time.'
        },
        {
          title: 'Dual-Driver Express Linehauls',
          detail: 'Continuous non-stop driving for high-value cargo achieves air-equivalent speed on routes like Dubai to Riyadh (14 Hours).'
        },
        {
          title: 'Euro 6 Eco-Fleet Standards',
          detail: 'Modern fuel-efficient tractor units reduce Scope 3 carbon emissions while maximizing payload capacities.'
        }
      ]
    },

    provenCaseStudy: {
      title: '14-Hour Non-Stop Overland Corridor Established for High-Tech Retailer between Dubai & Riyadh',
      clientSector: 'Global Consumer Electronics Brand',
      challenge: 'Air freight was cost-prohibitive for high-volume store replenishment between UAE and Saudi Arabia, while standard trucking took 3 days.',
      solution: 'GACIS launched a dual-driver bonded express shuttle operating under TIR carnet with pre-lodged customs release at the Ghafwa border.',
      results: [
        'Transit Time: 14.5 Hours door-to-door (matching air cargo total time)',
        'Cost Savings: 64% cheaper than air freight',
        'Security: 100% unbroken seal integrity verified by digital door telemetry'
      ]
    },

    technicalSpecs: [
      { label: 'Fleet Equipment', value: '13.6m Mega Trailers, Box Trailers, Reefer Trailers (-25°C to +25°C), Flatbeds, Low-bed Heavy Haulers' },
      { label: 'Emission Standard', value: 'Euro 6 / Euro 5 diesel engines with AdBlue low-emission technology' },
      { label: 'Telematics', value: 'Real-time GPS positioning, door open alerts, panic button, wireless temperature sensors' },
      { label: 'Border Systems', value: 'TIR Carnet, GCC Custom Union Bayan, Fasah (Saudi Arabia), EAEU Road Customs' }
    ],

    features: [
      'Telematics-enabled fleet equipped with real-time temperature and door sensors',
      'Bilingual drivers trained in cross-border TIR carnet protocols',
      'Mega-trailers (13.6m), flatbeds, low-loaders, and temperature-controlled trailers',
      'Dedicated border clearance agents at all primary GCC checkpoints',
      '24/7 Central Control Tower monitoring speed, route adherence, and security'
    ],
    capabilities: [
      { name: 'FTL (Full Truckload)', detail: 'Direct non-stop regional haulage for bulk commodities and manufactured goods.' },
      { name: 'LTL Groupage', detail: 'Scheduled cross-border distribution networks with central depot sorting.' },
      { name: 'Heavy Machinery Transport', detail: 'Multi-axle hydraulic trailers for energy and construction oversized cargo.' },
      { name: 'Cross-Docking Hubs', detail: 'Bonded transit warehousing in Dubai Logistics City and Riyadh.' }
    ],
    corridors: ['Dubai ⇄ Riyadh', 'Muscat ⇄ Dubai', 'Almaty ⇄ Tashkent', 'Doha ⇄ Dammam'],
    workflow: [
      { step: '01', title: 'Fleet Allocation & Inspection', desc: 'Pre-trip telematics and security verification at depot.' },
      { step: '02', title: 'TIR Documentation', desc: 'Electronic customs manifesting for sealed non-intrusive border transit.' },
      { step: '03', title: 'Monitored Cross-Border Transit', desc: 'Continuous satellite positioning with geo-fenced safety corridors.' },
      { step: '04', title: 'Consignee Yard Delivery', desc: 'Proof of Delivery (POD) digitization with timestamped receipt.' }
    ]
  },
  {
    id: 'rail-corridors',
    title: 'Intermodal Rail Corridors',
    shortTitle: 'Rail Corridors',
    tagline: 'Trans-Eurasian block trains bridging China, Central Asia, the Caspian, and Europe.',
    mode: 'RAIL',
    icon: 'Train',
    leadTime: '10–18 Days',
    coverage: 'Trans-Caspian & Eurasian Belt',
    co2Profile: 'Up to 75% Lower CO2 vs Road/Air',
    image: '/images/diff_transform.jpg',
    overview: 'High-capacity intermodal rail block trains offering the ideal equilibrium between ocean transit times and air freight costs across the historic silk corridors.',
    
    provenMetrics: [
      { value: '-75%', label: 'Carbon Emissions Reduction', sub: 'Compared to pure road trucking' },
      { value: '14 Days', label: 'China to Europe Transit', sub: '-60% faster than ocean sea freight' },
      { value: '50 Wagons', label: 'Per Dedicated Block Train', sub: 'High-density container shuttles' },
      { value: '$1.2M', label: 'Annual ESG Carbon Offset', sub: 'Certified Scope 3 reporting' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Drives Eurasian Rail Block Train Efficiency',
      summary: 'We contract entire 50-wagon block trains on fixed weekly schedules, managing broad-gauge (1520mm) to standard-gauge (1435mm) bogie exchanges with armed security escorting.',
      pillars: [
        {
          title: 'Dedicated Fixed-Schedule Block Trains',
          detail: 'Weekly scheduled container shuttles operating between Yiwu, Xi\'an, Chongqing, Almaty, Tashkent, and European rail hubs.'
        },
        {
          title: 'Precision Gauge Exchange Management',
          detail: 'Expert bogie exchange operations at Khorgos / Dostyk borders swap container chassis between Chinese standard rail and CIS broad gauge in under 4 hours.'
        },
        {
          title: 'Armed Security & GPS Container Seals',
          detail: 'Containers carry anti-tamper GPS locks and armed escorts across remote Eurasian rail stretches to guarantee high-value cargo safety.'
        },
        {
          title: 'Extreme Climate Reefer Rail Containers',
          detail: 'Diesel-powered reefer containers engineered to maintain +18°C internal temperature even during -40°C Siberian winters.'
        }
      ]
    },

    provenCaseStudy: {
      title: 'Eurasian Rail Corridor Shifted 240 TEU Solar Panels from China to Tashkent, Saving 22 Days',
      clientSector: 'Renewable Energy Infrastructure Developer',
      challenge: 'A major solar park construction project in Uzbekistan faced severe delay penalties if photovoltaic modules did not arrive within 16 days.',
      solution: 'GACIS booked a dedicated 50-wagon block train from Xi\'an direct to Tashkent railhead via the Khorgos dry port.',
      results: [
        'Total Transit Time: 12.8 Days door-to-site',
        'Carbon Reduction: Saved 410 Metric Tons of CO2e compared to road trucking alternative',
        'Project Deadline: Solar installation completed 5 days ahead of contract milestone'
      ]
    },

    technicalSpecs: [
      { label: 'Rail Gauges', value: '1520mm Broad Gauge (CIS / Central Asia) & 1435mm Standard Gauge (China / Europe)' },
      { label: 'Train Capacity', value: '50 to 82 TEU per full block train shuttle' },
      { label: 'Container Types', value: '40ft High Cube Dry, 40ft Reefer with independent diesel generator, 20ft Heavy Commodity' },
      { label: 'ESG Standard', value: 'ISO 14064 Carbon Footprint Verification & GLEC Framework v3.0' }
    ],

    features: [
      'Dedicated weekly block train allocations with fixed departure windows',
      'Trans-Caspian feeder vessel and rail wagon synchronization',
      'Broad gauge (1520mm) and standard gauge (1435mm) bogie exchange management',
      'Security-sealed container trains with armed and GPS escorting',
      'Significant scope 3 carbon reduction certified for ESG reporting'
    ],
    capabilities: [
      { name: 'Trans-Caspian Middle Corridor', detail: 'Connecting China and Central Asia to Turkey/Europe bypassing congested routes.' },
      { name: 'Eurasian Block Trains', detail: 'High-volume container shuttles between major industrial terminals.' },
      { name: 'Heavy Industrial Rail', detail: 'Hopper and flat-car leasing for minerals, steel, and machinery.' },
      { name: 'Temperature-Safe Rail', detail: 'Diesel-generator reefer containers designed for extreme Siberian/Central Asian climates.' }
    ],
    corridors: ['Yiwu ⇄ Almaty', 'Tashkent ⇄ Baku ⇄ Istanbul', 'Chongqing ⇄ Duisburg', 'Aktau ⇄ Tashkent'],
    workflow: [
      { step: '01', title: 'Terminal Consolidation', desc: 'Container marshalling at designated inland dry port railheads.' },
      { step: '02', title: 'Block Train Assembly', desc: 'Wagon manifest verification and electronic transit customs filing.' },
      { step: '03', title: 'Trans-Corridor Journey', desc: 'Continuous sensor updates through railway control interfaces.' },
      { step: '04', title: 'Inland Terminal Distribution', desc: 'Direct transshipment onto regional road transport networks.' }
    ]
  },
  {
    id: 'project-logistics',
    title: 'Project Cargo & Heavy Lift Engineering',
    shortTitle: 'Project Logistics',
    tagline: 'Engineered transport solutions for oversized, industrial, and infrastructure capital assets.',
    mode: 'PROJECT',
    icon: 'Boxes',
    leadTime: 'Engineered Schedules',
    coverage: 'Global Remote Locations',
    co2Profile: 'Route-Engineered Efficiency',
    image: '/images/diff_transform.jpg',
    overview: 'Specialized heavy-lift division delivering route surveys, marine engineering, hydraulic modular transport, and turnkey movement for energy, mining, and infrastructure projects.',
    
    provenMetrics: [
      { value: '500+ Tons', label: 'Single Piece Payload Limit', sub: 'Hydraulic multi-axle SPMTs' },
      { value: '100%', label: 'Engineering RAMS Compliance', sub: 'Zero-incident safety record' },
      { value: '3D Route', label: 'BIM & Clearance Modeling', sub: 'Bridge stress analysis' },
      { value: '35+', label: 'Turnkey Industrial Plants Moved', sub: 'Across Gulf & Eurasia' }
    ],

    howGacisDoesIt: {
      headline: 'How GACIS Engineers Heavy-Lift & Oversized Project Logistics',
      summary: 'We deploy in-house transport engineers who perform 3D CAD sweep path simulations, structural bridge calculations, police escorts, and SPMT hydraulic trailer operations.',
      pillars: [
        {
          title: '3D CAD & Route Clearance Engineering',
          detail: 'Laser scans and 3D simulation model turning radiuses, overhead wire clearances, and bridge weight limits prior to vehicle dispatch.'
        },
        {
          title: 'Hydraulic SPMT Modular Trailers',
          detail: 'Self-Propelled Modular Transporters (SPMT) with 48+ axle lines distribute multi-hundred-ton payloads safely across fragile roads.'
        },
        {
          title: 'Heavy-Lift Chartering & Barging',
          detail: 'Geared heavy-lift ocean vessels and inland river barges positioned for out-of-gauge turbines, reactors, and transformers.'
        },
        {
          title: 'Method Statement & RAMS Approval',
          detail: 'Rigorous Risk Assessment & Method Statement (RAMS) signed off by certified structural engineers and civil transport authorities.'
        }
      ]
    },

    provenCaseStudy: {
      title: '340-Ton Gas Turbine Transported Across 650 km Remote Terrain to Kazakhstan Power Station',
      clientSector: 'Global Energy EPC Contractor',
      challenge: 'Transporting a 340-metric-ton gas turbine across narrow roads and 14 unreinforced river bridges in Central Asia.',
      solution: 'GACIS engineered a custom 32-axle hydraulic SPMT trailer combination, temporarily reinforcing 3 bridges and bypassing 11 culverts.',
      results: [
        'Safety Record: Zero structural damage and zero safety incidents',
        'On-Time Execution: Delivered 2 days ahead of power plant installation schedule',
        'Regulatory Compliance: 100% civil authority and police permit sign-offs'
      ]
    },

    technicalSpecs: [
      { label: 'Heavy-Lift Equipment', value: 'Goldhofer & Scheuerle SPMT Hydraulic Modular Trailers, Low-Bed Trailers, 500-Ton Mobile Cranes' },
      { label: 'Vessel Chartering', value: 'Geared Heavy-Lift Vessels (2x 400-Ton Cranes), Deck Barges, Ro-Ro Vessels' },
      { label: 'Air Charter Capacity', value: 'Antonov AN-124 / Ilyushin IL-76 for ultra-heavy aerospace and energy components' },
      { label: 'Engineering Protocols', value: 'Lashing & Securing Calculations (DNV-GL Standard), 3D Sweep Path Modeling' }
    ],

    features: [
      'Route engineering surveys including bridge stress calculations and obstacle removal',
      'Chartering of heavy-lift geared vessels and Antonov/Ilyushin cargo aircraft',
      'Hydraulic Multi-Axle Modular Trailers (SPMT) for extreme payload weights',
      'On-site staging managers and technical loadmaster supervision',
      'Risk assessment and method statement (RAMS) documentation'
    ],
    capabilities: [
      { name: 'Energy & Petrochemical', detail: 'Transport of turbines, pressure vessels, reactors, and drill modules.' },
      { name: 'Infrastructure & Construction', detail: 'Bridge girders, tunnel boring machines (TBM), and prefabricated structural units.' },
      { name: 'Factory Relocation', detail: 'Complete industrial plant dismantling, international transit, and re-assembly.' },
      { name: 'Barge & Ro-Ro Operations', detail: 'Coastal and inland waterway movements for extreme-weight components.' }
    ],
    corridors: ['Gulf Energy Projects', 'Central Asia Mining Belts', 'South Asia Infrastructure', 'Eurasian Pipeline Networks'],
    workflow: [
      { step: '01', title: 'Engineering & Feasibility Study', desc: '3D route simulation, turning radius analysis, and permit acquisition.' },
      { step: '02', title: 'Stowage & Securing Plan', desc: 'Calculation of center of gravity, tie-down forces, and lifting rigs.' },
      { step: '03', title: 'Execution & Escort', desc: 'Police escorts, civil utility coordination, and monitored transport.' },
      { step: '04', title: 'Foundation Placement', desc: 'Precision hydraulic jacking and skidding onto final plinths.' }
    ]
  }
];

export default services;
