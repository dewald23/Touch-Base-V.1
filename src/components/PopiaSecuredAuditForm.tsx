"use client";

import React, { useState, FormEvent } from "react";
import { ShieldCheck, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import type { AppRoute } from '../types/seo';

interface LeadFormState {
  businessName: string;
  websiteUrl: string;
  serviceInterest: "local-seo" | "web-dev" | "geo-ai" | "cro-funnels";
  phone: string;
  popiaConsent: boolean;
}

interface SubmissionStatus {
  state: "idle" | "submitting" | "success" | "error";
  message: string;
}

const WHATSAPP_NUMBER = "27750908984";
const GBP_URL = "https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS";

interface AuditFormProps {
  onNavigate: (route: AppRoute) => void;
}

export function PopiaSecuredAuditForm({ onNavigate }: AuditFormProps) {
  const [formData, setFormData] = useState<LeadFormState>({
    businessName: "",
    websiteUrl: "",
    serviceInterest: "local-seo",
    phone: "",
    popiaConsent: false,
  });

  const [status, setStatus] = useState<SubmissionStatus>({
    state: "idle",
    message: "",
  });

  const handleAuditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ state: "submitting", message: "" });

    try {
      const trimmedName = formData.businessName.trim();
      const trimmedPhone = formData.phone.trim();

      if (trimmedName.length < 2) {
        throw new Error("Please enter a valid business name (at least 2 characters).");
      }

      const phoneRegex = /^[+0-9\s\-()]{8,16}$/;
      if (!phoneRegex.test(trimmedPhone)) {
        throw new Error("Please enter a valid contact number (e.g., +27 75 090 8984).");
      }

      // Hard POPIA Consent Gate: Block processing if unchecked
      if (!formData.popiaConsent) {
        throw new Error(
          "POPIA Compliance: Please check the consent box to allow us to process your audit details."
        );
      }

      let normalizedUrl = formData.websiteUrl.trim();
      if (normalizedUrl && !/^https?:\/\//i.test(normalizedUrl)) {
        normalizedUrl = `https://${normalizedUrl}`;
      }

      const consentTimestamp = new Date().toISOString();
      const auditMessage = [
        "Hi Touch Base, I'm requesting a Free Growth Audit.",
        `• Business: ${trimmedName}`,
        `• Website: ${normalizedUrl || "New Build Needed"}`,
        `• Focus: ${formData.serviceInterest}`,
        `• Phone: ${trimmedPhone}`,
        `• POPIA Consent: Granted (${consentTimestamp})`,
      ].join("\n");

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        auditMessage
      )}`;

      setStatus({
        state: "success",
        message: "POPIA consent logged. Opening direct WhatsApp channel...",
      });

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unable to process request.";
      setStatus({ state: "error", message: errorMessage });
    }
  };

  return (
    <div className="bg-zinc-950 border border-white/15 rounded-xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Instant Growth & SEO Audit</h2>
          <p className="text-xs text-zinc-400 mt-1">
            POPIA-secured technical teardown of your rankings and conversion gaps.
          </p>
        </div>
        <ShieldCheck className="w-8 h-8 text-[#B8860B]" />
      </div>

      <form onSubmit={handleAuditSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
            Business Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Overberg Coastal Plumbing"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
            Current Website URL (Optional)
          </label>
          <input
            type="text"
            placeholder="www.yourbusiness.co.za"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
            Primary Growth Priority
          </label>
          <select
            value={formData.serviceInterest}
            onChange={(e) =>
              setFormData({
                ...formData,
                serviceInterest: e.target.value as LeadFormState["serviceInterest"],
              })
            }
            className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B]"
          >
            <option value="local-seo">Local SEO & Google Business Profile</option>
            <option value="web-dev">Custom Web Solution Build</option>
            <option value="geo-ai">Generative Engine Optimization (GEO)</option>
            <option value="cro-funnels">Lead Capture Funnels & Meta Ads</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
            WhatsApp / Mobile Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+27 75 090 8984"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B8860B]"
          />
        </div>

        {/* POPIA Compliance Consent Notice */}
        <div className="flex items-start gap-2.5 pt-2 text-xs text-zinc-400">
          <input
            type="checkbox"
            required
            id="popia-consent"
            checked={formData.popiaConsent}
            onChange={(e) => setFormData({ ...formData, popiaConsent: e.target.checked })}
            className="mt-0.5 accent-[#B8860B] rounded cursor-pointer w-4 h-4 shrink-0"
          />
          <label htmlFor="popia-consent" className="cursor-pointer leading-relaxed">
            I agree to allow Touch Base Consulting to process my business details for the
            requested SEO audit and contact me via WhatsApp or email in accordance with the{" "}
            <a href="/privacy" className="text-[#B8860B] underline hover:text-white">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-[#B8860B] underline hover:text-white">
              Terms of Service
            </a>
            . *
          </label>
        </div>

        {status.state === "error" && (
          <div className="flex items-center gap-2 text-red-400 bg-red-950/40 border border-red-800/60 rounded-md p-3 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {status.state === "success" && (
          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-md p-3 text-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="w-full bg-[#B8860B] hover:bg-[#9a7009] disabled:opacity-50 text-black font-bold py-3.5 rounded-md transition-all text-sm cursor-pointer"
        >
          {status.state === "submitting" ? "Validating..." : "Send My Free Audit Brief"}
        </button>

        <div className="pt-2 text-center">
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-[#B8860B]"
          >
            <span>Verify official rates on Google Business Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </form>
    </div>
  );
}
