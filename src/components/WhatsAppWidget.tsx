/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Handshake } from 'lucide-react';
import type { AppRoute } from '../types/seo';

const WHATSAPP_NUMBER = '27750908984';

interface WhatsAppWidgetProps {
  currentRoute: AppRoute;
}

export default function WhatsAppWidget({ currentRoute }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close widget when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getPageGreeting = (route: AppRoute) => {
    switch (route) {
      case '/services':
        return 'Hi Touch Base, I was reviewing your core Local SEO & Web Solutions and would like to discuss engineering a solution for my business.';
      case '/pricing':
        return 'Hi Touch Base, I visited your pricing breakdown and would like to discuss official consulting rates and packages for my business.';
      case '/audit':
        return 'Hi Touch Base, I would like to request a direct Local SEO & Google Business Profile audit.';
      case '/contact':
        return 'Hi Touch Base, I am reaching out to discuss your Hermanus and Overberg web solutions.';
      case '/privacy':
      case '/terms':
        return 'Hi Touch Base, I have a quick question regarding your studio terms and POPIA compliance.';
      default:
        return 'Hi Touch Base, I visited your website and would like to learn more about dominating the Google Map-Pack in the Overberg.';
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    getPageGreeting(currentRoute)
  )}`;

  return (
    <div
      ref={cardRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pb-[env(safe-area-inset-bottom)]"
    >
      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-zinc-950 border border-[#B8860B]/50 rounded-xl p-5 shadow-2xl transition-all duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B8860B]/20 border border-[#B8860B] flex items-center justify-center">
                <Handshake className="w-4 h-4 text-[#B8860B]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Touch Base Direct</p>
                <p className="text-[10px] text-[#B8860B]">Online · Overberg Technical Studio</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white p-1 focus:outline-none cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-2 text-xs text-zinc-300">
            <p className="leading-relaxed">
              Hello! 👋 Need immediate advice on ranking your business in the Hermanus top-3 map-pack
              or launching a sub-second custom web solution?
            </p>
            <p className="text-zinc-400 text-[11px]">
              Tap below to connect directly with our studio via WhatsApp:
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold py-2.5 rounded-md text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp (+27 75 090 8984)</span>
          </a>
        </div>
      )}

      {/* Floating Trigger Button with Subtle Pulse */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#B8860B]/30 blur-sm animate-pulse pointer-events-none" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold px-4 py-3 rounded-full shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Open WhatsApp quick-chat"
          aria-expanded={isOpen}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs tracking-tight hidden sm:inline">WhatsApp Quick-Chat</span>
          <span className="w-2 h-2 rounded-full bg-black/80" />
        </button>
      </div>
    </div>
  );
}
