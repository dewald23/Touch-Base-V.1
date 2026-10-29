import React from 'react';
import { MessageSquare } from 'lucide-react';
import type { AppRoute } from '../types/seo';
import { SITE_CONFIG } from '../config/site';

interface WhatsAppWidgetProps {
  currentRoute: AppRoute;
}

export default function WhatsAppWidget({ currentRoute }: WhatsAppWidgetProps) {
  const message = encodeURIComponent(
    `Hi Touch Base Consulting, I'm browsing ${SITE_CONFIG.url}${currentRoute} and would like to inquire about your digital services.`
  );

  return (
    <a
      href={`${SITE_CONFIG.whatsappBaseUrl}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Touch Base Consulting on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#B8860B] text-black font-bold text-xs shadow-2xl hover:bg-[#9a7009] active:scale-95 transition-all"
    >
      <MessageSquare className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Studio</span>
    </a>
  );
}
