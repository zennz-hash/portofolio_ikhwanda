import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CVModal({ isOpen, onClose, cvUrl }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#9ca3af', '#4b5563']
      });
    } catch {
      // ignore
    }

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Ikhwanda-Pratama-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="chapter-overlay" onClick={onClose}>
      <div 
        className="chapter-modal cv-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="cv-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} color="#ffffff" style={{ flexShrink: 0 }} />
            <div>
              <div className="cv-title" style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                Curriculum Vitae — Ikhwanda Pratama
              </div>
              <div className="cv-sub" style={{ fontSize: '0.75rem', color: 'var(--txt-dim)', fontFamily: 'var(--font-mono)' }}>
                Junior Web Developer • Software Engineering
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleDownload}
              type="button"
              style={{
                padding: '8px 18px',
                fontSize: '0.8rem',
                fontWeight: 700,
                background: '#ffffff',
                color: '#08080a',
                borderRadius: '999px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)'
              }}
            >
              <Download size={14} />
              <span>Unduh Dokumen</span>
            </button>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '999px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Buka di tab baru"
            >
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onClose}
              type="button"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div style={{ flex: 1, position: 'relative', background: '#111215' }}>
          <iframe
            src={`${cvUrl}#toolbar=0&navpanes=0`}
            title="Ikhwanda Pratama CV"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
