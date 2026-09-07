import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  BarChart, 
  Database, 
  TrendingUp, 
  Keyboard
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  const getCertIcon = (title) => {
    if (title.includes('Power BI')) return <BarChart className="w-5 h-5 text-amber-400" />;
    if (title.includes('Big Data')) return <Database className="w-5 h-5 text-blue-400" />;
    if (title.includes('Data Science')) return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    return <Keyboard className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified academic excellence, technical credentials from Microsoft/NASSCOM, NPTEL, and specialized technical qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Academic Degrees</span>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {edu.period}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono shrink-0">
                      {edu.score}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    {edu.scoreDetail} • {edu.location}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    {edu.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Professional Industry Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-dark-950 border border-slate-800">
                        {getCertIcon(cert.title)}
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-mono font-semibold">
                        {cert.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                        Issued by {cert.issuer}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Verified Credential</span>
                    <span className="text-emerald-400 font-bold">✓ Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
