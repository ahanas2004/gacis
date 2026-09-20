// Centralized Navigation Data for the GACIS Global Operations Console Sidebar
export const navigationGroups = [
  {
    id: 'operations',
    group: 'OPERATIONS',
    items: [
      {
        id: 'overview',
        label: 'Overview',
        subLabel: 'Network Home',
        path: '/',
        icon: 'LayoutDashboard',
        exact: true
      },
      {
        id: 'global-network',
        label: 'Global Network',
        path: '/global-network',
        icon: 'Globe2',
        isNetworkAnchor: true
      },
      {
        id: 'services',
        label: 'Services',
        path: '/services',
        icon: 'Layers',
        hasSubmenu: true,
        sublinks: [
          { label: 'Air Freight', path: '/services/air-freight', mode: 'AIR' },
          { label: 'FCL Ocean Freight', path: '/services/fcl-freight', mode: 'SEA' },
          { label: 'LCL Consolidation', path: '/services/lcl-consolidation', mode: 'SEA' },
          { label: 'EXW & FCA Shipments', path: '/services/exw-fca-shipments', mode: 'ROAD' },
          { label: 'Reefer Cold Chain', path: '/services/reefer-cold-chain', mode: 'COLD' },
          { label: 'CIS Haulage Belt', path: '/services/cis-haulage', mode: 'RAIL' },
          { label: 'Customs Clearance', path: '/services/customs-compliance', mode: 'CUSTOMS' },
          { label: 'Road Transport', path: '/services/road-freight', mode: 'ROAD' },
          { label: 'Rail Corridors', path: '/services/rail-corridors', mode: 'RAIL' },
          { label: 'Project Logistics', path: '/services/project-logistics', mode: 'PROJECT' }
        ]
      },
      {
        id: 'solutions',
        label: 'Solutions',
        path: '/solutions',
        icon: 'Box'
      }
    ]
  },
  {
    id: 'intelligence',
    group: 'INTELLIGENCE',
    items: [
      {
        id: 'sustainability',
        label: 'Sustainability',
        path: '/sustainability',
        icon: 'Leaf',
        badge: 'ESG'
      },
      {
        id: 'knowledge-hub',
        label: 'Knowledge Hub',
        path: '/resources',
        icon: 'BookOpen'
      }
    ]
  },
  {
    id: 'company',
    group: 'COMPANY',
    items: [
      {
        id: 'about',
        label: 'About GACIS',
        path: '/about',
        icon: 'Building2'
      },
      {
        id: 'commercial-desk',
        label: 'Commercial Desk',
        path: '/contact',
        icon: 'PhoneCall'
      }
    ]
  }
];

export const utilityActions = {
  quote: {
    label: 'REQUEST A QUOTE',
    path: '/quote',
    icon: 'ArrowRight'
  },
  contact: {
    label: 'CONTACT DESK',
    path: '/contact',
    icon: 'PhoneCall'
  },
  operationsStatus: {
    location: 'DUBAI OPERATIONS',
    statusText: 'LIVE · 24/7 DESK'
  }
};

