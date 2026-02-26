import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';

const WORK = [
    {
        title: 'Neural Architecture Mastery',
        desc: 'Engineered a custom transformer-based model for enterprise logistics, achieving 99.4% accuracy in predictive maintenance with zero-latency inference.',
        tag: 'AI / Machine Learning',
        img: p1,
        color: '#4F46E5',
        bg: '#EEF2FF',
        metric: '99.4%',
        metricLabel: 'Accuracy',
    },
    {
        title: 'Cognitive Data Intelligence',
        desc: 'Architected a real-time behavioral analysis platform processing 2.4 petabytes of data daily to preemptively identify market shifts before they occur.',
        tag: 'Data Engineering',
        img: p2,
        color: '#7C3AED',
        bg: '#EDE9FE',
        metric: '2.4PB',
        metricLabel: 'Data/Day',
    },
];

export default function FeaturedWork() {
    return (
        <section id="work" style={{ background: 'white' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>Featured Work</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        Proven <span className="gradient-text">Results at Scale</span>
                    </h2>
                    <p className="body-lg">
                        Two landmark projects that showcase the depth of our AI engineering capability.
                    </p>
                </div>

                {/* Projects */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {WORK.map((item, idx) => (
                        <div
                            key={item.title}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                gap: '3rem',
                                alignItems: 'center',
                                padding: '3rem',
                                borderRadius: '28px',
                                background: item.bg,
                                border: `1px solid ${item.color}20`,
                                boxShadow: `0 8px 32px ${item.color}15`,
                            }}
                            className="work-row"
                        >
                            {/* Content */}
                            <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                                <span style={{
                                    display: 'inline-block', marginBottom: '1rem',
                                    padding: '0.3rem 0.875rem', borderRadius: '99px',
                                    background: item.color + '20', color: item.color,
                                    fontSize: '0.8125rem', fontWeight: 700,
                                    border: `1px solid ${item.color}30`,
                                }}>
                                    {item.tag}
                                </span>
                                <h3 style={{ fontSize: '1.625rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', lineHeight: 1.25 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    {item.desc}
                                </p>
                                {/* Big metric */}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 900, color: item.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                                        {item.metric}
                                    </span>
                                    <span style={{ fontSize: '1rem', color: '#6B7280', fontWeight: 600 }}>
                                        {item.metricLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Image */}
                            <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                                <div style={{
                                    borderRadius: '20px', overflow: 'hidden',
                                    boxShadow: `0 20px 60px ${item.color}25`,
                                    border: `1px solid ${item.color}20`,
                                }}>
                                    <img src={item.img} alt={item.title} style={{ width: '100%', display: 'block' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .work-row { grid-template-columns: 1fr !important; }
          .work-row > div { order: unset !important; }
        }
      `}</style>
        </section>
    );
}
