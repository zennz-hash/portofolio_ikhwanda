import React, { useState, useEffect } from 'react';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p = Math.min(100, p + Math.random() * 20 + 8);
      setProgress(Math.round(p));
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.classList.add('ready');
          if (onComplete) onComplete();
        }, 220);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  const numStr = String(progress).padStart(2, '0');

  return (
    <div id="pre" className={isDone ? 'done' : ''} aria-hidden={isDone}>
      <div className="pre-in">
        <div className="pre-row mono">
          <span>Loading portfolio</span>
          <span id="preTxt">{numStr}</span>
        </div>
        <div className="pre-num" id="preNum">{numStr}</div>
        <div className="pre-bar">
          <div className="pre-fill" id="preFill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="pre-row mono" style={{ marginTop: '10px' }}>
          <span>Ikhwanda Pratama</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
