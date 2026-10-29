import React from 'react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface TermsPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <>
      <SEOHead currentRoute="/terms" />
      <div className="py-16 md:py-24 px-6 bg-black text-white min-h-screen">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-zinc-300 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs text-zinc-400">Governing Law: Republic of South Africa</p>

          <h2 className="text-lg font-bold text-white pt-4">1. Visibility Incubation Terms</h2>
          <p>
            Introductory monthly Visibility Incubation Tiers (The Starter, The Authority, and The Dominator) operate on a 6-month minimum incubation commitment to establish sustainable local search and Google Map-Pack authority.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Ad-Hoc Consulting & Custom Development</h2>
          <p>
            Standard ad-hoc technical consulting and conversion rate optimization are billed between R500 and R850 per hour as agreed prior to sprint execution.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Studio Contact</h2>
          <p>
            {SITE_CONFIG.name} • {SITE_CONFIG.address.formatted} • {SITE_CONFIG.email} • {SITE_CONFIG.phoneDisplay}.
          </p>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-white/20 text-white text-xs font-semibold hover:bg-zinc-800"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
