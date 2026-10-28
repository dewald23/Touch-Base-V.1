// src/config/site.ts

export interface SocialChannel {
  name: "Facebook" | "Instagram" | "LinkedIn";
  href: string;
  handle: string;
}

/**
 * Validates and sanitizes environment URLs with safe production fallbacks
 * so Vercel preview or production builds never fail if a variable is missing.
 */
function getSafeUrl(envValue: string | undefined, fallback: string): string {
  try {
    const raw = (envValue || fallback).trim();
    const parsed = new URL(raw);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return fallback;
    }
    return parsed.toString();
  } catch {
    return fallback;
  }
}

function getSafeString(envValue: string | undefined, fallback: string): string {
  const trimmed = envValue?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

export const SITE_CONFIG = {
  name: "Touch Base Consulting",
  tagline: "Local SEO & Web Solutions",
  siteUrl: getSafeUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://touchbaseconsulting.co.za"
  ),
  gtmId: getSafeString(process.env.NEXT_PUBLIC_GTM_ID, "GTM-KX28WTJJ"),
  ga4Id: getSafeString(process.env.NEXT_PUBLIC_GA4_ID, "G-X5FXLBDMW7"),
  whatsappNumber: getSafeString(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    "27750908984"
  ),
  email: getSafeString(
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    "Customerservice@touchbaseconsulting.co.za"
  ),
  gbpUrl: getSafeUrl(
    process.env.NEXT_PUBLIC_GBP_URL,
    "https://maps.app.goo.gl/vTgbRAoKkY9g1YcQA"
  ),
  address: {
    street: "61 De Villiers Street, Sandbaai",
    city: "Hermanus",
    province: "Western Cape",
    postalCode: "7200",
    country: "ZA",
  },
  socials: [
    {
      name: "Facebook",
      href: getSafeUrl(
        process.env.NEXT_PUBLIC_FACEBOOK_URL,
        "https://www.facebook.com/touchbaseconsulting23"
      ),
      handle: "@touchbaseconsulting23",
    },
    {
      name: "Instagram",
      href: getSafeUrl(
        process.env.NEXT_PUBLIC_INSTAGRAM_URL,
        "https://www.instagram.com/tb_consulting23/"
      ),
      handle: "@tb_consulting23",
    },
    {
      name: "LinkedIn",
      href: getSafeUrl(
        process.env.NEXT_PUBLIC_LINKEDIN_URL,
        "https://www.linkedin.com/in/touchbaseconsulting23/"
      ),
      handle: "in/touchbaseconsulting23",
    },
  ] satisfies SocialChannel[],
} as const;
