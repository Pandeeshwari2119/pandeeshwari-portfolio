import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PatentsPublications from './components/PatentsPublications';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('cyan');
  const [modalItem, setModalItem] = useState(null);
  const [modalType, setModalType] = useState('project');

  const themeConfig = portfolioData.themePresets[currentTheme] || portfolioData.themePresets.cyan;

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'patents', 'skills', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProjectModal = (project) => {
    setModalItem(project);
    setModalType('project');
  };

  const handleOpenPatentModal = (patent) => {
    setModalItem(patent);
    setModalType('patent');
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      
      {/* Interactive Background Particle Canvas & Glows */}
      <BackgroundAnimation themeAccent={themeConfig.accent} />

      {/* Navigation Bar */}
      <Navbar 
        activeSection={activeSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero currentThemePreset={themeConfig} />
        <About />
        <Experience />
        <Projects onSelectProject={handleOpenProjectModal} />
        <PatentsPublications onSelectPatent={handleOpenPatentModal} />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Inspection Modal */}
      {modalItem && (
        <DetailModal 
          item={modalItem} 
          type={modalType} 
          onClose={handleCloseModal} 
        />
      )}

    </div>
  );
}
