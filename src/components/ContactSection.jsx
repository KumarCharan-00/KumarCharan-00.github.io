import React, { useState } from 'react';
import { Mail, Calendar, Check, MessageSquare, Github, Linkedin, ShieldCheck, MapPin, Phone, AlertCircle } from 'lucide-react';
import GeometricAccents from './GeometricAccents';
import { PROFILE } from '../config/profile';

export default function ContactSection({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Enterprise Microservices / Java 21 Spring Boot', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your Name before sending.');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Please enter your Email address.');
      return false;
    }
    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid Email address (e.g. alex@company.com).');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter a Brief Message before sending.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleEmailAction = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hi Kumar Charan,\n\nName/Org: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${subject}&body=${body}`;

    // Open mailto to trigger native email client or default browser mail handler
    window.location.href = mailtoUrl;

    // Fallback attempt: open Gmail web compose in a new tab if available
    const gmailWindow = window.open(gmailUrl, '_blank');
  };

  const handleWhatsappAction = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = encodeURIComponent(
      `Hi Kumar Charan,\nName: ${formData.name}\nEmail: ${formData.email}\nProject Scope: ${formData.projectType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${PROFILE.rawPhone}?text=${text}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <GeometricAccents variant={9} />
      <div className="page-wrapper">
        <div className="glass-card contact-card" style={{
          maxWidth: 940, margin: '0 auto', padding: '44px 44px',
          border: '1px solid #e2e8f0',
          background: '#ffffff',
        }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#7B42C4', background: '#f3e8ff', padding: '4px 14px', borderRadius: 99, border: '1px solid #e9d5ff', marginBottom: 14, fontWeight: 700 }}>
              <Calendar size={13} /> Get In Touch
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.8vw, 2.2rem)', fontWeight: 900, color: '#0f172a', marginBottom: 10 }}>Connect with Kumar Charan M</h2>
            <p style={{ fontSize: '0.94rem', color: '#475569', maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
              Senior Software Engineer available for enterprise backend architecture, AWS cloud serverless engineering, and AI agent projects.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 28, alignItems: 'start' }} className="contact-grid">

            {/* Left: Contact Info */}
            <div style={{ background: '#f8fafc', padding: 26, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'block', marginBottom: 8 }}>Direct Email</span>
                <button onClick={handleCopyEmail} className="btn-secondary" style={{ width: '100%', justifyContent: 'space-between', padding: '11px 14px', fontSize: '0.8rem', background: '#ffffff' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#0f172a' }}>{PROFILE.email}</span>
                  {copiedEmail ? <Check size={15} color="#059669" /> : <Mail size={15} color="#64748b" />}
                </button>
              </div>

              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'block', marginBottom: 8 }}>Location & Phone</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <MapPin size={14} color="#D97706" /> {PROFILE.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Phone size={14} color="#7B42C4" /> {PROFILE.phone}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'block', marginBottom: 8 }}>Professional Profiles</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, padding: '9px 14px', fontSize: '0.78rem', background: '#ffffff' }}>
                    <Github size={15} /> GitHub
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, padding: '9px 14px', fontSize: '0.78rem', background: '#ffffff' }}>
                    <Linkedin size={15} /> LinkedIn
                  </a>
                </div>
              </div>

              <div style={{ background: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: 10, padding: 14, fontSize: '0.76rem', color: '#047857', lineHeight: 1.6 }}>
                <ShieldCheck size={14} color="#059669" style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                <strong>Quick Response Guarantee:</strong> All inquiries receive a response within 12 hours with technical details.
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#475569', display: 'block', marginBottom: 5 }}>Your Name / Organization</label>
                  <input type="text" placeholder="e.g. Alex Johnson (Acme Corp)" value={formData.name} onChange={e => { setErrorMsg(''); setFormData({ ...formData, name: e.target.value }); }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#475569', display: 'block', marginBottom: 5 }}>Email</label>
                  <input type="email" placeholder="alex@company.com" value={formData.email} onChange={e => { setErrorMsg(''); setFormData({ ...formData, email: e.target.value }); }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#475569', display: 'block', marginBottom: 5 }}>Project Scope / Opportunity</label>
                  <select value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })}>
                    <option>Enterprise Microservices / Java 21 Spring Boot</option>
                    <option>AWS Cloud Infrastructure & Serverless (Lambda / SAM)</option>
                    <option>AI / ML Agents & LlamaIndex RAG Pipelines</option>
                    <option>PCI DSS Compliance & Security Authorizer</option>
                    <option>General Technical Consultation: Let's Discuss</option>
                    <option>Other / Open for Exploration</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', display: 'block', marginBottom: 5 }}>Brief Message</label>
                  <textarea rows={4} placeholder="Hi Kumar Charan, I would like to discuss..." value={formData.message} onChange={e => { setErrorMsg(''); setFormData({ ...formData, message: e.target.value }); }} />
                </div>

                {/* Validation Error Alert */}
                {errorMsg && (
                  <div style={{
                    background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c',
                    borderRadius: 8, padding: '10px 14px', fontSize: '0.78rem', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 8
                  }}>
                    <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* 2 Action Buttons: Email Me & Send WhatsApp Message */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
                  <button
                    type="button"
                    onClick={handleEmailAction}
                    className="btn-purple"
                    style={{ flex: '1 1 160px', padding: '12px 18px', fontSize: '0.86rem' }}
                  >
                    <Mail size={15} /> Email Me
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsappAction}
                    style={{
                      flex: '1 1 200px',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      padding: '12px 18px', borderRadius: 10,
                      background: '#059669', color: '#ffffff',
                      fontWeight: 700, fontSize: '0.86rem', border: 'none', cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(5, 150, 105, 0.35)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#047857'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.transform = ''; }}
                  >
                    <MessageSquare size={15} /> Send WhatsApp Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card { padding: 44px !important; }
        @media (min-width: 768px) { .contact-grid { grid-template-columns: 5fr 7fr !important; } }
        @media (max-width: 768px) { .contact-card { padding: 22px !important; } }
      `}</style>
    </section>
  );
}
