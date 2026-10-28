// app/pricing/page.tsx
"use client";

import React from "react";
import {
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  Clock,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";

const WHATSAPP_URL_BASE = "https://wa.me/27750908984";
const GBP_URL = "https://maps.app.goo.gl/vTgbRAoKkY9g1YcQA";

interface PricingTier {
  name: string;
  subtitle: string;
  priceRange: string;
  commitment: string;
  popular?: boolean;
  features: string[];
  whatsappText: string;
}

const VISIBILITY_TIERS: PricingTier[] = [
  {
    name: "The Starter",
    subtitle: "Basic / Single Page Site",
    priceRange: "R380 – R400 / mo",
    commitment: "6-Month Visibility Incubation Term",
    features: [
      "Basic single-page conversion landing page",
      "Google Business Profile (GBP) optimization",
      "Direct WhatsApp lead capture button",
      "Mobile-first edge deployment",
    ],
    whatsappText: "Hi, I'm interested in The Starter package (~R380-R400/mo) for my business.",
  },
  {
    name: "The Authority",
    subtitle: "Pro / Multi-Page Site",
    priceRange: "R600 – R650 / mo",
    commitment: "6-Month Visibility Incubation Term",
    popular: true,
    features: [
      "Multi-page professional trust architecture",
      "Interactive photo & project gallery",
      "Automated review collection engine",
      "2x Monthly Google Business Profile posts",
    ],
    whatsappText: "Hi, I'm interested in The Authority package (~R600-R650/mo) for my business.",
  },
  {
    name: "The Dominator",
    subtitle: "Pro / Multi-Page Advanced",
    priceRange: "R950+ / mo",
    commitment: "6-Month Visibility Incubation Term",
    features: [
      "Comprehensive multi-page custom web build",
      "Visual brand and UI/UX refreshes",
      "Competitor intelligence & tracking",
      "Strategic GA4 & GTM analytics setup",
    ],
    whatsappText: "Hi, I'm interested in The Dominator package (R950+/mo) for my business.",
  },
];

const MODULAR_ADDONS = [
  { name: "The Review Engine", price: "+R100 / mo", desc: "Automated 'Thank You' link strategy to drive 5-star Google reviews." },
  { name: "SEO Authority Posts", price: "+R150 / mo", desc: "2x keyword-optimized Google Business Profile updates." },
  { name: "Visual Refresh", price: "+R100 / mo", desc: "1x custom Canva graphic or promotional banner update per month." },
  { name: "The Data Deep-Dive", price: "+R150 / mo", desc: "Advanced keyword analysis and competitor 'shadow' reporting." },
  { name: "The Lead Magnet Build", price: "R300 once-off", desc: "Custom PDF guide creation (e.g., local visitor/buyer guides)." },
  { name: "Guardian Plan", price: "+R250 / mo", desc: "Long-term maintenance and security tier for post-6-month retention." },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#B8860B] selection:text-black">
      {/* Header Section */}
      <section className="py-20 px-6 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment & Growth Tiers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Predictable Pricing for <span className="text-[#B8860B]">Overberg Dominance</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a visibility incubation tier engineered to establish local search authority, drive map-pack rankings, and convert traffic into booked revenue.
          </p>
        </div>
      </section>

      {/* Ad-Hoc Hourly Consulting Banner */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-950 border border-white/15 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#B8860B]/15 border border-[#B8860B] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Ad-Hoc Technical & Strategy Consulting</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Standard hourly consulting for specialized web development, code reviews, and digital strategy audits.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-extrabold text-[#B8860B]">R500 – R850</span>
            <span className="text-xs text-zinc-400 block">per hour</span>
          </div>
        </div>
      </section>

      {/* Visibility Incubation Tiers Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Monthly Retainers</p>
          <h2 className="text-3xl font-bold tracking-tight">Visibility Incubation Tiers</h2>
          <p className="text-sm text-zinc-400">
            All introductory packages operate on a 6-month minimum term to ensure proper local SEO maturation and sustainable map-pack placement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {VISIBILITY_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-zinc-950 border rounded-2xl p-8 flex flex-col justify-between transition-all ${
                tier.popular
                  ? "border-[#B8860B] shadow-2xl shadow-[#B8860B]/10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#120f04]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B8860B] text-black font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{tier.subtitle}</p>
                </div>

                <div className="border-t border-b border-white/10 py-4">
                  <div className="text-3xl font-extrabold text-[#B8860B]">{tier.priceRange}</div>
                  <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#B8860B]" />
                    <span>{tier.commitment}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-zinc-300">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent(tier.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-md transition-all text-sm ${
                    tier.popular
                      ? "bg-[#B8860B] hover:bg-[#9a7009] text-black shadow-lg"
                      : "bg-zinc-900 hover:bg-zinc-800 border border-white/20 text-white"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Select {tier.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke Enterprise Tier */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="bg-zinc-950 border border-white/15 rounded-2xl p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-2 text-[#B8860B] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>High-Ceiling & Multi-Location Scaling</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold">Strategic Partner Tier</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Designed for larger firms, multi-location brands, or established enterprises requiring advanced custom workflows, multi-agent automations, and dedicated priority support.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0 bg-black/50 border border-white/10 p-4 rounded-xl">
              <span className="text-lg font-bold text-white block">R5,000 – R15,000</span>
              <span className="text-xs text-zinc-400 block">Setup Fee + R1,500 / mo retainer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Add-Ons Menu */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Customization Menu</p>
          <h2 className="text-3xl font-bold tracking-tight">Modular Add-Ons & Enhancements</h2>
          <p className="text-sm text-zinc-400">
            Customize your growth package or stack additional growth engines during monthly reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULAR_ADDONS.map((addon, idx) => (
            <div key={idx} className="bg-zinc-950 border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white">{addon.name}</h3>
                  <span className="text-xs font-bold text-[#B8860B] bg-[#B8860B]/10 px-2 py-1 rounded border border-[#B8860B]/30">
                    {addon.price}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{addon.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Business Profile Trust Verification Bar */}
      <section className="py-16 px-6 bg-zinc-950 border-t border-b border-white/10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <ShieldCheck className="w-10 h-10 text-[#B8860B] mx-auto" />
          <h2 className="text-2xl font-bold">Verified Local Authority</h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            All official pricing tiers, live client reviews, and operating hours can also be verified directly on our verified Google Business Profile.
          </p>
          <div className="pt-2">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-md transition-all text-xs"
            >
              <span>View Official Listing on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-[#B8860B]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
