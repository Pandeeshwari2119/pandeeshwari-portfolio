import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedExpId, setSelectedExpId] = useState(experience[0].id);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="gradient-text">Internship Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on technical internships spanning Frontend React Development, Artificial Intelligence, and Business Sales Analytics.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation / Timeline Selector (for desktop/tablet) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Internship
            </div>
            {experience.map((item) => {
              const isSelected = selectedExpId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedExpId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-dark-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-dark-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-dark-900/70'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.company}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {item.role}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400/80">
                      {item.period}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card for Selected Internship */}
          <div className="lg:col-span-8">
            {experience.map((item) => {
              if (item.id !== selectedExpId) return null;
              return (
                <div 
                  key={item.id} 
                  className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 animate-in fade-in zoom-in-95 duration-200"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {item.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-cyan-400 font-semibold mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>@{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* High level overview */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>
                    <div className="space-y-2.5">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Technologies & Tools Applied
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
