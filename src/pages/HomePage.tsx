/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MapPin,
  ArrowRight,
  Globe,
  Search,
  Cpu,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  BarChart3,
  Layers,
  Code2,
} from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const GBP_URL = 'https://business.google.com';

const homeSEO: PageSEO = {
  title: 'Touch Base Consulting | Local SEO & Web Solutions Hermanus',
  description:
    'Engineering Google Map-Pack dominance, custom sub-second web solutions, and automated WhatsApp lead funnels for businesses in Hermanus, Sandbaai, and the Overberg.',
  canonicalPath: '/',
  keywords: [
    'Local SEO Hermanus',
    'Web Design Hermanus',
    'Google Business Profile Overberg',
    'SEO Sandbaai',
    'Edge Web Development South Africa',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Touch Base Consulting',
    alternateName: 'Touch Base Local SEO & Web Solutions',
    url: 'https://touchbaseconsulting.co.za',
    telephone: '+27750908984',
    email: 'Customerservice@touchbaseconsulting.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '61 De Villiers Street, Sandbaai',
      addressLocality: 'Hermanus',
      addressRegion: 'Western Cape',
      postalCode: '7200',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.4258,
      longitude: 19.2082,
    },
    areaServed: [
      'Hermanus',
      'Sandbaai',
      'Onrus',
      'Vermont',
      'Voëlklip',
      'Stanford',
      'Gansbaai',
      'Overberg',
      'Western Cape',
    ],
    priceRange: '$$',
    sameAs: [GBP_URL],
  },
};

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const handleNav = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <SEOHead seo={homeSEO} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Regional Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hermanus & Overberg Digital Growth Partner</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Sandbaai Studio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance">
              Websites Built to Rank.{' '}
              <span className="text-[#B8860B]">Local SEO That Delivers Leads.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Most local business websites sit invisible on page three. We engineer custom web
              solutions, dominate Google Business Profile map-packs, and build automated lead capture
              funnels that turn Overberg search traffic into paying clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/audit"
                onClick={(e) => handleNav('/audit', e)}
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-7 py-4 rounded-md transition-colors text-sm"
              >
                <span>Request Free Local SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                onClick={(e) => handleNav('/services', e)}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#B8860B] text-white px-7 py-4 rounded-md font-medium transition-colors text-sm"
              >
                <span>Explore Technical Capabilities</span>
              </a>
            </div>

            {/* Performance Strip */}
            <div className="pt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 text-sm">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#B8860B] font-mono tabular-nums">
                  Sub-1s
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Edge Load Speeds</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#B8860B] font-mono tabular-nums">
                  Top 3
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Map-Pack Positions</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#B8860B]">Direct</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">WhatsApp Lead Funnels</p>
              </div>
            </div>
          </div>

          {/* Quick Technical Teaser Card */}
          <div className="lg:col-span-4 bg-zinc-950 border border-white/15 rounded-xl p-6 sm:p-7 shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
                  Technical Teardown
                </p>
                <h2 className="text-lg font-bold text-white mt-1">The Overberg SEO Gap</h2>
              </div>
              <ShieldCheck className="w-7 h-7 text-[#B8860B] shrink-0" />
            </div>

            <div className="space-y-3.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>70%+ of mobile searches</strong> in Hermanus tap the top 3 Google Maps listings
                  directly without scrolling to standard organic links.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>Bloated WordPress themes</strong> average 4.2s mobile load time on coastal 4G,
                  causing a 53% bounce rate before your phone number even renders.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>WhatsApp routing</strong> captures South African buyers instantly while email forms
                  sit unread in spam folders.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/audit"
                onClick={(e) => handleNav('/audit', e)}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-md text-xs transition-colors"
              >
                <span>Audit Your Current Website & GBP</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Overview */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Engineering Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The Four Pillars of Overberg Digital Dominance
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            We focus exclusively on verifiable technical advantages that drive measurable inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: 'Local SEO & GBP',
              subtitle: 'Google Map-Pack 3-Pack Takeover',
              desc: 'Structured schema, citation networks, geo-coordinate tagging, and algorithmic review velocity.',
            },
            {
              icon: Globe,
              title: 'Custom Web Solutions',
              subtitle: 'Sub-Second Edge Infrastructure',
              desc: 'React 19, zero-bloat Tailwind, and global edge CDN hosting for instant page loads and zero layout shifts.',
            },
            {
              icon: Cpu,
              title: 'Generative Search (GEO)',
              subtitle: 'AI Overviews & Gemini Positioning',
              desc: 'Semantic entity graphs and Schema.org microdata ensuring AI search models cite your business first.',
            },
            {
              icon: TrendingUp,
              title: 'Lead Capture Funnels',
              subtitle: 'Frictionless WhatsApp Conversion',
              desc: 'GA4 analytics integration paired with instant click-to-chat routing to convert mobile visitors instantly.',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-white/10 hover:border-[#B8860B]/60 rounded-xl p-6 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 border border-[#B8860B]/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <pillar.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-xs text-[#B8860B] font-semibold mb-3">{pillar.subtitle}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>

              <a
                href="/services"
                onClick={(e) => handleNav('/services', e)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B] mt-6 hover:underline"
              >
                <span>Read Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Conversion Architecture */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Conversion Architecture
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Why Traditional Websites Fail in Hermanus
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Standard web agencies build generic WordPress templates weighed down by 30+ plugins, slow database
              queries, and disconnected email forms.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We engineer custom edge architectures. Every asset is pre-rendered, minified, and deployed onto global
              edge nodes. When someone in Hermanus searches for your services, your interface renders in milliseconds.
            </p>

            <div className="pt-2">
              <a
                href="/pricing"
                onClick={(e) => handleNav('/pricing', e)}
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-6 py-3.5 rounded-md text-xs transition-colors"
              >
                <span>View Transparent Scope Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-2">
              <Zap className="w-5 h-5 text-[#B8860B]" />
              <h3 className="text-sm font-bold text-white">Edge Load Latency</h3>
              <p className="text-xs text-zinc-400">
                Sub-800ms Time-to-First-Byte on South African mobile networks. Zero plugin execution overhead.
              </p>
            </div>
            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-2">
              <BarChart3 className="w-5 h-5 text-[#B8860B]" />
              <h3 className="text-sm font-bold text-white">GA4 & GTM Telemetry</h3>
              <p className="text-xs text-zinc-400">
                Precision tracking on phone clicks, WhatsApp chats, and route inquiries without third-party cookie bloat.
              </p>
            </div>
            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-2">
              <Code2 className="w-5 h-5 text-[#B8860B]" />
              <h3 className="text-sm font-bold text-white">Entity-Based Schema</h3>
              <p className="text-xs text-zinc-400">
                JSON-LD microdata tying your Sandbaai/Hermanus business directly to Google Knowledge Graph nodes.
              </p>
            </div>
            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-2">
              <Layers className="w-5 h-5 text-[#B8860B]" />
              <h3 className="text-sm font-bold text-white">Zero Clutter UX</h3>
              <p className="text-xs text-zinc-400">
                Single-purpose call actions eliminating friction and routing high-value prospects immediately into conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Audit Banner CTA */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-950 border border-[#B8860B]/40 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Complimentary Technical Teardown
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to claim your spot in the Hermanus Map-Pack?
            </h3>
            <p className="text-sm text-zinc-400">
              Submit your business name and website for a detailed audit of your Google Business Profile,
              mobile speed, and local citation gaps within 24 hours.
            </p>
          </div>

          <a
            href="/audit"
            onClick={(e) => handleNav('/audit', e)}
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-7 py-4 rounded-md text-sm transition-colors whitespace-nowrap shrink-0"
          >
            <span>Run Free SEO Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
