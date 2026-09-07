import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Palette,
  Briefcase,
  Layers,
  Award,
  BookOpen,
  User,
  PhoneCall
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection, currentTheme, setCurrentTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Patents', href: '#patents', icon: Award },
    { name: 'Skills', href: '#skills', icon: BookOpen },
    { name: 'Education', href: '#education', icon: Award },
    { name: 'Contact', href: '#contact', icon: PhoneCall },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = Object.keys(portfolioData.themePresets);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3.5 shadow-2xl backdrop-blur-xl bg-dark-950/85' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <span className="font-mono text-lg tracking-tighter">P</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-dark-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-base sm:text-lg">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider hidden sm:block">
              CSE • Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Mood Palette + Socials + CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Change Accent Mood"
            >
              <Palette className="w-4 h-4" />
              <span className="hidden xl:inline capitalize">{currentTheme}</span>
            </button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-44 rounded-xl bg-dark-900 border border-slate-800 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setThemeDropdownOpen(false)}
              >
                <div className="text-[10px] font-mono uppercase text-slate-500 px-2 py-1">
                  Accent Mood
                </div>
                {themes.map((key) => {
                  const theme = portfolioData.themePresets[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setCurrentTheme(key)}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors ${
                        currentTheme === key 
                          ? 'bg-slate-800 text-white font-medium' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: theme.accent }} 
                      />
                      <span>{theme.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Social Quick Icons */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-slate-950" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="p-2 rounded-xl bg-dark-900 border border-slate-800 text-slate-400"
            title="Theme"
          >
            <Palette className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-800 bg-dark-950/95 px-5 pt-3 pb-6 space-y-2 mt-2 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-bold text-xs"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
