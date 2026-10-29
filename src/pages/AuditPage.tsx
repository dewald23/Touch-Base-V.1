/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { PopiaSecuredAuditForm } from '../components/PopiaSecuredAuditForm';

const GBP_URL =
  'https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS';

const auditSEO: PageSEO = {
  title: 'Free Local SEO & Web Performance Audit | Touch Base Consulting',
  description:
    'Request a complimentary technical teardown of your Google Business Profile rankings, mobile edge speeds, and citation gaps across Hermanus and the Overberg.',
  canonicalPath: '/audit',
  keywords: [
    'Free SEO Audit Hermanus',
    'Google Business Profile Audit Overberg',
    'Website Speed Test South Africa',
    'Local Ranking Checker',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free Local SEO & Web Performance Audit',
    url: 'https://touchbaseconsulting.co.za/audit',
    description:
      'Complimentary technical audit for Overberg businesses covering Google Map-Pack positions, Core Web Vitals, and citation consistency.',
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
  },
};

const INDUSTRIES = [
  {
    name: 'Trades & Home Services',
    description: 'Plumbing, Electricians, Builders, Painting, Landscaping',
    monthlyVolume: '1,400+ Monthly Searches',
    mapClickRatio: '72% Map-Pack Share',
    opportunity: 'High emergency call-out demand across coastal residences.',
  },
  {
    name: 'Tourism & Accommodation',
    description: 'Guest Houses, Whale Charters, Wine Tours, Self-Catering',
    monthlyVolume: '4,800+ Monthly Searches',
    mapClickRatio: '76% Map-Pack Share',
    opportunity: 'International tourists searching via mobile maps while exploring.',
  },
  {
    name: 'Professional & Legal',
    description: 'Conveyancers, Attorneys, Accountants, Financial Planners',
    monthlyVolume: '920+ Monthly Searches',
    mapClickRatio: '64% Map-Pack Share',
    opportunity: 'High-ticket retainer clients researching local reputation.',
  },
  {
    name: 'Medical & Wellness',
    description: 'Dentists, Physiotherapists, Optometrists, Private Clinics',
    monthlyVolume: '1,850+ Monthly Searches',
    mapClickRatio: '81% Map-Pack Share',
    opportunity: 'Urgent proximity searches prioritizing top 3 verified clinics.',
  },
];

interface AuditPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function AuditPage({ onNavigate }: AuditPageProps) {
  return (
    <div>
      <SEOHead seo={auditSEO} />

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            Free Technical Teardown · 24hr Turnaround
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Local SEO & Web Performance Audit
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Find out exactly why your business is losing calls to competitors in the Hermanus Map-Pack.
            We analyze your Google Business Profile, mobile load latency, and citation consistency.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <PopiaSecuredAuditForm onNavigate={onNavigate} />
          </div>

          {/* Audit Scope Checklist & What You Receive */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-950 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-[#B8860B]" />
                <span>What Your Audit Uncovers</span>
              </h3>

              <div className="space-y-4 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[#B8860B] font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Google Business Profile Health</p>
                    <p className="text-zinc-400 mt-0.5">
                      Audit of primary category accuracy, secondary classifications, and missing geo-tags.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[#B8860B] font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mobile Speed & Core Web Vitals</p>
                    <p className="text-zinc-400 mt-0.5">
                      Laboratory and real-world cellular speed test tracking FCP, LCP, and layout shifts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[#B8860B] font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Local Citation Discrepancies</p>
                    <p className="text-zinc-400 mt-0.5">
                      Identification of conflicting NAP details confusing search engines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[#B8860B] font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Competitor Map-Pack Takeover Plan</p>
                    <p className="text-zinc-400 mt-0.5">
                      Actionable, step-by-step roadmap to surpass top 3 ranking listings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-[#B8860B] font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>POPIA Data Protection</span>
              </div>
              <p>
                Your audit data is processed strictly in accordance with South Africa's POPIA Act 4 of 2013.
                We never share client data or audit findings with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Industry Search Benchmarks */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Regional Search Intelligence
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-[#B8860B]" />
              <span>Overberg Map-Pack Industry Benchmarks</span>
            </h2>
            <p className="text-sm text-zinc-400">
              Representative local search volume and mobile map-pack interaction rates across Hermanus,
              Sandbaai, and the greater Overberg basin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#B8860B]/50 transition-colors"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">{ind.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{ind.description}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-500">Volume:</span>
                    <span className="text-[#B8860B] font-semibold">{ind.monthlyVolume}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-500">Map Click Ratio:</span>
                    <span className="text-white font-semibold">{ind.mapClickRatio}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 pt-2 italic leading-normal border-t border-white/5">
                    "{ind.opportunity}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
