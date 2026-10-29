/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Search,
  Globe,
  Cpu,
  TrendingUp,
  Check,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const GBP_URL =
  'https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS';

const servicesSEO: PageSEO = {
  title: 'Core Technical Services | Local SEO & Web Solutions | Touch Base Consulting',
  description:
    'Deep dive into our engineering capabilities: Google Business Profile map-pack dominance, custom React edge web solutions, Generative Engine Optimization (GEO), and high-conversion WhatsApp funnels in the Overberg.',
  canonicalPath: '/services',
  keywords: [
    'Local SEO Hermanus',
    'Google Business Profile Optimization',
    'Custom React Development South Africa',
    'Generative Engine Optimization GEO',
    'WhatsApp Lead Funnels',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO & Web Solutions',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Touch Base Consulting',
      url: 'https://touchbaseconsulting.co.za',
      telephone: '+27750908984',
      sameAs: [GBP_URL],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '61 De Villiers Street, Sandbaai',
        addressLocality: 'Hermanus',
        addressRegion: 'Western Cape',
        postalCode: '7200',
        addressCountry: 'ZA',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Overberg, Western Cape, South Africa',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Core Technical Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO & Google Business Profile Optimization',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom React & Edge Web Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generative Engine Optimization (GEO)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'High-Conversion Lead Funnels & GA4 Telemetry',
          },
        },
      ],
    },
  },
};

interface ServicesPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const handleNav = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
  };

  const servicesList = [
    {
      id: 'local-seo',
      icon: Search,
      title: 'Local SEO & Google Business Profile (GBP) Optimization',
      kicker: 'Map-Pack Domination · Hermanus & Overberg',
      summary:
        'When potential customers in Hermanus search for local services, 70% of phone calls go directly to the top 3 Google Maps listings. We engineer your profile to claim and maintain top-3 ranking visibility across the Overberg.',
      technicalFeatures: [
        'Google Business Profile category audit and secondary subcategory mapping',
        'Deep Schema.org JSON-LD LocalBusiness microdata with precise geo-coordinates',
        'Top 25 South African local directory and citation network synchronization',
        'Geo-tagged image metadata optimization with EXIF coordinate stamping',
        'Review velocity acceleration systems and automated QR review routers',
        'Active competitor map-rank tracking across Sandbaai, Onrus, and Hermanus',
      ],
      deliverable: 'Dominant top-3 Google Map-Pack placement & direct mobile call volume.',
    },
    {
      id: 'web-dev', // Aligned with footer deep link #web-dev
      icon: Globe,
      title: 'Custom React & Edge Web Solutions',
      kicker: 'Zero-Bloat · Sub-Second Load Speeds',
      summary:
        'Traditional local websites running on outdated WordPress themes suffer from sluggish 4-second loading times and fragile plugin conflicts. We build custom, ultra-fast web applications deployed directly to global edge CDNs.',
      technicalFeatures: [
        'Bespoke React 19 + TypeScript architecture built from scratch',
        'Sub-800ms First Contentful Paint on mobile cellular networks',
        'Zero Cumulative Layout Shift (CLS: 0.00) and 95+ Core Web Vitals score',
        'Dynamic per-page meta tag and JSON-LD schema injection for crawlers',
        'Optimized for mobile-first interaction with touch-friendly navigation',
        'Global Edge CDN deployment with automatic SSL certificate renewal',
      ],
      deliverable: 'Instantaneous mobile loading, top-tier user experience & flawless technical SEO.',
    },
    {
      id: 'geo-ai',
      icon: Cpu,
      title: 'Generative Engine Optimization (GEO)',
      kicker: 'AI Overviews & Next-Generation Search Readiness',
      summary:
        'Search is changing rapidly. Google Gemini, Search Generative Experience, and AI assistants rely on entity relationships rather than simple keywords. We structure your digital footprint so AI models recommend your business first.',
      technicalFeatures: [
        'Entity co-occurrence mapping connecting your brand to Overberg locality nodes',
        'Semantic content structuring formatted specifically for LLM extraction',
        'Knowledge graph alignment linking business credentials, founder, and services',
        'Structured FAQ and HowTo schema rendering rich SERP snippets',
        'Continuous monitoring of brand mentions in automated AI search answers',
        'Authoritative citation building across regional Western Cape web properties',
      ],
      deliverable: 'Prime positioning in Google AI Overviews and conversational search results.',
    },
    {
      id: 'cro-funnels', // Aligned with footer deep link #cro-funnels
      icon: TrendingUp,
      title: 'High-Conversion WhatsApp Lead Funnels',
      kicker: 'Zero-Drop Mobile Lead Generation',
      summary:
        'A website that does not convert visitors into phone calls or chat inquiries is an expense, not an asset. We implement direct WhatsApp click-to-chat routing and verified conversion analytics to maximize inbound leads.',
      technicalFeatures: [
        'Direct click-to-chat WhatsApp deep links pre-populated with customer intent',
        'Google Analytics 4 (GA4) event flow tracking lead submissions and calls',
        'Google Tag Manager (GTM) container setup for frictionless tag deployment',
        'Form input sanitization, phone number formatting, and spam prevention',
        'Zero-lead-drop architecture eliminating multi-step email friction',
        'Granular conversion attribution showing which search keywords drive revenue',
      ],
      deliverable: 'Direct WhatsApp inquiries and transparent GA4 conversion telemetry.',
    },
  ];

  return (
    <div>
      <SEOHead seo={servicesSEO} />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 border-b border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            Core Technical Capabilities
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineered for Top-Rankings & High Conversions
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We don't sell generic templates or superficial vanity metrics. Every solution is architected
            with precision code, verified schema, and direct lead generation for the Overberg market.
          </p>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-zinc-950 border border-white/15 rounded-2xl p-6 sm:p-10 transition-all hover:border-[#B8860B]/50 scroll-mt-24"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#B8860B]/15 border border-[#B8860B] flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div className="text-xs font-semibold text-[#B8860B] uppercase tracking-wider">
                  {service.kicker}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{service.summary}</p>
                <div className="p-4 rounded-lg bg-black border border-white/10 text-xs">
                  <span className="text-[#B8860B] font-semibold block mb-1">Target Business Outcome:</span>
                  <span className="text-zinc-300">{service.deliverable}</span>
                </div>
              </div>

              <div className="lg:col-span-7 bg-black border border-white/10 rounded-xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <Terminal className="w-4 h-4 text-[#B8860B]" />
                  <span>Technical Execution Specs</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                  {service.technicalFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="/audit"
                    onClick={(e) => handleNav('/audit', e)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B] hover:underline"
                  >
                    <span>Request Audit for This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/pricing"
                    onClick={(e) => handleNav('/pricing', e)}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white"
                  >
                    <span>Inspect Scope & Rate Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engineering Delivery Pipeline */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
              Our 5-Stage Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Technical Delivery Pipeline</h2>
            <p className="text-zinc-400 text-sm mt-2">
              How we take Overberg businesses from invisible search positions to high-converting map-pack leaders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Technical Discovery',
                desc: 'Auditing existing Google Business Profile, citation discrepancies, and mobile speed bottlenecks.',
              },
              {
                step: '02',
                title: 'Entity & Schema Architecture',
                desc: 'Designing clean JSON-LD microdata, exact geo-coordinates, and target Overberg entity maps.',
              },
              {
                step: '03',
                title: 'High-Speed Build',
                desc: 'Compiling clean, componentized React code with zero plugin bloat and sub-second asset delivery.',
              },
              {
                step: '04',
                title: 'Edge Deployment',
                desc: 'Deploying onto global edge networks with SSL certificates, caching headers, and DNS optimization.',
              },
              {
                step: '05',
                title: 'Telemetry & Velocity',
                desc: 'Configuring GA4, GTM, and review routing to systematically boost map rankings and inbound WhatsApp calls.',
              },
            ].map((stage, idx) => (
              <div key={idx} className="bg-black border border-white/10 rounded-xl p-5 space-y-3">
                <span className="text-2xl font-mono font-bold text-[#B8860B]">{stage.step}</span>
                <h3 className="text-sm font-bold text-white">{stage.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Ready to engineer a faster, higher-ranking web presence?
        </h2>
        <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
          Contact our Sandbaai studio directly or submit a free audit brief to review your current Google
          rankings.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/audit"
            onClick={(e) => handleNav('/audit', e)}
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-7 py-3.5 rounded-md text-sm transition-colors"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            onClick={(e) => handleNav('/contact', e)}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
          >
            <span>Contact Studio</span>
          </a>
        </div>
      </section>
    </div>
  );
}
