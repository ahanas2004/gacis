import Hero from '../../components/Home/Hero';
import NewsTickerBar from '../../components/Home/NewsTickerBar';
import ServiceStrip from '../../components/Home/ServiceStrip';
import TrustStats from '../../components/Home/TrustStats';
import Differentiators from '../../components/Home/Differentiators';
import ProcessSection from '../../components/Home/ProcessSection';
import RouteSimulator from '../../components/Home/RouteSimulator';
import IndustrySection from '../../components/Home/IndustrySection';
import SocialProof from '../../components/Home/SocialProof';
import Testimonials from '../../components/Home/Testimonials';
import CompanyCards from '../../components/Home/CompanyCards';
import CtaBanner from '../../components/Home/CtaBanner';
import ErrorBoundary from '../../components/Common/ErrorBoundary';
import SEO from '../../components/Common/SEO';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Global Freight Forwarding & Multimodal Logistics Intelligence"
        description="GACIS powers high-value trade corridors across the Gulf, Central Asia (CIS), South Asia, and Europe with multimodal block trains, sea-air routing, and real-time corridor intelligence."
        canonical="/"
      />
      <Hero />
      <NewsTickerBar />
      <ServiceStrip />
      <TrustStats />
      <Differentiators />
      <ProcessSection />
      <ErrorBoundary componentName="Route Simulator">
        <RouteSimulator />
      </ErrorBoundary>
      <IndustrySection />
      <SocialProof />
      <Testimonials />
      <CompanyCards />
      <CtaBanner />
    </div>
  );
};

export default Home;
