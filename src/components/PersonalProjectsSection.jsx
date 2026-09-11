import React from 'react';
import { Bot, Github, ExternalLink, Sparkles } from 'lucide-react';
import GeometricAccents from './GeometricAccents';

const PERSONAL_PROJECTS = [
  {
    id: "smart-note-ai",
    title: "Smart Note — AI-Powered Notes Analyser & Converter",
    period: "April 2026 – Present",
    techStack: ["Python", "LlamaIndex", "RAG", "Vector Indexing", "LLM Agents", "Prompt Engineering"],
    badge: "AI / RAG Pipeline",
    color: "#F9BE00",
    desc: "A RAG pipeline built with LlamaIndex providing document ingestion, vector indexing, and grounded Q&A with source attribution. Features function-calling to enable autonomous document summarization, key point extraction, and translation.",
    highlights: [
      "Vector indexing and grounded Q&A with source attribution",
      "LLM agent function-calling for autonomous summarization and text translation",
      "Structured prompt templates for parsed document nodes"
    ]
  },
  {
    id: "pr-review-agent",
    title: "GitHub PR Review Agent",
    period: "March 2026 – April 2026",
    link: "https://github.com/KumarCharan-00/PR-Review-Agent",
    linkText: "github.com/KumarCharan-00/PR-Review-Agent",
    techStack: ["Python 3.10", "LlamaIndex AgentWorkflow", "Google Gemini", "PyGithub", "GitHub Actions"],
    badge: "Autonomous Multi-Agent System",
    color: "#7B42C4",
    desc: "A multi-agent AI system that automatically reviews GitHub Pull Requests by fetching context, drafting comments, self-validating feedback, and posting formal review comments.",
    highlights: [
      "3-agent pipeline: ContextAgent, CommentorAgent, and ReviewAndPostingAgent",
      "Shared state store managed via LlamaIndex AgentWorkflow",
      "Automated CI/CD execution using GitHub Actions"
    ]
  },
  {
    id: "iskm-proddatur",
    title: "ISKM Proddatur Web Platform",
    period: "November 2025 – March 2026",
    link: "https://dev.iskmpdtr-int.cloud",
    linkText: "dev.iskmpdtr-int.cloud",
    techStack: ["Spring Boot", "PostgreSQL", "Docker", "React", "Vanilla JS", "Dokploy"],
    badge: "Full-Stack Application",
    color: "#E8392B",
    desc: "Full-stack enterprise content platform featuring a Spring Boot + PostgreSQL backend API, public React frontend, and Vanilla JS admin portal deployed via Docker on Dokploy.",
    highlights: [
      "Spring Boot REST API with PostgreSQL persistence",
      "React public showcase and Vanilla JS administration interface",
      "Fully containerized with Docker and deployed on Dokploy"
    ]
  }
];

export default function PersonalProjectsSection() {
  return (
    <section id="personal-projects" style={{ padding: '6rem 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={3} />
      <div className="page-wrapper">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 44px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#E8392B',
            background: 'rgba(232,57,43,0.1)', padding: '4px 14px', borderRadius: 99,
            border: '1px solid rgba(232,57,43,0.25)', marginBottom: 14
          }}>
            <Bot size={14} /> AI Engineering & Open Source
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', marginBottom: 14 }}>
            Autonomous AI Agents & Projects
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>
            Building autonomous multi-agent pipelines with LlamaIndex AgentWorkflow, vector RAG document ingestion, and full-stack containerized cloud applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="personal-projects-grid">
          {PERSONAL_PROJECTS.map((project) => (
            <div key={project.id} className="glass-card" style={{
              padding: '28px 24px', display: 'flex', flexDirection: 'column',
              borderTop: `3px solid ${project.color}`, border: '1px solid #e2e8f0',
              background: '#ffffff', position: 'relative', zIndex: 1
            }}>

              {/* Header Badge & Date */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px 12px', marginBottom: 16 }}>
                <span style={{
                  fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: project.color,
                  background: `${project.color}15`, padding: '4px 10px', borderRadius: 6,
                  border: `1px solid ${project.color}30`, fontWeight: 700,
                  display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap'
                }}>
                  {project.badge}
                </span>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {project.period}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: 12, lineHeight: 1.3 }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.65, marginBottom: 18 }}>
                {project.desc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20, flex: 1 }}>
                {project.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.78rem', color: '#334155' }}>
                    <Sparkles size={13} color={project.color} style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
                {project.techStack.map((t, ti) => (
                  <span key={ti} style={{
                    fontSize: '0.64rem', fontFamily: 'var(--font-mono)', color: '#475569',
                    background: '#f1f5f9', padding: '3px 8px', borderRadius: 6,
                    border: '1px solid #e2e8f0'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* External Link */}
              {project.link && (
                <div style={{ paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-secondary" style={{
                    width: '100%', padding: '8px 12px', fontSize: '0.76rem', justifyContent: 'center', gap: 6
                  }}>
                    <Github size={13} /> {project.linkText} <ExternalLink size={11} color="#64748b" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .personal-projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .personal-projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
