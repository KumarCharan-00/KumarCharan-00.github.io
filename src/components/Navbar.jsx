import React, { useState, useEffect } from 'react';
import { Cpu, Mail, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'AI Projects', href: '#personal-projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'AWS Sizing', href: '#aws-estimator' },
  { label: 'API Sandbox', href: '#api-sandbox' },
  { label: 'Tech Stack', href: '#skills' },
];

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Hero is ~100vh; after that we enter dark sections
    const handler = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Light navbar throughout entire page */
  const navBg    = 'rgba(255, 255, 255, 0.94)';
  const navBdr   = '1px solid rgba(0,0,0,0.06)';
  const textClr  = '#0d0d1a';
  const mutedClr = '#475569';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '11px 0' : '18px 0',
        background: navBg,
        backdropFilter: 'blur(18px) saturate(1.3)',
        borderBottom: navBdr,
        transition: 'all 0.35s ease',
      }}>
        <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Brand */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #7B42C4, #5C2E8D)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(92,46,141,0.35)',
            }}>
              <Cpu style={{ width: 20, height: 20, color: '#fff' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: textClr, display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.3s' }}>
                Kumar Charan M
                <span style={{
                  fontSize: '0.65rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase',
                  padding: '2px 9px', borderRadius: 6,
                  background: scrolled ? 'rgba(92,46,141,0.2)' : '#f0e8ff',
                  color: '#5C2E8D',
                  border: '1px solid rgba(92,46,141,0.25)',
                  display: 'inline-flex', alignItems: 'center', gap: 5, lineHeight: 1.5,
                  transition: 'all 0.3s',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#5C2E8D' }} />
                  Senior Engineer
                </span>
              </div>
              <p style={{ fontSize: '0.68rem', color: mutedClr, fontFamily: 'var(--font-mono)', margin: 0, transition: 'color 0.3s' }}>Java 21 · Python · AWS Cloud · AI Projects</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-desktop" style={{
            alignItems: 'center', gap: 2,
            background: 'rgba(0,0,0,0.03)',
            padding: '4px 6px', borderRadius: 99,
            border: '1px solid rgba(0,0,0,0.06)',
          }}>
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ color: mutedClr, transition: 'color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0d0d1a'; e.currentTarget.style.background = 'rgba(92,46,141,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = mutedClr; e.currentTarget.style.background = 'transparent'; }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={onOpenContact}
              className="btn-purple cta-desktop"
              style={{ fontSize: '0.8rem', padding: '9px 18px' }}
            >
              <Mail style={{ width: 14, height: 14 }} /> Get In Touch
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              aria-label="Toggle menu"
              style={{
                padding: 8, borderRadius: 8,
                background: mobileOpen ? 'rgba(92, 46, 141, 0.1)' : (scrolled ? 'rgba(0,0,0,0.04)' : 'rgba(0,0,0,0.04)'),
                border: mobileOpen ? '1px solid rgba(92, 46, 141, 0.25)' : '1px solid rgba(0,0,0,0.08)',
                color: mobileOpen ? '#5C2E8D' : mutedClr, cursor: 'pointer', transition: 'all 0.2s ease',
              }}
            >
              {mobileOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Clean Light Palette) */}
        {mobileOpen && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 16px 32px -8px rgba(15, 23, 42, 0.12)',
            padding: '16px 20px 22px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 14 }}>
              {NAV_ITEMS.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    color: '#1e293b',
                    fontWeight: 600,
                    padding: '10px 14px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(92, 46, 141, 0.08)'; e.currentTarget.style.color = '#5C2E8D'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1e293b'; }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button onClick={() => { setMobileOpen(false); onOpenContact(); }} className="btn-purple" style={{ width: '100%', padding: '12px 18px' }}>
              <Mail style={{ width: 15, height: 15 }} /> Get In Touch
            </button>
          </div>
        )}
      </header>

      <style>{`
        .nav-desktop { display: none; }
        .cta-desktop { display: none !important; }
        .mobile-toggle { display: flex; }
        @media (min-width: 960px) {
          .nav-desktop { display: flex !important; }
          .cta-desktop { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
