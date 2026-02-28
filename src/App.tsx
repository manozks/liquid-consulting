import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserAgreement from './pages/UserAgreement';
import CookiePolicy from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

