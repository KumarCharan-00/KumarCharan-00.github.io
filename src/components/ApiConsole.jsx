import React, { useState } from 'react';
import { Terminal, Play, Copy, Check, RefreshCw } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

const ENDPOINTS = [
  {
    id: 'health', method: 'GET', path: '/api/v1/health', desc: 'Microservice Health & Telemetry',
    response: { status: "UP", runtime: "Java 21 OpenJDK (Virtual Threads Enabled)", framework: "Spring Boot 3.2", awsRegion: "us-east-1", uptimeSeconds: 864000, activeVirtualThreads: 1420, memoryUsage: "240 MB / 2048 MB" }
  },
  {
    id: 'estimate', method: 'GET', path: '/api/v1/architecture/estimate?workload=microservices', desc: 'Live Cost Engine Calculation',
    response: { monthlyEstimateUsd: 145, recommendedStack: "Java 21 Virtual Threads, Spring Boot 3, Amazon Aurora PostgreSQL, AWS ECS Fargate", slaTarget: "99.99% Target Uptime with Auto-scaling", calculatedBy: "Spring Boot 3 / Java 21 Engine", engineTimestamp: 1725812400000 }
  },
  {
    id: 'order', method: 'POST', path: '/api/v1/orders/simulate', desc: 'Non-Blocking Order Processing',
    response: { transactionId: "tx_9f8a12bc44e7", status: "COMMITTED_TO_EVENT_BUS", partitionKey: "order_us_east_8819", latencyMs: 14, idempotencyVerified: true, securityContext: "JWT Auth Verified (Role: CLIENT_APP)" }
  }
];

export default function ApiConsole() {
  const [selectedId, setSelectedId] = useState('health');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const current = ENDPOINTS.find(e => e.id === selectedId) || ENDPOINTS[0];

  const handleExecute = () => { setLoading(true); setTimeout(() => setLoading(false), 400); };
  const handleCopy = () => { navigator.clipboard.writeText(JSON.stringify(current.response, null, 2)); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="api-sandbox" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={6} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D', background: 'rgba(92,46,141,0.08)', padding: '4px 14px', borderRadius: 99, border: '1px solid rgba(92,46,141,0.2)', marginBottom: 14 }}>
            <Terminal size={13} /> Interactive Console
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>REST API Simulator Console</h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>Test REST endpoint simulations powered by Spring Boot 3 and Java 21 Virtual Threads.</p>
        </div>

        <div className="glass-card api-card" style={{ padding: 36, border: '1px solid #e2e8f0', background: '#ffffff' }}>
          {/* Tab Bar + Execute */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ENDPOINTS.map(ep => (
                <button key={ep.id} onClick={() => setSelectedId(ep.id)} style={{
                  padding: '7px 14px', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  background: selectedId === ep.id ? '#f5f0ff' : '#f1f5f9',
                  border: selectedId === ep.id ? '2px solid #5C2E8D' : '1px solid #e2e8f0',
                  color: selectedId === ep.id ? '#5C2E8D' : '#475569',
                }}>
                  <span style={{ color: '#059669', marginRight: 6 }}>{ep.method}</span>{ep.id}
                </button>
              ))}
            </div>
            <button onClick={handleExecute} disabled={loading} className="btn-purple" style={{ fontSize: '0.78rem', padding: '9px 16px' }}>
              {loading ? <RefreshCw size={13} style={{ animation: 'spin 0.5s linear infinite' }} /> : <Play size={13} style={{ fill: 'currentColor' }} />}
              {loading ? 'Executing...' : 'Execute API Call'}
            </button>
          </div>

          {/* URL Bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: '#f8fafc', padding: '10px 14px', borderRadius: 8,
            border: '1px solid #e2e8f0', marginBottom: 24,
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
          }}>
            <span style={{ padding: '2px 8px', borderRadius: 4, background: '#d1fae5', color: '#047857', fontWeight: 800, fontSize: '0.72rem', flexShrink: 0 }}>{current.method}</span>
            <span style={{ color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, fontWeight: 600 }}>{current.path}</span>
            <span style={{ color: '#64748b', fontSize: '0.7rem', flexShrink: 0, display: 'none' }} className="api-desc">{current.desc}</span>
          </div>

          {/* Response */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                HTTP 200 OK — JSON Payload
              </span>
              <button onClick={handleCopy} style={{
                fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#475569',
                background: '#f1f5f9', padding: '4px 10px', borderRadius: 6,
                border: '1px solid #cbd5e1', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                {copied ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="code-block" style={{ color: '#6ee7b7' }}><code>{JSON.stringify(current.response, null, 2)}</code></pre>
          </div>
        </div>
      </div>

      <style>{`
        .api-card { padding: 36px !important; }
        @media (min-width: 768px) { .api-desc { display: inline !important; } }
        @media (max-width: 768px) { .api-card { padding: 20px !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
