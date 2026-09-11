import React, { useState } from 'react';
import { calculateAwsCost, estimatorModels } from '../data/estimatorData';
import { Calculator, Cloud, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

export default function AwsEstimator({ onOpenContact }) {
  const [workloadType, setWorkloadType] = useState('microservices');
  const [dailyRequests, setDailyRequests] = useState(500000);
  const [multiAZ, setMultiAZ] = useState(true);
  const estimation = calculateAwsCost(workloadType, dailyRequests, multiAZ);

  return (
    <section id="aws-estimator" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={5} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#059669', background: '#d1fae5', padding: '4px 14px', borderRadius: 99, border: '1px solid #a7f3d0', marginBottom: 14, fontWeight: 700 }}>
            <Calculator size={13} /> Cloud Cost Sizing
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>AWS Cost & Architecture Sizing Tool</h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>
            Estimate projected monthly AWS infrastructure bills based on expected request volume and architectural redundancy tier.
          </p>
        </div>

        {/* Grid: Controls + Results */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'start' }} className="estimator-grid">

          {/* Controls */}
          <div className="glass-card" style={{ padding: 32, border: '1px solid #e2e8f0', background: '#ffffff' }}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Cloud size={18} color="#5C2E8D" /> Select Workload & Traffic Scale
            </h3>

            {/* Workload Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {Object.keys(estimatorModels).map(key => {
                const model = estimatorModels[key];
                const active = workloadType === key;
                return (
                  <button key={key} onClick={() => setWorkloadType(key)} style={{
                    padding: '16px 18px', borderRadius: 12, textAlign: 'left', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14,
                    background: active ? '#f5f0ff' : '#f8fafc',
                    border: active ? '2px solid #5C2E8D' : '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>{model.name}</div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>{model.architectureNote}</p>
                    </div>
                    {active && (
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#5C2E8D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={13} color="#ffffff" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slider */}
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 12, border: '1px solid #e2e8f0', marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0f172a' }}>Daily Traffic Volume:</label>
                <span style={{ fontSize: '1.05rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#5C2E8D' }}>{dailyRequests.toLocaleString()} req/day</span>
              </div>
              <input type="range" min="10000" max="5000000" step="50000" value={dailyRequests} onChange={e => setDailyRequests(Number(e.target.value))} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginTop: 8 }}>
                <span>10K (MVP)</span><span>1M (Growth)</span><span>5M (Enterprise)</span>
              </div>
            </div>

            {/* HA Checkbox */}
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ShieldCheck size={18} color="#059669" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0f172a' }}>Multi-AZ High Availability</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Redundant multi-region database & dual NAT Gateways</div>
                </div>
              </div>
              <input type="checkbox" checked={multiAZ} onChange={e => setMultiAZ(e.target.checked)} />
            </label>
          </div>

          {/* Results */}
          <div className="glass-card" style={{
            padding: 32, border: '1px solid #e2e8f0',
            background: '#ffffff',
          }}>
            <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 800 }}>
              Estimated Monthly AWS Bill
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
              <span style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>${estimation.monthlyEstimate}</span>
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>/ month</span>
            </div>

            {/* Parameters Breakdown */}
            <div style={{ background: '#f8fafc', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0', marginBottom: 20 }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0f172a', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sizing Breakdown:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.78rem', color: '#475569' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>Workload Architecture:</span>
                  <strong style={{ color: '#0f172a' }}>{estimatorModels[workloadType]?.name.split('(')[0]}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>Monthly Traffic:</span>
                  <strong style={{ color: '#0f172a', fontFamily: 'var(--font-mono)' }}>{(dailyRequests * 30).toLocaleString()} req/mo</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>High Availability:</span>
                  <strong style={{ color: multiAZ ? '#059669' : '#64748b' }}>{multiAZ ? 'Multi-AZ Redundant' : 'Single Availability Zone'}</strong>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', margin: '0 0 22px', lineHeight: 1.45 }}>
              *Estimates based on standard AWS US-East regional baseline rates (ALB, compute tasks, storage, and data transfer).
            </p>

            <button onClick={onOpenContact} className="btn-amber" style={{ width: '100%', padding: '12px 18px', fontSize: '0.86rem' }}>
              Request Infrastructure Review <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .estimator-grid { grid-template-columns: 7fr 5fr !important; }
        }
      `}</style>
    </section>
  );
}
