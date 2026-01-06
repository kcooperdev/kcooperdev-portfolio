
import React from 'react';
import { LINKEDIN_URL } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        <div className="text-2xl font-black">
          KC<span className="text-blue-500">.</span>
        </div>
        
        <div className="flex gap-8">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Twitter</a>
        </div>

        <div className="pt-10 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Khalif Cooper</p>
          <p>Built by Khalif Cooper</p>
        </div>
      </div>
    </footer>
  );
};
