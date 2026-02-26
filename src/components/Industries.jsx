import React, { useState } from 'react';
import { Landmark, Heart, Truck, ShoppingBag, Server, Settings } from 'lucide-react';

const INDUSTRIES = [
    {
        icon: Landmark,
        title: 'Fintech',
        desc: 'Secure banking infrastructure & blockchain solutions.',
        color: '#4F46E5', bg: '#EEF2FF',
    },
    {
        icon: Heart,
        title: 'Healthcare',
        desc: 'HIPAA-compliant telemedicine & patient data systems.',
        color: '#EC4899', bg: '#FDF2F8',
    },
    {
        icon: Truck,
        title: 'Logistics',
        desc: 'AI-driven supply chain optimization & real-time tracking.',
        color: '#F59E0B', bg: '#FEF3C7',
    },
    {
        icon: ShoppingBag,
        title: 'Retail',
        desc: 'Omnichannel e-commerce & personalized shopping experiences.',
        color: '#10B981', bg: '#D1FAE5',
    },
    {
        icon: Server,
        title: 'Data Center',
        desc: 'Dedicated infrastructure management & enterprise cloud solutions.',
        color: '#06B6D4', bg: '#ECFEFF',
    },
    {
        icon: Settings,
        title: 'Manufacturing',
        desc: 'Industry 4.0 smart factory solutions & automation systems.',
        color: '#7C3AED', bg: '#EDE9FE',
    },
];

export default function Industries() {
    const [active, setActive] = useState(null);

    return (
        <section id="industries" style={{ background: 'linear-gradient(180deg, #F5F3FF 0%, #FAFBFF 100%)' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>Industries We Serve</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        Deep Domain Expertise Across<br />
                        <span className="gradient-text">Key Sectors</span>
                    </h2>
                    <p className="body-lg">
                        Powering the digital economy — from fintech vaults to smart factory floors.
                    </p>
                </div>

                {/* Industry cards — 2-row layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1rem' }} className="ind-grid">
                    {INDUSTRIES.map(({ icon: Icon, title, desc, color, bg }) => (
                        <div
                            key={title}
                            style={{
                                padding: '1.75rem 1.25rem',
                                borderRadius: '20px',
                                border: `1px solid ${active === title ? color + '40' : '#E8E6FF'}`,
                                background: active === title ? bg : 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                boxShadow: active === title ? `0 16px 40px ${color}25` : '0 2px 8px rgba(79,70,229,0.06)',
                                transform: active === title ? 'translateY(-6px)' : 'none',
                            }}
                            onMouseEnter={() => setActive(title)}
                            onMouseLeave={() => setActive(null)}
                        >
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '16px',
                                background: active === title ? color : bg,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1rem',
                                transition: 'background 0.3s',
                            }}>
                                <Icon size={26} color={active === title ? 'white' : color} strokeWidth={1.75} />
                            </div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{title}</h3>
                            <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1100px) { .ind-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 640px)  { .ind-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
        </section>
    );
}
