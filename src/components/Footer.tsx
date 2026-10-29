import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import type { AppRoute } from '../types/seo';
import { SITE_CONFIG } from '../config/site';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="bg-zinc-950 border-t border-white/10 text-zinc-300"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Column 1: Brand & GBP Verification */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center font-extrabold text-black text-xs">
              TB
            </div>
            <span className="font-bold text-lg text-white" itemProp="name">
              {SITE_CONFIG.name}
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
            Local SEO & Sub-Second Web Engineering Studio in Sandbaai, Hermanus. Built for Google Map-Pack dominance and automated WhatsApp lead conversion across the Overberg.
          </p>
          <div className="pt-1">
            <a
              href={SITE_CONFIG.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="hasMap"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B] hover:underline"
            >
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Verified Google Business Profile</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="lg:col-span-3 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white">
            Platform Routes
          </h2>
          <ul className="space-y-2 text-xs">
            <li>
              <button type="button" onClick={() => onNavigate('/')} className="hover:text-[#B8860B] transition">
                Home Overview
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('/services')} className="hover:text-[#B8860B] transition">
                Web & Local SEO Services
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('/pricing')} className="hover:text-[#B8860B] transition">
                Visibility Incubation Tiers
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('/audit')} className="hover:text-[#B8860B] transition">
                Free Local Presence Audit
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('/book')} className="hover:text-[#B8860B] transition">
                Book Strategy Session
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('/contact')} className="hover:text-[#B8860B] transition">
                Contact Studio
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Official Studio NAP & Operating Hours */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white">
            Physical Location & NAP
          </h2>
          <div className="space-y-2.5 text-xs">
            <div
              className="flex items-start gap-2.5"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span itemProp="streetAddress">61 De Villiers Street, Sandbaai</span>,{' '}
                <span itemProp="addressLocality">Hermanus</span>,{' '}
                <span itemProp="addressRegion">Western Cape</span>,{' '}
                <span itemProp="postalCode">7200</span>,{' '}
                <span itemProp="addressCountry">South Africa</span>
                <div className="mt-0.5">
                  <a
                    href={SITE_CONFIG.gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8860B] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                itemProp="telephone"
                className="text-white hover:text-[#B8860B] font-medium"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                itemProp="email"
                className="text-white hover:text-[#B8860B] font-medium break-all"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-white font-medium">{SITE_CONFIG.hours.regular}</p>
                <p className="text-zinc-400 text-[11px]">{SITE_CONFIG.hours.weekendNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => onNavigate('/privacy')} className="hover:text-white transition">
              Privacy Policy (POPIA)
            </button>
            <button type="button" onClick={() => onNavigate('/terms')} className="hover:text-white transition">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
