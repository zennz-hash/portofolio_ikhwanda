import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function HeroSlab({ onSelectDeck, bloomRef }) {
  const slabRef = useRef(null);
  const deckRef = useRef(null);
  const deckScrollRef = useRef(null);
  const [activeSlot, setActiveSlot] = useState(0);
  const { t } = useLanguage();

  // Spotlight effect on slab (tracks mouse position)
  useEffect(() => {
    const slab = slabRef.current;
    if (!slab) return;

    const handlePointerMove = (e) => {
      const r = slab.getBoundingClientRect();
      const near = e.clientX > r.left - 160 && e.clientX < r.right + 160 &&
                   e.clientY > r.top - 160 && e.clientY < r.bottom + 160;
      slab.style.setProperty('--lit', near ? '1' : '0');
      if (near) {
        slab.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`);
        slab.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`);
      }
    };

    const handleBlur = () => {
      slab.style.setProperty('--lit', '0');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  // 3D Tilt effect on deck cards
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const handleDeckMove = (e) => {
      const r = deck.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;

      if (bloomRef?.current) {
        bloomRef.current.style.transform = `translate(calc(-50% + ${(nx * 60).toFixed(1)}px), calc(-50% + ${(ny * 30).toFixed(1)}px))`;
      }

      const slots = deck.querySelectorAll('.slot');
      slots.forEach((slot) => {
        const face = slot.querySelector('.face');
        if (!face) return;
        const b = slot.getBoundingClientRect();
        const inside = e.clientX >= b.left && e.clientX <= b.right && e.clientY >= b.top && e.clientY <= b.bottom;
        if (!inside) {
          face.style.setProperty('--rx', '0deg');
          face.style.setProperty('--ry', '0deg');
        } else {
          const sx = (e.clientX - b.left) / b.width - 0.5;
          const sy = (e.clientY - b.top) / b.height - 0.5;
          face.style.setProperty('--ry', `${(sx * 13).toFixed(2)}deg`);
          face.style.setProperty('--rx', `${(-sy * 11).toFixed(2)}deg`);
        }
      });
    };

    const handleDeckLeave = () => {
      const slots = deck.querySelectorAll('.slot');
      slots.forEach((slot) => {
        const face = slot.querySelector('.face');
        if (face) {
          face.style.setProperty('--rx', '0deg');
          face.style.setProperty('--ry', '0deg');
        }
      });
    };

    deck.addEventListener('pointermove', handleDeckMove, { passive: true });
    deck.addEventListener('pointerleave', handleDeckLeave);

    return () => {
      deck.removeEventListener('pointermove', handleDeckMove);
      deck.removeEventListener('pointerleave', handleDeckLeave);
    };
  }, [bloomRef]);

  // Mobile horizontal scroll listener for interactive indicator dots
  useEffect(() => {
    const el = deckScrollRef.current;
    if (!el) return;

    let timeout = null;
    const handleScroll = () => {
      if (timeout) cancelAnimationFrame(timeout);
      timeout = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
        const slots = el.querySelectorAll('.slot');
        if (!slots.length) return;
        let closestIdx = 0;
        let minDiff = Infinity;
        slots.forEach((slot, idx) => {
          const diff = Math.abs(slot.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        setActiveSlot(closestIdx);
      });
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (timeout) cancelAnimationFrame(timeout);
    };
  }, []);

  const scrollToSlot = (idx) => {
    const el = deckScrollRef.current;
    if (!el) return;
    const slots = el.querySelectorAll('.slot');
    if (slots[idx]) {
      slots[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveSlot(idx);
    }
  };

  // Letters of 'Portofolio' split into spans with --i
  const wordLetters = ['P', 'o', 'r', 't', 'o', 'f', 'o', 'l', 'i', 'o'];

  return (
    <section className="slab" ref={slabRef}>
      <div className="sheen"></div>
      <div className="edge"></div>
      <div className="slab-rivets"><i></i><i></i><i></i><i></i></div>

      {/* Header */}
      <header className="head">
        <div>
          <div className="tagline rise d1">
            <i></i><span>Portfolio</span> <b>2026</b> <i></i><span>{t.home.roleSub}</span>
          </div>

          <h1 className="title" id="title">
            <span className="wm-box">
              <span className="wordmark dovde" aria-label="Portofolio">
                {wordLetters.map((char, idx) => (
                  <span 
                    key={idx} 
                    className="gl" 
                    style={{ '--i': idx }} 
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
            <span className="badge mono">2026</span>
          </h1>

          <div className="ident rise d3">
            <p className="who">
              <span className="who-thin">Ikhwanda</span>
              <span className="who-fat">Pratama</span>
            </p>

            <ol className="roles">
              <li><i>01</i>{t.home.taglineFullStack.replace(/^01\s*/, '')}</li>
              <li><i>02</i>{t.home.taglineReact.replace(/^02\s*/, '')}</li>
              <li><i>03</i>{t.home.taglineWeb3.replace(/^03\s*/, '')}</li>
            </ol>

            <dl className="spec">
              <div>
                <dt>{t.home.expLabel}</dt>
                <dd><b>2+</b> {t.home.expYears}</dd>
              </div>
              <div>
                <dt>{t.home.basedLabel}</dt>
                <dd>{t.home.basedLocation}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Callout */}
        <div className="callout rise d4">
          <span className="pill-pulse">
            <span className="pill-txt">{t.home.pickCard}</span>
            <span className="pill-tag mono">{t.home.decksCount}</span>
          </span>
          <span className="cue mono">
            <i className="cue-line"></i> {t.home.hoverToReveal}
          </span>
        </div>
      </header>

      {/* Deck Cards Scroll */}
      <div className="deck-scroll" ref={deckScrollRef}>
        <div className="deck" id="deck" ref={deckRef}>

          {/* Slot 01: About (Ikhwanda's Authentic Photo) */}
          <div className="slot" style={{ '--i': 0 }} onClick={() => onSelectDeck('about')}>
            <div className="card warm card--intro">
              <div className="face">
                <div className="card-bg"></div>
                <div className="card-halo"></div>
                
                <picture>
                  <img 
                    className="card-photo" 
                    src="/ikhwanda-hero.png" 
                    alt="About Me" 
                    width="620" 
                    height="588" 
                    draggable="false" 
                    decoding="async" 
                  />
                </picture>

                <div className="card-vig"></div>
                <div className="card-rivets"><i></i><i></i></div>
                <span className="card-no">01</span>
                <h2 className="card-title">{t.home.cardAbout}</h2>
                
                <div className="plate">
                  <span className="lbl">{t.home.cardAboutSub}</span>
                  <span className="go">
                    <svg className="ico ico-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="14" height="14">
                      <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="shine"></div>
              </div>
            </div>
          </div>

          {/* Slot 02: Skills (User photo: skills.png) */}
          <div className="slot" style={{ '--i': 1 }} onClick={() => onSelectDeck('skills')}>
            <div className="card cool card--prompter">
              <div className="face">
                <div className="card-bg"></div>
                <div className="card-halo"></div>

                <picture>
                  <img 
                    className="card-photo" 
                    src="/skills.png" 
                    alt="Skills" 
                    width="620" 
                    height="525" 
                    draggable="false" 
                    decoding="async" 
                  />
                </picture>

                <div className="card-vig"></div>
                <div className="card-rivets"><i></i><i></i></div>
                <span className="card-no">02</span>
                <h2 className="card-title">{t.home.cardSkills}</h2>

                <div className="plate">
                  <span className="lbl">{t.home.cardSkillsSub}</span>
                  <span className="go">
                    <svg className="ico ico-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="14" height="14">
                      <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="shine"></div>
              </div>
            </div>
          </div>

          {/* Slot 03: Project (User photo: project.png) */}
          <div className="slot" style={{ '--i': 2 }} onClick={() => onSelectDeck('project')}>
            <div className="card warm card--editing">
              <div className="face">
                <div className="card-bg"></div>
                <div className="card-halo"></div>

                <picture>
                  <img 
                    className="card-photo" 
                    src="/project.png" 
                    alt="Project" 
                    width="620" 
                    height="567" 
                    draggable="false" 
                    decoding="async" 
                  />
                </picture>

                <div className="card-vig"></div>
                <div className="card-rivets"><i></i><i></i></div>
                <span className="card-no">03</span>
                <h2 className="card-title">{t.home.cardProject}</h2>

                <div className="plate">
                  <span className="lbl">{t.home.cardProjectSub}</span>
                  <span className="go">
                    <svg className="ico ico-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="14" height="14">
                      <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="shine"></div>
              </div>
            </div>
          </div>

          {/* Slot 04: Experience (User photo: new.png) */}
          <div className="slot" style={{ '--i': 3 }} onClick={() => onSelectDeck('experience')}>
            <div className="card cool card--photo">
              <div className="face">
                <div className="card-bg"></div>
                <div className="card-halo"></div>

                <picture>
                  <img 
                    className="card-photo" 
                    src="/new.png" 
                    alt="Experience" 
                    width="868" 
                    height="658" 
                    draggable="false" 
                    decoding="async" 
                  />
                </picture>

                <div className="card-vig"></div>
                <div className="card-rivets"><i></i><i></i></div>
                <span className="card-no">04</span>
                <h2 className="card-title">Experi<br />ence</h2>

                <div className="plate">
                  <span className="lbl">{t.home.cardExpSub}</span>
                  <span className="go">
                    <svg className="ico ico-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="14" height="14">
                      <path d="M7 17 17 7M9.2 7H17v7.8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="shine"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Swipe dots for mobile */}
      <div className="dots" id="dots" role="tablist" aria-label="Mobile cards navigation">
        {[0, 1, 2, 3].map((idx) => (
          <button 
            key={idx}
            type="button" 
            className={activeSlot === idx ? 'on' : ''} 
            onClick={() => scrollToSlot(idx)}
            aria-label={`Jump to Card ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
