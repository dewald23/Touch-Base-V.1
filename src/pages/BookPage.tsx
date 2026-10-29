/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface BookPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function BookPage({ onNavigate }: BookPageProps) {
  const [intakeData, setIntakeData] = useState({
    businessName: '',
    serviceInterest: 'Local SEO & Google Maps',
    popiaConsent: false,
  });

  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (!isUnlocked) return;
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: {
          branding: { brandColor: '#B8860B' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, [isUnlocked]);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intakeData.popiaConsent) return;

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'booking_intake_submitted',
        business_name: intakeData.businessName,
        service_interest: intakeData.serviceInterest,
        popia_compliant: true,
      });
    }

    setIsUnlocked(true);
  };

  return (
    <>
      <SEOHead currentRoute="/book" />

      <div className="py-16 md:py-24 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold uppercase tracking-wider mb-4">
              Direct Strategy Session
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Schedule Your <span className="text-[#B8860B]">Strategy Session</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Book a focused 30-minute discovery call to dissect your local search footprint, website performance, and digital lead pipeline across Hermanus and the Overberg.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Intake Details & Physical Studio NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#B8860B]" aria-hidden="true" />
                  <span>Session Structure</span>
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">30-Minute Targeted Review</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Conducted in-person at our Sandbaai studio, via Google Meet, or by phone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">Overberg Competitive Landscape</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        We analyze the top 3 competitors in your niche holding Google Map-Pack ranks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">Actionable Roadmap</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Walk away with clear steps on sub-second loading, citations, and local outreach.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pre-Booking Intake Form */}
                {!isUnlocked ? (
                  <form onSubmit={handleIntakeSubmit} className="pt-6 border-t border-white/10 space-y-4">
                    <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
                      Step 1: Brief Context
                    </h3>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-medium text-zinc-300 mb-1">
                        Business Name or Website
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        required
                        value={intakeData.businessName}
                        onChange={(e) => setIntakeData({ ...intakeData, businessName: e.target.value })}
                        placeholder="e.g., Hermanus Ocean Suites"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B] transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-medium text-zinc-300 mb-1">
                        Primary Focus Area
                      </label>
                      <select
                        id="serviceInterest"
                        value={intakeData.serviceInterest}
                        onChange={(e) => setIntakeData({ ...intakeData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B] transition"
                      >
                        <option value="Local SEO & Google Maps">Local SEO & Google Maps Ranking</option>
                        <option value="Sub-Second Web Development">High-Performance Web Engineering</option>
                        <option value="Digital Marketing & Lead Funnels">WhatsApp Lead Generation Funnels</option>
                        <option value="Comprehensive Digital Audit">Full Regional Presence Audit</option>
                      </select>
                    </div>

                    {/* POPIA Consent */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={intakeData.popiaConsent}
                          onChange={(e) => setIntakeData({ ...intakeData, popiaConsent: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#B8860B] accent-[#B8860B] focus:ring-0"
                        />
                        <span className="text-xs text-zinc-300 leading-normal">
                          I consent to Touch Base Consulting processing these details for the consultation in compliance with the{' '}
                          <button
                            type="button"
                            onClick={() => onNavigate('/privacy')}
                            className="text-[#B8860B] underline hover:text-white transition"
                          >
                            POPIA Act 4 of 2013
                          </button>.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!intakeData.popiaConsent || !intakeData.businessName.trim()}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#B8860B] text-black font-semibold text-sm hover:bg-[#9a7009] active:scale-95 disabled:opacity-50 transition"
                    >
                      <span>Select Meeting Slot</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </form>
                ) : (
                  <div className="pt-4 border-t border-white/10">
                    <div className="p-3 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#B8860B]">Brief Logged</p>
                        <p className="text-xs text-zinc-200">{intakeData.businessName}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsUnlocked(false)}
                        className="text-xs text-zinc-300 hover:text-white underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}

                {/* Physical Location & NAP Block */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                    Physical Location & NAP
                  </h3>

                  <div className="space-y-3 text-xs text-zinc-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-white">{SITE_CONFIG.name}</p>
                        <p>{SITE_CONFIG.address.formatted}</p>
                        <a
                          href={SITE_CONFIG.gbpUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#B8860B] hover:underline font-medium mt-1"
                        >
                          <span>Get Google Maps Directions</span>
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
                      <div>
                        <span className="text-zinc-400 block text-[11px]">Telephone / WhatsApp:</span>
                        <a href={`tel:${SITE_CONFIG.phoneE164}`} className="text-white hover:text-[#B8860B] font-medium">
                          {SITE_CONFIG.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
                      <div>
                        <span className="text-zinc-400 block text-[11px]">Customer Service Email:</span>
                        <a href={`mailto:${SITE_CONFIG.email}`} className="text-white hover:text-[#B8860B] font-medium break-all">
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="text-zinc-400 block text-[11px]">Operating Studio Hours:</span>
                        <p className="text-white font-medium">{SITE_CONFIG.hours.regular}</p>
                        <p className="text-zinc-400 text-[11px] mt-0.5">{SITE_CONFIG.hours.weekendNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Cal.com Embed */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-zinc-950 border border-white/10 p-4 sm:p-6 min-h-[620px] flex flex-col justify-center">
                {isUnlocked ? (
                  <Cal
                    calLink="touch-base-consulting/30min"
                    style={{ width: '100%', height: '100%', minHeight: '580px', overflow: 'scroll' }}
                    config={{ layout: 'month_view', theme: 'dark' }}
                  />
                ) : (
                  <div className="text-center py-16 px-4 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#B8860B]">
                      <Calendar className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Calendar Unlocks After Brief Intake</h2>
                    <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                      Complete Step 1 on the left with your business name and POPIA consent to open live consultation availability, or message us directly on{' '}
                      <a
                        href={SITE_CONFIG.whatsappBaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B8860B] underline hover:text-white"
                      >
                        WhatsApp ({SITE_CONFIG.phoneDisplay})
                      </a>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
