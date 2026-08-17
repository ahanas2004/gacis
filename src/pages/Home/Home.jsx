import Hero from '../../components/Home/Hero';
import NewsTickerBar from '../../components/Home/NewsTickerBar';
import ServiceStrip from '../../components/Home/ServiceStrip';
import TrustStats from '../../components/Home/TrustStats';
import Differentiators from '../../components/Home/Differentiators';
import ProcessSection from '../../components/Home/ProcessSection';
import RouteSimulator from '../../components/Home/RouteSimulator';
import IndustrySection from '../../components/Home/IndustrySection';
import CompanyCards from '../../components/Home/CompanyCards';
import CtaBanner from '../../components/Home/CtaBanner';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <NewsTickerBar />
      <ServiceStrip />
      <TrustStats />
      <Differentiators />
      <ProcessSection />
      <RouteSimulator />
      <IndustrySection />
      <CompanyCards />
      <CtaBanner />
    </div>
  );
};

export default Home;
