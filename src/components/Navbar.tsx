/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Handshake, MessageSquare, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import type { AppRoute } from '../types/seo';

const WHATSAPP_NUMBER = '27750908984';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const NAV_LINKS: { label: string; route: AppRoute }[] = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Pricing & Rates', route: '/pricing' },
  { label: 'Free Audit', route: '/audit' },
  { label: 'Contact', route: '/contact' },
];

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Touch Base, I visited your website and would like to book a local SEO or web solution strategy call.'
  )}`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-8">
        {/* Wordmark & Golden Handshake */}
        <a
          href="/"
          onClick={(e) => handleLinkClick('/', e)}
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-[#B8860B]/15 border border-[#B8860B] flex items-center justify-center transition-transform group-hover:scale-105">
            <Handshake className="w-5 h-5 text-[#B8860B]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap leading-none">
              TOUCH BASE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#B8860B] font-semibold mt-1">
              Local SEO & Web Solutions
            </span>
          </div>
        </a>

        {/* Multi-Page Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <a
                key={link.route}
                href={link.route}
                onClick={(e) => handleLinkClick(link.route, e)}
                className={`transition-colors whitespace-nowrap relative py-1 ${
                  isActive ? 'text-[#B8860B] font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8860B] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-semibold text-sm px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book Strategy Call</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-white/10 bg-zinc-950 px-6 py-6 space-y-4"
        >
          <nav className="flex flex-col space-y-3 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  onClick={(e) => handleLinkClick(link.route, e)}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#B8860B]/15 text-[#B8860B] font-semibold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9a7009] text-black font-bold py-3 rounded-md text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Strategy (+27 75 090 8984)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
