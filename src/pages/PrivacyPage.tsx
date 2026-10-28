/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import type { AppRoute, PageSEO } from '../types/seo';
import SEOHead from '../components/SEOHead';

const privacySEO: PageSEO = {
  title: 'Privacy Policy (POPIA) | Touch Base Consulting',
  description:
    'Protection of Personal Information Act (POPIA) compliance and data privacy policy for Touch Base Consulting in Sandbaai, Hermanus.',
  canonicalPath: '/privacy',
};

interface PrivacyPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const lastUpdated = 'October 28, 2026';

  const handleNav = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] py-20 px-6 font-sans selection:bg-[#B8860B] selection:text-black">
      <SEOHead seo={privacySEO} />
      <div className="max-w-4xl mx-auto space-y-10">
        <a
          href="/"
          onClick={(e) => handleNav('/', e)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8860B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <header className="border-b border-white/10 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B] text-xs font-medium uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>POPIA Act 4 of 2013 Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy & <span className="text-[#B8860B]">POPIA Notice</span>
          </h1>
          <p className="text-xs text-zinc-400">Effective & Last Updated: {lastUpdated}</p>
        </header>

        <section className="space-y-8 text-sm text-zinc-300 leading-relaxed">
          {/* 1. Responsible Party */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#B8860B]" />
              <span>1. Responsible Party</span>
            </h2>
            <p>
              In accordance with the <strong>Protection of Personal Information Act, 2013 (Act No. 4 of 2013) ("POPIA")</strong>, the Responsible Party for processing all personal and business information collected via this website is:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1 pt-1">
              <li><strong>Entity:</strong> Touch Base Consulting — Local SEO & Web Solutions</li>
              <li><strong>Physical Address:</strong> 61 De Villiers Street, Sandbaai, Hermanus, Western Cape, 7200, South Africa</li>
              <li><strong>Email:</strong> <a href="mailto:Customerservice@touchbaseconsulting.co.za" className="text-[#B8860B] hover:underline">Customerservice@touchbaseconsulting.co.za</a></li>
              <li><strong>Phone / WhatsApp:</strong> <a href="tel:+27750908984" className="text-[#B8860B] hover:underline">+27 75 090 8984</a></li>
            </ul>
          </div>

          {/* 2. Data Collected */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#B8860B]" />
              <span>2. Personal & Business Data Collected</span>
            </h2>
            <p>We only collect minimum, relevant information voluntarily submitted by you or required for diagnostic telemetry:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li><strong>Business Details:</strong> Registered or trading business name and current website URL.</li>
              <li><strong>Contact Identifiers:</strong> Mobile / WhatsApp phone number and email address.</li>
              <li><strong>Analytics Telemetry:</strong> Anonymized browser interaction metrics via Google Tag Manager (<code>GTM-KX28WTJJ</code>) and Google Analytics 4 (<code>G-X5FXLBDMW7</code>).</li>
            </ul>
          </div>

          {/* 3. Purpose of Collection */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">3. Purpose of Collection (POPIA Section 13)</h2>
            <p>Your information is collected and processed strictly for the following explicit, lawful purposes:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>Executing requested Local SEO and Google Business Profile technical audits.</li>
              <li>Delivering digital marketing consultations, conversion rate optimization (CRO) briefs, and custom web development proposals.</li>
              <li>Communicating audit findings and project updates via direct WhatsApp or email channels.</li>
            </ul>
          </div>

          {/* 4. Data Security & Storage */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B8860B]" />
              <span>4. Data Security & Storage (POPIA Section 19)</span>
            </h2>
            <p>
              Client data is transmitted over TLS/HTTPS encryption and stored securely via encrypted PostgreSQL database protocols (Supabase with Row Level Security enforced). Touch Base Consulting <strong>never sells, trades, rents, or shares</strong> your personal or business contact data with third-party marketing brokers.
            </p>
          </div>

          {/* 5. Data Subject Rights */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">5. Your Rights as a Data Subject (POPIA Sections 23–25)</h2>
            <p>You hold the statutory right to:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>Request confirmation and a copy of all personal records held about you or your business.</li>
              <li>Request immediate correction, updating, or permanent deletion of your personal data.</li>
              <li>Withdraw prior processing consent at any time.</li>
            </ul>
            <div className="pt-3 flex flex-wrap gap-4 text-xs">
              <a
                href="mailto:Customerservice@touchbaseconsulting.co.za?subject=POPIA%20Data%20Request"
                className="inline-flex items-center gap-2 bg-[#B8860B] text-black font-bold px-4 py-2.5 rounded-md"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Data Access / Deletion Request</span>
              </a>
              <a
                href="tel:+27750908984"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2.5 rounded-md hover:border-[#B8860B]"
              >
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>+27 75 090 8984</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
