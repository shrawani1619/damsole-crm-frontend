import React from 'react';
import { MapPin, Flag, Award } from 'lucide-react';

export default function About() {
    return (
        <section id="about" style={{ background: 'linear-gradient(135deg, #0F0F23 0%, #1E1B4B 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Background glows */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 65%)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 65%)', borderRadius: '50%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
                    {/* Left */}
                    <div>
                        <span className="label" style={{ color: '#818CF8', display: 'block', marginBottom: '0.875rem' }}>Empowering Businesses</span>
                        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Innovation Rooted in<br />
                            <span style={{ background: 'linear-gradient(135deg,#818CF8,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Manchar, India
                            </span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.0625rem' }}>
                            AiDamsole is a premium AI-powered digital transformation agency. We build agile services and future-ready ecosystems for forward-thinking enterprises.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                            Damsole Technologies collaborate on a common strategy to alleviate consumer problems. As a digital agency focused on results, our procedures are open and honest.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem' }}>
                            {[
                                { icon: MapPin, text: 'Manchar, MH, India' },
                                { icon: Flag, text: 'Proudly Made in India 🇮🇳' },
                                { icon: Award, text: '7+ Years of Excellence' },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.625rem',
                                    padding: '0.625rem 1.125rem', borderRadius: '99px',
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500,
                                }}>
                                    <Icon size={15} color="#818CF8" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Purpose + Mission cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {[
                            {
                                label: 'Our Purpose',
                                text: 'Driving the future of digital ecosystems through agile AI solutions and strategic foresight.',
                                gradient: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
                            },
                            {
                                label: 'Our Mission',
                                text: 'Transforming businesses with data-driven strategies and innovative engineering models.',
                                gradient: 'linear-gradient(135deg,#EC4899,#F59E0B)',
                            },
                        ].map(({ label, text, gradient }) => (
                            <div key={label} style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(12px)',
                            }}>
                                <div style={{
                                    display: 'inline-block', padding: '0.25rem 0.875rem', borderRadius: '99px',
                                    background: gradient, color: 'white',
                                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em',
                                    textTransform: 'uppercase', marginBottom: '0.875rem',
                                }}>
                                    {label}
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, fontSize: '1rem' }}>
                                    {text}
                                </p>
                            </div>
                        ))}

                        {/* Stats strip */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem',
                            padding: '1.75rem',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}>
                            {[
                                { value: '100+', label: 'Clients' },
                                { value: '7+', label: 'Years' },
                                { value: '6', label: 'Services' },
                            ].map(({ value, label }) => (
                                <div key={label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.875rem', fontWeight: 900, color: '#818CF8', letterSpacing: '-0.04em' }}>{value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: '0.25rem' }}>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
