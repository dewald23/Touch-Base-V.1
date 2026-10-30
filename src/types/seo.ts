/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute =
  | '/'
  | '/services'
  | '/pricing'
  | '/audit'
  | '/book'
  | '/contact'
  | '/privacy'
  | '/terms';

export interface PageSEO {
  title: string;
  description: string;
  canonicalPath: AppRoute;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface LeadFormState {
  businessName: string;
  websiteUrl: string;
  serviceInterest: 'local-seo' | 'web-dev' | 'geo-ai' | 'cro-funnels';
  phone: string;
  suburb: string;
  industry: string;
  notes?: string;
  popiaConsent: boolean;
}

export interface SubmissionStatus {
  state: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technicalArchitecture: string[];
  impactMetric: { label: string; value: string };
}

const DOMAIN = 'https://touchbaseconsulting.co.za';

export const ROUTE_METADATA: Record<AppRoute, PageSEO> = {
  '/': {
    title: 'Touch Base Consulting | High-Performance Digital Infrastructure & Local SEO',
    description: 'We build lightning-fast, custom-coded web assets and local SEO frameworks that turn regional traffic into predictable revenue for Overberg businesses.',
    canonicalPath: '/',
    keywords: ['Local SEO Hermanus', 'Web Development Sandbaai', 'Digital Marketing Overberg', 'Google Business Profile Optimization'],
    ogType: 'website',
  },
  '/services': {
    title: 'Digital Marketing & Local SEO Services Hermanus | Touch Base Consulting',
    description: 'Official Google Business Profile optimization, Local SEO audits, WhatsApp lead funnels, and custom React web development in Sandbaai, Hermanus.',
    canonicalPath: '/services',
    keywords: ['SEO Audit', 'WhatsApp Lead Funnels', 'Google Business Profile Setup', 'Hermanus Agency'],
    ogType: 'website',
  },
  '/pricing': {
    title: 'Web Design & Local SEO Pricing Tiers | Touch Base Consulting Hermanus',
    description: 'Transparent monthly digital growth packages: The Starter (R380/mo), The Authority (R600/mo), The Dominator (R950/mo), and ad-hoc consulting.',
    canonicalPath: '/pricing',
    keywords: ['SEO Pricing South Africa', 'Web Design Packages', 'Monthly Digital Marketing Rates'],
    ogType: 'website',
  },
  '/audit': {
    title: 'Free Local SEO & Website Speed Audit | Touch Base Consulting Hermanus',
    description: 'Request a free Google Map-Pack ranking diagnostic and mobile Core Web Vitals speed audit for your Overberg business.',
    canonicalPath: '/audit',
    keywords: ['Free SEO Audit', 'Core Web Vitals Check', 'Map-Pack Ranking Diagnostic'],
    ogType: 'website',
  },
  '/book': {
    title: 'Book a Strategy Consultation | Touch Base Consulting Sandbaai, Hermanus',
    description: 'Schedule a 30-minute local SEO, Google Business Profile, or custom web architecture strategy consultation at our Sandbaai studio or online.',
    canonicalPath: '/book',
    keywords: ['Book Consultation', 'Digital Strategy Meeting', 'Hermanus Web Consultant'],
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Touch Base Consulting | 61 De Villiers St, Sandbaai, Hermanus',
    description: 'Visit or contact Touch Base Consulting at 61 De Villiers Street, Sandbaai, Hermanus, 7200. Call or WhatsApp +27 75 090 8984.',
    canonicalPath: '/contact',
    keywords: ['Contact Touch Base Consulting', 'Sandbaai Address', 'Hermanus Web Agency Phone'],
    ogType: 'website',
  },
  '/privacy': {
    title: 'POPIA Privacy Policy | Touch Base Consulting Hermanus',
    description: 'Protection of Personal Information Act (POPIA Act 4 of 2013) compliance and data privacy policy for Touch Base Consulting.',
    canonicalPath: '/privacy',
    noIndex: false,
    ogType: 'website',
  },
  '/terms': {
    title: 'Terms of Service | Touch Base Consulting Hermanus',
    description: 'Service terms, visibility incubation agreements, and consulting guidelines for Touch Base Consulting in South Africa.',
    canonicalPath: '/terms',
    noIndex: false,
    ogType: 'website',
  },
};