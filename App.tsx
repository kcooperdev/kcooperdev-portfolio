
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { Project, Article } from './types';

// DATA DEFINITION - UPDATE PROJECTS AND ARTICLES HERE
const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    name: 'Nexus Engine',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'A distributed systems architecture for real-time data processing and analytics.'
  },
  {
    id: '2',
    name: 'Lumina UI',
    link: '#',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    description: 'A premium design system focused on high-performance animations and accessibility.'
  },
  {
    id: '3',
    name: 'Stratis Platform',
    link: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Enterprise-grade product strategy dashboard for multi-national engineering teams.'
  }
];

const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    title: 'Architecting for Resilience',
    link: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'How to build systems that survive 10x traffic spikes overnight using modern cloud patterns.'
  },
  {
    id: '2',
    title: 'The Future of Product Engineering',
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    description: 'Why the line between designer and engineer is blurring and how to adapt your workflow.'
  },
  {
    id: '3',
    title: 'Scaling Engineering Culture',
    link: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Lessons learned from leading remote teams through hypergrowth cycles.'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects projects={PROJECTS_DATA} />
        <Articles articles={ARTICLES_DATA} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
