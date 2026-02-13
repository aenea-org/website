'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageContext';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="py-16 relative overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/50" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="AENEA"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold">AENEA</span>
                        </div>
                        <p className="text-sm text-[#888] mb-6">
                            {t.footer.tagline}
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-[#161616] border border-[#222] rounded-lg text-[#888] hover:text-white hover:bg-[#1c1c1c] hover:border-[#3b82f6]/50 hover:shadow-glow-sm transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-[#161616] border border-[#222] rounded-lg text-[#888] hover:text-white hover:bg-[#1c1c1c] hover:border-[#3b82f6]/50 hover:shadow-glow-sm transition-all duration-300"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Prodotto */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-white">{t.footer.product}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#soluzione" className="text-sm text-[#888] hover:text-[#3b82f6] transition-colors duration-300">
                                    {t.footer.features}
                                </a>
                            </li>
                            <li>
                                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#888] hover:text-[#3b82f6] transition-colors duration-300">
                                    {t.footer.demo}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Azienda */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-white">{t.footer.company}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#team" className="text-sm text-[#888] hover:text-[#3b82f6] transition-colors duration-300">
                                    {t.nav.team}
                                </a>
                            </li>
                            <li>
                                <a href="#filosofia" className="text-sm text-[#888] hover:text-[#3b82f6] transition-colors duration-300">
                                    {t.nav.philosophy}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-white">{t.footer.contact}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hello@aenea.com"
                                    className="text-sm text-[#888] hover:text-[#3b82f6] transition-colors duration-300 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    hello@aenea.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-[#555]">
                        {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </div>
                    <div className="text-sm text-[#555] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        {t.footer.tagline}
                    </div>
                </div>
            </div>
        </footer>
    );
}
