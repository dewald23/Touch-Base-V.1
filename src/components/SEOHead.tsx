import { useEffect } from 'react';
import { ROUTE_METADATA, type AppRoute } from '../types/seo';
import { SITE_CONFIG } from '../config/site';

interface SEOHeadProps {
  currentRoute: AppRoute;
}

export default function SEOHead({ currentRoute }: SEOHeadProps) {
  useEffect(() => {
    const meta = ROUTE_METADATA[currentRoute] || ROUTE_METADATA['/'];

    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }

    const canonicalUrl = `${SITE_CONFIG.url}${currentRoute === '/' ? '' : currentRoute}`;
const canonicalEl = document.querySelector('link[rel="canonical"]');
if (canonicalEl) {
  canonicalEl.setAttribute('href', canonicalUrl);
}

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: currentRoute,
        page_title: meta.title,
        page_location: canonicalUrl,
      });
    }
  }, [currentRoute]);

  return null;
}
