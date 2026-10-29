/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import type { PageSEO } from '../types/seo';

const BASE_URL = 'https://touchbaseconsulting.co.za';

interface SEOHeadProps {
  seo: PageSEO;
}

export default function SEOHead({ seo }: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = seo.title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // 3. Update Canonical Tag (Strip trailing slash, keep apex clean)
    const cleanPath = seo.canonicalPath === '/' ? '' : seo.canonicalPath.replace(/\/+$/, '');
    const canonicalUrl = `${BASE_URL}${cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update Robots Meta (Index vs NoIndex)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (seo.noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, follow');
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    // 5. Update OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', seo.title);
    updateOrCreateMeta('og:description', seo.description);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:type', seo.ogType || 'website');

    // 6. Update Twitter Meta
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateOrCreateTwitterMeta('twitter:title', seo.title);
    updateOrCreateTwitterMeta('twitter:description', seo.description);

    // 7. Inject Page-Level Schema.org JSON-LD
    const existingScript = document.getElementById('page-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (seo.structuredData) {
      const script = document.createElement('script');
      script.id = 'page-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(seo.structuredData);
      document.head.appendChild(script);
    }

    // 8. Push Clean Pageview to GTM dataLayer
    const windowWithDataLayer = window as unknown as { dataLayer?: Record<string, unknown>[] };
    if (typeof window !== 'undefined' && windowWithDataLayer.dataLayer) {
      windowWithDataLayer.dataLayer.push({
        event: 'page_view',
        page_title: seo.title,
        page_location: canonicalUrl,
        page_path: seo.canonicalPath,
      });
    }

    return () => {
      const scriptToRemove = document.getElementById('page-json-ld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [seo]);

  return null;
}
