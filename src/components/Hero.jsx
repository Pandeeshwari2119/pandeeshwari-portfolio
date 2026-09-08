import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Award, 
  Code2, 
  Briefcase, 
  GraduationCap,
  Download,
  Terminal,
  Cpu,
  Layers,
  BarChart3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ currentThemePreset, onOpenResumeModal }) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = portfolioData.personal.typingTitles;

  useEffect(() => {
    const currentRole = roles[typingIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingIndex, roles]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>{portfolioData.personal.status}</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Typing Subtitle */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-300 min-h-[40px]">
              <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>{displayedText}</span>
              <span className="w-0.5 h-6 bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Brief Bio */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            {portfolioData.personal.careerObjective}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href="#patents"
              className="px-6 py-3.5 rounded-xl bg-dark-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all duration-200 backdrop-blur-md flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>View Patents (2)</span>
            </a>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full border-t border-slate-800/80">
            {portfolioData.personal.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-xl bg-dark-900/50 border border-slate-800/60 hover:border-cyan-500/30 transition-colors backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-white flex items-baseline gap-0.5 font-mono">
                  <span className="text-cyan-400">{stat.value}</span>
                  <span className="text-xs text-slate-400 font-sans">{stat.suffix}</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-slate-500 truncate">{stat.note}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Tech Visual Showcase with Large Photo */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-md">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/10 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

            {/* Profile / Tech Card */}
            <div className="relative glass-panel rounded-3xl p-6 sm:p-7 border border-slate-700/60 shadow-2xl backdrop-blur-xl text-center space-y-5">
              
              {/* Large Portrait Photo Container */}
              <div className="relative w-48 h-48 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-600 shadow-xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-[1.35rem] overflow-hidden bg-dark-900 relative flex items-center justify-center border border-cyan-400/30">
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute font-black text-cyan-400 text-5xl font-mono -z-10">PM</span>
                </div>

                {/* Available Status Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-dark-950 border border-emerald-500 text-emerald-400 text-[11px] font-mono whitespace-nowrap shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>

              {/* Candidate Details */}
              <div className="space-y-1 pt-1">
                <h2 className="text-xl font-bold text-white flex items-center justify-center gap-1.5">
                  {portfolioData.personal.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono">B.E. Computer Science Engineering</p>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium mt-1">
                  🎓 VSB Technical Campus • 8.55 CGPA
                </div>
              </div>

              {/* Interactive Skill Badges Inside Card */}
              <div className="grid grid-cols-2 gap-2.5 text-left">
                <div className="p-2.5 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center gap-2 hover:border-cyan-500/40 transition-colors">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Full Stack</div>
                    <div className="text-[10px] text-slate-400">React.js, JS, CSS</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center gap-2 hover:border-purple-500/40 transition-colors">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">AI & ML</div>
                    <div className="text-[10px] text-slate-400">Vision, Gestures</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center gap-2 hover:border-emerald-500/40 transition-colors">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Analytics</div>
                    <div className="text-[10px] text-slate-400">Power BI, Python</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center gap-2 hover:border-amber-500/40 transition-colors">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Innovations</div>
                    <div className="text-[10px] text-slate-400">2 Patents, 1 Paper</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
