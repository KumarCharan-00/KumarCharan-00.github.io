import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { Coffee, Cloud, Database, Cpu, CheckCircle, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

const ICON_MAP = { Coffee, Cloud, Database, Cpu, Terminal };

export default function SkillsMatrix() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeCat = skillsCategories[currentIndex] || skillsCategories[0];
  const Icon = ICON_MAP[activeCat.icon] || Cpu;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skillsCategories.length) % skillsCategories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skillsCategories.length);
  };

  const prevCat = skillsCategories[(currentIndex - 1 + skillsCategories.length) % skillsCategories.length];
  const nextCat = skillsCategories[(currentIndex + 1) % skillsCategories.length];

  return (
    <section id="skills" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={7} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D', background: 'rgba(92,46,141,0.08)', padding: '4px 14px', borderRadius: 99, border: '1px solid rgba(92,46,141,0.2)', marginBottom: 14 }}>
            <Cpu size={13} /> Engineering Stack
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>Technical Competencies & Stack</h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>
            Comprehensive production experience spanning enterprise <strong style={{ color: '#0f172a' }}>Java microservices</strong>, <strong style={{ color: '#0f172a' }}>Python AI/ML pipelines</strong>, <strong style={{ color: '#0f172a' }}>AWS serverless cloud</strong>, and full-cycle DevOps & security.
          </p>
        </div>

        {/* Section Category Tabs */}
        <div className="skills-tabs-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="skills-tab-btn"
              style={{
                padding: '11px 20px', borderRadius: 10, fontWeight: 600, fontSize: '0.83rem',
                cursor: 'pointer', transition: 'all 0.25s ease',
                border: currentIndex === idx ? `1px solid ${cat.color}` : '1px solid #e2e8f0',
                background: currentIndex === idx ? `linear-gradient(135deg, ${cat.color}, #3D1B60)` : '#f1f5f9',
                color: currentIndex === idx ? '#ffffff' : '#475569',
                boxShadow: currentIndex === idx ? `0 4px 16px ${cat.color}40` : 'none',
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Card */}
        <div className="glass-card skills-card" style={{ padding: '38px 38px', border: '1px solid #e2e8f0', background: '#ffffff', position: 'relative' }}>
          {/* Card Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `${activeCat.color}15`, border: `1px solid ${activeCat.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <Icon size={22} color={activeCat.color} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>{activeCat.category}</h3>
                <p style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)', margin: 0, marginTop: 2 }}>
                  {activeCat.skills.length} Production Technologies & Tools
                </p>
              </div>
            </div>

            {/* Category title & icon header */}
          </div>

          {/* Skill Items Grid (2 columns inside the card) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 32 }} className="skills-items-grid">
            {activeCat.skills.map((skill, si) => (
              <div key={si} className="skill-item-card" style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10,
                background: '#f8fafc', padding: '13px 18px', borderRadius: 10,
                border: '1px solid #e2e8f0', transition: 'all 0.2s ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={15} color={activeCat.color} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{skill.name}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  {skill.tag && (
                    <span style={{
                      fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: activeCat.color,
                      background: `${activeCat.color}15`, padding: '3px 9px', borderRadius: 6,
                      border: `1px solid ${activeCat.color}30`, fontWeight: 700
                    }}>
                      {skill.tag}
                    </span>
                  )}
                  {skill.exp && (
                    <span style={{
                      fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: '#64748b',
                      background: '#ffffff', padding: '3px 9px', borderRadius: 6,
                      border: '1px solid #cbd5e1'
                    }}>
                      {skill.exp}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Slider Controls Footer (Strictly Below) */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 22, borderTop: '1px solid #e2e8f0', gap: 10,
          }}>
            {/* Previous Category Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Category"
              className="skills-nav-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                background: '#f8fafc', border: '1px solid #cbd5e1',
                color: '#334155', fontWeight: 700, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.borderColor = activeCat.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
            >
              <ChevronLeft size={18} />
              <span className="skills-nav-text">Previous: <strong style={{ color: '#0f172a' }}>{prevCat.category.split(' ')[0]}...</strong></span>
            </button>

            {/* Step Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {skillsCategories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to category ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? 20 : 8,
                    height: 8,
                    borderRadius: 99,
                    background: currentIndex === idx ? activeCat.color : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginLeft: 4 }}>
                {currentIndex + 1} / {skillsCategories.length}
              </span>
            </div>

            {/* Next Category Button */}
            <button
              onClick={handleNext}
              aria-label="Next Category"
              className="skills-nav-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                background: activeCat.color, color: '#ffffff',
                border: 'none', fontWeight: 700, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: `0 4px 14px ${activeCat.color}40`, flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              <span className="skills-nav-text">Next: <strong style={{ color: '#ffffff' }}>{nextCat.category.split(' ')[0]}...</strong></span>
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .skills-card { padding: 38px !important; }
        @media (max-width: 768px) {
          .skills-items-grid { grid-template-columns: 1fr !important; }
          .skills-card { padding: 22px !important; }
        }
        @media (max-width: 640px) {
          .skills-tabs-header {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            align-items: stretch !important;
            gap: 8px !important;
          }
          .skills-tab-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 12px 16px !important;
          }
          .skill-item-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .skills-nav-text { display: none !important; }
          .skills-nav-btn { padding: 10px 14px !important; }
        }
      `}</style>
    </section>
  );
}
