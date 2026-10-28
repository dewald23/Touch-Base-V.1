/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import type { AppRoute } from './types/seo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AuditPage from './pages/AuditPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const GTM_ID = 'GTM-KX28WTJJ';
const GA4_ID = 'G-X5FXLBDMW7';

function getInitialRoute(): AppRoute {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (path === '/services') return '/services';
  if (path === '/pricing') return '/pricing';
  if (path === '/audit') return '/audit';
  if (path === '/contact') return '/contact';
  if (path === '/privacy') return '/privacy';
  if (path === '/terms') return '/terms';
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getInitialRoute);

  // Synchronize browser history and popstate navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Safe client-side GTM & GA4 initialization
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && !document.getElementById('gtm-script')) {
        const gtmScript = document.createElement('script');
        gtmScript.id = 'gtm-script';
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.head.appendChild(gtmScript);

        const gaScript = document.createElement('script');
        gaScript.id = 'ga4-script';
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
        document.head.appendChild(gaScript);
      }
    } catch (err) {
      console.warn('Analytics initialization skipped or blocked by browser:', err);
    }
  }, []);

  const handleNavigate = (route: AppRoute) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined' && window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case '/pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case '/audit':
        return <AuditPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case '/terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case '/':
        default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#B8860B] selection:text-black flex flex-col justify-between">
      <div>
        <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />
        <main>{renderCurrentPage()}</main>
      </div>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget currentRoute={currentRoute} />
    </div>
  );
}
