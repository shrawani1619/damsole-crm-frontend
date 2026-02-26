import React from 'react';

const TESTIMONIALS = [
    {
        quote: 'AiDamsole transformed our legacy systems into a state-of-the-art cloud infrastructure. Their team is truly world-class.',
        name: 'Sarah Jenkins',
        role: 'CTO, FinTech Global',
        avatar: 'SJ',
        color: '#4F46E5',
    },
    {
        quote: 'The AI integration they delivered has automated 60% of our customer service inquiries. Highly recommended partner.',
        name: 'David Chen',
        role: 'CEO, Nexus Health',
        avatar: 'DC',
        color: '#10B981',
    },
    {
        quote: 'Professional, agile, and incredibly talented. They understood our vision from day one and executed flawlessly.',
        name: 'Elena Rodriguez',
        role: 'VP Marketing, RetailCo',
        avatar: 'ER',
        color: '#EC4899',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>What Leaders Say</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        Trusted by <span className="gradient-text">Innovators</span>
                    </h2>
                    <p className="body-lg">
                        Hear from technology leaders who partnered with AiDamsole to transform their businesses.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="testi-grid">
                    {TESTIMONIALS.map(({ quote, name, role, avatar, color }) => (
                        <div
                            key={name}
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                background: '#F9FAFB',
                                border: '1px solid #E8E6FF',
                                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(79,70,229,0.12)';
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.borderColor = color + '40';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#F9FAFB';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderColor = '#E8E6FF';
                            }}
                        >
                            <div style={{ display: 'flex', gap: '3px' }}>
                                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#FBBF24', fontSize: '1.125rem' }}>★</span>)}
                            </div>

                            <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.75, fontStyle: 'italic', flexGrow: 1 }}>
                                "{quote}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', paddingTop: '1rem', borderTop: '1px solid #F3F4F6' }}>
                                <div style={{
                                    width: '44px', height: '44px', borderRadius: '50%',
                                    background: color + '20', border: `2px solid ${color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 800, fontSize: '0.875rem', color,
                                }}>
                                    {avatar}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem' }}>{name}</div>
                                    <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 860px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
