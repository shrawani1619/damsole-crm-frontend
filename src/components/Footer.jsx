import React from 'react';
import { Zap, Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const LINKS = {
    Navigate: [
        { label: 'Home', href: '#home' },
        { label: 'Projects', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ],
    Projects: [
        { label: 'Elevator CRM', href: '#portfolio' },
        { label: 'Real Estate CRM', href: '#portfolio' },
        { label: 'Finance CRM', href: '#portfolio' },
        { label: 'Rada CRM', href: '#portfolio' },
    ],
    Legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Refund Policy', href: '#' },
    ],
};

export default function Footer() {
    return (
        <footer id="contact" style={{ background: '#0D0B1A' }} aria-label="Footer and contact">

            {/* ── Final CTA band ── */}
            <div style={{
                background: 'var(--gradient-accent)',
                padding: '64px 0',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div aria-hidden style={{
                    position: 'absolute', top: '-30%', right: '-5%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                }} />

                <div className="container-sm" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                        Ready to Transform?
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                        fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
                        color: '#fff', marginBottom: '16px',
                    }}>
                        Let's Build Something<br />Extraordinary Together
                    </h2>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.72)', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px' }}>
                        Join the innovative brands scaling with AiDamsole. Get your free proposal today.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
                        <a
                            href="mailto:sales@damsole.com"
                            className="btn btn-xl"
                            style={{
                                background: '#fff',
                                color: '#4F46E5',
                                fontWeight: 700,
                                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.25)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'; }}
                        >
                            <Mail size={20} aria-hidden /> Email Us <ArrowRight size={18} aria-hidden />
                        </a>
                        <a
                            href="tel:+919356917424"
                            className="btn btn-xl"
                            style={{
                                background: 'rgba(255,255,255,0.15)',
                                color: '#fff',
                                border: '1.5px solid rgba(255,255,255,0.35)',
                                backdropFilter: 'blur(8px)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >
                            <Phone size={20} aria-hidden /> +91 93569 17424
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Footer grid ── */}
            <div className="container" style={{ paddingTop: '56px', paddingBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">

                    {/* Brand column */}
                    <div>
                        <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }} aria-label="AiDamsole home">
                            <img src="https://aidamsole.com/Logo.png" alt="AiDamsole Logo" style={{ height: '44px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
                        </a>

                        <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.48)', lineHeight: 1.75, maxWidth: '280px', marginBottom: '24px' }}>
                            Premium AI-powered digital transformation agency — building future-ready ecosystems since 2018.
                        </p>

                        <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            {[
                                { icon: MapPin, text: 'Office 103/104, Madhuban Complex, Near Maxcare Hospital, Manchar, MH 410503', href: '#' },
                                { icon: Mail, text: 'sales@damsole.com', href: 'mailto:sales@damsole.com' },
                                { icon: Phone, text: '+91 93569 17424', href: 'tel:+919356917424' },
                                { icon: Clock, text: 'Mon–Sat · 9am–6pm IST', href: null },
                            ].map(({ icon: Icon, text, href }) => {
                                const Wrap = href ? 'a' : 'p';
                                return (
                                    <Wrap
                                        key={text}
                                        href={href}
                                        style={{
                                            display: 'flex', alignItems: 'flex-start', gap: '10px',
                                            fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)',
                                            lineHeight: 1.5, textDecoration: 'none',
                                            transition: 'color var(--duration-base) var(--ease-default)',
                                        }}
                                        onMouseEnter={href ? (e => e.currentTarget.style.color = 'var(--color-primary-400)') : undefined}
                                        onMouseLeave={href ? (e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)') : undefined}
                                    >
                                        <Icon size={14} color="var(--color-primary-500)" style={{ marginTop: '1px', flexShrink: 0 }} aria-hidden />
                                        {text}
                                    </Wrap>
                                );
                            })}
                        </address>

                        {/* Socials */}
                        <nav aria-label="Social media links" style={{ display: 'flex', gap: '8px' }}>
                            {[
                                { Icon: Twitter, label: 'Twitter' },
                                { Icon: Linkedin, label: 'LinkedIn' },
                                { Icon: Github, label: 'GitHub' },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={`Follow AiDamsole on ${label}`}
                                    style={{
                                        width: '36px', height: '36px',
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'grid', placeItems: 'center',
                                        color: 'rgba(255,255,255,0.4)',
                                        transition: 'all var(--duration-base) var(--ease-default)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.25)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Link columns */}
                    {Object.entries(LINKS).map(([section, links]) => (
                        <nav key={section} aria-label={`${section} links`}>
                            <h3 style={{
                                fontSize: 'var(--text-xs)', fontWeight: 700,
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.35)', marginBottom: '20px',
                            }}>
                                {section}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            style={{
                                                fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.5)',
                                                transition: 'color var(--duration-base) var(--ease-default)',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-400)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
                }}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.28)' }}>
                        © 2026 AiDamsole®. All rights reserved. Proudly built in India 🇮🇳
                    </p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.28)' }}>
                        Damsole Technologies · Manchar, Maharashtra 410503
                    </p>
                </div>
            </div>

            <style>{`
        @media (max-width: 960px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </footer>
    );
}
