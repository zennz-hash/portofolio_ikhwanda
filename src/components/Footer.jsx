import React from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ personal, onNavigate }) {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#2563eb', '#94a3b8', '#ffffff']
      });
    } catch {
      // ignore
    }

    const link = document.createElement('a');
    link.href = personal.cvFile;
    link.download = 'Ikhwanda-Pratama-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="foot-top rv in">
          <p className="foot-quote">
            People don't always reveal who they are.<br />
            <b>They reveal who you are to them.</b>
          </p>
          <nav className="foot-nav" aria-label="Footer">
            <button onClick={() => onNavigate('home')} type="button">{t.nav.home}</button>
            <button onClick={() => onNavigate('about')} type="button">{t.nav.about}</button>
            <button onClick={() => onNavigate('skills')} type="button">{t.nav.skills}</button>
            <button onClick={() => onNavigate('project')} type="button">{t.nav.project}</button>
            <button onClick={() => onNavigate('experience')} type="button">{t.nav.experience}</button>
          </nav>
        </div>

        <div className="foot-bottom">
          <div className="foot-cut">
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid rgba(56, 189, 248, 0.4)',
              overflow: 'hidden',
              background: '#0d111a',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
            }}>
              <img 
                src="/ikhwanda-hero.png" 
                alt="Ikhwanda Pratama" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
              />
            </div>
            <div style={{ marginLeft: '14px' }}>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ffffff' }}>
                {personal.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--txt-dim)', fontFamily: 'var(--font-mono)' }}>
                {t.home.roleSub} &middot; Kota Bekasi, Rawalumbu
              </div>
            </div>
          </div>

          <div className="foot-contact">
            <span className="foot-tag">contact me!</span>

            {/* Social Channels */}
            <a href="https://www.linkedin.com/in/ikhwanda-pratama-671a34288/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/zennz-hash" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>

            <a href="https://www.instagram.com/ikhone_466/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Instagram</span>
            </a>

            {/* Email */}
            <a href={`mailto:${personal.email}`}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8L4.3 7h15.4L12 13z"/></svg>
              <span>{personal.email}</span>
            </a>

            {/* Download CV */}
            <button 
              className="cv-link" 
              onClick={handleDownloadCV}
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#ffffff',
                border: '1px solid rgba(56,189,248,0.4)',
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
                fontSize: '.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3.2a1 1 0 0 1 1 1v8.9l2.9-2.9a1 1 0 1 1 1.4 1.42l-4.6 4.6a1 1 0 0 1-1.4 0l-4.6-4.6A1 1 0 0 1 8.1 10.2l2.9 2.9V4.2a1 1 0 0 1 1-1zM5 18.4h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"/></svg>
              <span>{t.about.downloadCV}</span>
            </button>
          </div>
        </div>

        <p className="foot-copy">
          &copy; {CURRENT_YEAR} Ikhwanda Pratama &middot; Universitas Bina Insani &middot; S1 Software Engineering <span className="build">&middot; build 2026.09 c</span>
        </p>
      </div>
    </footer>
  );
}
