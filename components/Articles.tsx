
import React from 'react';
import { motion } from 'framer-motion';
import { Article } from '../types';

interface ArticlesProps {
  articles: Article[];
}

export const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section id="articles" className="py-32 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">Deep Dives</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 tracking-tight">Writings & Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight">{article.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed font-light">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-white text-sm font-bold group/link"
                >
                  Read Article 
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
