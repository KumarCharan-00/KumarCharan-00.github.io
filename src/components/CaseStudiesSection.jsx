import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import { Layers, Server, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

export default function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const active = caseStudies[currentIndex] || caseStudies[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <section id="case-studies" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={2} />
      <div className="page-wrapper">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D',
            background: 'rgba(92,46,141,0.08)', padding: '4px 14px', borderRadius: 99,
            border: '1px solid rgba(92,46,141,0.2)', marginBottom: 14,
          }}>
            <Layers size={13} /> Selected Enterprise Work
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>
            Production Systems & Architecture
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>
            Deep-dives into enterprise Java microservices, Python cloud integrations, AWS serverless platforms, and PCI DSS 4.0 security systems built for production at Infomerica Inc.
          </p>
        </div>

        {/* Tabs & Carousel Arrows Header */}
        <div className="case-tabs-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          {caseStudies.map((s, idx) => (
            <button key={s.id} onClick={() => setCurrentIndex(idx)} className="case-tab-btn" style={{
              padding: '11px 20px', borderRadius: 10, fontWeight: 600, fontSize: '0.83rem',
              cursor: 'pointer', transition: 'all 0.25s ease',
              border: currentIndex === idx ? '1px solid #5C2E8D' : '1px solid #e2e8f0',
              background: currentIndex === idx ? 'linear-gradient(135deg, #7B42C4, #5C2E8D)' : '#f1f5f9',
              color: currentIndex === idx ? '#ffffff' : '#475569',
              boxShadow: currentIndex === idx ? '0 4px 16px rgba(92,46,141,0.3)' : 'none',
            }}>
              {s.title}
            </button>
          ))}
        </div>

        {/* Active Study Card with Carousel Nav Buttons */}
        <div className="glass-card case-card" style={{ padding: '38px 38px', border: '1px solid #e2e8f0', background: '#ffffff', position: 'relative' }}>

          {/* Header & Quick Slider Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 24, paddingBottom: 22, borderBottom: '1px solid #e2e8f0' }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#E8392B', background: '#fee2e2', padding: '3px 12px', borderRadius: 6, border: '1px solid #fca5a5', marginBottom: 10, fontWeight: 700 }}>
                {active.badge}
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 900, color: '#0f172a', marginBottom: 4 }}>{active.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)', margin: 0 }}>{active.subtitle}</p>
            </div>

            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '6px 14px', borderRadius: 8, background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#475569', whiteSpace: 'nowrap' }}>
              {active.category}
            </span>
          </div>

          {/* Summary */}
          <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.75, marginBottom: 28 }}>{active.summary}</p>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 36 }} className="case-metrics-grid">
            {active.metrics.map((m, i) => (
              <div key={i} style={{
                background: '#f8fafc', padding: '18px 16px', borderRadius: 12,
                border: '1px solid #e2e8f0', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#059669', marginBottom: 4 }}>{m.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Architecture + Features 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }} className="case-details-grid">
            {/* Architecture */}
            <div style={{ background: '#f8fafc', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Server size={17} color="#7B42C4" /> System Architecture
              </h4>
              {[
                ['API Gateway', active.architecture.gateway],
                ['Database', active.architecture.database],
                ['Messaging', active.architecture.messaging],
                ['DevOps & IaC', active.architecture.devops],
              ].map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, padding: '9px 0', borderBottom: i < 3 ? '1px solid #e2e8f0' : 'none' }}>
                  <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#64748b', flexShrink: 0, minWidth: 95 }}>{label}:</span>
                  <span style={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 600, textAlign: 'right' }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div style={{ background: '#f8fafc', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle size={17} color="#059669" /> Key Highlights
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {active.keyFeatures.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.81rem', color: '#334155', lineHeight: 1.6, marginBottom: 9 }}>
                    <span style={{ color: '#059669', marginTop: 4, flexShrink: 0 }}>●</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carousel Slider Controls Footer */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 22, borderTop: '1px solid #e2e8f0', gap: 10,
          }}>
            {/* Previous Case Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Case Study"
              className="case-nav-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                background: '#f8fafc', border: '1px solid #cbd5e1',
                color: '#334155', fontWeight: 700, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.borderColor = '#5C2E8D'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
            >
              <ChevronLeft size={18} />
              <span className="case-nav-text">Previous: <strong style={{ color: '#0f172a' }}>{prevStudy.title.split(' ')[0]}...</strong></span>
            </button>

            {/* Step Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? 20 : 8,
                    height: 8,
                    borderRadius: 99,
                    background: currentIndex === idx ? '#5C2E8D' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginLeft: 4 }}>
                {currentIndex + 1} / {caseStudies.length}
              </span>
            </div>

            {/* Next Case Button */}
            <button
              onClick={handleNext}
              aria-label="Next Case Study"
              className="case-nav-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                background: '#5C2E8D', color: '#ffffff',
                border: 'none', fontWeight: 700, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(92,46,141,0.3)', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7B42C4'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#5C2E8D'; }}
            >
              <span className="case-nav-text">Next: <strong style={{ color: '#ffffff' }}>{nextStudy.title.split(' ')[0]}...</strong></span>
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .case-card { padding: 38px !important; }
        @media (max-width: 768px) {
          .case-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .case-details-grid { grid-template-columns: 1fr !important; }
          .case-card { padding: 22px !important; }
        }
        @media (max-width: 640px) {
          .case-tabs-header {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            align-items: stretch !important;
            gap: 8px !important;
          }
          .case-tab-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 12px 16px !important;
          }
          .case-nav-text { display: none !important; }
          .case-nav-btn { padding: 10px 14px !important; }
        }
      `}</style>
    </section>
  );
}
