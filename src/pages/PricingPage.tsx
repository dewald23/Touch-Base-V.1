/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ArrowRight, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import type { AppRoute } from '../types/seo';

interface PricingPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const tiers = [
    {
      name: 'The Starter',
      tagline: 'Essential local visibility for emerging Sandbaai & Hermanus businesses.',
      price: 'R380',
      period: '/month',
      popular: false,
      features: [
        'Google Business Profile Optimization',
        'Basic Local SEO & Citation Cleanup',
        'Mobile-Responsive Landing Page Refresh',
        'Monthly Rank Tracking Report',
        'Standard Email Support',
      ],
      cta: 'Get Started',
      route: '/book' as AppRoute,
    },
    {
      name: 'The Authority',
      tagline: 'Comprehensive digital growth and lead capture for established local brands.',
      price: 'R600',
      period: '/month',
      popular: true,
      features: [
        'Everything in The Starter',
        'Advanced Keyword Targeting & On-Page SEO',
        'WhatsApp Lead Funnel Integration',
        'Core Web Vitals Speed Optimization',
        'Bi-Monthly Strategy Consultations',
        'Priority WhatsApp & Phone Support',
      ],
      cta: 'Claim Authority',
      route: '/book' as AppRoute,
    },
    {
      name: 'The Dominator',
      tagline: 'Maximum market capture, multi-page scaling, and aggressive regional reach.',
      price: 'R950',
      period: '/month',
      popular: false,
      features: [
        'Everything in The Authority',
        'Full Multi-Page Architecture Conversion',
        'Custom React / Tailwind Infrastructure',
        'Automated Review Generation Workflows',
        'Advanced Schema Markup & Local Map-Pack Domination',
        'Dedicated Weekly Growth Partner Sessions',
      ],
      cta: 'Dominate Your Market',
      route: '/book' as AppRoute,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] text-sm font-semibold mb-4">
          <TrendingUp className="w-4 h-4" /> Transparent Growth Investment
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Predictable Pricing for <span className="text-[#B8860B]">Overberg Businesses</span>
        </h1>
        <p className="text-lg text-gray-400">
          No hidden fees or bloated agency retainers. High-performance digital infrastructure, 
          optimized local SEO, and conversion engines tailored for Hermanus and surrounding regions.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-2xl bg-zinc-900/80 border flex flex-col justify-between p-8 transition-all duration-300 hover:border-[#B8860B]/50 ${
              tier.popular ? 'border-[#B8860B] shadow-2xl shadow-[#B8860B]/10 lg:-translate-y-2' : 'border-zinc-800'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#B8860B] text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular Choice
                </span>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{tier.tagline}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white">{tier.price}</span>
                <span className="text-gray-400 text-sm font-medium">{tier.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#B8860B]/20 text-[#B8860B] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate(tier.route)}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                tier.popular
                  ? 'bg-[#B8860B] text-black hover:bg-[#996f09]'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
              }`}
            >
              {tier.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Value Guarantee / Trust Banner */}
      <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
            <ShieldCheck className="w-5 h-5 text-[#B8860B]" /> Need a custom enterprise architecture?
          </h4>
          <p className="text-sm text-gray-400">
            Operating from Sandbaai, Hermanus. We build custom multi-page React applications, advanced CRM hooks, and bespoke local funnels.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/contact')}
          className="whitespace-nowrap px-6 py-3 rounded-xl bg-transparent border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B]/10 font-semibold text-sm transition-all"
        >
          Contact Direct
        </button>
      </div>
    </div>
  );
}