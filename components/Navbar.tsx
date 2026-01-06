
import React from 'react';
import { NAV_LINKS, LINKEDIN_URL } from '../constants';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            KC<span className="text-blue-500">.</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-slate-200 transition-all active:scale-95"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};
