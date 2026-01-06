
import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-slate-950/50 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
            Engineer by trade,<br />
            <span className="text-blue-500">Builder by nature.</span>
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            <p>
              For over a decade, I've obsessed over the intersection of clean code and meaningful user experiences. I don't just ship features; I architect scalable systems that solve real business problems.
            </p>
            <p>
              My expertise spans systems architecture, product strategy, and engineering leadership. Whether it's a zero-to-one startup launch or scaling an enterprise platform, I bring a product-first mindset to every line of code.
            </p>
          </div>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
          {['Next.js', 'Node.js', 'TypeScript', 'AWS', 'Product Strategy', 'UI/UX', 'System Design'].map(skill => (
            <span key={skill} className="text-sm font-bold uppercase tracking-widest">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
