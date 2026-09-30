import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSlab } from './components/HeroSlab';
import { StripTicker } from './components/StripTicker';
import { Footer } from './components/Footer';
import { AboutChapter } from './components/chapters/AboutChapter';
import { SkillsChapter } from './components/chapters/SkillsChapter';
import { ProjectsChapter } from './components/chapters/ProjectsChapter';
import { ExperienceChapter } from './components/chapters/ExperienceChapter';
import { CVModal } from './components/CVModal';
export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const bloomRef = useRef(null);

  // Global ambient bloom shadow parallax tracking pointer across all pages
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let raf = null;

    const handleGlobalPointer = (e) => {
      if (!bloomRef.current) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const nx = (e.clientX / window.innerWidth - 0.5);
        const ny = (e.clientY / window.innerHeight - 0.5);
        bloomRef.current.style.transform = `translate(calc(-50% + ${(nx * 70).toFixed(1)}px), calc(-50% + ${(ny * 35).toFixed(1)}px))`;
      });
    };

    window.addEventListener('pointermove', handleGlobalPointer, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleGlobalPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const transitionTo = (view) => {
    if (view === currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    } else {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Sync state with URL hash on load and on hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const target = ['about', 'skills', 'project', 'experience'].includes(hash) ? hash : 'home';
      setCurrentView((prev) => {
        if (prev === target) return prev;
        if (typeof document !== 'undefined' && document.startViewTransition) {
          document.startViewTransition(() => {
            setCurrentView(target);
            window.scrollTo({ top: 0, behavior: 'instant' });
          });
          return prev;
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
          return target;
        }
      });
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update body class 'sub' for authentic subpage spacing
  useEffect(() => {
    if (currentView !== 'home') {
      document.body.classList.add('sub');
    } else {
      document.body.classList.remove('sub');
    }
  }, [currentView]);

  const handleNavigate = (view) => {
    if (view === 'home') {
      window.history.pushState(null, '', ' ');
    } else {
      window.location.hash = view;
    }
    transitionTo(view);
  };

  return (
    <>
      {/* ░░ PRELOADER ░░ */}
      <Preloader />

      {/* ░░ ENVIRONMENT (Concrete, Grid, Bloom Shadow, Grain) ░░ */}
      <div className="env" aria-hidden="true">
        <div className="concrete"></div>
        <div className="grid"></div>
        <div className="bloom" id="bloom" ref={bloomRef}></div>
      </div>
      <div className="grain" aria-hidden="true"></div>

      {/* ░░ TOP NAVIGATION ░░ */}
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* ░░ CONDITIONAL VIEW RENDERING WITH PAGE TRANSITION ░░ */}
      <div key={currentView} className="view-transition-wrapper">
        {currentView === 'home' && (
          <main className="stage" id="home">
            <div className="wrap">
              {/* Hero Slab with Portofolio Wordmark & 4 Cards Deck */}
              <HeroSlab 
                onSelectDeck={(deckId) => handleNavigate(deckId)}
                bloomRef={bloomRef}
              />

              {/* Strip Ticker Marquee & Social Dock */}
              <StripTicker 
                personal={portfolioData.personal}
              />
            </div>
          </main>
        )}

        {currentView === 'about' && (
          <AboutChapter 
            personal={portfolioData.personal}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'skills' && (
          <SkillsChapter 
            personal={portfolioData.personal}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'project' && (
          <ProjectsChapter 
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'experience' && (
          <ExperienceChapter 
            personal={portfolioData.personal}
            onNavigate={handleNavigate}
          />
        )}
      </div>

      {/* ░░ FOOTER ░░ */}
      <Footer 
        personal={portfolioData.personal}
        onNavigate={handleNavigate}
      />

      {/* ░░ FULL CV PDF VIEWER MODAL ░░ */}
      <CVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl={portfolioData.personal.cvFile}
      />
    </>
  );
}
