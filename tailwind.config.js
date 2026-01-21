/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        surface: {
          0: '#0a0a0a',
          50: '#0d0d0d',
          100: '#111111',
          200: '#161616',
          300: '#1c1c1c',
          400: '#222222',
          500: '#333333',
          600: '#555555',
          700: '#888888',
          800: '#aaaaaa',
          900: '#fafafa',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 30px -5px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 50px -10px rgba(59, 130, 246, 0.5)',
        'glow-xl': '0 0 80px -15px rgba(59, 130, 246, 0.6)',
        'inner-glow': 'inset 0 0 20px -5px rgba(59, 130, 246, 0.2)',
        'card': '0 4px 20px -5px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 40px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease forwards',
        'scale-in': 'scaleIn 0.3s ease forwards',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(59, 130, 246, 0.3)' },
          '50%': { borderColor: 'rgba(59, 130, 246, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}
