import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';

export function AboutChapter({ personal, onNavigate }) {
  const bioRef = useRef(null);
  const platesRef = useRef([]);
  const { t } = useLanguage();

  const helloLetters = ['H', 'E', 'L', 'L', 'O', '!'];

  // Spotlight mouse tracking on glass bio and fact plates
  useEffect(() => {
    const plates = [bioRef.current, ...platesRef.current.filter(Boolean)];
    const cleanupFns = [];

    plates.forEach((el) => {
      if (!el) return;
      let queued = null;

      const paint = () => {
        if (!queued || !el) return;
        const { x, y } = queued;
        queued = null;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${(x - r.left).toFixed(0)}px`);
        el.style.setProperty('--my', `${(y - r.top).toFixed(0)}px`);
      };

      const handlePointerMove = (e) => {
        const r = el.getBoundingClientRect();
        const near = e.clientX > r.left - 140 && e.clientX < r.right + 140 &&
                     e.clientY > r.top - 140 && e.clientY < r.bottom + 140;
        el.style.setProperty('--lit', near ? '1' : '0');
        if (!near) return;
        const first = queued === null;
        queued = { x: e.clientX, y: e.clientY };
        if (first) requestAnimationFrame(paint);
      };

      const handlePointerLeave = () => {
        el.style.setProperty('--lit', '0');
      };

      el.addEventListener('pointermove', handlePointerMove, { passive: true });
      el.addEventListener('pointerleave', handlePointerLeave);

      cleanupFns.push(() => {
        el.removeEventListener('pointermove', handlePointerMove);
        el.removeEventListener('pointerleave', handlePointerLeave);
      });
    });

    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  const handleDownloadCV = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#2563eb', '#ffffff']
      });
    } catch {}

    const link = document.createElement('a');
    link.href = personal.cvFile || '/Ikhwanda-Pratama-CV.pdf';
    link.download = 'Ikhwanda-Pratama-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="chapter" id="about">
      <div className="wrap">
        {/* Chapter Header */}
        <header className="ch-head rv in">
          <span className="ch-no">{t.about.chapterNo}</span>
          <h2 className="ch-title">{t.about.titleMain} <em>{t.about.titleEm}</em></h2>
          <span className="ch-rule"></span>
        </header>

        {/* ── The HELLO Card with Cursor Spotlight Sheen ── */}
        <div className="bio rv in" ref={bioRef}>
          <div className="sheen"></div>
          <div className="edge"></div>

          <figure className="portrait">
            <div className="portrait-frame">
              <span className="age" aria-hidden="true">23</span>
              <picture>
                <img 
                  src="/ikhwanda-hero.png" 
                  alt="Ikhwanda Pratama"
                  width="368" 
                  height="387" 
                  decoding="async" 
                />
              </picture>
              <figcaption className="portrait-cap">{t.about.roleBadge}</figcaption>
            </div>
          </figure>

          <div className="say">
            <h3 className="hello">
              <span className="wm-box">
                <span className="wordmark dovde" aria-label="Hello!">
                  {helloLetters.map((char, i) => (
                    <span key={i} className="gl" style={{ '--i': i }}>{char}</span>
                  ))}
                </span>
              </span>
            </h3>

            <p className="say-text">
              <span className="s1">{t.about.bioGreeting} <b>{t.about.bioName}</b>{t.about.bioRole}</span>
              {t.about.bioDetail}
            </p>

            <div className="say-links">
              <a href={personal.websiteUrl} target="_blank" rel="noopener noreferrer">
                {personal.website || 'ikhwanda.is-a.dev'}
              </a>
              <a href={`mailto:${personal.email}`}>
                {personal.email}
              </a>
              <a href={`https://wa.me/62${personal.phone.replace(/[^0-9]/g, '').slice(1)}`} target="_blank" rel="noopener noreferrer">
                {personal.phone}
              </a>
              <button className="cv" onClick={handleDownloadCV} type="button">
                {t.about.downloadCV}
                <span className="ico ico-dl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 3.2a1 1 0 0 1 1 1v8.9l2.9-2.9a1 1 0 1 1 1.4 1.42l-4.6 4.6a1 1 0 0 1-1.4 0l-4.6-4.6A1 1 0 0 1 8.1 10.2l2.9 2.9V4.2a1 1 0 0 1 1-1zM5 18.4h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* ── Social Media Channels: Instagram, LinkedIn, GitHub ── */}
            <div className="profile-socials">
              <span className="socials-lbl mono">Socials:</span>
              <a 
                href={personal.instagram || "https://www.instagram.com/ikhone_466/"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram"
                title={t.about.socialInstagram}
                aria-label="Instagram @ikhone_466"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a 
                href={personal.linkedin || "https://www.linkedin.com/in/ikhwanda-pratama-671a34288/"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin"
                title={t.about.socialLinkedin}
                aria-label="LinkedIn Ikhwanda Pratama"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href={personal.github || "https://github.com/zennz-hash"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn github"
                title={t.about.socialGithub}
                aria-label="GitHub zennz-hash"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <div className="profile-domicile mono" title="Domisili Resmi">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Kota Bekasi, Rawalumbu</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Proof points / Stats Bar ── */}
        <div className="stats rv in">
          <div><b>2<em>+</em></b><span>{t.about.statYears}</span></div>
          <div><b>15<em>+</em></b><span>{t.about.statProjects}</span></div>
          <div><b>S1</b><span>{t.about.statDegree}</span></div>
          <div><b>100<em>%</em></b><span>{t.about.statCleanCode}</span></div>
        </div>

        {/* ── Data Plates: Symmetrical 2-Column Balanced Architecture (Riwayat Pendidikan & Fokus Rekayasa) ── */}
        <div className="facts--about rv in">

          {/* Left Column: Riwayat Pendidikan (Full Height Anchor) */}
          <article className="fact rv in" ref={el => platesRef.current[0] = el}>
            <div className="sheen"></div>
            <div className="edge"></div>

            <header>
              <span className="f-no">01</span>
              <h4>{t.about.eduTitle}</h4>
              <span className="f-yr">{t.about.eduTrack}</span>
            </header>

            <p style={{ fontSize: '.84rem', color: 'var(--txt-dim)', lineHeight: '1.55', marginBottom: '16px' }}>
              {t.about.eduSubtitle}
            </p>

            <ol className="exp-tree">
              <li>
                <span className="yr">{t.about.eduUniPeriod}</span>
                <b>
                  {t.about.eduUniName}
                </b>
                <span className="role" style={{ color: 'var(--o-hi)', fontWeight: 600, fontSize: '.92rem' }}>
                  {t.about.eduUniDegree}
                </span>
                <span className="sub" style={{ display: 'block', marginTop: '8px', color: 'var(--txt-dim)', fontSize: '.86rem', lineHeight: '1.65' }}>
                  {t.about.eduUniDesc}
                </span>
              </li>

              <li style={{ marginTop: '22px' }}>
                <span className="yr">{t.about.eduSmkPeriod}</span>
                <b>
                  {t.about.eduSmkName}
                </b>
                <span className="role" style={{ color: 'var(--o-hi)', fontWeight: 600, fontSize: '.92rem' }}>
                  {t.about.eduSmkMajor}
                </span>
                <span className="sub" style={{ display: 'block', marginTop: '8px', color: 'var(--txt-dim)', fontSize: '.86rem', lineHeight: '1.65' }}>
                  {t.about.eduSmkDesc}
                </span>
              </li>
            </ol>
          </article>

          {/* Plate 02: Fokus & Kompetensi Rekayasa */}
          <article className="fact rv in" ref={el => platesRef.current[1] = el}>
            <div className="sheen"></div>
            <div className="edge"></div>

            <header>
              <span className="f-no">02</span>
              <h4>{t.about.focusTitle}</h4>
              <span className="f-yr">{t.about.focusBadge}</span>
            </header>

            <p style={{ fontSize: '.86rem', color: 'var(--txt-dim)', lineHeight: '1.6', marginBottom: '16px' }}>
              {t.about.focusSubtitle}
            </p>

            <ul className="dots-list">
              <li>Full-Stack Web Architecture</li>
              <li>React &amp; Next.js Ecosystem</li>
              <li>RESTful API &amp; Node.js Services</li>
              <li>Relational PostgreSQL &amp; SQL</li>
              <li>Cloud Serverless (Neon &amp; Supabase)</li>
              <li>LLM Prompt Pipelines (PRD Automation)</li>
              <li>Web3 dApps &amp; Client State</li>
              <li>Clean Code &amp; Git Workflow</li>
              <li>Tailored UI/UX &amp; Micro-animations</li>
              <li>Performance &amp; CWV Optimization</li>
            </ul>
          </article>

        </div>

        {/* ── Where to next ── */}
        <nav className="next rv in" aria-label="Next chapters">
          <span className="next-lbl">{t.about.nextCardLbl}</span>
          <div className="next-row">
            <button onClick={() => onNavigate('skills')} className="next-card cool" type="button">
              <span className="nc-no">02</span>
              <span className="nc-name">{t.about.nextSkills} <em>{t.about.nextSkillsEm}</em></span>
              <span className="nc-go">
                <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button onClick={() => onNavigate('project')} className="next-card warm" type="button">
              <span className="nc-no">03</span>
              <span className="nc-name">{t.about.nextProjects} <em>{t.about.nextProjectsEm}</em></span>
              <span className="nc-go">
                <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button onClick={() => onNavigate('experience')} className="next-card photo" type="button">
              <span className="nc-no">04</span>
              <span className="nc-name">{t.about.nextExp} <em>{t.about.nextExpEm}</em></span>
              <span className="nc-go">
                <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}
