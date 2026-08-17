import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/Common/ScrollToTop';

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
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="industries" element={<Solutions />} />
        <Route path="resources" element={<Resources />} />
        <Route path="sustainability" element={<Resources />} />
        <Route path="quote" element={<Quote />} />
        <Route path="global-network" element={<GlobalNetwork />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
