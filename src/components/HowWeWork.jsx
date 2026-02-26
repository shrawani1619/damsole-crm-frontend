import React, { useState } from 'react';
import { Search, Map, Code2, Rocket, TrendingUp } from 'lucide-react';

const STEPS = [
    {
        num: '01',
        title: 'Discovery',
        icon: Search,
        desc: 'We analyze your business goals, target audience, and technical requirements to build a solid foundation.',
        color: '#4F46E5',
    },
    {
        num: '02',
        title: 'Strategy',
        icon: Map,
        desc: 'Our architects design a scalable roadmap and select the best tech stack for your specific needs.',
        color: '#7C3AED',
    },
    {
        num: '03',
        title: 'Development',
        icon: Code2,
        desc: 'Agile sprints with regular check-ins ensure you\'re always part of the building process.',
        color: '#EC4899',
    },
    {
        num: '04',
        title: 'Launch',
        icon: Rocket,
        desc: 'Rigorous QA testing followed by a smooth, zero-downtime deployment to production environments.',
        color: '#F59E0B',
    },
    {
        num: '05',
        title: 'Scale',
        icon: TrendingUp,
        desc: 'Ongoing maintenance, optimization, and feature updates to grow continuously with your user base.',
        color: '#10B981',
    },
];

export default function HowWeWork() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="process" style={{ background: '#F9FAFB' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>How We Work</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        Agile Methodology for<br />
                        <span className="gradient-text">Rapid Delivery</span>
                    </h2>
                    <p className="body-lg">
                        Our battle-tested process ensures transparency, collaboration, and results — every single time.
                    </p>
                </div>

                {/* Steps tab selector */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '0.5rem',
                    flexWrap: 'wrap', marginBottom: '3rem',
                }}>
                    {STEPS.map((step, idx) => (
                        <button
                            key={step.num}
                            onClick={() => setActiveStep(idx)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.625rem 1.25rem', borderRadius: '99px',
                                background: activeStep === idx ? step.color : 'white',
                                color: activeStep === idx ? 'white' : '#374151',
                                border: activeStep === idx ? 'none' : '1px solid #E5E7EB',
                                fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer',
                                boxShadow: activeStep === idx ? `0 6px 20px ${step.color}40` : '0 1px 4px rgba(0,0,0,0.06)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <span style={{
                                width: '22px', height: '22px', borderRadius: '50%',
                                background: activeStep === idx ? 'rgba(255,255,255,0.25)' : step.color + '20',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.7rem', fontWeight: 800,
                                color: activeStep === idx ? 'white' : step.color,
                            }}>{step.num}</span>
                            {step.title}
                        </button>
                    ))}
                </div>

                {/* Active step detail */}
                {(() => {
                    const step = STEPS[activeStep];
                    const Icon = step.icon;
                    return (
                        <div style={{
                            maxWidth: '720px', margin: '0 auto',
                            padding: '3rem',
                            borderRadius: '28px',
                            background: 'white',
                            border: `1px solid ${step.color}25`,
                            boxShadow: `0 20px 60px ${step.color}15`,
                            display: 'flex', gap: '2rem', alignItems: 'flex-start',
                        }} className="step-detail">
                            <div style={{
                                flexShrink: 0,
                                width: '72px', height: '72px', borderRadius: '20px',
                                background: step.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: `0 8px 24px ${step.color}50`,
                            }}>
                                <Icon size={32} color="white" strokeWidth={1.75} />
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: step.color }}>
                                        Step {step.num}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.625rem', fontWeight: 800, color: '#111827', marginBottom: '0.875rem' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '1.0625rem', color: '#4B5563', lineHeight: 1.75 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    );
                })()}

                {/* All 5 steps list (small) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem', marginTop: '3rem' }} className="steps-mini-grid">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.num}
                                onClick={() => setActiveStep(idx)}
                                style={{
                                    padding: '1.25rem',
                                    borderRadius: '16px',
                                    background: activeStep === idx ? step.color : 'white',
                                    border: `1px solid ${activeStep === idx ? step.color : '#E8E6FF'}`,
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeStep === idx ? `0 8px 24px ${step.color}35` : 'none',
                                }}
                            >
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', color: activeStep === idx ? 'rgba(255,255,255,0.7)' : step.color, marginBottom: '0.5rem' }}>
                                    {step.num}
                                </div>
                                <Icon size={20} color={activeStep === idx ? 'white' : step.color} />
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: activeStep === idx ? 'white' : '#374151', marginTop: '0.5rem' }}>
                                    {step.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 700px) {
          .step-detail { flex-direction: column !important; }
          .steps-mini-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>
        </section>
    );
}
