import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';
import GlobalNetwork from './pages/GlobalNetwork/GlobalNetwork';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import Solutions from './pages/Solutions/Solutions';
import Resources from './pages/Resources/Resources';
import ArticleDetail from './pages/Resources/ArticleDetail';
import Sustainability from './pages/Sustainability/Sustainability';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/Common/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Layout wrapper for all main pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
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
        {/* Fallback for any undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
