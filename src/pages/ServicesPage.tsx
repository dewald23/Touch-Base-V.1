/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MapPin,
  Globe,
  Search,
  MessageSquare,
  Code2,
  TrendingUp,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface ServicesPageProps {
  onNavigate: (route: AppRoute) => void;
}

const GBP_SERVICES = [
  {
    title: 'Google Business Profile (GBP) Optimization',
    price: 'R1,800 Once-Off',
    badge: 'Local Map Authority',
    icon: MapPin,
    description:
      'Complete profile cleanup, primary and secondary category tune-up, geo-tagged photo uploads, and a structured 5-star review collection framework.',
    deliverables: [
      'Primary & secondary category precision tuning',
      '100% NAP & local directory citation alignment',
      'Geo-tagged visual asset & studio photo uploads',
      'Automated WhatsApp & SMS review request templates',
    ],
  },
  {
    title: 'Local SEO Audit',
    price: 'R1,500 Once-Off',
    badge: 'Technical Diagnostics',
    icon: Search,
    description:
      'Dominate local search results in Hermanus. We audit your website technical health, fix indexing errors, optimize keywords, and drive high-intent organic traffic.',
    deliverables: [
      'Google Search Console & XML sitemap indexing audit',
      'Mobile Core Web Vitals & PageSpeed bottleneck report',
      'Top 3 Overberg competitor Map-Pack gap analysis',
      'Prioritized 5-step technical remediation roadmap',
    ],
  },
  {
    title: 'WhatsApp Business Lead Funnel Setup',
    price: 'R2,200 Once-Off',
    badge: 'Instant Conversion',
    icon: MessageSquare,
    description:
      'Catalog configuration, automated greeting and away messages, custom short links, and non-blocking website floating widget integration.',
    deliverables: [
      'WhatsApp Business service & product catalog build',
      'Automated greeting, away & quick-reply flows',
      'Trackable wa.me short links & print QR codes',
      'POPIA-compliant click-to-WhatsApp website triggers',
    ],
  },
  {
    title: 'Web Design (Conversion Landing Pages)',
    price: 'From R380 / mo',
    badge: 'Mobile-First UI/UX',
    icon: Globe,
    description:
      'Fast, mobile-first websites and landing pages built to convert Overberg scrollers into clients with clean UI/UX and instant WhatsApp integration.',
    deliverables: [
      'Responsive dark/light brand identity architecture',
      'Sub-second mobile First Contentful Paint',
      'Schema.org LocalBusiness & Service JSON-LD',
      'SSL edge hosting & domain DNS configuration',
    ],
  },
  {
    title: 'Custom Full-Stack Web Development',
    price: 'R500 / hr',
    badge: 'Bespoke Engineering',
    icon: Code2,
    description:
      'High-speed, sub-second React, TypeScript, and Tailwind CSS web solutions engineered for custom workflows, booking portals, and database integrations.',
    deliverables: [
      'Vite + React 19 code-split SPA/SSR architecture',
      'Custom appointment scheduling & intake portals',
      'Supabase, Redis & serverless API integrations',
      'Strict TypeScript & security header hardening',
    ],
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    price: 'R500 / hr',
    badge: 'Funnel Telemetry',
    icon: TrendingUp,
    description:
      'Data-driven UI/UX refinement, interactive audit funnels, and click-to-WhatsApp routing engineered to maximize visitor inquiries.',
    deliverables: [
      'Interaction-deferred GTM & GA4 event tracking',
      'Call-to-action placement & friction removal',
      'Mobile tap-target & WCAG AA contrast compliance',
      'Lead intake form & booking conversion tracking',
    ],
  },
  {
    title: 'Monthly SEO & Map-Pack Retainer',
    price: 'R600 / mo',
    badge: 'Ongoing Dominance',
    icon: RefreshCw,
    description:
      'Continuous keyword tracking, bi-weekly Google Business Profile authority updates, and automated 5-star Google review collection strategies.',
    deliverables: [
      '2x Monthly keyword-optimized GBP authority posts',
      'Ongoing review response & reputation management',
      'Competitor ranking & search impression telemetry',
      'Monthly performance & lead conversion summary',
    ],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <>
      <SEOHead currentRoute="/services" />

      <div className="py-16 md:py-24 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold uppercase tracking-wider">
              <span>Official GBP Service Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Digital Services & <span className="text-[#B8860B]">Web Architecture</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Every service listed below is synchronized directly with our verified Google Business Profile in Sandbaai, Hermanus.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GBP_SERVICES.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={idx}
                  className="rounded-2xl bg-zinc-950 border border-white/10 p-7 flex flex-col justify-between hover:border-[#B8860B]/50 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-[11px] font-semibold uppercase tracking-wider">
                        <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{service.badge}</span>
                      </span>
                      <span className="text-sm font-extrabold text-white">{service.price}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                    <p className="text-zinc-300 text-xs leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => onNavigate('/book')}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#B8860B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#9a7009] transition"
                    >
                      <span>Book Service Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-zinc-950 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white">Looking for bundled monthly retainers?</h2>
              <p className="text-xs text-zinc-300">
                Compare The Starter (R380/mo), The Authority (R600/mo), and The Dominator (R950+/mo) incubation packages.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('/pricing')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B8860B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#9a7009] transition"
              >
                <span>View Pricing Tiers</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={SITE_CONFIG.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
              >
                <span>Verify on GBP</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8860B]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
