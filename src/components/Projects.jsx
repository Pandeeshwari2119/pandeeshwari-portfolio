import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack / Web', 'AI & ML', 'Data Science & BI'];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full Stack / Web') {
      return proj.category.includes('Web') || proj.category.includes('Full Stack');
    }
    if (activeFilter === 'AI & ML') {
      return proj.category.includes('AI') || proj.category.includes('Vision');
    }
    if (activeFilter === 'Data Science & BI') {
      return proj.category.includes('Data') || proj.category.includes('Analytics');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text">Projects & Systems</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              A curated selection of software applications, machine learning experiments, and analytics platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-dark-900/60 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Background gradient hint */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-dark-950/80 border border-slate-700/80 text-cyan-300 text-[11px] font-mono">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Key Highlight Bullets */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-dark-950/90 border border-slate-800 text-[11px] font-medium text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="relative z-10 pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Deep Dive Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-dark-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
