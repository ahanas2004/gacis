import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-viewport">
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
