import { lazy, Suspense, useState, useEffect } from 'react';
import { 
  MapPin, Mail, Building2, Globe2, ArrowRight, Phone, Check, 
  Activity, Plane, Ship, Train, Truck, ShieldCheck, Compass, Radio,
  Layers, ChevronRight, Boxes, Waves, Anchor, Navigation, Zap, Search, ArrowDownLeft, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/Common/SEO';
import LazyVideo from '../../components/Common/LazyVideo';
import { loadLocations } from '../../data/lazyData';
import './GlobalNetwork.css';

const RealGeographicMap = lazy(() => import('../../components/NetworkMap/RealGeographicMap'));

const importServicePorts = [
  'China (All Ports)', 'Hong Kong', 'Taiwan', 'Singapore', 'Malaysia', 'Indonesia',
  'South Korea', 'Thailand', 'Vietnam', 'Cambodia', 'Myanmar', 'Japan', 'U.K.',
  'Italy', 'Germany', 'France', 'Belgium', 'Bulgaria', 'Netherlands', 'Switzerland',
  'Spain', 'Austria', 'Other International Ports'
];

const exportServiceRegions = [
  'Far East', 'South East Asia', 'Middle East', 'Indian Sub-continent', 'CIS',
  'Red Sea', 'Africa', 'Europe', 'Canada', 'USEC', 'USWC', 'Latin America',
  'Central America'
];

const servicePortNetwork = [
  { id: 'CN', country: 'China', flag: '🇨🇳', scope: 'ALL MAJOR PORTS', ports: [
    { name: 'Shanghai', code: 'CNSHA', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Mundra', 'Kolkata / Haldia', 'Colombo', 'Dubai / Jebel Ali', 'Singapore', 'Port Klang', 'Rotterdam', 'Hamburg', 'Felixstowe', 'Genoa', 'Los Angeles / Long Beach', 'New York / New Jersey'] },
    { name: 'Ningbo-Zhoushan', code: 'CNNGB', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Port Klang', 'Colombo', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach'] },
    { name: 'Shenzhen — Yantian / Shekou', code: 'CNSZX', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Mundra', 'Colombo', 'Singapore', 'Port Klang', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach', 'New York / New Jersey'] },
    { name: 'Qingdao', code: 'CNTAO', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Port Klang', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Genoa'] },
    { name: 'Tianjin / Xingang', code: 'CNTSN', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach'] },
    { name: 'Xiamen', code: 'CNXMN', connections: ['Chennai', 'Colombo', 'Singapore', 'Port Klang', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Guangzhou / Nansha', code: 'CNCAN', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Port Klang', 'Colombo', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe'] },
    { name: 'Dalian', code: 'CNDLC', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Lianyungang', code: 'CNLYG', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam'] },
    { name: 'Rizhao', code: 'CNRZH', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam'] }
  ]},
  { id: 'HK', country: 'Hong Kong', flag: '🇭🇰', ports: [
    { name: 'Kwai Tsing Container Terminals', code: 'HKHKG', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Mundra', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach'] }
  ]},
  { id: 'TW', country: 'Taiwan', flag: '🇹🇼', ports: [
    { name: 'Kaohsiung', code: 'TWKHH', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Keelung', code: 'TWKEL', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Taichung', code: 'TWTXG', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam'] }
  ]},
  { id: 'SG', country: 'Singapore', flag: '🇸🇬', ports: [
    { name: 'Port of Singapore', code: 'SGSIN', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Colombo', 'Jebel Ali', 'Port Klang', 'Tanjung Pelepas', 'Jakarta / Tanjung Priok', 'Busan', 'Tokyo / Yokohama', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Genoa', 'Los Angeles / Long Beach', 'New York / New Jersey'] }
  ]},
  { id: 'MY', country: 'Malaysia', flag: '🇲🇾', ports: [
    { name: 'Port Klang', code: 'MYPKG', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Mundra', 'Singapore', 'Tanjung Pelepas', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Genoa', 'Los Angeles / Long Beach'] },
    { name: 'Tanjung Pelepas', code: 'MYTPP', connections: ['Chennai', 'Singapore', 'Nhava Sheva / JNPT', 'Jebel Ali', 'Colombo', 'Busan', 'Tokyo / Yokohama', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach'] },
    { name: 'Penang', code: 'MYPEN', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam'] },
    { name: 'Johor Port', code: 'MYJHB', connections: ['Singapore', 'Chennai', 'Port Klang', 'Jebel Ali', 'Colombo'] },
    { name: 'Kuantan', code: 'MYKUA', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali'] }
  ]},
  { id: 'ID', country: 'Indonesia', flag: '🇮🇩', ports: [
    { name: 'Tanjung Priok / Jakarta', code: 'IDTPP', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Busan', 'Shanghai', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Tanjung Perak / Surabaya', code: 'IDSUB', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali', 'Colombo', 'Shanghai'] },
    { name: 'Belawan / Medan', code: 'IDBLW', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali', 'Colombo'] },
    { name: 'Tanjung Emas / Semarang', code: 'IDSRG', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali', 'Colombo'] },
    { name: 'Makassar', code: 'IDUPG', connections: ['Singapore', 'Surabaya', 'Jakarta / Tanjung Priok', 'Port Klang'] }
  ]},
  { id: 'KR', country: 'South Korea', flag: '🇰🇷', ports: [
    { name: 'Busan', code: 'KRPUS', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Mundra', 'Singapore', 'Port Klang', 'Shanghai', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Los Angeles / Long Beach', 'New York / New Jersey'] },
    { name: 'Incheon', code: 'KRINC', connections: ['Chennai', 'Singapore', 'Shanghai', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Gwangyang', code: 'KRKUV', connections: ['Chennai', 'Singapore', 'Shanghai', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Pyeongtaek-Dangjin', code: 'KRPTK', connections: ['Chennai', 'Shanghai', 'Singapore', 'Jebel Ali', 'Hamburg'] }
  ]},
  { id: 'TH', country: 'Thailand', flag: '🇹🇭', ports: [
    { name: 'Laem Chabang', code: 'THLCH', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Shanghai', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Bangkok Port', code: 'THBKK', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo'] },
    { name: 'Map Ta Phut', code: 'THMTP', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Port Klang'] },
    { name: 'Songkhla', code: 'THSGZ', connections: ['Singapore', 'Port Klang', 'Chennai'] }
  ]},
  { id: 'VN', country: 'Vietnam', flag: '🇻🇳', ports: [
    { name: 'Cai Mep-Thi Vai', code: 'VNCMT', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Shanghai', 'Busan', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Cat Lai / Ho Chi Minh City', code: 'VNSGN', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Shanghai'] },
    { name: 'Hai Phong', code: 'VNHPH', connections: ['Chennai', 'Singapore', 'Shanghai', 'Busan', 'Jebel Ali', 'Hamburg', 'Rotterdam'] },
    { name: 'Da Nang', code: 'VNDAD', connections: ['Singapore', 'Port Klang', 'Chennai', 'Shanghai'] }
  ]},
  { id: 'KH', country: 'Cambodia', flag: '🇰🇭', ports: [
    { name: 'Sihanoukville Autonomous Port', code: 'KHKOS', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali', 'Colombo', 'Shanghai'] },
    { name: 'Phnom Penh Autonomous Port', code: 'KHPPH', connections: ['Sihanoukville', 'Singapore', 'Port Klang', 'Chennai'] }
  ]},
  { id: 'MM', country: 'Myanmar', flag: '🇲🇲', ports: [
    { name: 'Yangon / Thilawa', code: 'MMRGN', connections: ['Singapore', 'Port Klang', 'Chennai', 'Jebel Ali', 'Colombo', 'Port Klang'] },
    { name: 'Kyaukphyu', code: 'MMKYP', connections: ['Chittagong', 'Singapore', 'Colombo', 'Chennai'] }
  ]},
  { id: 'JP', country: 'Japan', flag: '🇯🇵', ports: [
    { name: 'Tokyo', code: 'JPTYO', connections: ['Chennai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Shanghai', 'Busan', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach', 'New York / New Jersey'] },
    { name: 'Yokohama', code: 'JPYOK', connections: ['Chennai', 'Singapore', 'Port Klang', 'Shanghai', 'Busan', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Nagoya', code: 'JPNGO', connections: ['Chennai', 'Singapore', 'Shanghai', 'Busan', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Kobe', code: 'JPUKB', connections: ['Chennai', 'Singapore', 'Shanghai', 'Busan', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Los Angeles / Long Beach'] },
    { name: 'Osaka', code: 'JPOSA', connections: ['Chennai', 'Singapore', 'Shanghai', 'Busan', 'Jebel Ali', 'Hamburg', 'Rotterdam'] },
    { name: 'Hakata / Fukuoka', code: 'JPFUK', connections: ['Singapore', 'Busan', 'Shanghai', 'Chennai'] }
  ]},
  { id: 'GB', country: 'United Kingdom', flag: '🇬🇧', ports: [
    { name: 'Felixstowe', code: 'GBFXT', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Shanghai', 'Ningbo-Zhoushan', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'Genoa', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Southampton', code: 'GBSOU', connections: ['Chennai', 'Mundra', 'Singapore', 'Jebel Ali', 'Colombo', 'Rotterdam', 'Hamburg', 'Genoa', 'New York / New Jersey'] },
    { name: 'London Gateway', code: 'GBLON', connections: ['Chennai', 'Nhava Sheva / JNPT', 'Singapore', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'New York / New Jersey'] },
    { name: 'Liverpool', code: 'GBLIV', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'New York / New Jersey'] }
  ]},
  { id: 'IT', country: 'Italy', flag: '🇮🇹', ports: [
    { name: 'Gioia Tauro', code: 'ITGIT', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Jebel Ali', 'Singapore', 'Colombo', 'Felixstowe', 'Rotterdam', 'Hamburg', 'New York / New Jersey'] },
    { name: 'Genoa', code: 'ITGOA', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Jebel Ali', 'Singapore', 'Colombo', 'Hamburg', 'Rotterdam', 'Felixstowe', 'New York / New Jersey'] },
    { name: 'La Spezia', code: 'ITSPE', connections: ['Chennai', 'Mundra', 'Jebel Ali', 'Singapore', 'Rotterdam', 'Hamburg', 'Felixstowe'] },
    { name: 'Trieste', code: 'ITTRS', connections: ['Nhava Sheva / JNPT', 'Mundra', 'Jebel Ali', 'Singapore', 'Hamburg', 'Rotterdam'] },
    { name: 'Livorno', code: 'ITLIV', connections: ['Chennai', 'Mundra', 'Jebel Ali', 'Singapore', 'Genoa', 'Rotterdam'] }
  ]},
  { id: 'DE', country: 'Germany', flag: '🇩🇪', ports: [
    { name: 'Hamburg', code: 'DEHAM', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Shanghai', 'Ningbo-Zhoushan', 'Jebel Ali', 'Rotterdam', 'Felixstowe', 'Genoa', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Bremerhaven', code: 'DEBRV', connections: ['Chennai', 'Mundra', 'Singapore', 'Shanghai', 'Jebel Ali', 'Rotterdam', 'Felixstowe', 'New York / New Jersey'] },
    { name: 'Wilhelmshaven', code: 'DEWVN', connections: ['Chennai', 'Mundra', 'Singapore', 'Shanghai', 'Jebel Ali', 'Rotterdam', 'Felixstowe'] }
  ]},
  { id: 'FR', country: 'France', flag: '🇫🇷', ports: [
    { name: 'Le Havre', code: 'FRLEH', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Shanghai', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'Felixstowe', 'New York / New Jersey'] },
    { name: 'Marseille Fos', code: 'FRMRS', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Jebel Ali', 'Singapore', 'Colombo', 'Genoa', 'Rotterdam', 'Hamburg'] },
    { name: 'Dunkirk', code: 'FRDKK', connections: ['Chennai', 'Mundra', 'Singapore', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'Felixstowe'] },
    { name: 'Nantes-Saint-Nazaire', code: 'FRNTE', connections: ['Chennai', 'Singapore', 'Jebel Ali', 'Rotterdam', 'Hamburg'] }
  ]},
  { id: 'BE', country: 'Belgium', flag: '🇧🇪', ports: [
    { name: 'Antwerp-Bruges', code: 'BEANR', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Shanghai', 'Jebel Ali', 'Rotterdam', 'Hamburg', 'Felixstowe', 'Genoa', 'New York / New Jersey'] }
  ]},
  { id: 'BG', country: 'Bulgaria', flag: '🇧🇬', ports: [
    { name: 'Port of Varna', code: 'BGVAR', connections: ['Jebel Ali', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Piraeus', 'Constanta', 'Genoa', 'Hamburg', 'Rotterdam'] },
    { name: 'Port of Burgas', code: 'BGBOJ', connections: ['Jebel Ali', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Piraeus', 'Genoa', 'Hamburg'] }
  ]},
  { id: 'NL', country: 'Netherlands', flag: '🇳🇱', ports: [
    { name: 'Rotterdam', code: 'NLRTM', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Shanghai', 'Ningbo-Zhoushan', 'Jebel Ali', 'Hamburg', 'Felixstowe', 'Genoa', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Amsterdam', code: 'NLAMS', connections: ['Chennai', 'Mundra', 'Singapore', 'Jebel Ali', 'Hamburg', 'Felixstowe'] }
  ]},
  { id: 'CH', country: 'Switzerland', flag: '🇨🇭', ports: [
    { name: 'Basel Rhine Ports', code: 'CHBSL', connections: ['Rotterdam', 'Antwerp-Bruges', 'Hamburg', 'Genoa', 'La Spezia', 'Le Havre', 'Chennai', 'Mundra', 'Nhava Sheva / JNPT'] }
  ]},
  { id: 'ES', country: 'Spain', flag: '🇪🇸', ports: [
    { name: 'Valencia', code: 'ESVLC', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Jebel Ali', 'Colombo', 'Rotterdam', 'Hamburg', 'Felixstowe', 'Genoa', 'New York / New Jersey'] },
    { name: 'Barcelona', code: 'ESBCN', connections: ['Chennai', 'Mundra', 'Jebel Ali', 'Singapore', 'Colombo', 'Genoa', 'Rotterdam', 'Hamburg'] },
    { name: 'Algeciras', code: 'ESALG', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Jebel Ali', 'Singapore', 'Colombo', 'Felixstowe', 'Rotterdam', 'Genoa'] }
  ]},
  { id: 'AT', country: 'Austria', flag: '🇦🇹', ports: [
    { name: 'Vienna Danube Port', code: 'ATVIE', connections: ['Hamburg', 'Rotterdam', 'Antwerp-Bruges', 'Constanta', 'Genoa', 'Trieste', 'Chennai', 'Mundra', 'Nhava Sheva / JNPT'] }
  ]},
  { id: 'AE', country: 'United Arab Emirates', flag: '🇦🇪', ports: [
    { name: 'Jebel Ali / Dubai', code: 'AEJEA', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Kandla', 'Colombo', 'Singapore', 'Port Klang', 'Shanghai', 'Ningbo-Zhoushan', 'Busan', 'Hamburg', 'Rotterdam', 'Felixstowe', 'Genoa', 'Mombasa', 'Durban', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Khalifa Port / Abu Dhabi', code: 'AEKHL', connections: ['Chennai', 'Mundra', 'Nhava Sheva / JNPT', 'Singapore', 'Jebel Ali', 'Hamburg', 'Rotterdam', 'Mombasa'] },
    { name: 'Khor Fakkan', code: 'AEKLF', connections: ['Chennai', 'Mundra', 'Singapore', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam'] }
  ]},
  { id: 'IN', country: 'India', flag: '🇮🇳', ports: [
    { name: 'Chennai', code: 'INMAA', connections: ['Shanghai', 'Ningbo-Zhoushan', 'Shenzhen / Yantian', 'Hong Kong', 'Kaohsiung', 'Singapore', 'Port Klang', 'Tanjung Pelepas', 'Busan', 'Laem Chabang', 'Cai Mep-Thi Vai', 'Tokyo / Yokohama', 'Jebel Ali', 'Colombo', 'Felixstowe', 'Hamburg', 'Rotterdam', 'Genoa', 'Antwerp-Bruges', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Nhava Sheva / JNPT', code: 'INNSA', connections: ['Shanghai', 'Ningbo-Zhoushan', 'Shenzhen / Yantian', 'Hong Kong', 'Kaohsiung', 'Singapore', 'Port Klang', 'Busan', 'Tokyo / Yokohama', 'Jebel Ali', 'Colombo', 'Felixstowe', 'Hamburg', 'Rotterdam', 'Genoa', 'Antwerp-Bruges', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Mundra', code: 'INMUN', connections: ['Shanghai', 'Ningbo-Zhoushan', 'Shenzhen / Yantian', 'Singapore', 'Port Klang', 'Busan', 'Jebel Ali', 'Colombo', 'Felixstowe', 'Hamburg', 'Rotterdam', 'Genoa', 'New York / New Jersey', 'Los Angeles / Long Beach'] },
    { name: 'Kolkata / Haldia', code: 'INCCU', connections: ['Shanghai', 'Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam'] },
    { name: 'Cochin / Kochi', code: 'INCOK', connections: ['Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Hamburg', 'Rotterdam'] },
    { name: 'Visakhapatnam', code: 'INVTZ', connections: ['Singapore', 'Port Klang', 'Jebel Ali', 'Colombo', 'Shanghai'] }
  ]}
];

const allServicePorts = servicePortNetwork.flatMap(country =>
  country.ports.map(port => ({ ...port, country: country.country, countryId: country.id, flag: country.flag }))
);


export const GlobalNetwork = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeViewMode, setActiveViewMode] = useState('hubs');
  const [activeHub, setActiveHub] = useState(null);
  const [activeSeaDomain, setActiveSeaDomain] = useState(null);
  const [laneModeFilter, setLaneModeFilter] = useState('ALL');
  const [hubDossierTab, setHubDossierTab] = useState('corridors');
  const [hoveredLaneId, setHoveredLaneId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceCountryId, setServiceCountryId] = useState('IN');
  const [servicePortName, setServicePortName] = useState('Chennai');
  const [servicePortQuery, setServicePortQuery] = useState('');
  const [networkData, setNetworkData] = useState({ primaryHubs: [], maritimeSeaDomains: [], networkRegions: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLocations().then(({ primaryHubs, maritimeSeaDomains, networkRegions }) => {
      setNetworkData({ primaryHubs, maritimeSeaDomains, networkRegions });
      setActiveHub(primaryHubs[0]);
      setActiveSeaDomain(maritimeSeaDomains[0]);
      setIsLoading(false);
    });
  }, []);

  const { primaryHubs, maritimeSeaDomains, networkRegions } = networkData;

  // Filtered Hubs & Seas based on region tab and search query
  const filteredHubs = primaryHubs.filter(h => {
    const matchesRegion = activeTab === 'all' || h.regionId === activeTab;
    const matchesSearch = searchQuery === '' || 
      h.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
      h.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const filteredSeas = maritimeSeaDomains.filter(s => {
    const matchesRegion = activeTab === 'all' || s.regionId === activeTab;
    const matchesSearch = searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.regionName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeTradeLanes = activeHub?.connectedTradeLanes || [];
  const filteredTradeLanes = laneModeFilter === 'ALL'
    ? activeTradeLanes
    : activeTradeLanes.filter(l => (l.modes && l.modes.includes(laneModeFilter)) || (l.primaryMode && l.primaryMode.toUpperCase().includes(laneModeFilter)));
  const activeServiceCountry = servicePortNetwork.find(country => country.id === serviceCountryId) || servicePortNetwork[0];
  const filteredServiceCountries = servicePortNetwork.filter(country =>
    country.country.toLowerCase().includes(servicePortQuery.toLowerCase()) ||
    country.ports.some(port => port.name.toLowerCase().includes(servicePortQuery.toLowerCase()) || port.code.toLowerCase().includes(servicePortQuery.toLowerCase()))
  );
  const activeServicePort = activeServiceCountry?.ports.find(port => port.name === servicePortName) || activeServiceCountry?.ports[0];


  const handleSelectSea = (sea) => {
    setActiveSeaDomain(sea);
    setActiveViewMode('seas');
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectHub = (hub) => {
    setActiveHub(hub);
    setActiveSeaDomain(null);
    setActiveViewMode('hubs');
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServicePort = (port) => {
    if (!port) return;
    setServiceCountryId(port.countryId);
    setServicePortName(port.name);
    setActiveViewMode('hubs');
    setActiveSeaDomain(null);
  };

  if (isLoading) {
    return (
      <div className="global-network-page">
        <div className="network-loading" role="status" aria-label="Loading network data">
          <div className="loading-spinner" />
          <p>Loading Global Network...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="global-network-page">
      <SEO 
        title="Global Network & Trade Corridors — Strategic Freight Operations"
        description="Explore GACIS trade lanes spanning India, the Gulf, and Central Asia (CIS) with multimodal block trains, sea-air routing, and regional desks."
        canonical="/global-network"
      />

      {/* ─── 01. COMMAND CENTER HERO HEADER ─── */}
      <section className="network-hero-command">
        {/* Video Background - Lazy Loaded */}
        <div className="network-hero-video-wrapper" aria-hidden="true">
          <LazyVideo
            src="/images/video/VEO_%E2%80%94_SECOND_CINEMATIC_SMAR.mp4"
            className="network-hero-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="network-hero-video-overlay" />
        </div>

        <div className="container">
          <div className="nhc-badge-row">
            <span className="nhc-pulse-badge">
              <Radio size={14} className="radar-signal-svg" />
              <span>GACIS OPERATIONAL NETWORK</span>
            </span>
            <span className="nhc-telemetry-tag">
              <Waves size={13} /> INDIA · GULF · CIS · ASIA · EUROPE · AMERICAS
            </span>
          </div>

          <h1 className="nhc-title">Regional Operating Desks & Trade Corridors</h1>
          <p className="nhc-desc">
            Direct freight operations bridging Chennai Corporate Headquarters, Dubai Commercial Desk, and Central Asia intermodal routes with synchronized customs clearance and dedicated scheduled linehauls.
          </p>

          {/* Quick Telemetry KPI Bar */}
          <div className="network-telemetry-bar">
            <div className="ntb-stat">
              <span className="ntb-val text-cyan tabular-nums">14</span>
              <span className="ntb-label">Operating Desks & Hubs</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val text-gold tabular-nums">19</span>
              <span className="ntb-label">Strategic Maritime Seas</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">150+</span>
              <span className="ntb-label">Global Agency Alliances</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">24/7</span>
              <span className="ntb-label">Commercial Coordination</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. REGIONAL & MARITIME VIEW CONTROLLER ─── */}
      <section className="section-padding-sm bg-secondary" id="strategic-map-console">
        <div className="container">

          {/* Mode & Region Filters Bar */}
          <div className="network-filter-toolbar">
            
            {/* View Mode Toggle: Continental Hubs vs Sea Domains */}
            <div className="view-mode-switch-group">
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'hubs' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('hubs');
                  setActiveSeaDomain(null);
                  if (!activeHub) setActiveHub(primaryHubs[0]);
                }}
              >
                <Building2 size={16} />
                <span>14 Continental Hubs</span>
              </button>
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'seas' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('seas');
                  if (!activeSeaDomain) setActiveSeaDomain(maritimeSeaDomains[0]);
                }}
              >
                <Waves size={16} />
                <span>19 Strategic Seas</span>
              </button>
            </div>

            {/* Regional Filter Deck */}
            <div className="corridor-filter-deck">
              <span className="cfd-label">REGION:</span>
              <div className="cfd-buttons">
                {networkRegions.map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    className={`cfd-btn ${activeTab === reg.id ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(reg.id)}
                  >
                    {reg.flag && <span className="cfd-flag">{reg.flag}</span>}
                    <span>{reg.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ─── FULL-WIDTH MAP CONSOLE (LANDSCAPE HERO) ─── */}
          <div className="map-landscape-console" id="map-landscape-console">
            
            {/* Map header bar — floated above map */}
            <div className="mlc-topbar">
              <div className="mlc-topbar-left">
                <span className="mcw-eyebrow">
                  {activeViewMode === 'seas' ? 'MARITIME SHIPPING CORRIDORS' : 'INTERMODAL FREIGHT TOPOLOGY'}
                </span>
                <h3 className="mlc-title">
                  {activeViewMode === 'seas' 
                    ? `${activeSeaDomain?.name} — Deepsea Domain View`
                    : `${activeHub?.city} — Connected Global Corridors`
                  }
                </h3>
              </div>
              <div className="mlc-topbar-right">
                <div className="mcw-live-indicator">
                  <span className="live-radar-dot"></span>
                  <span>LIVE FREIGHT NETWORK</span>
                </div>
              </div>
            </div>

            {/* Real Geographic Map — Full Landscape */}
            <Suspense fallback={<div className="geo-map-fallback" aria-hidden="true" />}>
              <RealGeographicMap
                activeHub={activeHub}
                onSelectHub={handleSelectHub}
                activeSeaDomain={activeSeaDomain}
                onSelectSeaDomain={handleSelectSea}
                viewMode={activeViewMode}
                selectedLaneFilter={laneModeFilter}
                hoveredLaneId={hoveredLaneId}
                servicePortNetwork={servicePortNetwork}
                activeServicePort={activeServicePort}
                onSelectServicePort={handleSelectServicePort}
              />
            </Suspense>

            {/* Import / Export coverage overlay — tied visually to the geographic map */}
            <div className="map-service-coverage">
              <div className="map-service-row import-route">
                <div className="map-service-label">
                  <ArrowDownLeft size={14} aria-hidden="true" />
                  <div>
                    <span>IMPORT SERVICE</span>
                    <strong>International Ports → India</strong>
                  </div>
                </div>
                <div className="map-service-tags">
                  {importServicePorts.map((port) => <span key={port}>{port}</span>)}
                </div>
              </div>
              <div className="map-service-row export-route">
                <div className="map-service-label">
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <div>
                    <span>EXPORT SERVICE</span>
                    <strong>Indian Ports → Global Destinations</strong>
                  </div>
                </div>
                <div className="map-service-tags">
                  {exportServiceRegions.map((region) => <span key={region}>{region}</span>)}
                </div>
              </div>
            </div>

            {/* Global port connectivity selector — country → port → connected ports */}
            <div className="global-port-connectivity" aria-label="Global port connectivity network">
              <div className="gpc-header">
                <div>
                  <span className="gpc-eyebrow">PORT-TO-PORT CONNECTIVITY</span>
                  <h3>Global Service Ports & Connected Destinations</h3>
                  <p>Select a country, then a port to see the ports in the GACIS service network that can connect with it.</p>
                </div>
                <div className="gpc-live-pill"><span className="gpc-live-dot" /> NETWORK DIRECTORY</div>
              </div>

              <div className="gpc-search-row">
                <Search size={14} />
                <input
                  type="search"
                  value={servicePortQuery}
                  onChange={(e) => setServicePortQuery(e.target.value)}
                  placeholder="Search country, port or UN/LOCODE..."
                  aria-label="Search service countries and ports"
                />
                <span>{allServicePorts.length} mapped ports</span>
              </div>

              <div className="gpc-country-strip">
                {filteredServiceCountries.map(country => (
                  <button
                    key={country.id}
                    type="button"
                    className={`gpc-country-btn ${serviceCountryId === country.id ? 'is-active' : ''}`}
                    onClick={() => {
                      setServiceCountryId(country.id);
                      setServicePortName(country.ports[0]?.name || '');
                    }}
                  >
                    <span className="gpc-country-flag">{country.flag}</span>
                    <span>{country.country}</span>
                    <small>{country.ports.length} ports</small>
                  </button>
                ))}
              </div>

              <div className="gpc-network-body">
                <div className="gpc-port-column">
                  <div className="gpc-column-head">
                    <span>01</span>
                    <div><strong>{activeServiceCountry.country}</strong><small>Available service ports</small></div>
                  </div>
                  <div className="gpc-port-list">
                    {activeServiceCountry.ports.map(port => (
                      <button
                        key={port.name}
                        type="button"
                        className={`gpc-port-btn ${activeServicePort?.name === port.name ? 'is-active' : ''}`}
                        onClick={() => handleSelectServicePort({
                          ...port,
                          country: activeServiceCountry.country,
                          countryId: activeServiceCountry.id,
                          flag: activeServiceCountry.flag
                        })}
                      >
                        <span className="gpc-port-icon"><Anchor size={14} /></span>
                        <span className="gpc-port-copy"><strong>{port.name}</strong><small>{port.code}</small></span>
                        <span className="gpc-port-count">{port.connections.length}</span>
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="gpc-connection-column">
                  <div className="gpc-column-head">
                    <span>02</span>
                    <div><strong>{activeServicePort?.name || 'Select a port'}</strong><small>Connected / service destinations</small></div>
                  </div>
                  {activeServicePort ? (
                    <div className="gpc-connection-grid">
                      {activeServicePort.connections.map((connection, index) => {
                        const connected = allServicePorts.find(port => port.name === connection);
                        return (
                          <button
                            key={`${connection}-${index}`}
                            type="button"
                            className="gpc-connection-card"
                            onClick={() => {
                              if (connected) handleSelectServicePort(connected);
                            }}
                          >
                            <span className="gpc-connection-number">{String(index + 1).padStart(2, '0')}</span>
                            <span className="gpc-connection-main">
                              <strong>{connection}</strong>
                              <small>{connected ? `${connected.flag} ${connected.country} · ${connected.code}` : 'Service destination'}</small>
                            </span>
                            <ArrowRight size={14} />
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="gpc-route-summary">
                <div><span>ORIGIN PORT</span><strong>{activeServicePort?.name || '—'}</strong></div>
                <ArrowRight size={18} />
                <div><span>AVAILABLE SERVICE CONNECTIONS</span><strong>{activeServicePort?.connections.length || 0} destinations</strong></div>
                <span className="gpc-disclaimer">Coverage directory — final routing depends on carrier, sailing, transshipment and operational availability.</span>
              </div>
            </div>

            {/* Hub / Sea Quick-Select Ribbon — overlaid at bottom of map */}
            <div className="map-selector-ribbon">
              <div className="msr-search-wrap">
                <Search size={13} className="msr-search-icon" />
                <input 
                  type="text" 
                  placeholder={activeViewMode === 'seas' ? 'Search sea...' : 'Search hub city...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="msr-search-input"
                />
              </div>

              <div className="msr-chips-track">
                {activeViewMode === 'seas' ? (
                  filteredSeas.map((sea) => {
                    const isSelected = activeSeaDomain?.id === sea.id;
                    return (
                      <button
                        key={sea.id}
                        type="button"
                        className={`msr-chip sea-chip ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectSea(sea)}
                      >
                        <span>⚓</span>
                        <span>{sea.name}</span>
                      </button>
                    );
                  })
                ) : (
                  filteredHubs.map((hub) => {
                    const isSelected = activeHub?.id === hub.id;
                    return (
                      <button
                        key={hub.id}
                        type="button"
                        className={`msr-chip hub-chip ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectHub(hub)}
                      >
                        <span className="msr-chip-flag">{hub.flag}</span>
                        <span>{hub.city}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

          </div>

          {/* ─── BELOW-MAP DOSSIER PANEL (Full Width Landscape) ─── */}
          <div className="below-map-dossier-panel">
            {activeViewMode === 'seas' && activeSeaDomain ? (
              /* ─── MARITIME SEA DOMAIN DOSSIER ─── */
              <div className="sea-dossier-landscape" key={activeSeaDomain.id}>
                {/* Sea header */}
                <div className="sdl-header">
                  <div className="sdl-icon-col">
                    <div className="gdc-flag-wrap sea-flag-wrap">
                      <Waves size={26} className="sea-dossier-icon" />
                    </div>
                  </div>
                  <div className="sdl-title-col">
                    <span className="gdc-tier-tag sea-tier-tag">STRATEGIC MARITIME DOMAIN</span>
                    <h2>{activeSeaDomain.name}</h2>
                    <span className="gdc-role-subtitle">{activeSeaDomain.regionName}</span>
                  </div>
                  <div className="sdl-telemetry-col">
                    <div className="gdc-telemetry-grid">
                      <div className="gdc-tele-item">
                        <span className="gti-lbl">TRANSIT RELIABILITY</span>
                        <span className="gti-val text-gold tabular-nums">{activeSeaDomain.transitIndex}</span>
                      </div>
                      <div className="gdc-tele-item">
                        <span className="gti-lbl">AVG SEAWAY TRANSIT</span>
                        <span className="gti-val tabular-nums">{activeSeaDomain.leadTimeAvg}</span>
                      </div>
                      <div className="gdc-tele-item">
                        <span className="gti-lbl">SCOPE 3 EFFICIENCY</span>
                        <span className="gti-val text-cyan" style={{ fontSize: '0.8rem' }}>{activeSeaDomain.scope3Rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="sdl-actions-col">
                    <Link to={`/quote?origin=${encodeURIComponent(activeSeaDomain.name)}`} className="btn btn-primary btn-sm">
                      Calculate Rate <ArrowRight size={14} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Maritime Desk
                    </Link>
                  </div>
                </div>

                {/* Sea body */}
                <div className="sdl-body">
                  <div className="sdl-body-col">
                    <div className="gdc-address-box sea-info-box">
                      <div className="gab-row">
                        <Navigation size={15} className="gab-icon" />
                        <div>
                          <strong className="sea-field-label">STRATEGIC CHOKEPOINT:</strong>
                          <p>{activeSeaDomain.strategicChokepoint}</p>
                        </div>
                      </div>
                      <div className="gab-row">
                        <Anchor size={15} className="gab-icon" />
                        <div>
                          <strong className="sea-field-label">PRIMARY CORRIDOR:</strong>
                          <p>{activeSeaDomain.primaryCorridor}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sdl-body-col">
                    <div className="gdc-capabilities-box">
                      <span className="gcb-lbl">PRIMARY DEEPSEA GATEWAYS & PORTS:</span>
                      <div className="sea-ports-tag-cloud">
                        {activeSeaDomain.keyGateways.map((port, i) => (
                          <span key={i} className="sea-port-pill">
                            <Check size={12} className="spp-check" />
                            <span>{port}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sdl-body-col">
                    <div className="sea-cargo-profile-box">
                      <span className="gcb-lbl">SPECIALIZED CARGO PROFILE:</span>
                      <p>{activeSeaDomain.cargoFocus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ─── HUB DOSSIER — FULL WIDTH LANDSCAPE TABBED ─── */
              <div className="hub-dossier-landscape" key={activeHub.id}>
                
                {/* Hub Identity Row */}
                <div className="hdl-identity-row">
                  <div className="hdl-flag-col">
                    <span className="hdl-flag">{activeHub.flag}</span>
                  </div>
                  <div className="hdl-title-col">
                    <span className="gdc-tier-tag">{activeHub.tier}</span>
                    <h2>{activeHub.city}, {activeHub.country}</h2>
                    <span className="gdc-role-subtitle">{activeHub.role}</span>
                  </div>
                  <div className="hdl-kpi-col">
                    <div className="hdl-kpi-row">
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">WEEKLY LINEHAULS</span>
                        <span className="gti-val text-gold tabular-nums">{activeHub.stats.weeklyFlights}</span>
                      </div>
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">OCEAN THROUGHPUT</span>
                        <span className="gti-val tabular-nums">{activeHub.stats.oceanTEU}</span>
                      </div>
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">BONDED STAGING</span>
                        <span className="gti-val tabular-nums">{activeHub.stats.warehouseSqFt} sq ft</span>
                      </div>
                    </div>
                  </div>
                  <div className="hdl-cta-col">
                    <Link to={`/quote?origin=${encodeURIComponent(activeHub.city)}`} className="btn btn-primary btn-sm">
                      Book via {activeHub.city} <ArrowRight size={13} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Contact Desk
                    </Link>
                  </div>
                </div>

                {/* Tab Nav */}
                <div className="dossier-nav-tabs">
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'corridors' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('corridors')}
                  >
                    <Navigation size={14} />
                    <span>Trade Corridors ({activeTradeLanes.length})</span>
                  </button>
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'operations' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('operations')}
                  >
                    <Activity size={14} />
                    <span>Hub Operations</span>
                  </button>
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'contact' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('contact')}
                  >
                    <Building2 size={14} />
                    <span>Desk Details</span>
                  </button>
                </div>

                {/* TAB 1: TRADE CORRIDORS — Horizontal cards grid */}
                {hubDossierTab === 'corridors' && (
                  <div className="dossier-tab-content">
                    <div className="gtls-filter-bar">
                      {[
                        { id: 'ALL', label: `All (${activeTradeLanes.length})` },
                        { id: 'AIR', label: '✈️ Air' },
                        { id: 'SEA', label: '🚢 Ocean' },
                        { id: 'RAIL', label: '🚆 Rail' },
                        { id: 'ROAD', label: '🚛 Road' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          className={`gtls-filter-btn ${laneModeFilter === m.id ? 'is-active' : ''}`}
                          onClick={() => setLaneModeFilter(m.id)}
                        >
                          {m.label}
                        </button>
                      ))}
                      <span className="gtls-count-hint">{filteredTradeLanes.length} corridors</span>
                    </div>

                    {/* Horizontal scrolling lane cards */}
                    <div className="lanes-horizontal-scroll">
                      {filteredTradeLanes.length === 0 ? (
                        <div className="no-lanes-fallback">
                          <span>No routes match this filter.</span>
                          <button type="button" onClick={() => setLaneModeFilter('ALL')} className="btn btn-secondary btn-sm">
                            Show All
                          </button>
                        </div>
                      ) : (
                        filteredTradeLanes.map((lane, idx) => {
                          const destHub = primaryHubs.find(h => h.id === lane.destinationId);
                          return (
                            <div 
                              className={`lane-card-h ${hoveredLaneId === lane.destinationId ? 'is-card-hovered' : ''}`}
                              key={idx}
                              onMouseEnter={() => setHoveredLaneId(lane.destinationId)}
                              onMouseLeave={() => setHoveredLaneId(null)}
                            >
                              <div className="lch-top">
                                <span className="lch-flag">{lane.flag}</span>
                                <div className="lch-route">
                                  <span className="lch-cities">{activeHub.city} ⇄ {lane.destinationCity}</span>
                                  <span className="lch-mode">{lane.primaryMode}</span>
                                </div>
                                <span className="lch-transit">⏱️ {lane.transitTime}</span>
                              </div>
                              <div className="lch-cargo">
                                <div className="lch-cargo-half outbound">
                                  <span className="gcc-lbl">📤 OUTBOUND:</span>
                                  <p>{lane.outboundCargo}</p>
                                </div>
                                <div className="lch-cargo-half inbound">
                                  <span className="gcc-lbl">📥 INBOUND:</span>
                                  <p>{lane.inboundCargo}</p>
                                </div>
                              </div>
                              <div className="lch-pills">
                                {lane.services.slice(0, 3).map((srv, si) => (
                                  <span key={si} className="gsr-pill">{srv}</span>
                                ))}
                              </div>
                              <div className="lch-actions">
                                {destHub && (
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm lch-pivot"
                                    onClick={() => handleSelectHub(destHub)}
                                  >
                                    Pivot <ArrowRight size={12} />
                                  </button>
                                )}
                                <Link 
                                  to={`/quote?origin=${encodeURIComponent(activeHub.city)}&destination=${encodeURIComponent(lane.destinationCity)}`}
                                  className="btn btn-primary btn-sm"
                                >
                                  Book
                                </Link>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 2: HUB OPERATIONS */}
                {hubDossierTab === 'operations' && (
                  <div className="dossier-tab-content">
                    <div className="ops-landscape-grid">
                      <div className="gdc-capabilities-box ops-col">
                        <span className="gcb-lbl">SPECIALIZED OPERATIONAL CAPABILITIES:</span>
                        <ul className="gcb-list">
                          {activeHub.capabilities.map((cap, i) => (
                            <li key={i}>
                              <Check size={13} className="gcb-check" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hub-ops-note ops-col">
                        <ShieldCheck size={18} className="hon-icon" />
                        <p>
                          All outbound and inbound cargo through <strong>{activeHub.city}</strong> is managed under verified Bill of Lading documentation with synchronized customs dispatch and EDI tracking across all partner terminals.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: DESK DETAILS */}
                {hubDossierTab === 'contact' && (
                  <div className="dossier-tab-content">
                    <div className="contact-landscape-grid">
                      <div className="gdc-address-box contact-col">
                        <div className="gab-row">
                          <MapPin size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">OFFICE LOCATION:</strong>
                            <p>{activeHub.address}</p>
                          </div>
                        </div>
                        <div className="gab-row">
                          <Phone size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">DIRECT DESK LINE:</strong>
                            <a href={`tel:${activeHub.phone}`}>{activeHub.phone}</a>
                          </div>
                        </div>
                        <div className="gab-row">
                          <Mail size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">COMMERCIAL EMAIL:</strong>
                            <a href={`mailto:${activeHub.email}`}>{activeHub.email}</a>
                          </div>
                        </div>
                      </div>
                      <div className="desk-service-hours contact-col">
                        <div className="dsh-item">
                          <span>Jurisdiction:</span>
                          <strong>{activeHub.country} & Allied Region</strong>
                        </div>
                        <div className="dsh-item">
                          <span>Commercial Support:</span>
                          <strong>24/7 Dedicated Logistics Desk</strong>
                        </div>
                        <div className="dsh-item">
                          <span>Freight Modes:</span>
                          <strong>Air · Ocean · Rail · Road · Multimodal</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>
      </section>


      {/* ─── 03. COMPLETE 19 MARITIME SEA DOMAINS DIRECTORY ─── */}
      <section className="section-padding bg-primary" id="maritime-domains">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">MARITIME DOMAINS & CHOKEPOINTS</span>
            <h2>19 Strategic Sea Domains & Waterways</h2>
            <p>
              GACIS synchronizes container capacity, breakbulk charters, and short-sea feeders across all 19 vital maritime water basins worldwide.
            </p>
          </div>

          <div className="sea-domains-grid">
            {maritimeSeaDomains.map((sea) => (
              <div 
                key={sea.id}
                className={`sea-domain-card ${activeSeaDomain?.id === sea.id ? 'is-active-sea-card' : ''}`}
                onClick={() => handleSelectSea(sea)}
              >
                <div className="sdc-top">
                  <span className="sdc-icon-badge"><Anchor size={16} /></span>
                  <span className="sdc-region">{sea.regionName}</span>
                </div>

                <h3 className="sdc-title">{sea.name}</h3>
                <p className="sdc-summary">{sea.summary}</p>

                <div className="sdc-specs">
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Chokepoint:</span>
                    <span className="sdc-val">{sea.strategicChokepoint}</span>
                  </div>
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Key Ports:</span>
                    <span className="sdc-val">{sea.keyGateways.slice(0, 3).join(', ')}</span>
                  </div>
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Reliability:</span>
                    <span className="sdc-val text-gold">{sea.transitIndex}</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm sdc-plot-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectSea(sea);
                  }}
                >
                  <span>Plot on Tactical Map</span>
                  <Navigation size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04. STRATEGIC REGIONAL CONTINENTAL HUBS ─── */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">CONTINENTAL REACH</span>
            <h2>14 Strategic Regional Hubs & Desks</h2>
            <p>
              Direct company-operated commercial headquarters and intermodal freight stations bridging every major global economy.
            </p>
          </div>

          <div className="gateway-cards-grid">
            {primaryHubs.map((hub) => (
              <div 
                className={`gateway-station-card ${activeHub?.id === hub.id && activeViewMode === 'hubs' ? 'active-station' : ''}`}
                key={hub.id}
                onClick={() => handleSelectHub(hub)}
              >
                <div className="gsc-top">
                  <span className="gsc-flag">{hub.flag}</span>
                  <span className="gsc-tier">{hub.tier}</span>
                </div>

                <h3 className="gsc-city">{hub.city}</h3>
                <span className="gsc-country">{hub.country}</span>
                <p className="gsc-role">{hub.role}</p>

                <div className="gsc-specs">
                  <div className="gsc-spec-item">
                    <span>Flights / Trains</span>
                    <strong className="tabular-nums">{hub.stats.weeklyFlights}</strong>
                  </div>
                  <div className="gsc-spec-item">
                    <span>Bonded Warehouse</span>
                    <strong className="tabular-nums">{hub.stats.warehouseSqFt} sq ft</strong>
                  </div>
                </div>

                <button type="button" className="btn btn-secondary btn-sm gsc-inspect-btn">
                  Inspect Hub Details <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05. IMPORT & EXPORT SERVICE COVERAGE ─── */}
      <section className="section-padding bg-primary" data-reveal>
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="eyebrow">SERVICE COVERAGE</span>
            <h2>Import & Export Service Network</h2>
            <p>
              Comprehensive multimodal logistics solutions connecting India with global markets through strategic partnerships and dedicated corridors.
            </p>
          </div>

          <div className="service-coverage-grid">
            {/* Import Service Card */}
            <div className="service-coverage-card import-card">
              <div className="scc-header">
                <span className="scc-icon">
                  <Navigation size={20} />
                </span>
                <div className="scc-title-row">
                  <span className="scc-eyebrow">IMPORT SERVICE</span>
                  <h3>From Global Origins to India</h3>
                </div>
              </div>
              <div className="scc-content">
                <p className="scc-description">
                  From all destinations around the world — especially <strong>China (ALL PORTS)</strong>, Hong Kong, Taiwan, Singapore, Malaysia, Indonesia, South Korea, Thailand, Vietnam, Cambodia, Myanmar, Japan, U.K., Italy, Germany, France, Belgium, Bulgaria, Netherlands, Switzerland, Spain, Austria & other international ports to India.
                </p>
                <div className="scc-highlights">
                  <span className="scc-tag scc-tag-primary">International → India</span>
                  <span className="scc-tag scc-tag-primary">China — All Ports</span>
                  <span className="scc-tag">Hong Kong · Taiwan · Japan</span>
                  <span className="scc-tag">SE Asia</span>
                  <span className="scc-tag">Europe</span>
                  <span className="scc-tag">Other International Ports</span>
                </div>
              </div>
            </div>

            {/* Export Service Card */}
            <div className="service-coverage-card export-card">
              <div className="scc-header">
                <span className="scc-icon">
                  <Navigation size={20} />
                </span>
                <div className="scc-title-row">
                  <span className="scc-eyebrow">EXPORT SERVICE</span>
                  <h3>From India to Global Destinations</h3>
                </div>
              </div>
              <div className="scc-content">
                <p className="scc-description">
                  Direct / Transshipment service from Indian ports to <strong>Far East / South East Asia</strong>, Middle East countries, Indian sub-continent, CIS, Red Sea, African, European countries, Canada, USEC & USWC, Latin America and Central America.
                </p>
                <div className="scc-highlights">
                  <span className="scc-tag scc-tag-primary export-tag">India → Global</span>
                  <span className="scc-tag">Direct & Transshipment</span>
                  <span className="scc-tag">Far East & SE Asia</span>
                  <span className="scc-tag">Middle East · CIS · Red Sea</span>
                  <span className="scc-tag">Africa & Europe</span>
                  <span className="scc-tag">Canada · USEC · USWC</span>
                  <span className="scc-tag">Latin America · Central America</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06. GLOBAL PORT CONNECTIVITY DIRECTORY ─── */}
      <section className="section-padding bg-secondary global-port-directory-section" data-reveal>
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="eyebrow">PORT CONNECTIVITY MATRIX</span>
            <h2>Country → Port → Connected Port Network</h2>
            <p>Explore the service coverage directory by country and port. Selecting a port exposes its connected destinations and lets you pivot directly into another port.</p>
          </div>
          <div className="gpd-layout">
            <div className="gpd-country-panel">
              <div className="gpd-panel-title"><Globe2 size={16} /> SERVICE COUNTRIES <span>{servicePortNetwork.length}</span></div>
              <div className="gpd-country-list">
                {servicePortNetwork.map(country => (
                  <button key={country.id} type="button" className={`gpd-country-row ${serviceCountryId === country.id ? 'is-active' : ''}`} onClick={() => { setServiceCountryId(country.id); setServicePortName(country.ports[0]?.name || ''); }}>
                    <span>{country.flag}</span><strong>{country.country}</strong><small>{country.ports.length} ports</small><ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>
            <div className="gpd-main-panel">
              <div className="gpd-main-head">
                <div><span className="gpd-kicker">SELECTED COUNTRY</span><h3>{activeServiceCountry.flag} {activeServiceCountry.country}</h3><p>{activeServiceCountry.scope || 'International service ports'}</p></div>
                <span className="gpd-port-count-badge">{activeServiceCountry.ports.length} mapped ports</span>
              </div>
              <div className="gpd-port-grid">
                {activeServiceCountry.ports.map(port => (
                  <button key={port.name} type="button" className={`gpd-port-card ${activeServicePort?.name === port.name ? 'is-active' : ''}`} onClick={() => setServicePortName(port.name)}>
                    <div className="gpd-port-card-top"><Anchor size={16} /><span>{port.code}</span></div>
                    <strong>{port.name}</strong>
                    <small>{port.connections.length} connected destinations</small>
                    <div className="gpd-mini-route"><span>CONNECTS TO</span><em>{port.connections.slice(0, 4).join(' · ')}{port.connections.length > 4 ? ' · …' : ''}</em></div>
                  </button>
                ))}
              </div>
              <div className="gpd-selected-route">
                <div className="gpd-selected-origin"><span>SELECTED PORT</span><strong>{activeServicePort?.name}</strong><small>{activeServicePort?.code} · {activeServiceCountry.country}</small></div>
                <div className="gpd-route-line"><span className="gpd-route-dot origin" /><span /><ArrowRight size={18} /><span /><span className="gpd-route-dot destination" /></div>
                <div className="gpd-selected-dest"><span>CONNECTED PORTS</span><strong>{activeServicePort?.connections.length || 0} destinations</strong><small>Click any destination in the map selector above to pivot the network.</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06. GLOBAL AGENCY ALLIANCE BANNER ─── */}
      <section className="section-padding-sm bg-dark" data-reveal>
        <div className="container">
          <div className="global-alliance-inner">
            <Globe2 size={48} className="gai-globe-icon" />
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>WORLDWIDE REACH</span>
              <h3 style={{ color: '#ffffff', marginBottom: '0.4rem' }}>Allied Agency Representation in 150+ Countries</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
                Beyond our direct regional headquarters in Dubai, Riyadh, Shanghai, Tokyo, Klang, Frankfurt, Rotterdam, Djibouti, Mombasa, Almaty, and Houston, GACIS coordinates vetted carrier alliances and licensed customs brokers across 150+ nations.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Enquire Global Trade Lanes <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GlobalNetwork;