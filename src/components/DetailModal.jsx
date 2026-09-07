import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Calendar,
  Award
} from 'lucide-react';

export default function DetailModal({ item, type = 'project', onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-dark-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl bg-dark-900/95 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-medium">
              {item.badge || item.category || 'Deep Dive'}
            </span>
            {item.year && (
              <span className="text-xs font-mono text-slate-400">
                • {item.year}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {item.title}
          </h2>
          {item.journal && (
            <p className="text-sm font-mono text-amber-400">
              Published in: {item.journal}
            </p>
          )}
        </div>

        {/* Long / Detailed Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Overview & Architecture
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {item.detailedDescription || item.abstract || item.description}
          </p>
        </div>

        {/* Key Highlights / Innovations */}
        {(item.highlights || item.keyInnovations) && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Capabilities & Results
            </h4>
            <div className="space-y-2">
              {(item.highlights || item.keyInnovations).map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack or Tags */}
        {(item.techStack || item.tags) && (
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies / Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {(item.techStack || item.tags).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-dark-950 border border-slate-800 text-xs font-medium text-cyan-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
          >
            Close Window
          </button>

          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-md shadow-cyan-500/20"
            >
              <Github className="w-4 h-4 text-dark-950" />
              <span>Explore Code on GitHub</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
