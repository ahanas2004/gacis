import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ScrollToTop from './components/Common/ScrollToTop';

const Quote = lazy(() => import('./pages/Quote/Quote'));
const GlobalNetwork = lazy(() => import('./pages/GlobalNetwork/GlobalNetwork'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Services = lazy(() => import('./pages/Services/Services'));
const AirFreight = lazy(() => import('./pages/Services/AirFreight'));
const FCLFreight = lazy(() => import('./pages/Services/FCLFreight'));
const LCLLFreight = lazy(() => import('./pages/Services/LCLLFreight'));
const EXWFCA = lazy(() => import('./pages/Services/EXWFCA'));
const ReeferColdChain = lazy(() => import('./pages/Services/ReeferColdChain'));
const CISHaulage = lazy(() => import('./pages/Services/CISHaulage'));
const CustomsClearance = lazy(() => import('./pages/Services/CustomsClearance'));
const RoadTransport = lazy(() => import('./pages/Services/RoadTransport'));
const RailCorridors = lazy(() => import('./pages/Services/RailCorridors'));
const ProjectLogistics = lazy(() => import('./pages/Services/ProjectLogistics'));
const Solutions = lazy(() => import('./pages/Solutions/Solutions'));
const Resources = lazy(() => import('./pages/Resources/Resources'));
const ArticleDetail = lazy(() => import('./pages/Resources/ArticleDetail'));
const Sustainability = lazy(() => import('./pages/Sustainability/Sustainability'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/Legal/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/air-freight" element={<AirFreight />} />
          <Route path="services/fcl-freight" element={<FCLFreight />} />
          <Route path="services/lcl-consolidation" element={<LCLLFreight />} />
          <Route path="services/exw-fca-shipments" element={<EXWFCA />} />
          <Route path="services/reefer-cold-chain" element={<ReeferColdChain />} />
          <Route path="services/cis-haulage" element={<CISHaulage />} />
          <Route path="services/customs-compliance" element={<CustomsClearance />} />
          <Route path="services/road-freight" element={<RoadTransport />} />
          <Route path="services/rail-corridors" element={<RailCorridors />} />
          <Route path="services/project-logistics" element={<ProjectLogistics />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Solutions />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:articleId" element={<ArticleDetail />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="quote" element={<Quote />} />
          <Route path="global-network" element={<GlobalNetwork />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="track" element={<Navigate to="/quote" replace />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
