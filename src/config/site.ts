// src/config/site.ts

export interface SocialChannel {
  name: "Facebook" | "Instagram" | "LinkedIn";
  href: string;
  handle: string;
}

/**
 * Safely accesses Vite environment variables without crashing if process is undefined.
 */
function getEnv(key: string): string | undefined {
  try {
    if (typeof import.meta !== "undefined" && import.meta.env) {
      return (import.meta.env as Record<string, string | undefined>)[key];
    }
  } catch {
    // Fallback if accessed in test/node environments
  }
  return undefined;
}

/**
 * Validates and sanitizes environment URLs with safe production fallbacks,
 * ensuring no unwanted trailing slashes break path concatenation.
 */
function getSafeUrl(envValue: string | undefined, fallback: string): string {
  try {
    const raw = (envValue || fallback).trim();
    const parsed = new URL(raw);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return fallback.replace(/\/+$/, "");
    }
    return parsed.origin === parsed.href.replace(/\/+$/, "")
      ? parsed.origin
      : parsed.href.replace(/\/+$/, "");
  } catch {
    return fallback.replace(/\/+$/, "");
  }
}

function getSafeString(envValue: string | undefined, fallback: string): string {
  const trimmed = envValue?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

const OFFICIAL_GBP_URL =
  "https://www.google.com/search?authuser=0&hl=en&gl=za&output=search&q=%E2%80%8BTouch+Base+Consulting&ludocid=13411866869414680789&lsig=AB86z5U09mTtbLdqQmcxx8KQBROS";

export const SITE_CONFIG = {
  name: "Touch Base Consulting",
  tagline: "Local SEO & Web Solutions",
  siteUrl: getSafeUrl(
    getEnv("VITE_SITE_URL"),
    "https://touchbaseconsulting.co.za"
  ),
  gtmId: getSafeString(getEnv("VITE_GTM_ID"), "GTM-KX28WTJJ"),
  ga4Id: getSafeString(getEnv("VITE_GA4_ID"), "G-X5FXLBDMW7"),
  whatsappNumber: getSafeString(
    getEnv("VITE_WHATSAPP_NUMBER"),
    "27750908984"
  ),
  email: getSafeString(
    getEnv("VITE_BUSINESS_EMAIL"),
    "Customerservice@touchbaseconsulting.co.za"
  ),
  gbpUrl: getSafeUrl(
    getEnv("VITE_GBP_URL"),
    OFFICIAL_GBP_URL
  ),
  mapsShareUrl: "https://maps.app.goo.gl/vTgbRAoKkY9g1YcQA",
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
        getEnv("VITE_FACEBOOK_URL"),
        "https://www.facebook.com/touchbaseconsulting23"
      ),
      handle: "@touchbaseconsulting23",
    },
    {
      name: "Instagram",
      href: getSafeUrl(
        getEnv("VITE_INSTAGRAM_URL"),
        "https://www.instagram.com/tb_consulting23/"
      ),
      handle: "@tb_consulting23",
    },
    {
      name: "LinkedIn",
      href: getSafeUrl(
        getEnv("VITE_LINKEDIN_URL"),
        "https://www.linkedin.com/in/touchbaseconsulting23/"
      ),
      handle: "in/touchbaseconsulting23",
    },
  ] satisfies SocialChannel[],
} as const;
