import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
    {
        q: 'What makes AiDamsole® different from other digital agencies?',
        a: 'We combine 7+ years of deep technical expertise with genuine AI integration — not just buzzwords. Every project uses battle-tested stacks, and we measure success by your business metrics, not deliverables.',
    },
    {
        q: 'How long does a typical project take?',
        a: 'Timelines depend on scope. A custom CRM or web app typically takes 6–12 weeks from kickoff to launch. We use 2-week agile sprints with regular check-ins so you\'re always in the loop.',
    },
    {
        q: 'Do you offer post-launch support and maintenance?',
        a: 'Yes. Every project includes 30 days of post-launch support. Ongoing maintenance, new features, and optimisation are available on monthly retainer plans.',
    },
    {
        q: 'Can I start with a discovery call before committing?',
        a: 'Absolutely. We offer a free 30-minute discovery call to understand your goals, ask the right questions, and outline a suitable roadmap — no commitment required.',
    },
    {
        q: 'What industries do you have the most experience in?',
        a: 'We have shipped products across Fintech, Healthcare, Logistics, Retail, and SaaS. Our CRM and AI work spans multiple verticals and company sizes, from 10-person startups to enterprise clients.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            style={{ background: 'var(--bg-surface)' }}
        >
            <div className="container-sm" style={{ maxWidth: '720px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p className="section-label" style={{ marginBottom: '12px' }}>FAQ</p>
                    <h2 id="faq-heading" className="text-h2" style={{ marginBottom: '12px' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-body-lg">
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* Accordion */}
                <div
                    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                    role="list"
                    aria-label="FAQ list"
                >
                    {FAQS.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                role="listitem"
                                style={{
                                    background: isOpen ? 'var(--color-primary-50)' : 'var(--bg-subtle)',
                                    border: `1px solid ${isOpen ? 'var(--color-primary-200)' : 'var(--border-base)'}`,
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    transition: 'border-color var(--duration-base) var(--ease-default), background var(--duration-base) var(--ease-default)',
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    id={`faq-btn-${i}`}
                                    aria-controls={`faq-panel-${i}`}
                                    style={{
                                        width: '100%',
                                        padding: '20px 24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '16px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        minHeight: '64px',
                                    }}
                                >
                                    <span style={{
                                        fontSize: 'var(--text-base)',
                                        fontWeight: 600,
                                        color: isOpen ? 'var(--color-primary-700)' : 'var(--text-primary)',
                                        lineHeight: 1.4,
                                        transition: 'color var(--duration-base) var(--ease-default)',
                                    }}>
                                        {faq.q}
                                    </span>
                                    <span style={{
                                        flexShrink: 0,
                                        width: '28px', height: '28px',
                                        borderRadius: '50%',
                                        background: isOpen ? 'var(--color-primary-100)' : 'var(--bg-muted)',
                                        display: 'grid', placeItems: 'center',
                                        transition: 'transform var(--duration-base) var(--ease-default), background var(--duration-base) var(--ease-default)',
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }} aria-hidden>
                                        <ChevronDown size={16} color={isOpen ? 'var(--color-primary-600)' : 'var(--text-tertiary)'} />
                                    </span>
                                </button>

                                <div
                                    id={`faq-panel-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-btn-${i}`}
                                    style={{
                                        maxHeight: isOpen ? '400px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.35s var(--ease-out)',
                                    }}
                                >
                                    <p style={{
                                        padding: '0 24px 20px',
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 'var(--leading-relaxed)',
                                    }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <p style={{ textAlign: 'center', marginTop: '40px', fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    Still have questions?{' '}
                    <a href="#contact" style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>
                        Send us a message →
                    </a>
                </p>
            </div>
        </section>
    );
}
