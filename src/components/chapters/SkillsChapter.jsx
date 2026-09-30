import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function SkillsChapter({ personal, onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');
  const benchRefs = useRef([]);
  const { t } = useLanguage();

  const skillsWord = ['S', 'k', 'i', 'l', 'l', 's'];

  // ── Precision Industrial Benches (Authentic Reference Architecture - Anti AI-Slop) ──
  const skillBenches = [
    {
      id: 'frontend',
      number: '01',
      title: 'Frontend Architecture',
      category: 'frontend',
      period: 'UI & Systems',
      description: 'Modular component hierarchy, client state management, responsive layouts, and Core Web Vitals optimization.',
      capabilities: [
        'React 19 & Next.js App Router',
        'TypeScript Static Typing',
        'Tailwind CSS Design Systems',
        'SSR, SSG & Server Components',
        'Dynamic Animations & Transitions',
        'Responsive Mobile-First UI'
      ],
      tools: [
        {
          name: 'React.js',
          score: '10/10',
          isTop: true,
          width: '100%',
          icon: '/tech-icons/react.svg',
          n: 0
        },
        {
          name: 'Next.js',
          score: '9.5/10',
          isTop: true,
          width: '95%',
          icon: '/tech-icons/nextjs.svg',
          n: 1
        },
        {
          name: 'TypeScript',
          score: '9/10',
          isTop: false,
          width: '90%',
          icon: '/tech-icons/typescript.svg',
          n: 2
        },
        {
          name: 'JavaScript (ES6+)',
          score: '9.5/10',
          isTop: true,
          width: '95%',
          icon: '/tech-icons/javascript.svg',
          n: 3
        },
        {
          name: 'Tailwind CSS',
          score: '9.5/10',
          isTop: true,
          width: '95%',
          icon: '/tech-icons/tailwindcss.svg',
          n: 4
        }
      ]
    },
    {
      id: 'backend',
      number: '02',
      title: 'Backend & Pipelines',
      category: 'backend',
      period: 'Services & APIs',
      description: 'Asynchronous V8 runtime, RESTful contracts, middleware orchestration, and LLM automation pipelines.',
      capabilities: [
        'Node.js Server Runtime',
        'Express.js REST Routing',
        'HTTP Contracts & Error Handling',
        'LLM Prompt Pipelines (PRD Generator)',
        'JSON Contracts & JWT Security',
        'Asynchronous Stream Processing'
      ],
      tools: [
        {
          name: 'Node.js',
          score: '9/10',
          isTop: false,
          width: '90%',
          icon: '/tech-icons/nodejs.svg',
          n: 0
        },
        {
          name: 'Express.js',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/express.svg',
          n: 1
        },
        {
          name: 'RESTful API Contracts',
          score: '9/10',
          isTop: false,
          width: '90%',
          icon: '/tech-icons/nodejs.svg',
          n: 2
        },
        {
          name: 'LLM API Wrapper & Prompts',
          score: '9/10',
          isTop: true,
          width: '90%',
          isAI: true,
          icon: null,
          n: 3
        }
      ]
    },
    {
      id: 'database',
      number: '03',
      title: 'Databases & Cloud',
      category: 'database',
      period: 'Data Infrastructure',
      description: 'Relational data modeling, serverless cloud databases, query performance, and BaaS integration.',
      capabilities: [
        'PostgreSQL Relational Schema',
        'Neon Serverless Cloud Postgres',
        'Supabase Authentication & Storage',
        'MongoDB Document Collections',
        'SQL Indexing & Query Tuning',
        'Data Validation & Integrity'
      ],
      tools: [
        {
          name: 'PostgreSQL',
          score: '9/10',
          isTop: false,
          width: '90%',
          icon: '/tech-icons/postgresql.svg',
          n: 0
        },
        {
          name: 'Neon Cloud Database',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/neondb.svg',
          n: 1
        },
        {
          name: 'Supabase BaaS',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/supabase.svg',
          n: 2
        },
        {
          name: 'MongoDB',
          score: '8/10',
          isTop: false,
          width: '80%',
          icon: '/tech-icons/mongodb.svg',
          n: 3
        }
      ]
    },
    {
      id: 'web3_devops',
      number: '04',
      title: 'Web3 & DevOps Tooling',
      category: 'web3_devops',
      period: 'Protocols & Workflow',
      description: 'Decentralized smart contract interaction, distributed version control, and containerized development.',
      capabilities: [
        'Ethereum & EVM Chains',
        'Web3.js & Ethers.js State Handling',
        'Wallet Interoperability (MetaMask)',
        'Git Branching & Atomic Commits',
        'GitHub Pull Requests & CI/CD',
        'Linux Bash Shell & Scripting',
        'Docker Environment Isolation'
      ],
      tools: [
        {
          name: 'Ethereum & EVM Chains',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/ethereum.svg',
          n: 0
        },
        {
          name: 'Web3.js / Ethers',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/ethereum.svg',
          n: 1
        },
        {
          name: 'Git Version Control',
          score: '9.5/10',
          isTop: true,
          width: '95%',
          icon: '/tech-icons/git.svg',
          n: 2
        },
        {
          name: 'GitHub',
          score: '9/10',
          isTop: false,
          width: '90%',
          icon: '/tech-icons/github.svg',
          n: 3
        },
        {
          name: 'Linux CLI & Bash',
          score: '8.5/10',
          isTop: false,
          width: '85%',
          icon: '/tech-icons/linux.svg',
          n: 4
        },
        {
          name: 'Docker',
          score: '8/10',
          isTop: false,
          width: '80%',
          icon: '/tech-icons/docker.svg',
          n: 5
        },
        {
          name: 'VS Code IDE',
          score: '9.5/10',
          isTop: true,
          width: '95%',
          icon: '/tech-icons/vscode.svg',
          n: 6
        }
      ]
    }
  ];

  // Attach specular sheen and edge light listeners to each bench card
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cleanupFns = [];

    benchRefs.current.forEach(el => {
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
        const near = e.clientX > r.left - 120 && e.clientX < r.right + 120 &&
                     e.clientY > r.top - 120 && e.clientY < r.bottom + 120;
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
  }, [activeTab]);

  const filteredBenches = activeTab === 'all'
    ? skillBenches
    : skillBenches.filter(bench => bench.category === activeTab);

  return (
    <section className="chapter" id="skills">
      <div className="wrap">
        {/* Chapter Header with Per-Letter Wordmark Animation */}
        <header className="ch-head rv in">
          <span className="ch-no">{t.skills.chapterNo}</span>
          <h2 className="ch-title">{t.skills.titleMain} <em>{t.skills.titleEm}</em></h2>
          <span className="ch-rule"></span>
        </header>

        {/* ── Banner: Studio Tech, Wordmark, Cutout Photo, Tools Rail ── */}
        <div className="banner rv in">
          <picture className="banner-bg">
            <img 
              src="/studio_backdrop_ultra.jpg" 
              alt="Cyber Studio Backdrop" 
              width="1366" 
              height="623" 
              decoding="async" 
            />
          </picture>

          <span className="banner-word dovde" aria-label="Skills">
            {skillsWord.map((char, i) => (
              <span key={i} className="gl" style={{ '--i': i }}>{char}</span>
            ))}
          </span>

          <picture className="banner-cut">
            <img 
              src="/skills.png" 
              alt="Ikhwanda Pratama" 
              width="371" 
              height="510" 
              decoding="async" 
            />
          </picture>

          <div className="banner-claim">
            <p>{t.skills.heroClaim}</p>
            <div className="banner-figs">
              <span><b>2+</b> {t.skills.heroStatsYears}</span>
              <span><b>15+</b> {t.skills.heroStatsRepos}</span>
              <span><b>{t.skills.heroStatsArch}</b></span>
            </div>
          </div>

          <div className="rail" id="promptRail">
            <span className="rail-lbl">{t.skills.railTitle}</span>
            <ul className="rail-list">
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>React</span><i>Frontend</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Next.js</span><i>Fullstack</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Node.js</span><i>Backend</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Postgres</span><i>Database</i></li>
              <li><span style={{ fontWeight: 800, color: 'var(--o-hi)' }}>Web3</span><i>dApps</i></li>
            </ul>
          </div>
        </div>

        {/* ── The Lede ── */}
        <div className="lede rv in">
          <p className="lede-text">
            <span className="s1">Modern engineering requires more than just making pages look good.</span>
            I focus on modular component hierarchy, responsive UI systems, efficient REST API contracts, and real-time state synchronization.
            Every tool is chosen intentionally to balance performance, developer velocity, and maintainability.
          </p>
          <a className="lede-cta" href={personal.websiteUrl} target="_blank" rel="noopener noreferrer">
            <span>Explore Live Demo</span>
            <i>
              <svg className="ico ico-arrow" viewBox="0 0 24 24" width="14" height="14">
                <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </i>
          </a>
        </div>

        {/* ── Industrial Filter Tabs ── */}
        <div className="rv in" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px', 
          margin: 'clamp(28px, 4vh, 40px) 0 clamp(16px, 2vh, 24px)',
          justifyContent: 'center'
        }}>
          {[
            { id: 'all', label: 'All Benches' },
            { id: 'frontend', label: '01 · Frontend' },
            { id: 'backend', label: '02 · Backend & APIs' },
            { id: 'database', label: '03 · Databases & Cloud' },
            { id: 'web3_devops', label: '04 · Web3 & DevOps' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                fontSize: '.82rem',
                fontWeight: 600,
                border: activeTab === tab.id ? '1px solid var(--o-hi)' : '1px solid rgba(255,255,255,.08)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, var(--o), var(--o-deep))' : 'rgba(255,255,255,.03)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--txt-dim)',
                boxShadow: activeTab === tab.id ? '0 4px 18px rgba(37, 99, 235, 0.4)' : 'none',
                cursor: 'pointer',
                transition: 'all .3s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Precision Industrial Fact Plates (Anti AI-Slop) ── */}
        <div className="facts--skills rv in">
          {filteredBenches.map((bench, idx) => (
            <article 
              key={bench.id} 
              className="fact fact--too rv in"
              ref={el => benchRefs.current[idx] = el}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(20px, 2.2vw, 28px)',
                minHeight: '440px'
              }}
            >
              {/* Specular Sheen & Hairline Edge Glow for Pointer Spotlight */}
              <div className="sheen"></div>
              <div className="edge"></div>

              <div>
                {/* Header with Number, Title, and Blue Tick */}
                <header>
                  <span className="f-no">{bench.number}</span>
                  <h4>{bench.title}</h4>
                  <span className="f-yr">{bench.period}</span>
                </header>

                {/* Subtitle description */}
                <p style={{ 
                  fontSize: '.82rem', 
                  color: 'var(--txt-dim)', 
                  lineHeight: '1.55', 
                  marginBottom: '18px' 
                }}>
                  {bench.description}
                </p>

                {/* Capabilities Tags List (.dots-list) */}
                <div style={{ marginBottom: '22px' }}>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '.62rem', 
                    fontWeight: 700, 
                    letterSpacing: '.12em', 
                    textTransform: 'uppercase', 
                    color: 'var(--txt-mute)', 
                    marginBottom: '8px' 
                  }}>
                    Core Capabilities
                  </span>
                  <ul className="dots-list">
                    {bench.capabilities.map((cap, cIdx) => (
                      <li key={cIdx}>{cap}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools List with Official SVGs & Animated Meters (.tools) */}
              <div>
                <span style={{ 
                  display: 'block', 
                  fontSize: '.62rem', 
                  fontWeight: 700, 
                  letterSpacing: '.12em', 
                  textTransform: 'uppercase', 
                  color: 'var(--txt-mute)', 
                  marginBottom: '10px' 
                }}>
                  Stack Proficiency &amp; Scores
                </span>

                <ul className="tools">
                  {bench.tools.map((tool, tIdx) => (
                    <li key={tIdx}>
                      {tool.isAI ? (
                        <span className="tool tool--ai" aria-hidden="true">AI</span>
                      ) : (
                        <div className="tool--svg">
                          <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            width="24" 
                            height="24" 
                            loading="lazy" 
                          />
                        </div>
                      )}

                      <div>
                        <span className="t-top">
                          <b>{tool.name}</b>
                          <i className={`score ${tool.isTop ? 'top' : ''}`}>
                            {tool.score.split('/')[0]}<em>/{tool.score.split('/')[1]}</em>
                          </i>
                        </span>
                        <span className="bar" style={{ '--n': tool.n }}>
                          <span style={{ width: tool.width }}></span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
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
            <button onClick={() => onNavigate('project')} className="next-card cool" type="button">
              <span className="nc-no">03</span>
              <span className="nc-name">{t.about.nextProjects} <em>{t.about.nextProjectsEm}</em></span>
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
