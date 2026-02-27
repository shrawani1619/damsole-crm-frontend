import React from 'react';
import { ArrowRight, ArrowDown, Star } from 'lucide-react';
import heroImg from '../assets/hero.png';

const METRICS = [
    { value: '100+', label: 'Happy Clients', icon: '🤝' },
    { value: '7+', label: 'Years Building', icon: '🏆' },
    { value: '+142%', label: 'Client Growth', icon: '📈' },
    { value: '99.9%', label: 'AI Accuracy', icon: '🎯' },
];

const TESTIMONIAL = {
    text: '"AiDamsole transformed our systems into state-of-the-art cloud infrastructure."',
    name: 'Sarah Jenkins',
    role: 'CTO, FinTech Global',
};

export default function Hero() {
    return (
        <section
            id="home"
            aria-label="Hero"
            style={{
                width: '100%',
                background: '#FAFAF9',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px',
                paddingBottom: '64px',
            }}
        >
            {/* ── Luxury background layers ── */}
            <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #EEF0FF 0%, #FAF9F7 55%, #FAFAF9 100%)',
                }} />

                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
                            <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#4F46E5" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                <div style={{ position: 'absolute', top: '-5%', right: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)', filter: 'blur(60px)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 60%)', filter: 'blur(80px)', borderRadius: '50%' }} />

                <svg style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.15 }} width="100" height="100" aria-hidden>
                    {Array.from({ length: 5 }, (_, r) => Array.from({ length: 5 }, (_, c) => (
                        <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="1.5" fill="#4F46E5" />
                    )))}
                </svg>
            </div>

            {/* ── Content ── */}
            <div
                className="container hero-grid"
                style={{
                    position: 'relative', zIndex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                    gap: '40px',
                    alignItems: 'center',
                }}
            >
                {/* ── LEFT: Copy ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                    {/* Eyebrow / trust badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '6px 14px 6px 6px',
                            borderRadius: '99px',
                            background: 'white',
                            border: '1px solid rgba(79,70,229,0.16)',
                            boxShadow: '0 2px 12px rgba(79,70,229,0.08)',
                        }}>
                            <span style={{ position: 'relative', width: '20px', height: '20px', borderRadius: '50%', background: '#EEF2FF', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4F46E5', animation: 'pulseDot 2s ease-in-out infinite' }} />
                            </span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#374151' }}>
                                AI-Powered
                            </span>
                        </div>

                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            padding: '6px 12px',
                            borderRadius: '99px',
                            background: 'white',
                            border: '1px solid #FDE68A',
                            boxShadow: '0 2px 8px rgba(245,158,11,0.1)',
                        }}>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#F59E0B" color="#F59E0B" />)}
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#92400E' }}>5.0 Rating</span>
                        </div>
                    </div>

                    {/* Headline */}
                    <div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4.25rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            lineHeight: '1.1',
                            color: '#111827',
                            margin: '0',
                        }}>
                            We Build{' '}
                            <span style={{ position: 'relative', display: 'inline-block' }}>
                                <span style={{
                                    background: 'linear-gradient(135deg, #4F46E5 20%, #7C3AED 60%, #EC4899 100%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Digital
                                </span>
                                <svg style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%' }} viewBox="0 0 160 8" fill="none" preserveAspectRatio="none" aria-hidden>
                                    <path d="M2 6 Q 40 1, 80 5 Q 120 9, 158 3" stroke="url(#uline)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                    <defs>
                                        <linearGradient id="uline" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#4F46E5" />
                                            <stop offset="100%" stopColor="#EC4899" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            {' '}Products<br />
                            <span style={{ color: '#111827' }}>That Scale</span>
                        </h1>
                    </div>

                    {/* Subtext */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#4B5563',
                        lineHeight: 1.6,
                        maxWidth: '480px',
                        fontWeight: 400,
                        margin: 0,
                    }}>
                        AiDamsole® crafts CRM systems, web apps & AI tools trusted by <strong style={{ color: '#111827', fontWeight: 600 }}>100+ businesses worldwide</strong> to move fast and grow smart.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                        <a
                            href="#portfolio"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                                color: 'white',
                                fontWeight: 600, fontSize: '0.9rem',
                                border: 'none',
                                boxShadow: '0 8px 20px rgba(79,70,229,0.3)',
                                textDecoration: 'none', cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(79,70,229,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.3)'; }}
                        >
                            See Our Work <ArrowDown size={16} aria-hidden />
                        </a>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '12px',
                                background: 'white',
                                color: '#374151',
                                fontWeight: 600, fontSize: '0.9rem',
                                border: '1.5px solid #E5E7EB',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                                textDecoration: 'none', cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#A5B4FC'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.transform = 'none'; }}
                        >
                            Get Proposal <ArrowRight size={16} aria-hidden />
                        </a>
                    </div>

                    {/* Metrics bar */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            background: 'white',
                            borderRadius: '14px',
                            border: '1px solid rgba(79,70,229,0.1)',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                            marginTop: '16px',
                        }}
                    >
                        {METRICS.map(({ value, label }, i) => (
                            <div
                                key={label}
                                style={{
                                    padding: '16px 8px',
                                    textAlign: 'center',
                                    borderLeft: i > 0 ? '1px solid #F3F4F6' : 'none',
                                }}
                            >
                                <div style={{
                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                                    fontWeight: 800,
                                    letterSpacing: '-0.02em',
                                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '2px',
                                }}>
                                    {value}
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 500 }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: Visual ── */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }} aria-hidden="true" className="hero-visual">

                    <div style={{
                        position: 'relative',
                        borderRadius: '20px',
                        background: 'white',
                        border: '1px solid rgba(99,102,241,0.15)',
                        boxShadow: '0 24px 60px rgba(79,70,229,0.12), 0 8px 24px rgba(0,0,0,0.05)',
                        zIndex: 2,
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center',
                            height: '36px',
                            padding: '0 12px',
                            background: '#F9FAFB',
                            borderBottom: '1px solid #F3F4F6',
                            gap: '6px',
                            borderRadius: '20px 20px 0 0',
                        }}>
                            {['#FF5F57', '#FFBD2E', '#27C93F'].map(c => (
                                <span key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                            ))}
                            <div style={{
                                marginLeft: '12px', flex: 1,
                                background: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '6px', height: '22px',
                                maxWidth: '180px',
                            }} />
                        </div>
                        <img
                            src={heroImg}
                            alt="Dashboard"
                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0 0 20px 20px' }}
                        />
                    </div>

                    {/* Floating card — growth */}
                    <div
                        style={{
                            position: 'absolute', top: '20%', right: '-5%',
                            background: 'white',
                            borderRadius: '12px',
                            padding: '12px 16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(79,70,229,0.05)',
                            display: 'flex', alignItems: 'center', gap: '10px',
                            animation: 'float 6s ease-in-out infinite',
                            zIndex: 3,
                        }}
                    >
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '8px',
                            background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)',
                            display: 'grid', placeItems: 'center', fontSize: '1rem',
                        }}>📈</div>
                        <div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>+142%</div>
                            <div style={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>Avg. Growth</div>
                        </div>
                    </div>

                    {/* Floating card — testimonial */}
                    <div
                        style={{
                            position: 'absolute', bottom: '-8%', left: '5%',
                            background: 'white',
                            borderRadius: '12px',
                            padding: '12px 16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(79,70,229,0.05)',
                            maxWidth: '220px',
                            animation: 'float 7s ease-in-out infinite',
                            animationDelay: '-2s',
                            zIndex: 3,
                        }}
                    >
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#F59E0B" color="#F59E0B" />)}
                        </div>
                        <p style={{ fontSize: '0.68rem', color: '#374151', lineHeight: 1.4, fontStyle: 'italic', marginBottom: '8px' }}>
                            {TESTIMONIAL.text}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#4F46E5,#7C3AED)', display: 'grid', placeItems: 'center' }}>
                                <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'white' }}>SJ</span>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#111827' }}>{TESTIMONIAL.name}</div>
                                <div style={{ fontSize: '0.6rem', color: '#9CA3AF' }}>{TESTIMONIAL.role}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 48px !important; }
          .hero-grid > div:first-child { align-items: center; }
          .hero-grid p { margin: 0 auto; }
          .hero-visual { padding-bottom: 2rem; }
        }
      `}</style>
        </section>
    );
}
