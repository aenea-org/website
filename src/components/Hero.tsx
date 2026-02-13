'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageContext';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 bg-mesh pointer-events-none" />
            <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

            {/* Floating Glow Orbs */}
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_60%)] pointer-events-none animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="max-w-xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 glass-card rounded-full text-xs text-[#888] mb-8 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                            </span>
                            {t.hero.badge}
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
                            {t.hero.headline}{' '}
                            <span className="gradient-text">
                                {t.hero.headlineAccent}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#888] leading-relaxed max-w-lg mb-10 animate-fade-in-up animate-delay-200">
                            {t.hero.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg"
                            >
                                <span>{t.hero.ctaPrimary}</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                            <a
                                href="#soluzione"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-transparent border border-[#333] hover:border-[#3b82f6]/50 hover:bg-[#161616] rounded-xl transition-all duration-300"
                            >
                                <span>{t.hero.ctaSecondary}</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Flow Diagram Visual */}
                    <div className="animate-fade-in-up animate-delay-400 lg:pl-8">
                        <div className="relative">
                            {/* Glow Effect Behind */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#3b82f6]/20 via-transparent to-[#3b82f6]/10 rounded-2xl blur-xl pointer-events-none" />

                            {/* Main Card */}
                            <div className="relative rounded-2xl overflow-hidden border border-[#222] bg-[#0d0d0d] shadow-2xl">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#222]">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-[#333] hover:bg-red-500/50 transition-colors" />
                                        <span className="w-3 h-3 rounded-full bg-[#333] hover:bg-yellow-500/50 transition-colors" />
                                        <span className="w-3 h-3 rounded-full bg-[#333] hover:bg-green-500/50 transition-colors" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="h-6 bg-[#1c1c1c] rounded-md max-w-xs mx-auto flex items-center justify-center">
                                            <span className="text-[10px] text-[#555] font-mono">aenea.io/design</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Flow Diagram */}
                                <div className="p-6 md:p-8">
                                    <div className="relative aspect-[16/9] w-full">
                                        <Image
                                            src="/Flow.png"
                                            alt="AENEA Flow: From Code to Circuit"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>

                                    {/* Caption */}
                                    <div className="mt-6 pt-4 border-t border-[#222] flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            <span className="text-xs text-green-500/80">Design Ready</span>
                                        </div>
                                        <span className="text-xs text-[#555]">
                                            Code → Synthesis → Circuit
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#3b82f6]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#3b82f6]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        </section>
    );
}
