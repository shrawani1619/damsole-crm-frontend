import React from 'react';
import { BarChart3, Users, Zap, Shield, Database, Globe } from 'lucide-react';

const CATEGORIES = [
    { icon: BarChart3, label: 'Data Analytics', color: '#4F46E5', bg: '#EEF2FF', desc: 'Real-time dashboards with actionable insights across every touchpoint.' },
    { icon: Users, label: 'Team Collaboration', color: '#0EA5E9', bg: '#E0F2FE', desc: 'Shared inboxes, task assignment, and live activity feeds for every team.' },
    { icon: Zap, label: 'Sales Automation', color: '#F59E0B', bg: '#FEF3C7', desc: 'Automate follow-ups, sequences, and pipeline movements effortlessly.' },
    { icon: Shield, label: 'Security & Compliance', color: '#10B981', bg: '#D1FAE5', desc: 'Enterprise-grade encryption, SSO, and granular role-based permissions.' },
    { icon: Database, label: 'Smart Integrations', color: '#8B5CF6', bg: '#EDE9FE', desc: 'Native connectors with 200+ tools including Slack, HubSpot, and Stripe.' },
    { icon: Globe, label: 'Global Reach', color: '#EC4899', bg: '#FDF2F8', desc: 'Multi-currency, multi-language support to scale across every market.' },
];

export default function Categories() {
    return (
        <section id="categories" style={{ background: 'white' }}>
            <div className="container">
                {/* Section header */}
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>Everything You Need</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        Powerful <span className="gradient-text">Categories</span>
                    </h2>
                    <p className="body-lg">
                        A complete suite built for modern teams — from solo founders to enterprise sales floors.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }} className="cat-grid">
                    {CATEGORIES.map(({ icon: Icon, label, color, bg, desc }) => (
                        <div
                            key={label}
                            className="card"
                            style={{ padding: '2rem', cursor: 'default' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = bg;
                                e.currentTarget.style.borderColor = color + '33';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.borderColor = '#E8E6FF';
                            }}
                        >
                            <div style={{
                                width: '52px', height: '52px',
                                background: bg,
                                borderRadius: '14px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.25rem',
                            }}>
                                <Icon size={26} color={color} strokeWidth={1.75} />
                            </div>
                            <h3 className="display-md" style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: '#111827' }}>{label}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
