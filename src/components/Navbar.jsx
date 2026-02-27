import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('#home');

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <header
                role="banner"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    maxWidth: scrolled ? '1200px' : '100%',
                    zIndex: 'var(--z-nav)',
                    padding: scrolled ? '0 24px' : '0',
                    transition: `
            max-width   var(--duration-slow) var(--ease-out),
            top         var(--duration-slow) var(--ease-out),
            padding     var(--duration-slow) var(--ease-out)
          `,
                }}
            >
                <div style={{
                    background: scrolled ? 'rgba(255,255,255,0.94)' : 'rgba(250,251,255,0.8)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderRadius: scrolled ? '16px' : '0',
                    border: scrolled ? '1px solid rgba(99,102,241,0.1)' : 'none',
                    borderBottom: scrolled ? 'none' : '1px solid rgba(229,231,235,0.6)',
                    boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.06)' : 'none',
                    marginTop: scrolled ? '10px' : '0',
                    transition: 'all var(--duration-slow) var(--ease-out)',
                }}>
                    <nav
                        className="container"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: scrolled ? '58px' : '70px',
                            gap: '24px',
                            maxWidth: scrolled ? '100%' : '1280px',
                            transition: 'height var(--duration-slow) var(--ease-out)',
                        }}
                        aria-label="Main navigation"
                    >
                        {/* Logo */}
                        <a
                            href="#home"
                            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
                            aria-label="Damsole home"
                        >
                            {/* Use local Damsole logo from public folder */}
                            <img
                                src="/damsole.png"
                                alt="Damsole Logo"
                                style={{ height: '48px', width: 'auto', display: 'block' }}
                            />
                        </a>

                        {/* Desktop nav */}
                        <nav
                            style={{ display: 'flex', alignItems: 'center', gap: '2px', marginLeft: 'auto' }}
                            className="desktop-nav"
                            aria-label="Primary"
                        >
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setActive(href)}
                                    aria-current={active === href ? 'page' : undefined}
                                    style={{
                                        padding: '6px 14px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: active === href ? 600 : 500,
                                        color: active === href ? 'var(--color-primary-600)' : 'var(--text-secondary)',
                                        background: active === href ? 'var(--color-primary-50)' : 'transparent',
                                        transition: 'all var(--duration-base) var(--ease-default)',
                                        minHeight: '44px',
                                        display: 'inline-flex', alignItems: 'center',
                                    }}
                                    onMouseEnter={e => {
                                        if (active !== href) {
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                            e.currentTarget.style.background = 'var(--bg-muted)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (active !== href) {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <a href="#contact" className="btn btn-primary btn-sm desktop-nav" style={{ flexShrink: 0 }}>
                            Get Proposal ↗
                        </a>

                        {/* Mobile toggle */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setMenuOpen(v => !v)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            style={{
                                marginLeft: 'auto',
                                width: '44px', height: '44px',
                                display: 'none',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border-base)',
                                background: 'var(--bg-surface)',
                                cursor: 'pointer',
                                transition: 'all var(--duration-base) var(--ease-default)',
                            }}
                        >
                            {menuOpen ? <X size={20} color="var(--text-primary)" /> : <Menu size={20} color="var(--text-primary)" />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile drawer */}
            <div
                id="mobile-nav"
                aria-hidden={!menuOpen}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 999,
                    pointerEvents: menuOpen ? 'all' : 'none',
                }}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(17,24,39,0.5)',
                        backdropFilter: 'blur(4px)',
                        opacity: menuOpen ? 1 : 0,
                        transition: 'opacity var(--duration-slow) var(--ease-out)',
                    }}
                    aria-hidden
                />

                {/* Panel */}
                <aside
                    style={{
                        position: 'absolute',
                        top: 0, right: 0, bottom: 0,
                        width: 'min(320px, 85vw)',
                        background: 'var(--bg-surface)',
                        boxShadow: '-20px 0 60px rgba(0,0,0,0.12)',
                        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform var(--duration-slow) var(--ease-out)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        gap: '8px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Navigation</span>
                        <button
                            onClick={() => setMenuOpen(false)}
                            style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-base)', background: 'var(--bg-muted)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
                            aria-label="Close menu"
                        >
                            <X size={18} color="var(--text-secondary)" />
                        </button>
                    </div>

                    {NAV_LINKS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => { setActive(href); setMenuOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center',
                                padding: '12px 16px',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-base)',
                                fontWeight: 500,
                                color: active === href ? 'var(--color-primary-600)' : 'var(--text-primary)',
                                background: active === href ? 'var(--color-primary-50)' : 'transparent',
                                minHeight: '44px',
                            }}
                        >
                            {label}
                        </a>
                    ))}

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }}>
                        Get Proposal ↗
                    </a>
                </aside>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </>
    );
}
