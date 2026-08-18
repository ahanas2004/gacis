// Centralized Services Data Definition — Single Source of Truth
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
    overview: 'High-velocity air freight architecture engineered for high-value cargo, pharmaceuticals, automotive parts, and urgent industrial spares across the Gulf, Central Asia, and Europe.',
    features: [
      'Scheduled block space agreements (BSA) with tier-1 global carriers',
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
      { step: '03', title: 'Linehaul & Transshipment', desc: 'Real-time telemetry tracking through primary hub gateways.' },
      { step: '04', title: 'Destination Bonded Release', desc: 'Direct tarmac transfer to final-mile temperature-controlled vehicles.' }
    ]
  },
  {
    id: 'ocean-freight',
    title: 'Ocean Freight & Multimodal Seaways',
    shortTitle: 'Ocean Freight',
    tagline: 'FCL & LCL container linehaul connecting major deepwater ports with rail hinterlands.',
    mode: 'SEA',
    icon: 'Ship',
    leadTime: '14–28 Days',
    coverage: '400+ Port Pairs',
    co2Profile: 'Lowest Carbon Footprint per Ton-KM',
    image: '/images/sea_freight_vessel.jpg',
    overview: 'Resilient ocean logistics network leveraging primary alliances for Full Container Load (FCL), Less than Container Load (LCL) consolidation, and breakbulk across trans-Indian and Arabian trade routes.',
    features: [
      'Contracted allocation on major vessel alliances (2M, Ocean Alliance, THE Alliance)',
      'Dedicated buyer’s consolidation hubs in Jebel Ali and Port Klang',
      'Reefer container monitoring with automated temperature data logging',
      'Seamless port-to-rail intermodal handover at Bandar Abbas, Poti, and Vladivostok',
      'Comprehensive marine cargo insurance and cargo security escorting'
    ],
    capabilities: [
      { name: 'FCL Direct Routing', detail: 'Dedicated 20ft, 40ft, High Cube, and Open Top equipment on primary strings.' },
      { name: 'LCL Cargo Consolidation', detail: 'Weekly scheduled groupage services with guaranteed sailings.' },
      { name: 'Project & Breakbulk', detail: 'Specialized heavy-lift cranes and flat racks for out-of-gauge (OOG) machinery.' },
      { name: 'Green Seaways', detail: 'Biofuel vessel routing and slow-steaming carbon optimization.' }
    ],
    corridors: ['Jebel Ali ⇄ Rotterdam', 'Port Klang ⇄ Colombo', 'Chennai ⇄ Singapore', 'Mundra ⇄ Jebel Ali'],
    workflow: [
      { step: '01', title: 'Container Positioning', desc: 'Equipment dispatch to factory floor with dry seal certification.' },
      { step: '02', title: 'Port Gate-In & Loading', desc: 'Automated weight verification (VGM) and vessel stowage execution.' },
      { step: '03', title: 'Deepsea Ocean Linehaul', desc: 'Satellite AIS tracking with automated port congestion rerouting.' },
      { step: '04', title: 'Intermodal Port Discharge', desc: 'Direct transition to container rail wagons or bonded trucking.' }
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
    co2Profile: 'Euro 6 Compliant Fleet Fleet Routing',
    image: '/images/diff_network.jpg',
    overview: 'Modern GPS-monitored fleet operations engineered for regional cross-border agility, border crossing pre-clearance, and last-mile industrial delivery across Saudi Arabia, UAE, Oman, and Central Asia.',
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
    id: 'rail-freight',
    title: 'Intermodal Rail Corridors',
    shortTitle: 'Rail Freight',
    tagline: 'Trans-Eurasian block trains bridging China, Central Asia, the Caspian, and Europe.',
    mode: 'RAIL',
    icon: 'Train',
    leadTime: '10–18 Days',
    coverage: 'Trans-Caspian & Eurasian Belt',
    co2Profile: 'Up to 75% Lower CO₂ vs Road/Air',
    image: '/images/diff_transform.jpg',
    overview: 'High-capacity intermodal rail block trains offering the ideal equilibrium between ocean transit times and air freight costs across the historic silk corridors.',
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
    corridors: ['Yiwu ⇄ Almaty', 'Tashkent ⇄ Baku ⇄ Istanbul', 'Chongqing ⇄ Duisburg', 'Bandar Abbas ⇄ Tashkent'],
    workflow: [
      { step: '01', title: 'Terminal Consolidation', desc: 'Container marshalling at designated inland dry port railheads.' },
      { step: '02', title: 'Block Train Assembly', desc: 'Wagon manifest verification and electronic transit customs filing.' },
      { step: '03', title: 'Trans-Corridor Journey', desc: 'Continuous sensor updates through railway control interfaces.' },
      { step: '04', title: 'Inland Terminal Distribution', desc: 'Direct transshipment onto regional road transport networks.' }
    ]
  },
  {
    id: 'customs-compliance',
    title: 'Customs Brokerage & Trade Compliance',
    shortTitle: 'Customs & Compliance',
    tagline: 'Automated tariff classification, duty optimization, and regulatory clearance.',
    mode: 'CUSTOMS',
    icon: 'ShieldCheck',
    leadTime: '< 24 Hours Clearance',
    coverage: 'Global Customs Portals',
    co2Profile: '100% Paperless Digital Manifests',
    image: '/images/diff_compliance.jpg',
    overview: 'In-house licensed customs brokers delivering algorithmic HS code classification, Free Trade Agreement (FTA) utilization, and zero-delay compliance management.',
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
      { step: '01', title: 'Document Verification', desc: 'Automated optical parsing of Invoices, Packing Lists, and Certificates of Origin.' },
      { step: '02', title: 'HS Code & Valuation Audit', desc: 'Verification against current tariff schedules and valuation rules.' },
      { step: '03', title: 'Pre-Arrival Declaration', desc: 'Electronic lodgment with customs before cargo touchdown/berthing.' },
      { step: '04', title: 'Green Channel Clearance', desc: 'Instant release release notification and duty settlement.' }
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
