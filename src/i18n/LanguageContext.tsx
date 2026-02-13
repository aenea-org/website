'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type Locale = 'it' | 'en';

// ── Italian Dictionary ────────────────────────────────────────────
const it = {
    // Navbar
    nav: {
        problem: 'Il Problema',
        solution: 'Soluzione',
        philosophy: 'Filosofia',
        team: 'Team',
        cta: 'Richiedi Demo',
    },

    // Hero
    hero: {
        badge: 'A new startup rises',
        headline: 'Progettare Hardware',
        headlineAccent: 'alla velocità del Software.',
        subtitle: "L'EDA moderno per team che non hanno tempo da perdere. AENEA rimuove la complessità dei tool tradizionali e ti permette di passare dall'idea al design in minuti, non giorni.",
        ctaPrimary: 'Richiedi una Demo',
        ctaSecondary: 'Come funziona',
    },

    // Problem
    problem: {
        tag: 'il problema',
        title: 'Riscrivere le regole',
        titleAccent: 'del gioco.',
        subtitle: 'La complessità dei chip aumenta, ma gli strumenti per disegnarli sono rimasti indietro. I tool EDA tradizionali ci hanno permesso di realizzare opere strabilianti, ma hanno delle criticità innegabili.',
        cards: [
            {
                title: 'Lenti',
                oldWay: 'Per ottenere risultati bisogna aspettare ore, giorni... Alle volte intere settimane!',
                newWay: 'AENEA genera risultati in secondi. Itera alla velocità del pensiero.',
            },
            {
                title: 'Costosi',
                oldWay: 'Elevate risorse hardware devono essere mantenute in funzione per lunghi periodi di tempo!',
                newWay: 'AENEA è cloud-native. Nessun hardware dedicato, nessuna licenza da mantenere.',
            },
            {
                title: 'Complessi',
                oldWay: 'Migliaia di opzioni e variabili, nessuno le conosce tutte, senza contare i possibili bug e crash!',
                newWay: 'Inizia a creare dal giorno uno. Nessun gergo oscuro, nessuna curva di apprendimento.',
            },
        ],
    },

    // Solution
    solution: {
        tag: 'la soluzione',
        title: 'Un workflow che',
        titleAccent: 'lavora per te.',
        subtitle: "Il nostro modello genera netlist e collaterals del tutto simili a quelli dei tool EDA tradizionali, ma molto più velocemente. Tu ti concentri sulla logica e sull'architettura.",
        steps: [
            { number: '01', label: 'Progetta', desc: 'Definisci la logica' },
            { number: '02', label: 'Genera', desc: 'Sintesi automatica' },
            { number: '03', label: 'Realizza', desc: 'Output verificato' },
        ],
        features: [
            {
                title: 'Velocità Estrema',
                description: 'Il nostro modello genera risultati in secondi, non in ore o giorni. Il tempo è la risorsa più preziosa: AENEA te lo restituisce.',
            },
            {
                title: 'Output Standard',
                description: 'Generiamo file compatibili con i flussi di lavoro industriali esistenti. Nessun lock-in proprietario, mai.',
            },
            {
                title: 'Collaborativo',
                description: 'Costruito per team, non per singoli isolati. Condividi, rivedi e itera insieme in tempo reale.',
            },
        ],
        cta: 'Scopri come funziona',
    },

    // Philosophy
    philosophy: {
        tag: 'la filosofia',
        title: "L'approccio",
        titleAccent: 'AENEA.',
        quote: "I modelli AI più famosi hanno l'ambizione di modellizzare l'intelligenza umana. Noi ci concentriamo su una sfida specifica:",
        quoteAccent: 'il nostro modello legge RTL e genera circuiti elettronici digitali, punto.',
        subtitle: 'Non generiamo poesie o ricette culinarie,',
        subtitleAccent: 'solo circuiti funzionanti.',
        stats: [
            { suffix: '×', label: 'Iterazioni più veloci' },
            { suffix: '', label: 'Setup richiesto' },
            { suffix: '%', label: 'Output standard' },
        ],
    },

    // Team
    team: {
        tag: 'il team',
        title: 'Chi',
        titleAccent: 'siamo.',
        subtitle: 'Siamo ingegneri, ricercatori e progettisti. Abbiamo vissuto in prima persona i limiti dei software EDA tradizionali e abbiamo costruito lo strumento che avremmo sempre voluto usare.',
        members: [
            {
                name: 'Alessandro',
                role: 'CTO',
                bio: "ML Engineer. Si occupa dell'infrastruttura di machine learning e dell'architettura tecnica.",
            },
            {
                name: 'Filippo',
                role: 'CEO',
                bio: 'Visione strategica e sviluppo business. Guida la crescita aziendale e le partnership.',
            },
            {
                name: 'Marco',
                role: 'CPO',
                bio: 'PhD in Elettronica. Trasforma la ricerca accademica in soluzioni pratiche per ingegneri.',
            },
        ],
    },

    // Footer
    footer: {
        tagline: 'Designed for engineers.',
        product: 'Prodotto',
        features: 'Funzionalità',
        demo: 'Demo',
        company: 'Azienda',
        contact: 'Contatti',
        copyright: '© {year} AENEA. All rights reserved.',
    },
};

// ── English Dictionary ────────────────────────────────────────────
const en: typeof it = {
    nav: {
        problem: 'The Problem',
        solution: 'Solution',
        philosophy: 'Philosophy',
        team: 'Team',
        cta: 'Request Demo',
    },

    hero: {
        badge: 'A new startup rises',
        headline: 'Design Hardware',
        headlineAccent: 'at the speed of Software.',
        subtitle: "The modern EDA for teams that have no time to waste. AENEA removes the complexity of traditional tools and lets you go from idea to design in minutes, not days.",
        ctaPrimary: 'Request a Demo',
        ctaSecondary: 'How it works',
    },

    problem: {
        tag: 'the problem',
        title: 'Rewriting the rules',
        titleAccent: 'of the game.',
        subtitle: "Chip complexity is growing, but the tools to design them have fallen behind. Traditional EDA tools have enabled amazing achievements, but they have undeniable shortcomings.",
        cards: [
            {
                title: 'Slow',
                oldWay: 'Getting results takes hours, days... Sometimes entire weeks!',
                newWay: 'AENEA generates results in seconds. Iterate at the speed of thought.',
            },
            {
                title: 'Expensive',
                oldWay: 'Massive hardware resources must be kept running for long periods of time!',
                newWay: 'AENEA is cloud-native. No dedicated hardware, no licenses to maintain.',
            },
            {
                title: 'Complex',
                oldWay: 'Thousands of options and variables, nobody knows them all — not to mention the bugs and crashes!',
                newWay: 'Start creating from day one. No obscure jargon, no learning curve.',
            },
        ],
    },

    solution: {
        tag: 'the solution',
        title: 'A workflow that',
        titleAccent: 'works for you.',
        subtitle: "Our model generates netlists and collaterals fully comparable to those of traditional EDA tools, but much faster. You focus on logic and architecture.",
        steps: [
            { number: '01', label: 'Design', desc: 'Define the logic' },
            { number: '02', label: 'Generate', desc: 'Automatic synthesis' },
            { number: '03', label: 'Deliver', desc: 'Verified output' },
        ],
        features: [
            {
                title: 'Extreme Speed',
                description: 'Our model generates results in seconds, not hours or days. Time is the most precious resource: AENEA gives it back to you.',
            },
            {
                title: 'Standard Output',
                description: 'We generate files compatible with existing industrial workflows. No proprietary lock-in, ever.',
            },
            {
                title: 'Collaborative',
                description: 'Built for teams, not isolated individuals. Share, review, and iterate together in real time.',
            },
        ],
        cta: 'Discover how it works',
    },

    philosophy: {
        tag: 'the philosophy',
        title: 'The',
        titleAccent: 'AENEA approach.',
        quote: "The most famous AI models aspire to model human intelligence. We focus on a specific challenge:",
        quoteAccent: 'our model reads RTL and generates digital electronic circuits, period.',
        subtitle: "We don't generate poems or recipes,",
        subtitleAccent: 'only working circuits.',
        stats: [
            { suffix: '×', label: 'Faster iterations' },
            { suffix: '', label: 'Setup required' },
            { suffix: '%', label: 'Standard output' },
        ],
    },

    team: {
        tag: 'the team',
        title: 'Who',
        titleAccent: 'we are.',
        subtitle: "We are engineers, researchers, and designers. We have experienced firsthand the limitations of traditional EDA software and built the tool we always wished we had.",
        members: [
            {
                name: 'Alessandro',
                role: 'CTO',
                bio: 'ML Engineer. Leads the machine learning infrastructure and technical architecture.',
            },
            {
                name: 'Filippo',
                role: 'CEO',
                bio: 'Strategic vision and business development. Drives company growth and partnerships.',
            },
            {
                name: 'Marco',
                role: 'CPO',
                bio: 'PhD in Electronics. Turns academic research into practical solutions for engineers.',
            },
        ],
    },

    footer: {
        tagline: 'Designed for engineers.',
        product: 'Product',
        features: 'Features',
        demo: 'Demo',
        company: 'Company',
        contact: 'Contact',
        copyright: '© {year} AENEA. All rights reserved.',
    },
};

// ── Dictionaries Map ──────────────────────────────────────────────
const dictionaries = { it, en } as const;

// ── Types ─────────────────────────────────────────────────────────
export type Dictionary = typeof it;

// ── Context ───────────────────────────────────────────────────────
interface LanguageContextType {
    locale: Locale;
    t: Dictionary;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('it');

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        if (typeof window !== 'undefined') {
            document.documentElement.lang = newLocale;
            localStorage.setItem('aenea-locale', newLocale);
        }
    }, []);

    const toggleLocale = useCallback(() => {
        setLocale(locale === 'it' ? 'en' : 'it');
    }, [locale, setLocale]);

    // Restore from localStorage on mount
    // Restore from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('aenea-locale') as Locale | null;
            if (saved && (saved === 'it' || saved === 'en') && saved !== locale) {
                setLocaleState(saved);
                document.documentElement.lang = saved;
            }
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ locale, t: dictionaries[locale], setLocale, toggleLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

// ── Hook ──────────────────────────────────────────────────────────
export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
