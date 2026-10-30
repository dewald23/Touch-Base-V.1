/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Zap,
  ShieldCheck,
  MessageSquare,
  Calendar,
  ExternalLink,
  Search,
  Globe,
} from 'lucide-react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <SEOHead currentRoute="/" />

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Overberg Digital Growth & Local SEO Studio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-6">
              Dominate Google Map-Packs & Sub-Second Web Solutions in{' '}
              <span className="text-[#B8860B]">Hermanus</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
              Most local business websites sit invisible on page three. We engineer custom high-speed websites, verified Google Business Profile map-pack rankings, and automated WhatsApp lead capture funnels across Sandbaai, Hermanus, Stanford, and Gansbaai.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/book')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#B8860B] text-black font-bold text-sm hover:bg-[#9a7009] active:scale-95 transition-all shadow-lg shadow-[#B8860B]/15"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book 30-Min Strategy Session</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/audit')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-zinc-900 border border-white/20 text-white font-semibold text-sm hover:bg-zinc-800 transition-all"
              >
                <span>Request Free Local SEO Audit</span>
                <ArrowRight className="w-4 h-4 text-[#B8860B]" aria-hidden="true" />
              </button>
            </div>

            {/* Key Performance Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#B8860B]">100/100</p>
                <p className="text-xs text-zinc-300 mt-1">Core Web Vitals & SEO Target</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 0.8s</p>
                <p className="text-xs text-zinc-300 mt-1">First Contentful Paint (Mobile)</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#B8860B]">Top 3</p>
                <p className="text-xs text-zinc-300 mt-1">Google Map-Pack Architecture</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">24/7</p>
                <p className="text-xs text-zinc-300 mt-1">Automated WhatsApp Lead Funnels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Growth Pillars */}
        <section className="py-20 px-6 max-w-7xl mx-auto" aria-label="Core Digital Services">
          <div className="max-w-2xl mb-14 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Engineered for Local Revenue
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Three Pillars of Overberg Search Dominance
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Every system we deploy connects your website directly with your Google Business Profile and WhatsApp Business pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#B8860B]/50 transition-all">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#B8860B]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">Google Map-Pack & GBP Authority</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Complete Google Business Profile optimization, primary category tuning, NAP citation alignment, and automated 5-star review engines for Hermanus businesses.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:underline"
              >
                <span>Explore GBP Optimization</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </article>

            <article className="bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#B8860B]/50 transition-all">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#B8860B]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">Sub-Second Web Engineering</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Custom React and Tailwind CSS architectures deployed on Vercel edge networks. Zero bloated templates—built for instant mobile loading and AI agent readability.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/pricing')}
                className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:underline"
              >
                <span>View Incubation Tiers</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </article>

            <article className="bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#B8860B]/50 transition-all">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#B8860B]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">WhatsApp Lead Capture Funnels</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Turnkey WhatsApp Business catalog configuration, automated greeting flows, custom short links, and POPIA-compliant click-to-chat website triggers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/book')}
                className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:underline"
              >
                <span>Schedule Funnel Setup</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </article>
          </div>
        </section>

        {/* Studio Location & GBP Sync Banner */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Verified Sandbaai Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Visit or Connect with {SITE_CONFIG.name}
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {SITE_CONFIG.address.formatted} • {SITE_CONFIG.hours.regular}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8860B]" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B8860B] text-black text-xs font-bold hover:bg-[#9a7009] transition"
              >
                <span>Contact Studio</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
