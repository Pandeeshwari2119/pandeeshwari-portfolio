import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  BarChart3, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Cpu,
  Database,
  Eye,
  FileCode,
  Coffee,
  Smartphone,
  Palette
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'programming', label: 'Languages', icon: Code2 },
    { id: 'web', label: 'Web Dev', icon: Layout },
    { id: 'data', label: 'Data & AI', icon: BarChart3 },
    { id: 'soft', label: 'Soft Skills', icon: HeartHandshake },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Proficiencies across software engineering, web frameworks, business intelligence pipelines, and collaborative methodologies.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'bg-dark-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-dark-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Programming Languages</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.programming.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{s.name}</span>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">{s.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-dark-950 overflow-hidden border border-slate-800">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-1000`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Development */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Layout className="w-4 h-4 text-blue-400" />
                <span>Web & Frontend Engineering</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.webDevelopment.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{s.name}</span>
                      <span className="text-xs font-mono text-blue-400 font-semibold">{s.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-dark-950 overflow-hidden border border-slate-800">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-1000`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Data Analysis & AI */}
          {(activeTab === 'all' || activeTab === 'data') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>Data Analytics, BI & Artificial Intelligence</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.dataAndAI.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{s.name}</span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">{s.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-dark-950 overflow-hidden border border-slate-800">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-1000`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills & Professional Attributes */}
          {(activeTab === 'all' || activeTab === 'soft') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <HeartHandshake className="w-4 h-4 text-purple-400" />
                <span>Soft Skills & Professional Leadership</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.softSkills.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-5 border border-slate-800 flex items-start gap-3 hover:border-purple-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{s.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
