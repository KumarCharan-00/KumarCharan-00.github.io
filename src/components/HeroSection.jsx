import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../config/profile';

/* ─── Geometric Bauhaus Mosaic (right panel) ─── */
function GeometricMosaic() {
  const C = 110; // cell size
  const W = C * 4;
  const H = C * 5;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    >
      {/* White base */}
      <rect width={W} height={H} fill="#ffffff" />

      {/* ROW 0 — top strip */}
      {/* (0,0) Yellow triangle top-left */}
      <polygon points={`0,0 ${C},0 0,${C}`} fill="#F9BE00" />
      {/* (1,0) Purple circle on white */}
      <circle cx={C * 1.5} cy={C * 0.5} r={C * 0.5} fill="#5C2E8D" />
      {/* (2,0) Yellow */}
      <rect x={C * 2} y={0} width={C} height={C} fill="#F9BE00" />
      {/* (3,0) Purple + yellow corner triangle */}
      <rect x={C * 3} y={0} width={C} height={C} fill="#5C2E8D" />
      <polygon points={`${C * 4},0 ${C * 4},${C} ${C * 3},${C}`} fill="#F9BE00" />

      {/* ROW 1 — 4 distinct cells for colour variety */}
      <rect x={0} y={C} width={C} height={C} fill="#F9BE00" />
      <rect x={C} y={C} width={C} height={C} fill="#5C2E8D" />
      <rect x={C * 2} y={C} width={C} height={C} fill="#E8392B" />
      <circle cx={C * 2.5} cy={C * 1.5} r={C * 0.4} fill="#F9BE00" />
      <rect x={C * 3} y={C} width={C} height={C} fill="#5C2E8D" />
      <circle cx={C * 3} cy={C * 1.5} r={C * 0.44} fill="#E8392B" />

      {/* LARGE PURPLE TRIANGLE spanning rows 2-4 left edge */}
      <polygon points={`0,${C * 2} ${C * 2},${C} 0,${C * 4}`} fill="#5C2E8D" />

      {/* ROW 2 — right side: yellow / red / yellow+white D */}
      <rect x={C} y={C * 2} width={C} height={C} fill="#F9BE00" />
      <rect x={C * 2} y={C * 2} width={C} height={C} fill="#E8392B" />
      <rect x={C * 3} y={C * 2} width={C} height={C} fill="#F9BE00" />
      <circle cx={C * 3} cy={C * 2.5} r={C * 0.44} fill="#5C2E8D" />

      {/* ROW 3 — split: yellow | red | purple | yellow */}
      <rect x={0} y={C * 3} width={C} height={C} fill="#F9BE00" />
      <rect x={C} y={C * 3} width={C} height={C} fill="#E8392B" />
      <rect x={C * 2} y={C * 3} width={C} height={C} fill="#5C2E8D" />
      <rect x={C * 3} y={C * 3} width={C} height={C} fill="#F9BE00" />
      <polygon points={`${C * 3},${C * 3} ${C * 4},${C * 3} ${C * 3},${C * 4}`} fill="#E8392B" />

      {/* ROW 4 — bottom: purple | yellow | red+arc | purple+yellow tri */}
      <rect x={0} y={C * 4} width={C} height={C} fill="#5C2E8D" />
      <rect x={C} y={C * 4} width={C} height={C} fill="#F9BE00" />
      <rect x={C * 2} y={C * 4} width={C} height={C} fill="#E8392B" />
      <path d={`M${C * 2},${C * 5} A${C},${C} 0 0,1 ${C * 3},${C * 4}`} fill="#ffffff" />
      <rect x={C * 3} y={C * 4} width={C} height={C} fill="#5C2E8D" />
      <polygon points={`${C * 4},${C * 4} ${C * 3},${C * 5} ${C * 4},${C * 5}`} fill="#F9BE00" />
    </svg>
  );
}

/* ─── Laptop SVG Workspace Illustration ─── */
function LaptopSVG() {
  return (
    <svg
      width="460"
      height="360"
      viewBox="0 0 460 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Developer workspace illustration"
    >
      {/* Shadow */}
      <ellipse cx="225" cy="328" rx="175" ry="9" fill="rgba(92,46,141,0.12)" />

      {/* Keyboard base */}
      <rect x="48" y="274" width="354" height="40" rx="8" fill="#1e293b" />
      <rect x="58" y="282" width="334" height="24" rx="4" fill="#111827" />
      {[62, 86, 110, 134, 158, 182, 206, 230, 254, 278, 302, 326].map((x, i) => (
        <rect key={i} x={x} y={285} width={18} height={11} rx="2" fill="#1e293b" />
      ))}
      {/* Trackpad */}
      <rect x="184" y="298" width="82" height="5" rx="3" fill="#243044" />

      {/* Screen hinge */}
      <rect x="48" y="267" width="354" height="10" rx="5" fill="#334155" />

      {/* Screen outer casing */}
      <rect x="48" y="44" width="354" height="228" rx="12" fill="#1e293b" />

      {/* Screen glass */}
      <rect x="60" y="56" width="330" height="208" rx="7" fill="#0a0f1a" />

      {/* Browser / title bar */}
      <rect x="60" y="56" width="330" height="26" rx="7" fill="#141c2e" />
      <circle cx="78" cy="69" r="5.5" fill="#ef4444" opacity="0.85" />
      <circle cx="95" cy="69" r="5.5" fill="#f59e0b" opacity="0.85" />
      <circle cx="112" cy="69" r="5.5" fill="#22c55e" opacity="0.85" />
      <rect x="128" y="63" width="188" height="12" rx="6" fill="#0a0f1a" />
      <rect x="136" y="67" width="120" height="4" rx="2" fill="#374151" />

      {/* File tree sidebar */}
      <rect x="60" y="82" width="62" height="182" fill="#0f1623" />
      {[
        { y: 94, w: 34, color: '#fbbf24' },
        { y: 108, w: 28, color: '#60a5fa' },
        { y: 122, w: 30, color: '#34d399' },
        { y: 136, w: 26, color: '#34d399' },
        { y: 150, w: 32, color: '#f97316' },
        { y: 164, w: 24, color: '#34d399' },
        { y: 178, w: 28, color: '#a78bfa' },
      ].map((item, i) => (
        <React.Fragment key={i}>
          <rect x="68" y={item.y} width="7" height="7" rx="1" fill={item.color} opacity="0.8" />
          <rect x="79" y={item.y + 1} width={item.w} height="4" rx="1" fill="#374151" />
        </React.Fragment>
      ))}

      {/* Line number gutter */}
      <rect x="122" y="82" width="20" height="182" fill="#0d1626" />
      {[94, 108, 122, 136, 150, 164, 178, 192, 206, 220, 234, 248].map((y, i) => (
        <rect key={i} x="126" y={y + 1} width="12" height="4" rx="1" fill="#2d3748" />
      ))}

      {/* Code content */}
      <rect x="150" y="95" width="90" height="5" rx="2" fill="#34d399" />
      <rect x="150" y="109" width="32" height="5" rx="2" fill="#60a5fa" />
      <rect x="186" y="109" width="50" height="5" rx="2" fill="#fbbf24" />
      <rect x="240" y="109" width="24" height="5" rx="2" fill="#e2e8f0" />
      <rect x="158" y="123" width="48" height="5" rx="2" fill="#34d399" />
      <rect x="158" y="137" width="30" height="5" rx="2" fill="#60a5fa" />
      <rect x="192" y="137" width="58" height="5" rx="2" fill="#e2e8f0" />
      <rect x="254" y="137" width="48" height="5" rx="2" fill="#a78bfa" />
      <rect x="158" y="151" width="58" height="5" rx="2" fill="#34d399" />
      <rect x="158" y="165" width="30" height="5" rx="2" fill="#60a5fa" />
      <rect x="192" y="165" width="68" height="5" rx="2" fill="#fbbf24" />
      <rect x="166" y="179" width="26" height="5" rx="2" fill="#a78bfa" />
      <rect x="196" y="179" width="105" height="5" rx="2" fill="#e2e8f0" />
      <rect x="150" y="197" width="8" height="5" rx="2" fill="#4b5563" />
      <rect x="162" y="197" width="125" height="5" rx="2" fill="#4b5563" />
      <rect x="150" y="211" width="22" height="5" rx="2" fill="#60a5fa" />
      <rect x="176" y="211" width="18" height="5" rx="2" fill="#60a5fa" />
      <rect x="198" y="211" width="72" height="5" rx="2" fill="#fbbf24" />
      <rect x="158" y="225" width="28" height="5" rx="2" fill="#a78bfa" />
      <rect x="190" y="225" width="24" height="5" rx="2" fill="#a78bfa" />
      <rect x="218" y="225" width="100" height="5" rx="2" fill="#e2e8f0" />
      <rect x="150" y="239" width="14" height="5" rx="2" fill="#e2e8f0" />
      <rect x="168" y="239" width="5" height="8" rx="1" fill="#5C2E8D" opacity="0.9" />

      {/* Status bar */}
      <rect x="60" y="250" width="330" height="14" rx="3" fill="#0d1626" />
      <rect x="68" y="255" width="46" height="4" rx="2" fill="#34d399" />
      <rect x="120" y="255" width="38" height="4" rx="2" fill="#60a5fa" />
      <rect x="310" y="255" width="48" height="4" rx="2" fill="#5C2E8D" opacity="0.7" />

      {/* Coffee mug */}
      <rect x="8" y="282" width="30" height="28" rx="7" fill="#5C2E8D" />
      <ellipse cx="23" cy="282" rx="15" ry="5" fill="#7B42C4" />
      <path d="M38 290 Q50 290 50 296 Q50 304 38 304" stroke="#5C2E8D" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx="23" cy="282" rx="8" ry="2.5" fill="#e9d5ff" opacity="0.5" />
      <path d="M15 277 Q19 270 15 263" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M23 275 Q27 268 23 261" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Geometric accents — matching the mosaic palette */}
      <polygon points="418,54 442,54 430,76" fill="#5C2E8D" opacity="0.5" />
      <circle cx="432" cy="100" r="13" fill="#E8392B" opacity="0.4" />
      <rect x="417" y="122" width="22" height="22" rx="3" fill="#F9BE00" opacity="0.4" transform="rotate(12 428 133)" />
      <circle cx="432" cy="160" r="7" fill="#5C2E8D" opacity="0.4" />
      <circle cx="18" cy="250" r="16" stroke="#5C2E8D" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
}

/* ─── Hero Section ─── */
export default function HeroSection({ onOpenContact }) {
  const laptopRef = useRef(null);

  /* Scroll-driven laptop 3D rotation — keep base translateY(-50%) since laptop is abs-positioned */
  useEffect(() => {
    const handleScroll = () => {
      if (!laptopRef.current) return;
      const progress = Math.min(window.scrollY / 480, 1);
      laptopRef.current.style.transform = `perspective(900px) rotateY(${progress * 14}deg) rotateX(${progress * -5}deg) scale(${1 - progress * 0.04})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = ['Java · Spring Boot', 'Python · AI Agents', 'AWS Serverless', 'Microservices', 'Enterprise Apps'];
  const metrics = [
    { value: '4+ Years', label: 'Enterprise Experience', sub: 'Java · Python · AWS' },
    { value: '50%+', label: 'Lambda Cold Start Cut', sub: 'Provisioned Concurrency' },
    { value: 'PCI DSS 4.0', label: 'Security Compliance', sub: 'Tokenization & mTLS Auth' },
    { value: 'LLM Agents', label: 'AI / ML Engineering', sub: 'LlamaIndex · RAG Pipelines' },
  ];

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ══ TWO-ZONE HERO — laptop overlaid at boundary ══ */}
      <div className="hero-main" style={{ display: 'flex', minHeight: '100vh', background: '#fff', position: 'relative', overflow: 'hidden' }}>

        {/* ── Zone 1: Text content ── */}
        <div
          className="hero-text-zone"
          style={{
            flex: '0 0 60%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '8rem',
            paddingBottom: '4rem',
            paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2 + 2rem))',
            paddingRight: 'clamp(2rem, 4vw, 5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* ── Ambient radial gradient glow behind text zone ── */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 45%, rgba(92, 46, 141, 0.07) 0%, rgba(249, 190, 0, 0.04) 45%, transparent 75%)',
            pointerEvents: 'none',
          }} />

          {/* ── Architectural vertical grid line + centered vertical badge on left margin ── */}
          <div className="hero-gutter-line" style={{
            position: 'absolute',
            left: 'calc((100vw - 1200px) / 2 - 28px)',
            top: '160px',
            bottom: '60px',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(92, 46, 141, 0.22) 15%, rgba(92, 46, 141, 0.22) 85%, transparent)',
            pointerEvents: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}>
            <div className="hero-gutter-badge" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
              transformOrigin: 'center center',
              fontSize: '0.6rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.22em',
              color: 'rgba(92, 46, 141, 0.55)',
              fontWeight: 800,
              whiteSpace: 'nowrap',
              padding: '0 12px'
            }}>
              SYSTEM ARCHITECT // ENTERPRISE JAVA, PYTHON & AWS
            </div>
          </div>

          <div style={{ maxWidth: 520, position: 'relative', zIndex: 1 }}>
            {/* Greeting */}
            <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#5C2E8D', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              Hi, I'm
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(3rem, 4.8vw, 5.2rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: '#0d0d1a',
              letterSpacing: '-0.04em',
              marginBottom: 20,
            }}>
              Kumar<br />Charan M
            </h1>

            {/* Role badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 16px', borderRadius: 99,
              background: '#f0e8ff', border: '1px solid rgba(92,46,141,0.2)',
              marginBottom: 20,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#5C2E8D', boxShadow: '0 0 8px rgba(92,46,141,0.5)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5C2E8D', letterSpacing: '0.04em' }}>
                SENIOR SOFTWARE ENGINEER
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: 1.7, marginBottom: 26 }}>
              I build{' '}
              <strong style={{ color: '#0d0d1a', fontWeight: 700 }}>Enterprise Java Applications</strong>,{' '}
              <strong style={{ color: '#0d0d1a', fontWeight: 700 }}>Microservices</strong>,{' '}
              <strong style={{ color: '#0d0d1a', fontWeight: 700 }}>AI agents</strong> and{' '}
              <strong style={{ color: '#0d0d1a', fontWeight: 700 }}>AWS cloud systems</strong>{' '}
              — with 4+ years expertise in turning complex requirements into scalable production software
            </p>

            {/* Specialty chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 34 }}>
              {specialties.map((s, i) => {
                const colors = ['#5C2E8D', '#E8392B', '#F9BE00', '#5C2E8D', '#E8392B'];
                const textColors = ['#fff', '#fff', '#1a0d00', '#fff', '#fff'];
                return (
                  <span key={i} style={{
                    padding: '5px 14px', borderRadius: 99,
                    background: colors[i], color: textColors[i],
                    fontSize: '0.78rem', fontWeight: 700,
                  }}>{s}</span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href="#case-studies"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 26px', borderRadius: 10,
                  background: '#5C2E8D', color: '#fff',
                  fontWeight: 800, fontSize: '0.92rem', textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(92,46,141,0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7B42C4'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#5C2E8D'; e.currentTarget.style.transform = ''; }}
              >
                Explore My Work <ArrowRight size={17} />
              </a>

              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', borderRadius: 10,
                  background: '#E8392B', color: '#fff',
                  border: 'none', fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(232,57,43,0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FF5A4D'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#E8392B'; e.currentTarget.style.transform = ''; }}
              >
                <Mail size={15} /> Get In Touch
              </button>

              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '13px 20px', borderRadius: 10,
                  background: 'transparent', color: '#374151',
                  border: '1.5px solid #d1d5db',
                  fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#5C2E8D'; e.currentTarget.style.color = '#5C2E8D'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151'; }}
              >
                <ExternalLink size={14} /> Resume
              </a>

              {/* GitHub Link */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '13px 18px', borderRadius: 10,
                  background: '#181717', color: '#fff',
                  fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#333333'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#181717'; e.currentTarget.style.transform = ''; }}
              >
                <Github size={15} /> GitHub
              </a>

              {/* LinkedIn Link */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '13px 20px', borderRadius: 10,
                  background: 'transparent', color: '#374151',
                  border: '1.5px solid #d1d5db',
                  fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#5C2E8D'; e.currentTarget.style.color = '#5C2E8D'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151'; }}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ── Zone 2: Geometric Mosaic ── */}
        <div
          className="hero-mosaic-zone"
          style={{
            flex: '0 0 40%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <GeometricMosaic />
          {/* Subtle gradient overlay on left edge of mosaic zone to add contrast behind laptop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(13, 13, 26, 0.28) 0%, rgba(13, 13, 26, 0.1) 45%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* ── 3D Laptop overlay — floats seamlessly at the text / mosaic boundary ── */}
        <div
          className="hero-laptop-overlay"
          style={{
            position: 'absolute',
            left: 'calc(60% - 240px)',
            top: '53%',
            transform: 'translateY(-50%)',
            width: 640,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          {/* Soft borderless ambient radial glow centered behind laptop */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110%',
            height: '110%',
            background: 'radial-gradient(ellipse at center, rgba(61, 27, 96, 0.35) 0%, rgba(92, 46, 141, 0.15) 50%, transparent 75%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Laptop image with scroll-driven 3D rotation & multi-layered realistic drop shadows */}
          <div
            ref={laptopRef}
            style={{
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.12s ease-out',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              filter: `
                drop-shadow(0 30px 60px rgba(0,0,0,0.5))
                drop-shadow(0 12px 24px rgba(13,13,26,0.35))
                drop-shadow(0 2px 6px rgba(0,0,0,0.25))
              `,
            }}
          >
            <img
              src="/3d-laptop.png"
              alt="Developer workspace"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ══ METRICS BAR (dark purple — like reference bottom section) ══ */}
      <div style={{ background: '#3D1B60', padding: '2.8rem 0', borderTop: '4px solid #F9BE00' }}>
        <div className="page-wrapper">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem 2rem', position: 'relative' }}
            className="metrics-bar-grid"
          >
            {metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                {i > 0 && (
                  <div style={{ position: 'absolute', left: 0, top: '10%', height: '80%', width: 1, background: 'rgba(255,255,255,0.1)' }} />
                )}
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 5 }}>{m.value}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#F9BE00', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#e9d5ff', opacity: 0.8 }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-gutter-line { display: none !important; }
        .hero-gutter-badge { display: none !important; }
        @media (min-width: 1440px) {
          .hero-gutter-line { display: flex !important; }
          .hero-gutter-badge { display: block !important; }
        }
        @media (max-width: 1100px) {
          .hero-main { flex-direction: column !important; min-height: auto !important; }
          /* Mobile: text → mosaic (background) → laptop overlaid on mosaic */
          .hero-text-zone    { flex: none !important; padding: 6.5rem 1.8rem 2.5rem !important; order: 1; }
          /* Mosaic height adjusted to serve as a rich banner backdrop */
          .hero-mosaic-zone  { flex: none !important; height: 330px !important; width: 100% !important; order: 2; }
          .hero-laptop-overlay {
            order: 3;
            position: relative !important; left: auto !important; top: auto !important;
            transform: none !important;
            width: 88% !important; max-width: 480px !important;
            /* Pull laptop UP over mosaic with ZERO bottom margin to eliminate white gap */
            margin: -290px auto 0 !important;
            display: block;
            z-index: 20 !important;
          }
        }
        @media (max-width: 600px) {
          .hero-text-zone    { padding: 5.5rem 1.25rem 2rem !important; }
          .hero-mosaic-zone  { height: 320px !important; }
          .hero-laptop-overlay {
            width: 90% !important; max-width: 420px !important;
            margin-top: -280px !important;
            margin-bottom: 0 !important;
          }
          .metrics-bar-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
