/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Handshake,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageSquare,
  ArrowUpRight,
  ArrowUp,
  Check,
  Copy,
  Scale,
  FileCheck2,
} from "lucide-react";
import type { AppRoute } from "../types/seo";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialProfile {
  name: "Facebook" | "Instagram" | "LinkedIn";
  href: string;
  handle: string;
}

const GBP_URL =
  "https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS";
const WHATSAPP_URL =
  "https://wa.me/27750908984?text=Hi%20Touch%20Base%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20Local%20SEO%20and%20Web%20Solutions.";
const CONTACT_EMAIL = "Customerservice@touchbaseconsulting.co.za";
const CONTACT_PHONE_DISPLAY = "+27 75 090 8984";
const CONTACT_PHONE_HREF = "tel:+27750908984";

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/touchbaseconsulting23",
    handle: "@touchbaseconsulting23",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tb_consulting23/",
    handle: "@tb_consulting23",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/touchbaseconsulting23/",
    handle: "in/touchbaseconsulting23",
  },
];

const NAVIGATION_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Core Services", href: "/services" },
  { label: "Transparent Pricing", href: "/pricing" },
  { label: "Free Local SEO Audit", href: "/audit" },
  { label: "Contact Studio", href: "/contact" },
];

const SERVICE_PILLARS: FooterLink[] = [
  { label: "Custom React & Next.js Builds", href: "/services#web-dev" },
  { label: "Local SEO & Map-Pack Dominance", href: "/services#local-seo" },
  { label: "Generative Engine Optimization (GEO)", href: "/services#geo-ai" },
  { label: "WhatsApp Lead Capture Funnels", href: "/services#cro-funnels" },
  { label: "Official GBP Pricing Tiers", href: GBP_URL, external: true },
];

const SERVICE_AREAS: string[] = [
  "Sandbaai",
  "Hermanus",
  "Onrus & Vermont",
  "Stanford",
  "Gansbaai",
  "Caledon",
  "Greater Overberg",
  "Western Cape",
];

function SocialBrandIcon({ name }: { name: SocialProfile["name"] }) {
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
  }
}

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        window.location.href = `mailto:${CONTACT_EMAIL}`;
      }
    } catch (err) {
      console.warn("Clipboard access blocked; falling back to mailto:", err);
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const handleNav = (targetHref: string, e: React.MouseEvent) => {
    if (
      targetHref.startsWith("http") ||
      targetHref.startsWith("mailto") ||
      targetHref.startsWith("tel")
    ) {
      return;
    }

    e.preventDefault();

    // Check if link includes an in-page anchor hash
    const [path, hash] = targetHref.split("#");
    const baseRoute = (path || "/") as AppRoute;

    onNavigate(baseRoute);

    if (hash) {
      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const entityJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Touch Base Consulting",
    description: "Local SEO & Web Solutions in Hermanus and the Overberg region.",
    url: "https://touchbaseconsulting.co.za",
    telephone: "+27750908984",
    email: CONTACT_EMAIL,
    priceRange: "R500/hr",
    hasMap: GBP_URL,
    sameAs: [GBP_URL, ...SOCIAL_PROFILES.map((profile) => profile.href)],
    address: {
      "@type": "PostalAddress",
      streetAddress: "61 De Villiers Street, Sandbaai",
      addressLocality: "Hermanus",
      addressRegion: "Western Cape",
      postalCode: "7200",
      addressCountry: "ZA",
    },
    areaServed: SERVICE_AREAS,
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-[#000000] text-[#FFFFFF] border-t border-white/10 font-sans selection:bg-[#B8860B] selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entityJsonLd) }}
      />

      {/* Pre-Footer High-Intent Conversion Strip */}
      <div className="border-b border-white/10 bg-gradient-to-r from-zinc-950 via-[#0a0802] to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
              Ready to Scale Your Local Visibility?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Turn Overberg Search Traffic Into Booked Clients.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <a
              href="/audit"
              onClick={(e) => handleNav("/audit", e)}
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold text-sm px-6 py-3.5 rounded-md transition-all shadow-lg shadow-[#B8860B]/10"
            >
              <span>Request Free SEO Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/15 hover:border-[#B8860B] text-white font-semibold text-sm px-6 py-3.5 rounded-md transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#B8860B]" />
              <span>WhatsApp +27 75 090 8984</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Architectural Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-5">
          <a
            href="/"
            onClick={(e) => handleNav("/", e)}
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 border border-[#B8860B] flex items-center justify-center">
              <Handshake className="w-6 h-6 text-[#B8860B] transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight block leading-none text-white">
                TOUCH BASE CONSULTING
              </span>
              <span className="text-[11px] tracking-widest text-[#B8860B] uppercase font-semibold block mt-1">
                Local SEO & Web Solutions
              </span>
            </div>
          </a>

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Custom high-speed React & Next.js web engineering, Google Business
            Profile map-pack optimization, and POPIA-secured lead capture funnels
            built in Hermanus for ambitious South African brands.
          </p>

          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              Connect Across Platforms
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIAL_PROFILES.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-950 border border-white/15 hover:border-[#B8860B] text-xs font-medium text-zinc-200 hover:text-[#B8860B] transition-all group"
                >
                  <span className="text-[#B8860B] group-hover:scale-110 transition-transform">
                    <SocialBrandIcon name={social.name} />
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Overberg & Western Cape Coverage
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-[11px] text-zinc-300 bg-zinc-900/90 border border-white/10 px-2.5 py-0.5 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <nav className="lg:col-span-2 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Navigation</p>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNav(item.href, e)}
                  className="hover:text-[#B8860B] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all text-[#B8860B]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-3 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Solutions & Pricing</p>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            {SERVICE_PILLARS.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  target={service.external ? "_blank" : undefined}
                  rel={service.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => !service.external && handleNav(service.href, e)}
                  className="hover:text-[#B8860B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{service.label}</span>
                  {service.external && <ExternalLink className="w-3 h-3 text-[#B8860B] shrink-0" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3.5 rounded-lg bg-zinc-950 border border-white/15 hover:border-[#B8860B] transition-all group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-[#B8860B]">
                <span>Official Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8860B]" />
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Verify our consulting rates, service tiers & local reviews on Google Maps.
              </p>
            </a>
          </div>
        </nav>

        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Direct Studio Channels</p>
          <address className="not-italic space-y-3 text-xs text-zinc-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>61 De Villiers Street, Sandbaai,<br />Hermanus, Western Cape, 7200</span>
            </div>
            <a href={CONTACT_PHONE_HREF} className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors font-medium text-white">
              <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
            <div className="space-y-1.5">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors break-all text-white font-medium">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-[#B8860B] bg-zinc-900 border border-white/10 px-2.5 py-1 rounded cursor-pointer transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#B8860B]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </address>
        </div>
      </div>

      {/* Highlighted Legal Bar */}
      <div className="border-t border-white/15 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
            <span>© {currentYear} Touch Base Consulting. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/40 text-[#B8860B] text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>POPIA Act 4 of 2013 Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/privacy"
              onClick={(e) => handleNav("/privacy", e)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-black border border-white/20 hover:border-[#B8860B] text-xs font-semibold text-white hover:text-[#B8860B] transition-all"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Privacy Policy (POPIA)</span>
            </a>
            <a
              href="/terms"
              onClick={(e) => handleNav("/terms", e)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-black border border-white/20 hover:border-[#B8860B] text-xs font-semibold text-white hover:text-[#B8860B] transition-all"
            >
              <Scale className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Terms of Service</span>
            </a>
            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-zinc-900 border border-white/15 hover:border-[#B8860B] text-[#B8860B] transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
