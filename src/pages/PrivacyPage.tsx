import React from 'react';
import type { AppRoute } from '../types/seo';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../config/site';

interface PrivacyPageProps {
  onNavigate: (route: AppRoute) => void;
}

export default function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <>
      <SEOHead currentRoute="/privacy" />
      <div className="py-16 md:py-24 px-6 bg-black text-white min-h-screen">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-zinc-300 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy (POPIA Compliance)
          </h1>
          <p className="text-xs text-zinc-400">Effective Date: October 2026</p>

          <p>
            {SITE_CONFIG.name} ("we", "our", or "us"), located at {SITE_CONFIG.address.formatted}, is committed to protecting your privacy in full compliance with the Protection of Personal Information Act, Act 4 of 2013 (POPIA) of South Africa.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            We collect business names, contact names, email addresses, telephone numbers, and website URLs voluntarily submitted through our strategy booking intake (`/book`), SEO audit forms (`/audit`), and direct WhatsApp communications.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Purpose of Processing</h2>
          <p>
            Your information is used strictly to conduct local SEO diagnostics, schedule requested consultations, manage Google Business Profile optimizations, and deliver contracted web development services.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Information Officer & Contact</h2>
          <p>
            For any POPIA data access, correction, or deletion requests, contact our studio at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#B8860B] underline">
              {SITE_CONFIG.email}
            </a>{' '}
            or call {SITE_CONFIG.phoneDisplay}.
          </p>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-white/20 text-white text-xs font-semibold hover:bg-zinc-800"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
