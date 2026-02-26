import React, { useState } from 'react';
import { Globe, Smartphone, Database, BarChart3, Cloud, Cpu, ArrowRight } from 'lucide-react';

const SERVICES = [
    {
        icon: Globe,
        title: 'Web Development',
        desc: 'High-performance, SEO-optimized web applications built with React, Next.js, and modern frameworks.',
        color: '#4F46E5', bg: '#EEF2FF',
        tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
        icon: Smartphone,
        title: 'App Development',
        desc: 'Native and cross-platform mobile apps for iOS & Android that deliver seamless user experiences.',
        color: '#EC4899', bg: '#FDF2F8',
        tags: ['React Native', 'Flutter', 'Swift'],
    },
    {
        icon: Database,
        title: 'CRM Solutions',
        desc: 'Custom CRM architectures that streamline sales pipelines and enhance customer retention.',
        color: '#7C3AED', bg: '#EDE9FE',
        tags: ['Custom CRM', 'Sales Pipeline', 'Analytics'],
    },
    {
        icon: BarChart3,
        title: 'Digital Marketing',
        desc: 'Data-driven growth strategies, SEO, and PPC campaigns to maximize your digital ROI.',
        color: '#F59E0B', bg: '#FEF3C7',
        tags: ['SEO', 'PPC', 'Growth Hacking'],
    },
    {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        desc: 'Scalable cloud architecture and automated deployment pipelines using AWS, GCP, and Azure.',
        color: '#06B6D4', bg: '#ECFEFF',
        tags: ['AWS', 'GCP', 'Azure', 'DevOps'],
    },
    {
        icon: Cpu,
        title: 'AI Integration',
        desc: 'Custom machine learning models and LLM integration to automate complex workflows.',
        color: '#10B981', bg: '#D1FAE5',
        tags: ['LLM', 'ML Models', 'AutoML'],
    },
];

export default function Services() {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="services" style={{ background: 'white' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="label" style={{ color: '#4F46E5', display: 'block', marginBottom: '0.75rem' }}>Core Capabilities</span>
                    <h2 className="display-lg" style={{ marginBottom: '1rem' }}>
                        We Blend Creative Design with<br />
                        <span className="gradient-text">Engineering Excellence</span>
                    </h2>
                    <p className="body-lg">
                        Build scalable solutions that grow with your business — from idea to enterprise-grade deployment.
                    </p>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="services-grid">
                    {SERVICES.map(({ icon: Icon, title, desc, color, bg, tags }) => (
                        <div
                            key={title}
                            className="card"
                            style={{
                                padding: '2rem',
                                background: hovered === title ? bg : 'white',
                                borderColor: hovered === title ? color + '30' : '#E8E6FF',
                                cursor: 'default',
                            }}
                            onMouseEnter={() => setHovered(title)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '54px', height: '54px', borderRadius: '14px',
                                background: hovered === title ? color : bg,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.25rem', transition: 'background 0.3s ease',
                            }}>
                                <Icon size={26} color={hovered === title ? 'white' : color} strokeWidth={1.75} />
                            </div>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', marginBottom: '0.625rem' }}>
                                {title}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                                {desc}
                            </p>

                            {/* Tech tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                                {tags.map(t => (
                                    <span key={t} style={{
                                        padding: '0.2rem 0.625rem',
                                        background: hovered === title ? color + '20' : '#F3F4F6',
                                        color: hovered === title ? color : '#374151',
                                        borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600,
                                        border: `1px solid ${hovered === title ? color + '30' : 'transparent'}`,
                                        transition: 'all 0.3s ease',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Learn more link */}
                            <div style={{ marginTop: '1.25rem', borderTop: '1px solid #F3F4F6', paddingTop: '1rem' }}>
                                <button style={{
                                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                                    color: hovered === title ? color : '#9CA3AF',
                                    fontWeight: 600, fontSize: '0.875rem',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                }}>
                                    Learn More <ArrowRight size={15} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
