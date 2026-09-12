import React from 'react';
import { GitPullRequest, Search, FileText, Cpu, ShieldCheck } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

const STEPS = [
  { phase: 'Phase 1', title: 'Discovery & Functional Specs', icon: Search, color: '#7B42C4', bg: 'rgba(123,66,196,0.1)', desc: 'Deep-dive into business requirements, domain entity modeling, REST API endpoint contracts (OpenAPI), and database schema design.' },
  { phase: 'Phase 2', title: 'System Architecture & Sizing', icon: Cpu, color: '#F9BE00', bg: 'rgba(249,190,0,0.1)', desc: 'Architecting microservices or serverless topology on AWS, establishing resiliency patterns, and finalizing cloud cost estimates.' },
  { phase: 'Phase 3', title: 'Infrastructure as Code (IaC)', icon: FileText, color: '#E8392B', bg: 'rgba(232,57,43,0.1)', desc: 'Writing Terraform or AWS SAM scripts for VPCs, ECS Fargate clusters, IAM security roles, RDS PostgreSQL, and ALB routing.' },
  { phase: 'Phase 4', title: 'Agile Sprints & TDD Delivery', icon: GitPullRequest, color: '#10b981', bg: 'rgba(16,185,129,0.1)', desc: 'Writing clean Java 21 / Spring Boot 3 code with >85% JUnit 5 test coverage, Virtual Threads tuning, and regular demos.' },
  { phase: 'Phase 5', title: 'Security Scan & Handover', icon: ShieldCheck, color: '#6366f1', bg: 'rgba(99,102,241,0.1)', desc: 'Automating CI/CD pipelines, executing load & security scans, and delivering complete technical documentation.' },
];

export default function DeliveryFramework() {
  return (
    <section id="methodology" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={8} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#E8392B', background: '#fee2e2', padding: '4px 14px', borderRadius: 99, border: '1px solid #fca5a5', marginBottom: 14, fontWeight: 700 }}>
            <GitPullRequest size={13} /> Engineering Workflow
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>Software Delivery Roadmap</h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>Structured development methodology from domain specifications to automated cloud deployment.</p>
        </div>

        {/* 5-Step Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }} className="delivery-grid">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '24px 18px', border: '1px solid #e2e8f0', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 800 }}>{step.phase}</span>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: `${step.color}15`, border: `1px solid ${step.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color={step.color} />
                  </div>
                </div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.55, margin: 0, flex: 1 }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .delivery-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 600px) { .delivery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
