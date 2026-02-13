'use client';

import { useTranslation } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
    const { locale, toggleLocale } = useTranslation();

    return (
        <button
            onClick={toggleLocale}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#333] hover:border-[#3b82f6]/50 bg-[#161616] hover:bg-[#1c1c1c] text-[#888] hover:text-white transition-all duration-300"
            aria-label="Switch language"
        >
            <span className={locale === 'it' ? 'text-[#3b82f6]' : 'text-[#555]'}>IT</span>
            <span className="text-[#333]">/</span>
            <span className={locale === 'en' ? 'text-[#3b82f6]' : 'text-[#555]'}>EN</span>
        </button>
    );
}
