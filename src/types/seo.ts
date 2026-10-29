/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute =
  | '/'
  | '/services'
  | '/pricing'
  | '/audit'
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
