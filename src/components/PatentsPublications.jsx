import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Cpu, 
  Fingerprint, 
  Scale,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PatentsPublications({ onSelectPatent }) {
  const { patents, publications } = portfolioData;
  const [expandedId, setExpandedId] = useState(patents[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="patents" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>INTELLECTUAL PROPERTY & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Patents & <span className="gradient-text-amber">Journal Publications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Original scientific innovations and legal research published in the Indian Patent Journal and peer-reviewed journals.
          </p>
        </div>

        {/* Patents Showcase Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span className="font-semibold uppercase tracking-wider">Published Patents (Indian Patent Journal)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {patents.map((patent) => {
              const isExpanded = expandedId === patent.id;
              const isBiometric = patent.id === 'patent-1';

              return (
                <div
                  key={patent.id}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-5">
                    
                    {/* Header Chips */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>{patent.journal} • {patent.year}</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                          {patent.status}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {patent.category}
                      </span>
                    </div>

                    {/* Patent Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                        {isBiometric ? <Fingerprint className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                      </div>
                      <span>{patent.title}</span>
                    </h3>

                    {/* Abstract */}
                    <div className="space-y-2 bg-dark-950/60 p-4 rounded-2xl border border-slate-800/80">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Innovation Abstract
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {patent.abstract}
                      </p>
                    </div>

                    {/* Key Technical Innovations */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>Key Inventive Steps</span>
                      </div>
                      <div className="space-y-2">
                        {patent.keyInnovations.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {patent.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-dark-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Journal Publication Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider">Peer-Reviewed Journal Publication</span>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono">
                    Published in 2025
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {publications[0].title}
                  </h3>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400">
                {publications[0].focus}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {publications[0].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {publications[0].keyTakeaways.map((takeaway, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-dark-950/70 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                  <div className="text-purple-400 font-mono font-bold">0{i + 1}. Insight</div>
                  <div className="leading-relaxed">{takeaway}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
