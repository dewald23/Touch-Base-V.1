/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scale, ExternalLink, ArrowLeft, Briefcase, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const GBP_URL =
  'https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS';

const termsSEO: PageSEO = {
  title: 'Terms of Service | Touch Base Consulting',
  description:
    'Terms of Service, consulting rate structures, and liability guidelines for Touch Base Consulting in Sandbaai, Hermanus.',
  canonicalPath: '/terms',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    url: 'https://touchbaseconsulting.co.za/terms',
    description: 'Service agreement and consulting governance terms for Touch Base Consulting.',
    publisher: {
      '@type': 'ProfessionalService',
      name: 'Touch Base Consulting',
      url: 'https://touchbaseconsulting.co.za',
    },
  },
};

interface TermsPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  const lastUpdated = 'October 28, 2026';

  const handleNav = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div className="py-20 px-6 font-sans selection:bg-[#B8860B] selection:text-black">
      <SEOHead seo={termsSEO} />
      <div className="max-w-4xl mx-auto space-y-10">
        <a
          href="/"
          onClick={(e) => handleNav('/', e)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8860B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <header className="border-b border-white/10 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-medium uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Service Agreement & Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Terms of <span className="text-[#B8860B]">Service</span>
          </h1>
          <p className="text-xs text-zinc-400">Effective & Last Updated: {lastUpdated}</p>
        </header>

        <section className="space-y-8 text-sm text-zinc-300 leading-relaxed">
          {/* 1. Scope of Services */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#B8860B]" />
              <span>1. Scope of Services</span>
            </h2>
            <p>
              Touch Base Consulting provides custom web application engineering (React, Next.js, Tailwind CSS), Local Search Engine Optimization (SEO), Google Business Profile (GBP) optimization, Generative Engine Optimization (GEO), and automated lead capture funnel workflows for businesses in Hermanus, the Overberg, and across South Africa.
            </p>
          </div>

          {/* 2. Pricing & Retainers */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">2. Pricing, Consulting Rates & Retainers</h2>
            <p>
              Ad-hoc technical engineering, web development, and digital strategy consulting are billed at our standard rate of <strong>R500 per hour</strong> unless otherwise specified in an itemized fixed-price project scope or ongoing growth retainer agreement.
            </p>
            <p>
              Official productized packages and current service tiers are published transparently on our verified Google Business Profile:
            </p>
            <div>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-5 py-2.5 rounded-md text-xs transition-all"
              >
                <span>View Official Pricing on Google Business Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3. Intellectual Property */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property & Code Ownership</h2>
            <p>
              Upon full settlement of project invoices, clients receive complete ownership of all custom front-end code, assets, and design artifacts created specifically for their deployment. Touch Base Consulting retains ownership of proprietary internal automation frameworks, boilerplates, and diagnostic engines.
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#B8860B]" />
              <span>4. Limitation of Liability & Third-Party Platforms</span>
            </h2>
            <p>
              While Touch Base Consulting builds applications and implements local SEO campaigns according to industry standards, search engine ranking algorithms and third-party cloud infrastructure availability—including <strong>Vercel, Google Search / Maps, Supabase, and Meta platforms</strong>—remain outside our direct control. Touch Base Consulting shall not be held liable for indirect, incidental, or consequential damages resulting from third-party algorithm updates, policy shifts, or upstream cloud service interruptions.
            </p>
          </div>

          {/* 5. Governing Law */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
              <span>5. Governing Law & Jurisdiction</span>
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the <strong>Republic of South Africa</strong>. Any disputes arising in connection with these terms or related consulting engagements shall be subject to the exclusive jurisdiction of the competent courts in the Western Cape.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
