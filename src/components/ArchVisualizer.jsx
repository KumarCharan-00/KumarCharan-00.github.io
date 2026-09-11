import React, { useState } from 'react';
import { Cpu, Database, Activity, Shield, Cloud, Zap, RefreshCw } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

const NODES = [
  { id: 'alb', label: '1. AWS ALB', sub: 'Gateway & Routing', icon: Cloud, color: '#7B42C4', bg: 'rgba(123,66,196,0.12)' },
  { id: 'springboot', label: '2. Spring Boot 3', sub: 'Java 21 Virtual Threads', icon: Cpu, color: '#F9BE00', bg: 'rgba(249,190,0,0.12)' },
  { id: 'kafka', label: '3. AWS SQS / SNS', sub: 'Event Processing Bus', icon: Zap, color: '#E8392B', bg: 'rgba(232,57,43,0.12)' },
  { id: 'database', label: '4. Aurora & Postgres', sub: 'Multi-AZ & DynamoDB', icon: Database, color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
  { id: 'telemetry', label: '5. CloudWatch', sub: 'OpenTelemetry & Tracing', icon: Activity, color: '#6366f1', bg: 'rgba(99,102,241,0.12)' },
];

const DETAILS = {
  alb: { title: 'AWS Application Load Balancer & Route53', tech: 'AWS ALB, Route53, Target Groups', desc: 'Receives SSL/TLS traffic from global users, terminates SSL, and distributes load dynamically across multi-AZ ECS Fargate containers with health checking every 5 seconds.', sla: '99.99% Availability', latency: '< 5 ms Overhead' },
  springboot: { title: 'Java 21 Spring Boot Microservices Engine', tech: 'Java 21 Virtual Threads, Spring Boot 3, Spring Security OAuth2', desc: 'Executes enterprise transaction processing utilizing Java 21 Project Loom Virtual Threads for lightweight non-blocking I/O. Uses Spring Security for JWT authentication and rate limiting.', sla: 'P99 < 35 ms Processing', latency: 'Sub-ms Thread Switching' },
  kafka: { title: 'AWS SQS, SNS & Asynchronous Event Bus', tech: 'AWS SQS, SNS, Dead Letter Queue (DLQ)', desc: 'Buffers high-concurrency order events and decouples read/write microservices with partition-key ordering and zero-data-loss commit guarantees.', sla: 'Zero Data Loss (At-Least-Once)', latency: '< 10 ms Publish' },
  database: { title: 'Amazon Aurora PostgreSQL & DynamoDB', tech: 'PostgreSQL 16, Aurora Multi-AZ, DynamoDB', desc: 'Stores transactional records in Aurora PostgreSQL with automatic failover replicas. Hot reads cached in Redis for 95% cache hit ratio.', sla: '99.99% Multi-AZ Failover', latency: '< 2 ms Cache / < 12 ms DB' },
  telemetry: { title: 'AWS CloudWatch & OpenTelemetry', tech: 'OpenTelemetry, CloudWatch Logs, Zipkin Tracing', desc: 'Ingests structured JSON logs, trace IDs across microservices, and exports JVM metrics directly to CloudWatch alarms.', sla: 'Real-time Granularity', latency: 'Async Non-Blocking Shipping' },
};

export default function ArchVisualizer() {
  const [selected, setSelected] = useState('springboot');
  const [animating, setAnimating] = useState(true);
  const detail = DETAILS[selected];

  return (
    <section id="architecture" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={4} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D', background: 'rgba(92,46,141,0.08)', padding: '4px 14px', borderRadius: 99, border: '1px solid rgba(92,46,141,0.25)', marginBottom: 14 }}>
            <Cpu size={13} /> Interactive Architecture
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>System Topology & Failover Visualizer</h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>Click any node below to inspect traffic flow, resiliency failover, and Java 21 & AWS service interactions under load.</p>
        </div>

        <div className="glass-card arch-card" style={{ padding: '36px 36px', border: '1px solid #e2e8f0', background: '#ffffff' }}>
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: animating ? '#059669' : '#94a3b8' }} />
              Traffic Flow ({animating ? 'Active' : 'Paused'})
            </span>
            <button onClick={() => setAnimating(!animating)} style={{
              fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#475569',
              background: '#f1f5f9', padding: '6px 12px', borderRadius: 8,
              border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <RefreshCw size={13} style={{ animation: animating ? 'spin 2s linear infinite' : 'none' }} />
              {animating ? 'Pause' : 'Animate'}
            </button>
          </div>

          {/* Topology Nodes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, position: 'relative', padding: '16px 0' }} className="arch-nodes-grid">
            {/* Flow Line */}
            <div className="arch-flow-line" style={{ position: 'absolute', top: '50%', left: 40, right: 40, height: 2, background: 'linear-gradient(90deg, #7B42C4, #F9BE00, #E8392B, #059669, #6366f1)', opacity: 0.25, transform: 'translateY(-50%)', pointerEvents: 'none', borderRadius: 99 }} />

            {NODES.map(node => {
              const Icon = node.icon;
              const isActive = selected === node.id;
              return (
                <div key={node.id} onClick={() => setSelected(node.id)} style={{
                  cursor: 'pointer', padding: '22px 14px', borderRadius: 12, textAlign: 'center',
                  position: 'relative', zIndex: 2, transition: 'all 0.25s ease',
                  background: isActive ? `linear-gradient(180deg, ${node.bg}, #ffffff)` : '#f8fafc',
                  border: isActive ? `2px solid ${node.color}` : '1px solid #e2e8f0',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, margin: '0 auto 12px',
                    background: node.bg, border: `1px solid ${node.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={node.color} />
                  </div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: 3 }}>{node.label}</h4>
                  <p style={{ fontSize: '0.66rem', color: '#64748b', fontFamily: 'var(--font-mono)', margin: 0 }}>{node.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div style={{ marginTop: 24, background: '#f8fafc', padding: 28, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{detail.title}</h3>
                <p style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#5C2E8D', margin: 0, fontWeight: 700 }}>{detail.tech}</p>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', padding: '4px 10px', borderRadius: 6, background: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0', fontWeight: 700 }}>SLA: {detail.sla}</span>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', padding: '4px 10px', borderRadius: 6, background: '#f3e8ff', color: '#5C2E8D', border: '1px solid #e9d5ff', fontWeight: 700 }}>Latency: {detail.latency}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7, marginBottom: 16 }}>{detail.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
              <Shield size={14} color="#5C2E8D" />
              Production Resiliency: Configured via AWS SAM & Terraform IaC with automated CI/CD checks.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .arch-card { padding: 36px !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .arch-nodes-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .arch-flow-line { display: none !important; }
          .arch-card { padding: 20px !important; }
        }
        @media (max-width: 480px) {
          .arch-nodes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
