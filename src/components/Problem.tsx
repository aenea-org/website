'use client';

import ScrollReveal from './ScrollReveal';
import { useTranslation } from '@/i18n/LanguageContext';

const problemIcons = [
    (
        <svg key="clock" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    (
        <svg key="money" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    (
        <svg key="bulb" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
];

export default function Problem() {
    const { t } = useTranslation();

    return (
        <section id="problema" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#111]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-4">
                            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#3b82f6]" />
                            {t.problem.tag}
                            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#3b82f6]" />
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            {t.problem.title}{' '}
                            <span className="gradient-text-blue">{t.problem.titleAccent}</span>
                        </h2>
                        <p className="text-lg text-[#888] max-w-2xl mx-auto">
                            {t.problem.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {t.problem.cards.map((problem, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="group h-full card-premium p-8 hover:border-[#3b82f6]/30">
                                {/* Icon */}
                                <div className="relative w-14 h-14 flex items-center justify-center mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 rounded-xl" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-[#3b82f6] transition-transform duration-300 group-hover:scale-110">
                                        {problemIcons[index]}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-5">{problem.title}</h3>

                                {/* Old Way */}
                                <div className="mb-4">
                                    <div className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-red-500/10 flex-shrink-0">
                                            <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <span className="text-[#888]">{problem.oldWay}</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-[#222] via-[#333] to-[#222] my-4" />

                                {/* New Way */}
                                <div>
                                    <div className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-green-500/10 flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[#aaa]">{problem.newWay}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
