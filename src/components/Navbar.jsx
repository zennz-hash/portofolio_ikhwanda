import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar({ currentView = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNav = (view) => {
    setMobileMenuOpen(false);
    onNavigate(view);
  };

  return (
    <>
      <nav className="nav">
        <button 
          onClick={() => handleNav('home')} 
          className="mark"
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
          type="button"
        >
          <span className="mark-glyph">IP</span>
          <span className="mark-txt">
            <b>Ikhwanda Pratama</b>
            <span className="mono">{t.home.roleSub}</span>
          </span>
        </button>

        <div className="nav-mid glass">
          <button 
            onClick={() => handleNav('home')} 
            className={`mono ${currentView === 'home' ? 'on' : ''}`}
            aria-current={currentView === 'home' ? 'page' : undefined}
            type="button"
          >
            {t.nav.home}
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`mono ${currentView === 'about' ? 'on' : ''}`}
            aria-current={currentView === 'about' ? 'page' : undefined}
            type="button"
          >
            {t.nav.about}
          </button>
          <button 
            onClick={() => handleNav('skills')} 
            className={`mono ${currentView === 'skills' ? 'on' : ''}`}
            aria-current={currentView === 'skills' ? 'page' : undefined}
            type="button"
          >
            {t.nav.skills}
          </button>
          <button 
            onClick={() => handleNav('project')} 
            className={`mono ${currentView === 'project' ? 'on' : ''}`}
            aria-current={currentView === 'project' ? 'page' : undefined}
            type="button"
          >
            {t.nav.project}
          </button>
          <button 
            onClick={() => handleNav('experience')} 
            className={`mono ${currentView === 'experience' ? 'on' : ''}`}
            aria-current={currentView === 'experience' ? 'page' : undefined}
            type="button"
          >
            {t.nav.experience}
          </button>
        </div>

        <div className="nav-end">
          {/* Language Switcher EN | ID */}
          <div className="lang-switcher glass" role="group" aria-label="Language selection">
            <button 
              type="button" 
              onClick={() => setLang('en')} 
              className={`lang-btn mono ${lang === 'en' ? 'active' : ''}`}
              title="English (Default)"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <span className="lang-sep" aria-hidden="true">/</span>
            <button 
              type="button" 
              onClick={() => setLang('id')} 
              className={`lang-btn mono ${lang === 'id' ? 'active' : ''}`}
              title="Bahasa Indonesia"
              aria-pressed={lang === 'id'}
            >
              ID
            </button>
          </div>

          <div className="status glass mono">
            <span className="led"></span> {t.nav.openForWork}
          </div>

          <button 
            className={`burger glass ${mobileMenuOpen ? 'x' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            type="button"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="sheet-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sheet */}
      <div 
        className={`sheet glass ${mobileMenuOpen ? 'open' : ''}`} 
        id="sheet"
      >
        {/* Mobile Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ fontSize: '.75rem', color: 'var(--txt-mute)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Language</span>
          <div className="lang-switcher glass">
            <button 
              type="button" 
              onClick={() => setLang('en')} 
              className={`lang-btn mono ${lang === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <span className="lang-sep">/</span>
            <button 
              type="button" 
              onClick={() => setLang('id')} 
              className={`lang-btn mono ${lang === 'id' ? 'active' : ''}`}
            >
              ID
            </button>
          </div>
        </div>

        <button 
          onClick={() => handleNav('home')}
          className={currentView === 'home' ? 'on' : ''}
          style={{ textAlign: 'left', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          type="button"
        >
          <span>{t.nav.home}</span> <i>00</i>
        </button>
        <button 
          onClick={() => handleNav('about')}
          className={currentView === 'about' ? 'on' : ''}
          style={{ textAlign: 'left', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          type="button"
        >
          <span>{t.nav.about}</span> <i>01</i>
        </button>
        <button 
          onClick={() => handleNav('skills')}
          className={currentView === 'skills' ? 'on' : ''}
          style={{ textAlign: 'left', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          type="button"
        >
          <span>{t.nav.skills}</span> <i>02</i>
        </button>
        <button 
          onClick={() => handleNav('project')}
          className={currentView === 'project' ? 'on' : ''}
          style={{ textAlign: 'left', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          type="button"
        >
          <span>{t.nav.project}</span> <i>03</i>
        </button>
        <button 
          onClick={() => handleNav('experience')}
          className={currentView === 'experience' ? 'on' : ''}
          style={{ textAlign: 'left', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          type="button"
        >
          <span>{t.nav.experience}</span> <i>04</i>
        </button>
        <a 
          href="https://wa.me/6282282462024" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', color: 'var(--o-hi)', textDecoration: 'none' }}
        >
          <span>WhatsApp Contact</span> <i>&rarr;</i>
        </a>
      </div>
    </>
  );
}
