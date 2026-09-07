import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Calendar,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;

  const coreStrengths = [
    "Problem solving with modern React & Full Stack web architectures.",
    "Data analysis, cleaning & interactive Power BI executive reporting.",
    "Proactive AI/ML prototyping (Computer vision & gesture recognition).",
    "Translating engineering innovations into published patents & research.",
    "High adaptability, quick technical learning & dependable team leadership."
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Pandeeshwari M</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging software engineering, data analytics, and cutting-edge research to create meaningful impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm font-semibold">
                <Target className="w-5 h-5" />
                <span>Career Objective & Vision</span>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.careerObjective}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Strengths & Differentiators
                </h4>
                <div className="space-y-2.5">
                  {coreStrengths.map((str, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{str}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs font-semibold text-white">{personal.location}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <div className="text-xs font-semibold text-white truncate">{personal.email}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Education Pathway */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm font-semibold">
                <GraduationCap className="w-5 h-5" />
                <span>Academic Foundation</span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {education.map((edu, idx) => (
                  <div key={edu.id} className="relative pl-8 space-y-2">
                    {/* Dot on timeline */}
                    <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-dark-950 border-2 border-cyan-400 -translate-x-1/2 shadow-sm shadow-cyan-400/50" />

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan-400 font-medium">
                        {edu.period}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-bold font-mono">
                        {edu.score}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-xs font-medium text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {edu.location}
                    </p>

                    <ul className="pt-2 space-y-1">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
