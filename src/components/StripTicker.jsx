import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function StripTicker({ personal }) {
  const { t } = useLanguage();

  const techStacks = [
    { name: 'React', icon: '/tech-icons/react.svg' },
    { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
    { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
    { name: 'JavaScript', icon: '/tech-icons/javascript.svg' },
    { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
    { name: 'Express.js', icon: '/tech-icons/express.svg' },
    { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
    { name: 'Neon DB', icon: '/tech-icons/neondb.svg' },
    { name: 'Supabase', icon: '/tech-icons/supabase.svg' },
    { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss.svg' },
    { name: 'Ethereum / Web3', icon: '/tech-icons/ethereum.svg' },
    { name: 'Git', icon: '/tech-icons/git.svg' },
    { name: 'GitHub', icon: '/tech-icons/github.svg' },
    { name: 'Docker', icon: '/tech-icons/docker.svg' },
    { name: 'Linux', icon: '/tech-icons/linux.svg' },
    { name: 'VS Code', icon: '/tech-icons/vscode.svg' }
  ];

  return (
    <>
      <div className="strip rise d5">
        <div className="strip-in">
          {/* Ticker with Tech Logos */}
          <div className="ticker" aria-label="Technology Stack Logos">
            <div className="ticker-track" id="track">
              {techStacks.concat(techStacks).map((tech, idx) => (
                <div className="ticker-item" key={idx} title={tech.name}>
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="ticker-logo" 
                    width="22" 
                    height="22" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <span className="ticker-label">{tech.name}</span>
                  <span className="ticker-dot" aria-hidden="true">&bull;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Glass Dock */}
          <div className="dock glass">
            <a href={personal.websiteUrl} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2zm6.9-2.54A8 8 0 0 1 12 20v-2a4 4 0 0 0-4-4v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1.5a1.5 1.5 0 0 0 1.9 1.44z"/></svg>
              <span>{personal.website}</span>
            </a>

            <a href={`https://wa.me/62${personal.phone.replace(/[^0-9]/g, '').slice(1)}`} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.7-5c-.4-.7-.7-1.5-.7-2.2 0-.8.4-1.4.7-1.7.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c0 .2 0 .3-.1.5l-.3.4c-.1.1-.3.3-.1.5.4.7 1 1.3 1.6 1.8.5.3.8.5 1 .3l.6-.6c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.3 0 .1 0 .5-.2 1z"/></svg>
              <span>{personal.phone}</span>
            </a>

            <a href={`mailto:${personal.email}`} className="hi">
              <svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8L4.3 7h15.4L12 13z"/></svg>
              <span>{t.home.dockContact}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-cue mono">
        <span className="rail"></span> {t.home.scrollCue}
      </div>
    </>
  );
}
