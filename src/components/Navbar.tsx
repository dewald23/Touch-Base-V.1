import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import type { AppRoute } from '../types/seo';
import { SITE_CONFIG } from '../config/site';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const NAV_LINKS: { label: string; route: AppRoute }[] = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Pricing', route: '/pricing' },
  { label: 'Free Audit', route: '/audit' },
  { label: 'Contact', route: '/contact' },
];

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (route: AppRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#B8860B] flex items-center justify-center font-extrabold text-black text-sm tracking-tighter">
            TB
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-white block leading-none">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[10px] text-[#B8860B] uppercase tracking-widest block mt-0.5">
              Hermanus & Overberg
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <button
              key={item.route}
              type="button"
              onClick={() => handleLinkClick(item.route)}
              aria-current={currentRoute === item.route ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                currentRoute === item.route
                  ? 'text-[#B8860B]'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handleLinkClick('/book')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B8860B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#9a7009] transition-all shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Book Session</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <button
                key={item.route}
                type="button"
                onClick={() => handleLinkClick(item.route)}
                className={`text-left py-2 text-base font-semibold ${
                  currentRoute === item.route ? 'text-[#B8860B]' : 'text-zinc-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleLinkClick('/book')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#B8860B] text-black font-bold text-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book Strategy Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
