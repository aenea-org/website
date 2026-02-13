'use client';

import ScrollReveal from './ScrollReveal';
import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageContext';

const featureIcons = [
    (
        <svg key="speed" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    (
        <svg key="output" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    (
        <svg key="collab" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
];

export default function Solution() {
    const { t } = useTranslation();

    return (
        <section id="soluzione" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-4">
                            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#3b82f6]" />
                            {t.solution.tag}
                            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#3b82f6]" />
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            {t.solution.title}{' '}
                            <span className="gradient-text-blue">{t.solution.titleAccent}</span>
                        </h2>
                        <p className="text-lg text-[#888] max-w-2xl mx-auto">
                            {t.solution.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Flow Visualization */}
                <ScrollReveal delay={100}>
                    <div className="mb-20">
                        <div className="relative max-w-4xl mx-auto">
                            {/* Steps */}
                            <div className="flex items-center justify-between mb-8">
                                {t.solution.steps.map((step, index) => (
                                    <div key={index} className="flex flex-col items-center text-center flex-1">
                                        <div className="relative mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 border border-[#3b82f6]/30 flex items-center justify-center">
                                                <span className="text-lg font-bold text-[#3b82f6]">{step.number}</span>
                                            </div>
                                            {index < t.solution.steps.length - 1 && (
                                                <div className="absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[#3b82f6]/30 to-[#3b82f6]/10 -translate-y-1/2" style={{ width: 'calc(100% + 2rem)' }} />
                                            )}
                                        </div>
                                        <h4 className="text-sm font-semibold mb-1">{step.label}</h4>
                                        <p className="text-xs text-[#666]">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Flow Image Card */}
                            <div className="relative rounded-2xl overflow-hidden border border-[#222] bg-[#0d0d0d] p-6 md:p-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-[#3b82f6]/5 pointer-events-none" />
                                <div className="relative aspect-[16/7] w-full">
                                    <Image
                                        src="/Flow.png"
                                        alt="AENEA Workflow: Code to Circuit"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {t.solution.features.map((feature, index) => (
                        <ScrollReveal key={index} delay={200 + index * 100}>
                            <div className="group relative h-full card-premium p-8 hover:border-[#3b82f6]/30">
                                {/* Gradient glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="relative w-14 h-14 flex items-center justify-center mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 rounded-xl" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative text-[#3b82f6] transition-transform duration-300 group-hover:scale-110">
                                            {featureIcons[index]}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                                    {/* Description */}
                                    <p className="text-sm text-[#888] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={500}>
                    <div className="mt-16 text-center">
                        <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg"
                        >
                            <span>{t.solution.cta}</span>
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
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
