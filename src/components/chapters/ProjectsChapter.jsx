import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ProjectsChapter({ onNavigate }) {
  const { t } = useLanguage();
  const projectsWord = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  const platesRef = useRef([]);

  // Attach pointermove spotlight sheen tracking to flagship and project plates
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cleanupFns = [];
    const elements = platesRef.current.filter(Boolean);

    elements.forEach((el) => {
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
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <section className="chapter" id="projects">
      <div className="wrap">
        {/* Chapter Header */}
        <header className="ch-head rv in">
          <span className="ch-no">{t.projects.chapterNo}</span>
          <h2 className="ch-title">{t.projects.titleMain} <em>{t.projects.titleEm}</em></h2>
          <span className="ch-rule"></span>
        </header>

        {/* ── Banner: Dark Tech Frame, Left Wordmark, Tools on Rail ── */}
        <div className="banner banner--edit rv in">
          <picture className="banner-bg">
            <img 
              src="/studio_backdrop_ultra.jpg" 
              alt="Projects Studio Banner" 
              width="1366" 
              height="725" 
              decoding="async" 
            />
          </picture>

          <div className="banner-tl">
            <span className="banner-word dovde" aria-label="Projects">
              {projectsWord.map((char, i) => (
                <span key={i} className="gl" style={{ '--i': i }}>{char}</span>
              ))}
            </span>
            <span className="banner-sub">{t.projects.heroSub}</span>
          </div>

          <div className="rail">
            <span className="rail-lbl">Stack</span>
            <ul className="rail-list">
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>React</span><i>Frontend</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Next.js</span><i>Fullstack</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Postgres</span><i>Database</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Web3</span><i>dApps</i></li>
            </ul>
          </div>
        </div>

        {/* ── The Lede ── */}
        <div className="lede rv in">
          <p className="lede-text">
            <span className="s1">{t.projects.heroClaim}</span>
            {t.projects.heroBody}
          </p>
          <a className="lede-cta" href="https://github.com/zennz-hash" target="_blank" rel="noopener noreferrer">
            <span>{t.projects.exploreAll}</span>
            <i>
              <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </i>
          </a>
        </div>

        {/* ── Project 01: Featured Flagship Showcase (AriseHash AI Architecture Engine) ── */}
        <div 
          className="creator rv in" 
          ref={(el) => platesRef.current[0] = el}
          style={{ cursor: 'default' }}
        >
          <div className="sheen"></div>
          <div className="edge"></div>

          <div className="creator-card">
            <picture>
              <img 
                src="/projects/arisehash.png" 
                alt="AriseHash AI Architecture Engine and In-Browser Sandbox Platform" 
                width="784" 
                height="453" 
                decoding="async" 
                style={{ objectFit: 'cover' }}
              />
            </picture>
          </div>

          <div className="creator-say">
            <span className="c-kicker"><i></i>{t.projects.project1Kicker}</span>
            <h3>{t.projects.project1Title} &middot; <em>{t.projects.project1Subtitle}</em></h3>
            <p>
              {t.projects.project1Desc}
            </p>
            <div className="creator-figs">
              <span><b>{t.projects.project1Stat1Label}</b> {t.projects.project1Stat1Val}</span>
              <span><b>{t.projects.project1Stat2Label}</b> {t.projects.project1Stat2Val}</span>
              <span><b>{t.projects.project1Stat3Label}</b> {t.projects.project1Stat3Val}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
              {['React 18', 'Vite', 'Node.js', 'Express', 'Sandpack Runtime', 'Mermaid.js', 'Prisma ORM', 'PostgreSQL', 'SSE Streaming', 'Claude / OpenAI / Gemini', 'Tailwind CSS'].map((tag, tIdx) => (
                <span key={tIdx} style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '.72rem',
                  fontWeight: 600,
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a className="lede-cta" href="https://arisexhash.xyz" target="_blank" rel="noopener noreferrer">
                <span>{t.projects.viewLive}</span>
                <i>
                  <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>

        {/* ── Projects 02 & 03: Dual Symmetrical Engineering Flagships ── */}
        <div className="projects-grid rv in">

          {/* Project 02: CALCU.ID */}
          <article 
            className="project-plate rv in" 
            ref={(el) => platesRef.current[1] = el}
          >
            <div className="sheen"></div>
            <div className="edge"></div>

            <div>
              {/* Media Preview Frame */}
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.9)',
                position: 'relative'
              }}>
                <img 
                  src="/projects/calcu.png" 
                  alt="Calcu.id Platform Screenshot" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy"
                />
              </div>

              {/* Sub-header info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="c-kicker" style={{ color: 'var(--o-hi)' }}>
                  <i></i>{t.projects.project2Kicker}
                </span>
                <span style={{ fontSize: '.72rem', color: 'var(--txt-mute)', fontFamily: 'var(--font-mono)' }}>
                  {t.projects.project2Period}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-.02em', marginBottom: '10px' }}>
                {t.projects.project2Title}
              </h3>

              <p style={{ fontSize: '.86rem', color: 'var(--txt-dim)', lineHeight: '1.65', marginBottom: '18px' }}>
                {t.projects.project2Desc}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                {['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Headless CMS'].map((tag, idx) => (
                  <span key={idx} style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '.72rem',
                    fontWeight: 600,
                    background: 'rgba(56,189,248,0.1)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56,189,248,0.2)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link */}
            <div>
              <a className="lede-cta" href="https://calcu.my.id" target="_blank" rel="noopener noreferrer">
                <span>{t.projects.project2Action}</span>
                <i>
                  <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </a>
            </div>
          </article>

          {/* Project 03: SHADOWROLL */}
          <article 
            className="project-plate rv in" 
            ref={(el) => platesRef.current[2] = el}
          >
            <div className="sheen"></div>
            <div className="edge"></div>

            <div>
              {/* Media Preview Frame */}
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.9)',
                position: 'relative'
              }}>
                <img 
                  src="/projects/shadowroll.png" 
                  alt="ShadowRoll Confidential DeFi Payroll Protocol" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy"
                />
              </div>

              {/* Sub-header info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="c-kicker" style={{ color: 'var(--o-hi)' }}>
                  <i></i>{t.projects.project3Kicker}
                </span>
                <span style={{ fontSize: '.72rem', color: 'var(--txt-mute)', fontFamily: 'var(--font-mono)' }}>
                  {t.projects.project3Period}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-.02em', marginBottom: '10px' }}>
                {t.projects.project3Title}
              </h3>

              <p style={{ fontSize: '.86rem', color: 'var(--txt-dim)', lineHeight: '1.65', marginBottom: '18px' }}>
                {t.projects.project3Desc}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                {['Next.js 14', 'TypeScript', 'Solidity 0.8.24', 'Arbitrum Sepolia', 'Wagmi v2', 'Viem', 'RainbowKit', 'iExec Nox TEE', 'Tailwind CSS'].map((tag, idx) => (
                  <span key={idx} style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '.72rem',
                    fontWeight: 600,
                    background: 'rgba(56,189,248,0.1)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56,189,248,0.2)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links: Live dApp & GitHub Repo */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="lede-cta" href="https://shadow-roll.vercel.app" target="_blank" rel="noopener noreferrer">
                <span>{t.projects.project3ActionLive}</span>
                <i>
                  <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </a>
              <a 
                className="lede-cta" 
                href="https://github.com/zennz-hash/ShadowRoll.git" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.18)' }}
              >
                <span>{t.projects.project3ActionCode}</span>
                <i>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </i>
              </a>
            </div>
          </article>

        </div>

        {/* ── Where to next ── */}
        <nav className="next rv in" aria-label="Next chapters">
          <span className="next-lbl">{t.about.nextCardLbl}</span>
          <div className="next-row">
            <button onClick={() => onNavigate('about')} className="next-card warm" type="button">
              <span className="nc-no">01</span>
              <span className="nc-name">{t.about.titleMain} <em>{t.about.titleEm}</em></span>
              <span className="nc-go">
                <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button onClick={() => onNavigate('skills')} className="next-card cool" type="button">
              <span className="nc-no">02</span>
              <span className="nc-name">{t.about.nextSkills} <em>{t.about.nextSkillsEm}</em></span>
              <span className="nc-go">
                <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button onClick={() => onNavigate('experience')} className="next-card warm" type="button">
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
