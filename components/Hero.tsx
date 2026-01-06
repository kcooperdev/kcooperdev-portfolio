
import React from 'react';
import { motion } from 'framer-motion';
import { LINKEDIN_URL } from '../constants';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-blue-400">
            Senior Product Builder
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            I Build Products <br />
            <span className="gradient-text">That People Love.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Senior software engineer with a decade of experience designing, architecting, and shipping high-impact digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-slate-200 hover:-translate-y-1 transition-all"
            >
              Connect on LinkedIn
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-lg font-bold border border-white/20 rounded-full hover:bg-white/5 transition-all"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
