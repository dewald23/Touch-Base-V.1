/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import type { AppRoute } from './types/seo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { SITE_CONFIG } from './config/site';

// Ensure these match the exact casing of your files inside src/pages/
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AuditPage from './pages/AuditPage';
import BookPage from './pages/BookPage';         
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function getInitialRoute(): AppRoute {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (path === '/services') return '/services';
  if (path === '/pricing') return '/pricing';
  if (path === '/audit') return '/audit';
  if (path === '/book') return '/book';
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

  // Update canonical tag, OG URL, and push page_view event on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanPath = currentRoute === '/' ? '' : currentRoute;
    const canonicalUrl = `${SITE_CONFIG.url}${cleanPath}`;

    // Update or insert canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update OpenGraph URL
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', canonicalUrl);
    }

    // Push client-side pageview to GTM dataLayer
    const windowWithDataLayer = window as unknown as { dataLayer?: Record<string, unknown>[] };
    if (windowWithDataLayer.dataLayer) {
      windowWithDataLayer.dataLayer.push({
        event: 'page_view',
        page_path: currentRoute,
        page_location: canonicalUrl,
      });
    }
  }, [currentRoute]);

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
      case '/book':
        return <BookPage onNavigate={handleNavigate} />;
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
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#B8860B] selection:text-black flex flex-col">
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderCurrentPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget currentRoute={currentRoute} />
    </div>
  );
}
