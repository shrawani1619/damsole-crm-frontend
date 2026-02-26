import React, { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const PLANS = [
    {
        name: 'CRM Core',
        tagline: 'For small & growing teams',
        price: '$29',
        period: '/month',
        img: p1,
        color: '#4F46E5',
        bg: '#EEF2FF',
        features: ['Up to 5 users', 'Contact & deal management', 'Email integrations', 'Basic reporting', '24/7 email support'],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Sales Pro',
        tagline: 'Most popular for scaling teams',
        price: '$59',
        period: '/month',
        img: p3,
        color: '#7C3AED',
        bg: '#EDE9FE',
        features: ['Up to 25 users', 'AI-powered forecasting', 'Sales automation', 'Custom dashboards', 'Priority support', 'API access'],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Support Hub',
        tagline: 'For customer-first organisations',
        price: '$49',
        period: '/month',
        img: p2,
        color: '#EC4899',
        bg: '#FDF2F8',
        features: ['Unlimited users', 'Omnichannel inbox', 'AI triage & routing', 'Sentiment analysis', 'SLA management', 'Dedicated CSM'],
        cta: 'Contact Sales',
        popular: false,
    },
];

export default function Products() {
    const [hovered, setHovered] = useState(null);

    return (
        <section
            id="products"
            aria-labelledby="products-heading"
            style={{ background: 'var(--bg-page)' }}
        >
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p className="section-label" style={{ marginBottom: '12px' }}>Products & Pricing</p>
                    <h2 id="products-heading" className="text-h2" style={{ marginBottom: '12px' }}>
                        Tools Built for Growth
                    </h2>
                    <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
                        Pick the plan that fits your team. Every product includes onboarding, integrations, and dedicated support.
                    </p>
                </div>

                {/* Cards */}
                <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}
                    className="plans-grid"
                    role="list"
                    aria-label="Pricing plans"
                >
                    {PLANS.map(({ name, tagline, price, period, img, color, bg, features, cta, popular }) => (
                        <article
                            key={name}
                            role="listitem"
                            style={{
                                background: 'var(--bg-surface)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                border: popular
                                    ? `2px solid ${color}`
                                    : `1px solid ${hovered === name ? color + '40' : 'var(--border-light)'}`,
                                boxShadow: popular
                                    ? `var(--shadow-xl), 0 0 0 4px ${color}15`
                                    : hovered === name ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
                                transform: hovered === name ? 'translateY(-5px)' : popular ? 'translateY(-6px) scale(1.01)' : 'none',
                                transition: 'all var(--duration-slow) var(--ease-out)',
                                position: 'relative',
                            }}
                            onMouseEnter={() => setHovered(name)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Popular badge */}
                            {popular && (
                                <div style={{
                                    position: 'absolute', top: '-1px', left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: color,
                                    color: 'white',
                                    fontSize: 'var(--text-xs)', fontWeight: 700,
                                    padding: '4px 16px',
                                    borderRadius: '0 0 8px 8px',
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                }}>
                                    Most Popular
                                </div>
                            )}

                            {/* Image header */}
                            <div style={{
                                height: '140px',
                                background: bg,
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src={img}
                                    alt={`${name} product preview`}
                                    loading="lazy"
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        opacity: 0.6, mixBlendMode: 'multiply',
                                    }}
                                />
                            </div>

                            {/* Body */}
                            <div style={{ padding: '24px' }}>
                                {/* Name & price */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                    <div>
                                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                                            {name}
                                        </h3>
                                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                                            {tagline}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                        <span style={{ fontSize: '1.625rem', fontWeight: 800, color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                                            {price}
                                        </span>
                                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', display: 'block', marginTop: '2px' }}>
                                            {period}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="divider" />

                                {/* Features */}
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }} aria-label={`${name} features`}>
                                    {features.map(f => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                            <span style={{
                                                width: '20px', height: '20px', borderRadius: '50%',
                                                background: bg, display: 'grid', placeItems: 'center', flexShrink: 0,
                                            }} aria-hidden>
                                                <Check size={12} color={color} strokeWidth={2.5} />
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: 'var(--radius-md)',
                                        background: popular ? `linear-gradient(135deg, ${color}, ${color}CC)` : 'var(--bg-subtle)',
                                        color: popular ? 'white' : color,
                                        fontWeight: 700,
                                        fontSize: 'var(--text-sm)',
                                        border: popular ? 'none' : `1.5px solid ${color}50`,
                                        cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                        boxShadow: popular ? `0 6px 20px ${color}40` : 'none',
                                        transition: 'all var(--duration-base) var(--ease-spring)',
                                        minHeight: '44px',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = popular ? `0 10px 28px ${color}50` : `0 4px 12px ${color}25`; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = popular ? `0 6px 20px ${color}40` : 'none'; }}
                                >
                                    {cta} <ArrowRight size={15} aria-hidden />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Below grid note */}
                <p style={{ textAlign: 'center', marginTop: '32px', fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    All plans include a 14-day free trial. No credit card required. Cancel anytime.
                </p>
            </div>

            <style>{`
        @media (max-width: 960px) { .plans-grid { grid-template-columns: 1fr !important; max-width: 420px; margin-inline: auto; } }
      `}</style>
        </section>
    );
}
