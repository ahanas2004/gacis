import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import './Services.css';

const serviceData = {
  'air-freight': {
    title: 'Air Freight',
    desc: 'Time-definite, door-to-door and airport-to-airport air cargo solutions for urgent shipments.',
    image: '/images/air_freight_cargo.jpg',
    content: 'We leverage top-tier airline partnerships and major international hubs to provide comprehensive air freight services. Whether you need priority express delivery, consolidated scheduled shipments, or dedicated charter aircraft, our team coordinates the fastest and most cost-effective flight routes.',
    features: [
      'Door-to-door and Airport-to-airport services',
      'Time-definite and expedited express cargo',
      'Consolidated and direct airline bookings',
      'IATA-certified dangerous goods handling',
      'GDP-compliant temperature-controlled pharma logistics',
      'Oversized and heavy project cargo charter flights'
    ]
  },
  'sea-freight': {
    title: 'Sea Freight',
    desc: 'Cost-effective and reliable ocean transportation for global trade lanes.',
    image: '/images/sea_freight_vessel.jpg',
    content: 'Our sea freight services are designed to handle high-volume cargo with maximum efficiency. We manage FCL (Full Container Load) and LCL (Less-than-Container Load) shipments, offering flexible port-to-port and door-to-door options through premier international shipping alliances.',
    features: [
      'Full Container Load (FCL) contracting & booking',
      'Less than Container Load (LCL) consolidation hubs',
      'Reefer and temperature-controlled containers',
      'Project breakbulk and oversized industrial cargo',
      'Container stuffing, stripping, and port handling',
      'Caspian, Black Sea, and Persian Gulf lane specialists'
    ]
  },
  'land-freight': {
    title: 'Land Freight',
    desc: 'Flexible and robust trucking solutions for domestic and cross-border transportation.',
    image: '/images/diff_transform.jpg',
    content: 'Our inland haulage and trucking networks ensure smooth final-mile logistics and cross-border transport. We provide scheduled and express deliveries to connect ports, warehouses, and end customers across the Gulf, CIS, and South Asian corridors.',
    features: [
      'Full Truckload (FTL) & Less than Truckload (LTL)',
      'Cross-border trucking with complete border brokerage',
      'GPS-tracked modern fleet with real-time telematics',
      'EXW and FCA supplier pickup management',
      'Bonded trucking and transit customs guarantee'
    ]
  },
  'rail-freight': {
    title: 'Rail Freight',
    desc: 'The smart alternative balancing the speed of air with the cost-efficiency of ocean freight.',
    image: '/images/diff_network.jpg',
    content: 'Connecting Asia, Central Asia, the CIS, and Europe, our rail freight services provide a reliable overland transport method. Ideal for heavy and oversized cargo requiring scheduled departures and stable, weather-independent transit times.',
    features: [
      'Dedicated container block trains (Asia–CIS–Europe)',
      'FCL and LCL overland rail consolidation',
      'Temperature-controlled rail containers',
      'Heavy industrial machinery and out-of-gauge transport',
      'Scheduled departures with fixed timetables'
    ]
  },
  'customs-clearance': {
    title: 'Customs Clearance',
    desc: 'Expert brokerage to navigate complex international trade regulations.',
    image: '/images/diff_compliance.jpg',
    content: 'Delays at the border can disrupt your entire supply chain. Our customs experts provide comprehensive documentation support, HS classification, and compliance audits to ensure rapid clearance through customs authorities worldwide.',
    features: [
      'Import and export customs declarations',
      'HS Code classification and tariff advisory',
      'Gulf, CIS, and South Asia customs expertise',
      'Duty, VAT, and tax optimization consulting',
      'Temporary import/export (ATA Carnet) management'
    ]
  },
  'multimodal': {
    title: 'Multimodal Transport',
    desc: 'One Shipment. Multiple Modes. One Coordinated Solution.',
    image: '/images/hero_bg.jpg',
    content: 'By combining air, sea, land, and rail, we optimize your supply chain for cost, speed, and reliability. We manage the entire journey—from supplier pickup through origin customs, primary transport, transfer hubs, destination clearance, and final door delivery.',
    features: [
      'Single through-bill-of-lading (BL) accountability',
      'Optimized modal transitions minimizing dwell time',
      'Single point of contact for the entire route',
      'End-to-end milestone tracking and transparency',
      'Risk-managed cargo handoffs at every transfer point'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = serviceData[serviceId];

  if (!data) {
    return (
      <div className="container section-padding text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-4">View All Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Service Overview</span>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="service-detail-grid">
            
            <div className="service-main-content">
              {data.image && (
                <div className="service-detail-image-wrapper">
                  <img src={data.image} alt={data.title} className="service-detail-image" />
                </div>
              )}
              
              <span className="eyebrow">Service Scope</span>
              <h2>Comprehensive {data.title} Solutions</h2>
              <p className="service-body-p">{data.content}</p>
              
              <div className="service-caps-box">
                <h3>Key Capabilities & Features</h3>
                <ul className="service-features-list">
                  {data.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="feat-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-cta-card">
                <div>
                  <h3>Ready to book or get a quotation?</h3>
                  <p>Our trade lane specialists are available to analyze your cargo specifications and offer the most competitive routing.</p>
                </div>
                <Link to="/quote" className="btn btn-primary">
                  Request {data.title} Quote <ArrowRight size={15} className="arrow-icon" />
                </Link>
              </div>
            </div>

            <aside className="service-sidebar">
              <div className="sidebar-widget">
                <h4>All Core Services</h4>
                <div className="sidebar-links-list">
                  {Object.entries(serviceData).map(([id, srv]) => (
                    <Link 
                      key={id} 
                      to={`/services/${id}`} 
                      className={`sidebar-link ${id === serviceId ? 'active' : ''}`}
                    >
                      <span>{srv.title}</span>
                      <ArrowRight size={14} className="sidebar-link-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-widget bg-dark" style={{ color: 'white', border: 'none' }}>
                <span className="eyebrow" style={{ color: 'var(--gacis-red)' }}>Direct Support</span>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Need Immediate Assistance?</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  Speak directly with our operations and pricing desk for urgent shipment bookings.
                </p>
                <Link to="/contact" className="btn btn-outline-white" style={{ width: '100%' }}>
                  Contact Our Desk
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
