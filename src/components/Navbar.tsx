'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: '#problema', label: 'Il Problema' },
        { href: '#soluzione', label: 'Soluzione' },
        { href: '#filosofia', label: 'Filosofia' },
        { href: '#team', label: 'Team' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'glass-strong shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="relative flex items-center gap-2 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/Logo_no_sfondo.png"
                                alt="AENEA"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            AENEA
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-sm text-[#888] hover:text-white transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                    >
                        <span>Richiedi Demo</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#888] hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute left-0 top-0 w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2' : ''
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
                <div className="flex flex-col h-full pt-20 px-6">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg text-[#888] hover:text-white transition-colors py-3 border-b border-[#222]"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pb-8">
                        <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg"
                        >
                            Richiedi Demo
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
