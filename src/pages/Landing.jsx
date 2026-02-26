import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectPortfolio from '../components/ProjectPortfolio';
import Footer from '../components/Footer';

export default function Landing() {
    return (
        <>
            {/* Skip-to-content for keyboard users */}
            <a
                href="#main-content"
                style={{
                    position: 'absolute', top: '-100%', left: '16px',
                    background: 'var(--color-primary-600)', color: '#fff',
                    padding: '8px 16px', borderRadius: '0 0 8px 8px',
                    fontWeight: 600, fontSize: '14px', zIndex: 9999,
                    transition: 'top 0.2s',
                }}
                onFocus={e => e.currentTarget.style.top = '0'}
                onBlur={e => e.currentTarget.style.top = '-100%'}
            >
                Skip to main content
            </a>

            <Navbar />

            <main id="main-content" role="main">
                <Hero />
                <ProjectPortfolio />
            </main>

            <Footer />
        </>
    );
}
