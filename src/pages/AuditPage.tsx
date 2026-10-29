/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface AuditPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function AuditPage({ onNavigate }: AuditPageProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    town: 'Hermanus',
    challenge: 'Invisible on Google Maps',
    popiaConsent: false,
  });

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.popiaConsent) return;

    const text = encodeURIComponent(
      `Hi Touch Base Consulting, I'd like to request a Free Digital Presence Audit.\n\n` +
        `Business: ${formData.businessName}\n` +
        `Website: ${formData.websiteUrl || 'None yet'}\n` +
        `Location: ${formData.town}\n` +
        `Primary Challenge: ${formData.challenge}\n` +
        `POPIA Consent: Confirmed`
    );

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'audit_request_submitted',
        business_town: formData.town,
        primary_challenge: formData.challenge,
      });
    }

    window.open(`${SITE_CONFIG.whatsappBaseUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead currentRoute="/audit" />

      <div className="py-16 md:py-24 bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Overberg Search Diagnostics</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Free Local SEO & <span className="text-[#B8860B]">Speed Audit</span>
              </h1>

              <p className="text-zinc-300 text-base leading-relaxed">
                Find out exactly why competitors are outranking you in the Hermanus Google Map-Pack and how much mobile traffic your current website is losing due to slow load times.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h2 className="text-base font-bold text-white">What We Inspect:</h2>
                <ul className="space-y-3 text-sm text-zinc-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Google Business Profile Authority:</strong> Primary category match, NAP consistency, and review velocity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Mobile Lighthouse Performance:</strong> First Contentful Paint (FCP), Largest Contentful Paint (LCP), and render-blocking scripts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Agentic Browsing & Schema:</strong> Structured JSON-LD readability for Google Search and AI assistants.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleAuditSubmit}
                className="p-8 rounded-2xl bg-zinc-950 border border-white/15 space-y-5 shadow-2xl"
              >
                <h2 className="text-xl font-bold text-white">Request Your Diagnostic Report</h2>

                <div>
                  <label htmlFor="auditBusiness" className="block text-xs font-medium text-zinc-300 mb-1">
                    Business Name *
                  </label>
                  <input
                    id="auditBusiness"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g., Walker Bay Bistro"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div>
                  <label htmlFor="auditUrl" className="block text-xs font-medium text-zinc-300 mb-1">
                    Current Website URL (Optional)
                  </label>
                  <input
                    id="auditUrl"
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="e.g., www.mybusiness.co.za"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="auditTown" className="block text-xs font-medium text-zinc-300 mb-1">
                      Town / Area
                    </label>
                    <select
                      id="auditTown"
                      value={formData.town}
                      onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                    >
                      <option value="Hermanus">Hermanus</option>
                      <option value="Sandbaai">Sandbaai</option>
                      <option value="Onrus">Onrus / Vermont</option>
                      <option value="Stanford">Stanford</option>
                      <option value="Gansbaai">Gansbaai</option>
                      <option value="Caledon / Overberg">Caledon / Other Overberg</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="auditChallenge" className="block text-xs font-medium text-zinc-300 mb-1">
                      Primary Bottleneck
                    </label>
                    <select
                      id="auditChallenge"
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#B8860B]"
                    >
                      <option value="Invisible on Google Maps">Invisible on Google Maps</option>
                      <option value="Slow Mobile Website">Slow Mobile Website</option>
                      <option value="Need a New Website">Need a New Website</option>
                      <option value="Low Lead Conversions">Not Enough WhatsApp Leads</option>
                    </select>
                  </div>
                </div>

                {/* POPIA Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.popiaConsent}
                      onChange={(e) => setFormData({ ...formData, popiaConsent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#B8860B] accent-[#B8860B]"
                    />
                    <span className="text-xs text-zinc-300 leading-normal">
                      I consent to {SITE_CONFIG.name} processing my business details to compile my digital audit in accordance with the{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('/privacy')}
                        className="text-[#B8860B] underline hover:text-white"
                      >
                        POPIA Privacy Policy
                      </button>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.popiaConsent || !formData.businessName.trim()}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#B8860B] text-black font-bold text-sm hover:bg-[#9a7009] disabled:opacity-50 transition"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Send Audit Request via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
