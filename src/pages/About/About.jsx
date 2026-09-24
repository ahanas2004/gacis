import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Compass,
  Globe2,
  Landmark,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './About.css';

const rootsJourney = [
  { label: 'CHENNAI', detail: 'The starting point of GACIS' },
  { label: 'TAMIL NADU', detail: 'The regional foundation' },
  { label: 'INDIA', detail: 'The national origin' },
  { label: 'GLOBAL', detail: 'The international horizon' },
];

const timeline = [
  { label: 'ORIGIN', title: 'Chennai, Tamil Nadu, India', text: 'GACIS began in Chennai, Tamil Nadu, India, and its early identity was shaped by the regional strength, trade movement, and operational discipline of this market.' },
  { label: 'FOUNDATION', title: 'A logistics perspective grounded in local roots', text: 'From this foundation, GACIS developed a business approach centred on movement, coordination, reliability, and understanding of cargo flows.' },
  { label: 'GROWTH', title: 'Regional capability, wider responsibilities', text: 'As the pace and complexity of trade expanded, the company strengthened its ability to connect origin, transport, handling, and compliance across more demanding supply chains.' },
  { label: 'EXPANSION', title: 'Integrated logistics operations', text: 'GACIS evolved from a local foundation into a broader logistics operating model designed to support international trade with greater consistency and coordination.' },
  { label: 'GLOBAL LOGISTICS', title: 'Connecting Indian roots to global trade', text: 'The company’s identity remains rooted in Chennai and Tamil Nadu, while its perspective and operations extend to a wider international logistics network.' },
];

const glanceCards = [
  { title: 'Origin', content: 'Chennai, Tamil Nadu, India' },
  { title: 'Base', content: 'Built on Indian logistics roots and international trade thinking' },
  { title: 'Global Reach', content: 'Connected to a wider international logistics network' },
  { title: 'Core Services', content: 'Air • Ocean • Road • Rail • Project Logistics' },
  { title: 'Industries Served', content: 'Across diverse cargo and supply chain requirements' },
  { title: 'Logistics Expertise', content: 'Origin to destination coordination, handling, compliance, and delivery' },
  { title: 'Global Network', content: 'Regional and international operational perspective' },
  { title: 'Digital Capabilities', content: 'Integrated planning, visibility, and operational coordination' },
];

const values = [
  { icon: ShieldCheck, title: 'Reliability', text: 'GACIS is built around dependable execution and consistent coordination across complex cargo movements.' },
  { icon: Compass, title: 'Integrity', text: 'The company works with clear operational discipline, transparent communication, and responsible business practices.' },
  { icon: Building2, title: 'Customer Focus', text: 'Every movement is shaped around the realities of the shipper, the cargo, and the destination requirement.' },
  { icon: Globe2, title: 'Global Connectivity', text: 'Local roots support a wider international outlook, connecting origins, routes, and markets with purpose.' },
  { icon: Sparkles, title: 'Operational Excellence', text: 'GACIS brings a disciplined approach to planning, execution, and smooth movement across every stage of the logistics journey.' },
  { icon: Leaf, title: 'Sustainability', text: 'Sustainable thinking is part of how GACIS considers efficient logistics, responsible operations, and long-term impact.' },
];

const approachSteps = ['Origin', 'Transportation', 'Compliance', 'Handling', 'Delivery', 'Global Supply Chain'];
const serviceTags = ['Air Freight', 'Ocean Freight', 'LCL', 'EXW/FCA', 'Road Transport', 'Rail Corridors', 'CIS Haulage', 'Customs & Compliance', 'Project Logistics', 'Cold Chain'];

export const About = () => (
  <div className="about-page">
    <SEO title="About GACIS — Rooted in Chennai, Connected to the World" description="GACIS began in Chennai, Tamil Nadu, India, and grew with an international logistics vision rooted in reliability, regional understanding, and global logistics connectivity." canonical="/about" />
    <PageHeader eyebrow="CHENNAI TO GLOBAL LOGISTICS" title="From Chennai to the World" description="GACIS began in Chennai, Tamil Nadu, India, and grew with an international logistics vision built on reliability, regional understanding, and global connectivity." statusTag="ROOTED IN INDIA • CONNECTED TO THE WORLD" videoSrc="/images/video/about%20us.mp4" videoPoster="/images/about-gacis-office.webp" />

    <section className="section-padding bg-primary about-story-shell">
      <div className="container">
        <div className="about-story-intro"><span className="eyebrow">OUR STORY</span><h2>From local roots to global trade.</h2></div>
        <div className="about-story-grid">
          <div className="about-story-copy">
            <p>GACIS began in Chennai, Tamil Nadu, India, and from these roots developed an international logistics vision. The company’s identity is shaped by a strong understanding of regional movement, cargo coordination, and the discipline needed to support dependable trade.</p>
            <p>This foundation remains central to GACIS today. It informs the way the company approaches network thinking, customer responsibility, and the broader journey from origin to destination. Chennai is not just a geographical point — it is the place from which GACIS developed its outlook, capabilities, and commitment to trusted logistics.</p>
            <div className="about-actions"><Link to="/services" className="btn btn-primary">Explore Our Services <ArrowRight size={16} /></Link><Link to="/global-network" className="btn btn-secondary">View Global Network</Link></div>
          </div>
          <div className="about-story-visual">
            <video
              src="/images/video/about%20us.mp4"
              poster="/images/about-gacis-office.webp"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="GACIS logistics operations"
              style={{ width: '100%', height: '100%', minHeight: '440px', objectFit: 'cover', display: 'block' }}
            />
            <div className="about-story-badge"><span className="about-story-badge-label">ROOTED IN</span><strong>CHENNAI</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary about-roots-section"><div className="container"><div className="section-heading"><span className="eyebrow">OUR ROOTS</span><h2>Where GACIS Began</h2><p>Chennai, Tamil Nadu, and India form the foundation from which GACIS began its logistics journey and shaped its identity around movement, connectivity, and responsibility.</p></div><div className="about-roots-journey" aria-label="GACIS origin journey">{rootsJourney.map((step, index) => <div className="about-root-step" key={step.label}><div className="about-root-node" aria-hidden="true"><span>{index + 1}</span></div><div className="about-root-copy"><span className="about-root-label">{step.label}</span><strong>{step.detail}</strong></div></div>)}</div></div></section>

    <section className="section-padding bg-primary about-history-section"><div className="container"><div className="section-heading"><span className="eyebrow">HISTORY OF GACIS</span><h2>How GACIS grew from its roots.</h2></div><div className="about-timeline" aria-label="GACIS history timeline">{timeline.map((item, index) => <div className="about-timeline-item" key={item.label}><div className="about-timeline-marker" aria-hidden="true"><span>{index + 1}</span></div><div className="about-timeline-content"><span className="about-timeline-label">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></div></section>

    <section className="section-padding bg-secondary about-glance-section"><div className="container"><div className="section-heading"><span className="eyebrow">GACIS AT A GLANCE</span><h2>Built on purpose, shaped by logistics.</h2></div><div className="about-glance-grid">{glanceCards.map((card) => <div className="about-glance-card" key={card.title}><span className="about-glance-title">{card.title}</span><p>{card.content}</p></div>)}</div></div></section>

    <section className="section-padding bg-primary about-values-section"><div className="container"><div className="section-heading"><span className="eyebrow">OUR VALUES</span><h2>Principles that guide GACIS.</h2></div><div className="about-values-grid">{values.map(({ icon: Icon, title, text }) => <div className="about-value-card" key={title}><div className="about-value-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section-padding bg-secondary about-approach-section"><div className="container"><div className="section-heading"><span className="eyebrow">OUR APPROACH</span><h2>From origin to delivery.</h2></div><div className="about-approach-flow" aria-label="GACIS logistics journey">{approachSteps.map((step, index) => <div className="about-approach-step" key={step}><span className="about-approach-index">{index + 1}</span><span>{step}</span></div>)}</div><div className="about-approach-tags">{serviceTags.map((tag) => <span key={tag} className="about-approach-tag">{tag}</span>)}</div></div></section>

    <section className="section-padding about-journey-transition bg-dark"><div className="container"><div className="about-transition-content"><span className="eyebrow eyebrow-light">CHENNAI → GLOBAL</span><h2>Rooted in Chennai. Connected to the World.</h2></div><div className="about-route-visual" aria-label="Journey from Chennai to global network"><div className="about-route-node node-chennai"><MapPinned size={18} /><span>CHENNAI</span></div><div className="about-route-line" aria-hidden="true" /><div className="about-route-node node-tamilnadu"><Landmark size={18} /><span>TAMIL NADU</span></div><div className="about-route-line" aria-hidden="true" /><div className="about-route-node node-india"><Globe2 size={18} /><span>INDIA</span></div><div className="about-route-line" aria-hidden="true" /><div className="about-route-node node-global"><Building2 size={18} /><span>GLOBAL</span></div></div></div></section>

    <section className="section-padding bg-primary about-social-section"><div className="container"><div className="about-social-panel"><div className="about-social-copy"><span className="eyebrow">SOCIAL RESPONSIBILITY</span><h2>Responsible business, people, and long-term impact.</h2><p>GACIS approaches logistics with responsibility toward communities, operational care, and environmental awareness. Social responsibility is part of how the company considers long-term impact, ethical operations, and sustainable movement across the supply chain.</p></div><div className="about-social-cta"><Link to="/sustainability" className="btn btn-primary">View Sustainability <ArrowRight size={16} /></Link></div></div></div></section>

    <section className="section-padding bg-secondary about-global-section"><div className="container"><div className="about-global-panel"><div><span className="eyebrow">GLOBAL PERSPECTIVE</span><h2>Local roots. Global perspective.</h2><p>The company’s foundation in India is connected to an international logistics outlook, shaping how GACIS supports movement across markets, corridors, and operational networks.</p></div><Link to="/global-network" className="btn btn-primary">Explore Our Global Network <ArrowRight size={16} /></Link></div></div></section>

    <section className="section-padding-sm bg-primary"><div className="container"><div className="about-final-cta"><div className="about-final-copy"><span className="eyebrow">OUR IDENTITY</span><h3>Built from strong roots. Moving the world forward.</h3><p>GACIS brings together its Chennai foundation, international logistics vision, and operational discipline to support trade across origins, transport modes, compliance requirements, and global supply chains.</p></div><div className="about-final-actions"><Link to="/services" className="btn btn-primary">Explore Our Services</Link><Link to="/contact" className="btn btn-secondary">Contact GACIS</Link></div></div></div></section>
  </div>
);

export default About;
