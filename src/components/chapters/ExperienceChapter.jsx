import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ExperienceChapter({ personal, onNavigate }) {
  const platesRef = useRef([]);
  const { t } = useLanguage();

  const experiWord = ['E', 'X', 'P', 'E', 'R', 'I'];
  const enceWord = ['E', 'N', 'C', 'E'];

  // Spotlight mouse tracking on glass fact cards
  useEffect(() => {
    const plates = platesRef.current.filter(Boolean);
    if (!plates.length) return;

    const cleanupFns = [];

    plates.forEach((el) => {
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
    <section className="chapter" id="experience">
      <div className="wrap">
        {/* Chapter Header */}
        <header className="ch-head rv in">
          <span className="ch-no">{t.experience.chapterNo}</span>
          <h2 className="ch-title">{t.experience.titleMain} <em>{t.experience.titleEm}</em></h2>
          <span className="ch-rule"></span>
        </header>

        {/* ── Banner: Photo Banner with Filled & Outlined Wordmark ── */}
        <div className="banner banner--photo rv in">
          <picture className="banner-bg">
            <img 
              src="/new.png" 
              alt="Ikhwanda Pratama Coding at Work" 
              width="868" 
              height="658" 
              decoding="async" 
            />
          </picture>

          <div className="banner-tl">
            <span className="banner-word dovde" aria-label="Experi">
              {experiWord.map((char, i) => (
                <span key={i} className="gl" style={{ '--i': i }}>{char}</span>
              ))}
            </span>
            <span className="banner-word dovde outline" aria-label="ence">
              {enceWord.map((char, i) => (
                <span key={i} className="gl" style={{ '--i': i + 6 }}>{char}</span>
              ))}
            </span>
          </div>

          <div className="rail">
            <span className="rail-lbl">Focus</span>
            <ul className="rail-list">
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Calcu.id</span><i>EdTech CMS</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>ShadowRoll</span><i>Web3 dApp</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>AriseHash</span><i>Web &amp; PRD Builder</i></li>
            </ul>
          </div>
        </div>

        {/* ── The Lede ── */}
        <div className="lede rv in">
          <p className="lede-text">
            <span className="s1">{t.experience.ledeLead}</span>
            {t.experience.ledeBody}
          </p>
          <a className="lede-cta" href={`mailto:${personal.email}`}>
            <span>{t.experience.getInTouch}</span>
            <i>
              <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </i>
          </a>
        </div>

        {/* ── Symmetrical 2-Column Experience Architecture Matching CV ── */}
        <div className="facts--experience rv in">

          {/* Left Column: Primary Timeline Track Record (Matching Official CV) */}
          <article 
            className="fact rv in" 
            ref={(el) => platesRef.current[0] = el}
          >
            <div className="sheen"></div>
            <div className="edge"></div>

            <header>
              <span className="f-no">01</span>
              <h4>{t.experience.trackTitle}</h4>
              <span className="f-yr">{t.experience.trackPeriod}</span>
            </header>

            <p style={{ fontSize: '.84rem', color: 'var(--txt-dim)', lineHeight: '1.55', marginBottom: '22px' }}>
              {t.experience.trackIntro}
            </p>

            <ol className="line line--track" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {/* Item 1: Calcu.id (2025 - 2026) */}
              <li style={{ paddingLeft: '22px', position: 'relative' }}>
                <span className="yr">{t.experience.item1Year}</span>
                <b style={{ fontSize: '1.16rem', color: '#ffffff', display: 'block', marginTop: '4px' }}>
                  {t.experience.item1Company}
                </b>
                <span className="role" style={{ color: 'var(--o-hi)', fontWeight: 600, fontSize: '.92rem' }}>
                  {t.experience.item1Role}
                </span>
                <span className="sub" style={{ display: 'block', marginTop: '8px', color: 'var(--txt-dim)', fontSize: '.86rem', lineHeight: '1.65' }}>
                  {t.experience.item1Desc}
                </span>
              </li>

              {/* Item 2: ShadowRoll (2026) */}
              <li style={{ paddingLeft: '22px', position: 'relative' }}>
                <span className="yr">{t.experience.item2Year}</span>
                <b style={{ fontSize: '1.16rem', color: '#ffffff', display: 'block', marginTop: '4px' }}>
                  {t.experience.item2Company}
                </b>
                <span className="role" style={{ color: 'var(--o-hi)', fontWeight: 600, fontSize: '.92rem' }}>
                  {t.experience.item2Role}
                </span>
                <span className="sub" style={{ display: 'block', marginTop: '8px', color: 'var(--txt-dim)', fontSize: '.86rem', lineHeight: '1.65' }}>
                  {t.experience.item2Desc}
                </span>
              </li>

              {/* Item 3: AriseHash (2026) */}
              <li style={{ paddingLeft: '22px', position: 'relative' }}>
                <span className="yr">{t.experience.item3Year}</span>
                <b style={{ fontSize: '1.16rem', color: '#ffffff', display: 'block', marginTop: '4px' }}>
                  {t.experience.item3Company}
                </b>
                <span className="role" style={{ color: 'var(--o-hi)', fontWeight: 600, fontSize: '.92rem' }}>
                  {t.experience.item3Role}
                </span>
                <span className="sub" style={{ display: 'block', marginTop: '8px', color: 'var(--txt-dim)', fontSize: '.86rem', lineHeight: '1.65' }}>
                  {t.experience.item3Desc}
                </span>
              </li>
            </ol>
          </article>

          {/* Right Column: Stacked Pillars & Engineering Standards */}
          <div className="facts-col">

            {/* Plate 02: Core Pillars */}
            <article 
              className="fact rv in" 
              ref={(el) => platesRef.current[1] = el}
            >
              <div className="sheen"></div>
              <div className="edge"></div>

              <header>
                <span className="f-no">02</span>
                <h4>{t.experience.pillarsTitle}</h4>
                <span className="f-yr">{t.experience.pillarsBadge}</span>
              </header>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '6px' }}>
                <div>
                  <b style={{ color: '#ffffff', fontSize: '.96rem', display: 'block', marginBottom: '4px' }}>
                    01 &middot; Frontend Excellence
                  </b>
                  <p style={{ color: 'var(--txt-dim)', fontSize: '.84rem', lineHeight: '1.55' }}>
                    React 19 &amp; Next.js App Router, modular component architecture, Tailwind CSS design systems, and Core Web Vitals optimization.
                  </p>
                </div>

                <div>
                  <b style={{ color: '#ffffff', fontSize: '.96rem', display: 'block', marginBottom: '4px' }}>
                    02 &middot; Backend &amp; Pipelines
                  </b>
                  <p style={{ color: 'var(--txt-dim)', fontSize: '.84rem', lineHeight: '1.55' }}>
                    Node.js runtime, Express REST routing, JWT authentication contracts, and LLM prompt pipelines for technical PRD automation.
                  </p>
                </div>

                <div>
                  <b style={{ color: '#ffffff', fontSize: '.96rem', display: 'block', marginBottom: '4px' }}>
                    03 &middot; Database &amp; Cloud
                  </b>
                  <p style={{ color: 'var(--txt-dim)', fontSize: '.84rem', lineHeight: '1.55' }}>
                    Relational schema modeling with PostgreSQL, serverless cloud databases (Neon DB), and Supabase BaaS with query indexing.
                  </p>
                </div>
              </div>
            </article>

            {/* Plate 03: Standar Rekayasa & Alur Kerja */}
            <article 
              className="fact rv in" 
              ref={(el) => platesRef.current[2] = el}
            >
              <div className="sheen"></div>
              <div className="edge"></div>

              <header>
                <span className="f-no">03</span>
                <h4>{t.experience.standardsTitle}</h4>
                <span className="f-yr">{t.experience.standardsBadge}</span>
              </header>

              <p style={{ fontSize: '.82rem', color: 'var(--txt-dim)', lineHeight: '1.5', marginBottom: '14px' }}>
                {t.experience.standardsIntro}
              </p>

              <ul className="dots-list">
                <li>Git Flow &amp; Atomic Commits</li>
                <li>Clean Code &amp; DRY Principles</li>
                <li>Separation of Concerns</li>
                <li>Modular Component Architecture</li>
                <li>REST API Contracts &amp; Types</li>
                <li>Agile &amp; Scrum Delivery</li>
                <li>Performance Audits</li>
              </ul>
            </article>

          </div>

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
            <button onClick={() => onNavigate('project')} className="next-card warm" type="button">
              <span className="nc-no">03</span>
              <span className="nc-name">{t.about.nextProjects} <em>{t.about.nextProjectsEm}</em></span>
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
