/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent, type MouseEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const WHATSAPP_NUMBER = '27750908984';
const OFFICIAL_GBP_URL =
  'https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS';
const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=61+De+Villiers+Street+Sandbaai+Hermanus+7200';

const contactSEO: PageSEO = {
  title: 'Contact Studio & Direct WhatsApp | Touch Base Consulting',
  description:
    'Connect directly with our local SEO & web studio in Sandbaai, Hermanus. Schedule a discovery call, request directions, or chat instantly via WhatsApp (+27 75 090 8984).',
  canonicalPath: '/contact',
  keywords: [
    'Contact Touch Base Consulting',
    'Local SEO Hermanus Phone',
    'Web Studio Sandbaai',
    'WhatsApp Web Agency Overberg',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Touch Base Consulting',
    url: 'https://touchbaseconsulting.co.za/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Touch Base Consulting',
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
      openingHours: 'Mo-Fr 08:00-17:00',
      sameAs: [OFFICIAL_GBP_URL],
    },
  },
};

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [popiaConsent, setPopiaConsent] = useState(false);
  const [status, setStatus] = useState<{
    state: 'idle' | 'submitting' | 'success' | 'error';
    msg: string;
  }>({
    state: 'idle',
    msg: '',
  });

  const handleNavClick = (route: AppRoute, e: MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ state: 'submitting', msg: '' });

    try {
      const trimmedName = name.trim();
      const trimmedPhone = phone.trim();
      const trimmedMsg = message.trim();

      if (trimmedName.length < 2) {
        throw new Error('Please enter a valid name (at least 2 characters).');
      }

      const phoneRegex = /^[+0-9\s\-()]{8,18}$/;
      if (!phoneRegex.test(trimmedPhone)) {
        throw new Error('Please enter a valid contact number (e.g. +27 75 090 8984).');
      }

      if (trimmedMsg.length < 5) {
        throw new Error('Please enter a brief message describing your inquiry.');
      }

      if (!popiaConsent) {
        throw new Error('Please confirm POPIA consent to submit your inquiry.');
      }

      // Record conversion telemetry in dataLayer
      const windowWithDataLayer = window as unknown as { dataLayer?: Record<string, unknown>[] };
      if (typeof window !== 'undefined' && windowWithDataLayer.dataLayer) {
        windowWithDataLayer.dataLayer.push({
          event: 'contact_form_submit',
          contact_name: trimmedName,
        });
      }

      const dispatchMessage = `Hi Touch Base, I'm reaching out through your Contact page.\n\n• Name: ${trimmedName}\n• Contact Number: ${trimmedPhone}\n• Inquiry: ${trimmedMsg}\n• POPIA Consent: Granted`;

      setStatus({
        state: 'success',
        msg: 'Inquiry prepared. Opening direct WhatsApp connection with our studio...',
      });

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dispatchMessage)}`;
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : 'Unable to dispatch. Please use the WhatsApp button below.';
      setStatus({ state: 'error', msg: errorMsg });
    }
  };

  return (
    <div>
      <SEOHead seo={contactSEO} />

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            Sandbaai Studio · Hermanus & Overberg
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Direct Access to Our Technical Studio
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Have a question about Google Map-Pack rankings, custom React architecture, or website speed?
            Connect directly with our engineering team in person or via WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Direct Studio Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* NAP Studio Card */}
            <div className="bg-zinc-950 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
                  Physical Location & NAP
                </span>
                <h2 className="text-xl font-bold text-white">Touch Base Consulting</h2>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Studio Address:</strong>
                    <span>61 De Villiers Street, Sandbaai, Hermanus, Western Cape, 7200, South Africa</span>
                    <div className="pt-2">
                      <a
                        href={MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#B8860B] hover:underline font-semibold"
                      >
                        <span>Get Google Maps Directions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Phone className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Telephone / WhatsApp:</strong>
                    <a href="tel:+27750908984" className="hover:text-[#B8860B] transition-colors">
                      +27 75 090 8984
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Mail className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Customer Service Email:</strong>
                    <a
                      href="mailto:Customerservice@touchbaseconsulting.co.za"
                      className="hover:text-[#B8860B] transition-colors"
                    >
                      Customerservice@touchbaseconsulting.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Operating Studio Hours:</strong>
                    <span>Monday – Friday: 08:00 – 17:00 SAST</span>
                    <span className="block text-zinc-500 text-[11px] mt-0.5">
                      Emergency map ranking & server monitoring available on weekends.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Actions */}
            <div className="bg-black border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] block">
                Instant WhatsApp Channels
              </span>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'Book a Strategy Call',
                    text: 'Hi Touch Base, I would like to schedule a strategy call for my business.',
                  },
                  {
                    title: 'Request Pricing & Retainers',
                    text: 'Hi Touch Base, I visited your website and would like to review current service rates.',
                  },
                  {
                    title: 'Emergency Map-Pack Drop',
                    text: 'Hi Touch Base, our Google Business Profile dropped in ranking and we need diagnostic help.',
                  },
                ].map((act, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(act.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 rounded-lg border border-white/10 bg-zinc-950 hover:border-[#B8860B]/60 text-xs flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>{act.title}</span>
                    <MessageSquare className="w-4 h-4 text-[#B8860B] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Studio Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-950 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Send Studio Message</h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Connects directly to our technical desk via WhatsApp
                </p>
              </div>
              <ShieldCheck className="w-8 h-8 text-[#B8860B] shrink-0" />
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah van der Merwe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+27 75 090 8984"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  How can we help your business? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your business, website goals, or current Google Maps rankings..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-zinc-600"
                />
              </div>

              {/* POPIA Consent */}
              <div className="flex items-start gap-2.5 pt-2 text-xs text-zinc-400">
                <input
                  type="checkbox"
                  required
                  id="contact-popia"
                  checked={popiaConsent}
                  onChange={(e) => setPopiaConsent(e.target.checked)}
                  className="mt-0.5 accent-[#B8860B] rounded cursor-pointer w-4 h-4 shrink-0"
                />
                <label htmlFor="contact-popia" className="cursor-pointer leading-relaxed">
                  I consent to Touch Base Consulting processing my details to reply to this inquiry in accordance with the{' '}
                  <a
                    href="/privacy"
                    onClick={(e) => handleNavClick('/privacy', e)}
                    className="text-[#B8860B] underline hover:text-white"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="/terms"
                    onClick={(e) => handleNavClick('/terms', e)}
                    className="text-[#B8860B] underline hover:text-white"
                  >
                    Terms of Service
                  </a>
                  . *
                </label>
              </div>

              {status.state === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-950/40 border border-red-800/60 rounded-md p-3 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.msg}</span>
                </div>
              )}

              {status.state === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-md p-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{status.msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === 'submitting'}
                className="w-full bg-[#B8860B] hover:bg-[#9a7009] disabled:opacity-50 text-black font-bold py-4 rounded-md transition-colors text-sm cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                {status.state === 'submitting' ? (
                  <span>Preparing Dispatch...</span>
                ) : (
                  <>
                    <span>Send Message to WhatsApp Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-500 text-center pt-2">
                We respect your privacy. Inquiries are handled directly by our Sandbaai technical team.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
