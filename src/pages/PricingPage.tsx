/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, MessageSquare, Check, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const GBP_URL = 'https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS';
const WHATSAPP_NUMBER = '27750908984';

const pricingSEO: PageSEO = {
  title: 'Consulting Rates & Service Packages | Touch Base Consulting',
  description:
    'Transparent scope breakdowns and engagement models for Local SEO and Custom Web Solutions. Inspect verified packages and rates directly on the Touch Base Consulting Google Business Profile.',
  canonicalPath: '/pricing',
  keywords: [
    'Local SEO Packages Hermanus',
    'Web Development Rates Overberg',
    'Google Business Profile Pricing',
    'Touch Base Consulting Rates',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Consulting Rates & Service Packages',
    url: 'https://touchbaseconsulting.co.za/pricing',
    description:
      'Official service scope breakdowns and verified package rates for Touch Base Consulting on Google Business Profile.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Touch Base Consulting',
      url: 'https://touchbaseconsulting.co.za',
      telephone: '+27750908984',
      sameAs: [GBP_URL],
    },
  },
};

interface PricingPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const handleNav = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const engagementModels = [
    {
      title: 'Technical Advisory & Engineering Consulting',
      focus: 'Flexible Hourly or Milestone Scope',
      description:
        'Dedicated technical consultation and hands-on engineering to solve speed bottlenecks, audit technical SEO, configure GA4/GTM, or refactor existing web applications.',
      scopeDetails: [
        'One-on-one architectural consultation with our senior engineer',
        'In-depth Core Web Vitals speed analysis and optimization plan',
        'Google Tag Manager & Google Analytics 4 tracking remediation',
        'Custom API, webhook, and WhatsApp lead routing integration',
        'Code refactoring from sluggish CMS platforms to modern React',
      ],
      ctaText: 'Inquire on WhatsApp',
      inquiryType: 'Technical Advisory Consulting',
    },
    {
      title: 'Local SEO & GBP Accelerator',
      focus: 'High-Impact Map-Pack Sprint',
      description:
        'A comprehensive overhaul of your local search presence across Hermanus and the Overberg. Built to systematically capture high-intent buyers looking for your services on Google Maps.',
      scopeDetails: [
        'Full Google Business Profile verification, category & keyword mapping',
        'Deep Schema.org JSON-LD LocalBusiness microdata with GPS coordinates',
        'Top South African directory and local citation network sync',
        'Geo-tagged image metadata optimization with EXIF coordinate tags',
        'Review generation strategy and automated customer QR routing',
        'Comprehensive 60-day competitor map-rank tracking report',
      ],
      ctaText: 'Start SEO Accelerator',
      inquiryType: 'Local SEO & GBP Accelerator',
    },
    {
      title: 'Custom React & Edge Launchpad',
      focus: 'Turnkey High-Performance Web Solution',
      description:
        'A bespoke, lightning-fast edge web application designed to outrank traditional WordPress and Wix competitors while driving direct WhatsApp customer leads.',
      scopeDetails: [
        'Custom responsive architecture built with React 19 & Tailwind CSS',
        'Sub-800ms load speeds with 95+ Core Web Vitals performance rating',
        'Integrated GA4 event flow and Tag Manager conversion telemetry',
        'Spam-protected lead capture forms with instant WhatsApp routing',
        'Global Edge CDN deployment with automatic SSL certificate management',
        '30-day post-launch technical warranty and local Overberg support',
      ],
      ctaText: 'Launch Custom Web App',
      inquiryType: 'Custom React Launchpad',
    },
  ];

  return (
    <div>
      <SEOHead seo={pricingSEO} />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            Transparent Value & Official Rates
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Consulting Scope & Engagement Models
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We believe in complete transparency and verified accountability. To view our official pricing
            catalog, hourly rates, and seasonal package availability, inspect our verified Google Business
            Profile.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-6 py-3.5 rounded-md text-sm transition-colors shadow-lg"
            >
              <span>View Official Rates on Google Business Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Engagement Models Breakdown */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Scope Deliverables
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Choose the Right Engagement for Your Growth
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Every engagement includes direct engineering execution, clean technical schema, and
            measurable lead generation metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-white/15 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#B8860B]/60 transition-all"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B8860B] block mb-2">
                  {model.focus}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">{model.description}</p>

                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Included Architecture:
                  </p>
                  {model.scopeDetails.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi Touch Base, I visited your Pricing page and would like to request full package details and official rates for the ${model.inquiryType}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-md text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#B8860B]" />
                  <span>{model.ctaText}</span>
                </a>

                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 hover:text-[#B8860B] transition-colors"
                >
                  <span>Verify rates on Google Business Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official GBP Policy Card */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-950 border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto border border-[#B8860B]/30 rounded-2xl p-8 sm:p-10 bg-black flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent Pricing Assurance</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Why Our Official Rates Are on Google Business Profile
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Google Business Profile is the gold standard for local service verification in South Africa.
              By publishing our service catalog, verified reviews, and consulting tiers on Google, you receive
              real-time accuracy, verified reviews, and guaranteed zero hidden fees.
            </p>
          </div>

          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-6 py-3.5 rounded-md text-xs transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Google Profile Catalog</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Questions</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Scope & Engagement FAQs</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <HelpCircle className="w-4 h-4 text-[#B8860B]" />
              <span>Are there ongoing monthly contracts or lock-in periods?</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pl-6">
              No. Our advisory consulting and sprint accelerators are fixed deliverables with zero lock-in.
              If you require ongoing citation maintenance and review velocity monitoring, we offer flexible
              month-to-month retainers.
            </p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <HelpCircle className="w-4 h-4 text-[#B8860B]" />
              <span>How do I get a custom quote for a multi-location Overberg business?</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pl-6">
              Simply submit a brief on our Free Audit page or message us directly on WhatsApp. We review your
              target service radius (e.g. Hermanus, Stanford, Gansbaai) and provide an itemized proposal within
              24 hours.
            </p>
          </div>
        </div>

        <div className="pt-6 text-center">
          <a
            href="/audit"
            onClick={(e) => handleNav('/audit', e)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8860B] hover:underline"
          >
            <span>Run a free audit to determine your exact scope requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
