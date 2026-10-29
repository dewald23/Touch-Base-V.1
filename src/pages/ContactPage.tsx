/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    popiaConsent: false,
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.popiaConsent) return;

    const text = encodeURIComponent(
      `Hi Touch Base Consulting,\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nInquiry: ${contactForm.message}`
    );

    window.open(`${SITE_CONFIG.whatsappBaseUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead currentRoute="/contact" />

      <div className="py-16 md:py-24 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold uppercase tracking-wider">
              <span>Sandbaai Studio & Advisory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Physical Location & <span className="text-[#B8860B]">Direct Contact</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Connect with {SITE_CONFIG.name} for local SEO consultations, custom web engineering, or Google Business Profile management in Hermanus.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Official NAP Card */}
            <div className="lg:col-span-5 bg-zinc-950 border border-white/15 rounded-2xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">Physical Location & NAP</h2>
              <p className="text-sm font-bold text-[#B8860B]">{SITE_CONFIG.name}</p>

              <div className="space-y-5 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Studio Address:</p>
                    <p className="mt-0.5 leading-relaxed">{SITE_CONFIG.address.formatted}</p>
                    <a
                      href={SITE_CONFIG.gbpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:underline mt-2"
                    >
                      <span>Get Google Maps Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Telephone / WhatsApp:</p>
                    <a
                      href={`tel:${SITE_CONFIG.phoneE164}`}
                      className="text-zinc-200 hover:text-[#B8860B] transition block mt-0.5"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Customer Service Email:</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-zinc-200 hover:text-[#B8860B] transition break-all block mt-0.5"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Operating Studio Hours:</p>
                    <p className="text-zinc-200 mt-0.5">{SITE_CONFIG.hours.regular}</p>
                    <p className="text-xs text-zinc-400 mt-1">{SITE_CONFIG.hours.weekendNote}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onNavigate('/book')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#B8860B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#9a7009] transition"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Schedule Online Appointment</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="lg:col-span-7 bg-zinc-950 border border-white/15 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send a Direct Studio Inquiry</h2>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-medium text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-medium text-zinc-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="you@company.co.za"
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-medium text-zinc-300 mb-1">
                    Project Brief or Question *
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your website, Google Business Profile, or local SEO goals..."
                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={contactForm.popiaConsent}
                    onChange={(e) => setContactForm({ ...contactForm, popiaConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#B8860B] accent-[#B8860B]"
                  />
                  <span className="text-xs text-zinc-300">
                    I consent to {SITE_CONFIG.name} processing my contact information in compliance with South Africa's POPIA Act 4 of 2013.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!contactForm.popiaConsent}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#B8860B] text-black font-bold text-sm hover:bg-[#9a7009] disabled:opacity-50 transition"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Transmit via WhatsApp Studio Line</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
