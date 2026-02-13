'use client';

import ScrollReveal from './ScrollReveal';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';

interface CountUpProps {
    end: number;
    suffix?: string;
    duration?: number;
}

function CountUp({ end, suffix = '', duration = 2000 }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <div ref={ref}>{count}{suffix}</div>;
}

const statValues = [10, 0, 100];

export default function Philosophy() {
    const { t } = useTranslation();

    return (
        <section id="filosofia" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#111]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <ScrollReveal>
                    {/* Header */}
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-4">
                        <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#3b82f6]" />
                        {t.philosophy.tag}
                        <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#3b82f6]" />
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
                        {t.philosophy.title}{' '}
                        <span className="gradient-text-blue">{t.philosophy.titleAccent}</span>
                    </h2>

                    {/* Quote */}
                    <div className="relative max-w-3xl mx-auto mb-12">
                        {/* Decorative Quote Marks */}
                        <div className="absolute -top-6 -left-4 text-7xl font-serif text-[#3b82f6]/20 select-none">
                            &ldquo;
                        </div>
                        <div className="absolute -bottom-12 -right-4 text-7xl font-serif text-[#3b82f6]/20 select-none">
                            &rdquo;
                        </div>

                        <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-[#e0e0e0]">
                            {t.philosophy.quote}{' '}
                            <strong className="text-[#3b82f6] font-semibold">
                                {t.philosophy.quoteAccent}
                            </strong>
                        </blockquote>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-[#888] leading-relaxed max-w-2xl mx-auto">
                        {t.philosophy.subtitle}{' '}
                        <span className="text-[#aaa]">{t.philosophy.subtitleAccent}</span>
                    </p>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal delay={200}>
                    <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                        {t.philosophy.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-[#161616] to-transparent border border-[#222]">
                                <div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
                                    <CountUp end={statValues[index]} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs md:text-sm text-[#666]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
