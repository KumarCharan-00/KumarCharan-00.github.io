import React from 'react';
import { ShieldCheck, CheckCircle2, Cpu, ArrowRight, Code2, Cloud, Bot } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

export default function PitchBanner({ onOpenContact }) {
  const checks = [
    'Enterprise Java Microservices & Domain Modeling',
    'Python AI Agents, RAG Pipelines & LLM Workflows',
    'PCI DSS 4.0 Security & Mutual TLS Auth',
    'AWS Serverless — Lambda, ECS, DynamoDB & SAM',
    'Zero-Downtime CI/CD & Infrastructure as Code',
    'Cost-Optimised Cloud Architecture Reviews',
  ];

  const pillars = [
    { icon: <Code2 size={18} color="#5C2E8D" />, title: 'Java & Python', sub: 'Enterprise · AI/ML', color: '#5C2E8D' },
    { icon: <Cloud size={18} color="#F9BE00" />, title: 'AWS Cloud', sub: 'Serverless · ECS', color: '#F9BE00' },
    { icon: <Bot size={18} color="#E8392B" />, title: 'AI Agents', sub: 'LlamaIndex · RAG', color: '#E8392B' },
  ];

  return (
    <section className="pitch-banner-section" style={{ padding: '2rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={1} />
      <div className="page-wrapper">
        <div className="glass-card pitch-main-card" style={{
          padding: '44px 48px',
          border: '1px solid #e2e8f0',
          background: 'linear-gradient(135deg, rgba(92,46,141,0.04), #ffffff 55%, rgba(249,190,0,0.04))',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 36 }} className="pitch-grid">

            {/* Left */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D',
                background: 'rgba(92,46,141,0.08)', padding: '4px 14px', borderRadius: 99,
                border: '1px solid rgba(92,46,141,0.2)', marginBottom: 18,
              }}>
                <Cpu size={13} /> Production Engineering Principles
              </div>

              <h2 style={{ fontSize: 'clamp(1.35rem, 5vw, 1.85rem)', fontWeight: 800, color: '#0f172a', marginBottom: 14, lineHeight: 1.3 }}>
                Building Enterprise Systems, Cloud Architecture{' '}
                <span className="text-gradient-purple">&amp; Autonomous AI Workflows</span>
              </h2>

              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, marginBottom: 22, maxWidth: 620 }}>
                From high-throughput Java microservices to Python LLM agents, to AWS serverless infra — I bring full-cycle engineering discipline: clean architecture, security-first design, and cost-optimised cloud delivery.
              </p>

              {/* Pillar chips */}
              <div className="pitch-pillars-wrap" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
                {pillars.map((p, i) => (
                  <div key={i} className="pitch-pillar-chip" style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 18px', borderRadius: 10,
                    background: `${p.color}0d`, border: `1px solid ${p.color}30`,
                  }}>
                    {p.icon}
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>{p.title}</div>
                      <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px' }} className="pitch-checks">
                {checks.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.85rem', color: '#1e293b' }}>
                    <CheckCircle2 size={15} color="#5C2E8D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ lineHeight: 1.4 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – CTA Box */}
            <div className="glass-card" style={{
              padding: 30, textAlign: 'center',
              background: '#f8fafc', border: '1px solid #e2e8f0',
              maxWidth: 340, margin: '0 auto', width: '100%',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(92,46,141,0.1)', border: '1px solid rgba(92,46,141,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px',
              }}>
                <ShieldCheck size={26} color="#7B42C4" />
              </div>
              <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Let's Build Something</h3>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: 24, lineHeight: 1.65 }}>
                Java · Python · AWS architecture consultation, code review, or hands-on delivery — let's connect.
              </p>
              <button onClick={onOpenContact} className="btn-teal" style={{ width: '100%', padding: '12px 18px', fontSize: '0.86rem' }}>
                Contact Me <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .pitch-grid { grid-template-columns: 1fr 320px !important; align-items: center; }
        }
        @media (max-width: 640px) {
          .pitch-banner-section { padding: 1.25rem 0 2rem !important; }
          .pitch-main-card { padding: 24px 18px !important; }
          .pitch-pillars-wrap { display: flex !important; flex-direction: column !important; gap: 10px !important; }
          .pitch-pillar-chip { width: 100% !important; justify-content: flex-start !important; padding: 12px 16px !important; }
          .pitch-checks { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
