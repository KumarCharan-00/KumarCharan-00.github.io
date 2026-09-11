import React from 'react';
import { Cpu, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e2e8f0', background: '#f8fafc', padding: '40px 0' }}>
      <div className="page-wrapper">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'linear-gradient(135deg, #7B42C4, #5C2E8D)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(92,46,141,0.3)',
            }}>
              <Cpu style={{ width: 18, height: 18, color: '#fff' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.86rem' }}>{PROFILE.name}</div>
              <p style={{ fontSize: '0.7rem', color: '#64748b', margin: 0 }}>Senior Software Engineer</p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#334155', textDecoration: 'none' }}>
              <Github size={14} color="#D97706" /> GitHub <ExternalLink size={10} color="#64748b" />
            </a>
            <span>•</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#334155', textDecoration: 'none' }}>
              <Linkedin size={14} color="#7B42C4" /> LinkedIn <ExternalLink size={10} color="#64748b" />
            </a>
            <span>•</span>
            <span>Java 21 • AWS • AI Agents</span>
          </div>



        </div>
      </div>
    </footer>
  );
}
