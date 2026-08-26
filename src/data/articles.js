export const rareLogisticsArticles = [
  {
    id: 'titr-caspian-bypass',
    title: 'The Trans-Caspian Secret: Navigating the Middle Corridor Bypass',
    category: 'STRATEGIC & SECRET ROUTES',
    categoryTag: 'STRATEGIC ROUTE',
    rarityScore: '5/5 Classified Route',
    publisher: 'Railway Gazette International',
    publisherTag: 'RAILWAY GAZETTE',
    externalUrl: 'https://www.railwaygazette.com/freight/middle-corridor-gains-momentum-as-trans-caspian-freight-grows/64890.article',
    readTime: '6 min read',
    date: 'August 2026',
    excerpt: 'How high-value enterprise cargo bypasses traditional maritime chokepoints and geopolitical blockades through Baku, Aktau, and Kuryk port feeder networks across the Caspian Sea.',
    stats: [
      { label: 'Transit Time', val: '12-14 Days' },
      { label: 'CO₂ Savings', val: '-87.4%' },
      { label: 'Border Clearance SLA', val: '< 45 Mins' }
    ]
  },
  {
    id: 'tapa-tsr1-fortress-convoys',
    title: 'TAPA TSR-1 Fortress Convoys: The World\'s Safest High-Value Cargo Route',
    category: 'HIGH-SECURITY & ARMED ESCORT',
    categoryTag: 'SECURITY PROTOCOL',
    rarityScore: '5/5 Classified Security',
    publisher: 'FreightWaves Intelligence',
    publisherTag: 'FREIGHTWAVES',
    externalUrl: 'https://www.freightwaves.com/news/cargo-theft-prevention-tapa-tsr-security-standards',
    readTime: '7 min read',
    date: 'August 2026',
    excerpt: 'Inside the 4,200km overland convoy protocol protecting billion-dollar semiconductor, gold bullion, and high-tech shipments between Europe, Dubai, and Central Asia with zero theft incidents.',
    stats: [
      { label: 'Cargo Loss Rate', val: '0.00%' },
      { label: 'TAPA Security Level', val: 'TSR-1 Certified' },
      { label: 'Control SLA', val: 'Real-Time Satellite' }
    ]
  },
  {
    id: 'cryo-pharma-corridors',
    title: 'Sub-Zero Cryo-Logistics: Flying -80°C Active Bio-Pharma Corridors',
    category: 'BIOPHARMACEUTICAL COLD-CHAIN',
    categoryTag: 'CRYO COLD-CHAIN',
    rarityScore: '4/5 GDP Certified',
    publisher: 'Air Cargo News',
    publisherTag: 'AIR CARGO NEWS',
    externalUrl: 'https://www.aircargonews.net/pharma-logistics/cool-chain-precision-flying-active-pharma-containers-across-ambient-extremes/',
    readTime: '5 min read',
    date: 'July 2026',
    excerpt: 'Operational mechanics of flying GDP-certified active dry-ice temperature-controlled containers (+2°C to +8°C and -80°C) for live vaccines and gene therapy cargo across extreme ambient climates.',
    stats: [
      { label: 'Temperature Setpoint', val: '-80°C to +5°C' },
      { label: 'Tarmac Exposure SLA', val: '< 7 Minutes' },
      { label: 'GDP Compliance', val: '100% Audit-Ready' }
    ]
  },
  {
    id: 'polar-northern-sea-route',
    title: 'The Polar Shortcut: Northern Sea Route (NSR) Icebreaker Cargo Convoys',
    category: 'EXTREME ENVIRONMENT LOGISTICS',
    categoryTag: 'ARCTIC MARITIME',
    rarityScore: '5/5 Polar Passage',
    publisher: 'Journal of Commerce (JOC)',
    publisherTag: 'JOC / S&P GLOBAL',
    externalUrl: 'https://www.joc.com/maritime-news/container-lines/northern-sea-route-arctic-container-shipping_2024.html',
    readTime: '8 min read',
    date: 'July 2026',
    excerpt: 'Navigating Class 1A ARC7 heavy ice-breaking container vessels through sub-zero Arctic sea ice (-40°C), cutting East Asia-to-Europe maritime transit times by 40%.',
    stats: [
      { label: 'Distance Saved', val: '-3,900 NM' },
      { label: 'Transit Reduction', val: '18 Days vs 34 Days' },
      { label: 'Ice Capability', val: '3m Sea Ice' }
    ]
  },
  {
    id: 'heavy-spmt-monolith',
    title: '600-Ton Monolith SPMT Transport: Mountain & Desert Heavy-Lift Engineering',
    category: 'EXTREME ENVIRONMENT LOGISTICS',
    categoryTag: 'PROJECT CARGO',
    rarityScore: '4/5 Heavy Industrial',
    publisher: 'Heavy Lift & Project Cargo International',
    publisherTag: 'HEAVY LIFT PFI',
    externalUrl: 'https://www.heavyliftpfi.com/news/spmt-transport-engineering-for-super-heavy-power-generation-cargo/19820.article',
    readTime: '6 min read',
    date: 'June 2026',
    excerpt: 'The physics and engineering behind moving 600-tonne gas turbines and chemical reactors through unpaved mountain passes and desert bridges using 36-axle hydraulic SPMTs.',
    stats: [
      { label: 'Max Payload Capacity', val: '600+ Metric Tons' },
      { label: 'Axle Levelling Precision', val: '0mm Tilt Variance' },
      { label: 'Bypass Bridges Built', val: '14 Temporary Corridors' }
    ]
  },
  {
    id: 'multi-gauge-rail-swap',
    title: 'The Multi-Gauge Fast Rail Swap: 1520mm to 1435mm Gantry Crane Engineering',
    category: 'STRATEGIC & SECRET ROUTES',
    categoryTag: 'INTERMODAL RAIL',
    rarityScore: '4/5 Intermodal Tech',
    publisher: 'SupplyChainBrain',
    publisherTag: 'SUPPLYCHAINBRAIN',
    externalUrl: 'https://www.supplychainbrain.com/articles/35890-how-multi-gauge-rail-swaps-accelerate-eurasian-freight-flows',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'How transcontinental Silk Road block trains swap 40ft High-Cube containers between 1,520mm broad-gauge and 1,435mm standard-gauge rail tracks in under 42 minutes.',
    stats: [
      { label: 'Container Swap SLA', val: '< 42 Minutes' },
      { label: 'Gantry Crane Speed', val: '90s / Container' },
      { label: 'Consignment Conversion', val: '100% Digital CIM/SMGS' }
    ]
  }
];

export const getArticleById = (id) => {
  return rareLogisticsArticles.find((a) => a.id === id);
};
