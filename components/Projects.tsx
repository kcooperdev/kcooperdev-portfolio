
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Selected Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 tracking-tight">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-6 bg-slate-900 border border-white/5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 tracking-tight">{project.name}</h3>
              <p className="text-slate-400 font-light leading-relaxed text-lg">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
