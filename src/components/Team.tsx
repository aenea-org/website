'use client';

import ScrollReveal from './ScrollReveal';
import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageContext';

const memberImages = ['/alessandro_icon.png', '/filippo_icon.png', '/marco_icon.png'];

export default function Team() {
    const { t } = useTranslation();

    return (
        <section id="team" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-4">
                            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#3b82f6]" />
                            {t.team.tag}
                            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#3b82f6]" />
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            {t.team.title}{' '}
                            <span className="gradient-text-blue">{t.team.titleAccent}</span>
                        </h2>
                        <p className="text-lg text-[#888] max-w-2xl mx-auto">
                            {t.team.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Team Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {t.team.members.map((member, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="group h-full card-premium p-8 text-center hover:border-[#3b82f6]/30">
                                {/* Avatar with Ring */}
                                <div className="relative mx-auto mb-6 w-28 h-28">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/30 to-[#3b82f6]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Ring */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] p-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-full h-full rounded-full bg-[#161616]" />
                                    </div>

                                    {/* Image */}
                                    <div className="absolute inset-[3px] rounded-full overflow-hidden">
                                        <Image
                                            src={memberImages[index]}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>

                                {/* Role Badge */}
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-sm font-medium text-[#3b82f6] mb-4">
                                    {member.role}
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-[#888] leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
