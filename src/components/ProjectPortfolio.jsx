import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

const PROJECTS = [
    { id: 1, title: 'Elevator CRM', cat: 'Logistics', desc: 'Specialised CRM for lift maintenance, automated dispatching, asset tracking, and SLA management.', img: p1, tech: ['React', 'Node.js', 'Postgres'], color: '#4F46E5', bg: '#EEF2FF', demoUrl: 'https://damsoleelevatorcrm.netlify.app/' },
    { id: 2, title: 'Real Estate CRM', cat: 'Property', desc: 'Lead management, property listings, and automated agent workflows tailored for modern real estate brokerages.', img: p2, tech: ['Next.js', 'Python', 'Redis'], color: '#7C3AED', bg: '#F3E8FF', demoUrl: 'https://damsole-realestate-crm.vercel.app' },
    { id: 3, title: 'Finance CRM', cat: 'Finance', desc: 'Secure advisor portal for client portfolio management, compliance tracking, and document vaulting.', img: p3, tech: ['React', 'Java', 'AWS'], color: '#EC4899', bg: '#FCE7F3', demoUrl: 'https://damsolefinserv-frontend.vercel.app/login' },
    {
        id: 4,
        title: 'Manufacturel CRM',
        cat: 'Manufacturing',
        desc: 'Production-ready CRM for manufacturers to manage distributors, orders, inventory, and service workflows in one place.',
        img: p4,
        tech: ['React', 'Node.js', 'Postgres'],
        color: '#0EA5E9',
        bg: '#E0F2FE',
        // Use full URL with protocol so the button opens the correct website
        demoUrl: 'https://aidamsole-manufacturing-frontend.vercel.app',
    },
];

export default function ProjectPortfolio() {
    const [hovered, setHovered] = useState(null);

    return (
        <section
            id="portfolio"
            aria-labelledby="portfolio-heading"
            style={{
                background: '#FAFAF9',
                padding: '80px 0',
                position: 'relative',
                borderTop: '1px solid #E5E7EB'
            }}
        >
            <div className="container">

                {/* ── Header ── */}
                <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '640px', marginInline: 'auto' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        borderRadius: '99px',
                        background: '#F3F4F6',
                        color: '#4B5563',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        Featured Work
                    </span>
                    <h2
                        id="portfolio-heading"
                        style={{
                            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1,
                            color: '#111827',
                            marginBottom: '16px',
                        }}
                    >
                        Proof is in the{' '}
                        <span style={{ color: '#4F46E5' }}>Product</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.6 }}>
                        Explore how we've helped companies scale operations, understand data, and drive revenue through custom digital solutions.
                    </p>
                </div>

                {/* ── Project Grid (3 columns, 2 rows) ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '40px',
                }} className="premium-project-grid">

                    {PROJECTS.map(p => (
                        <article
                            key={p.id}
                            role="listitem"
                            onMouseEnter={() => setHovered(p.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '24px',
                                border: '1px solid #E5E7EB',
                                overflow: 'hidden',
                                boxShadow: hovered === p.id
                                    ? '0 32px 64px rgba(0,0,0,0.08), 0 0 0 1px rgba(79,70,229,0.08)'
                                    : '0 8px 32px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.02)',
                                transform: hovered === p.id ? 'translateY(-6px)' : 'none',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Image Container */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingTop: '65%', // 16:10 aspect ratio
                                background: p.bg,
                                overflow: 'hidden',
                            }}>
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        top: '8%',
                                        left: '8%',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                                        transform: hovered === p.id ? 'scale(1.03) translate(-1%, -1%)' : 'scale(1) translate(0, 0)',
                                        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                                    }}
                                />
                                {/* Category Badge */}
                                <span style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    padding: '6px 14px',
                                    borderRadius: '99px',
                                    background: 'white',
                                    color: p.color,
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                }}>
                                    {p.cat}
                                </span>

                                {/* Overlay tint on hover */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent, rgba(79, 70, 229, 0.1))',
                                    opacity: hovered === p.id ? 1 : 0,
                                    transition: 'all 0.4s ease',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Content Panel */}
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        color: '#111827',
                                        letterSpacing: '-0.02em',
                                        margin: 0,
                                        transition: 'color 0.2s',
                                    }}>
                                        {p.title}
                                    </h3>
                                    <a href={p.demoUrl} target={p.demoUrl !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={`View ${p.title} Live`} style={{ color: p.color, padding: '4px' }}>
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <p style={{
                                    fontSize: '1.0625rem',
                                    color: '#4B5563',
                                    lineHeight: 1.6,
                                    marginBottom: '24px',
                                }}>
                                    {p.desc}
                                </p>

                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                                    <a
                                        href={p.demoUrl}
                                        target={p.demoUrl !== '#' ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '12px 24px',
                                            background: 'linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '12px',
                                            fontSize: '0.9375rem',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                            boxShadow: '0 8px 24px rgba(236, 72, 153, 0.25)',
                                            width: '100%',
                                            justifyContent: 'center',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 12px 32px rgba(236, 72, 153, 0.35)';
                                            e.currentTarget.style.filter = 'brightness(1.1)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(236, 72, 153, 0.25)';
                                            e.currentTarget.style.filter = 'brightness(1)';
                                        }}
                                    >
                                        Get Demo <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .premium-project-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .premium-project-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
        </section >
    );
}
