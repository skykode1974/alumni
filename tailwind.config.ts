import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006EFF',        // logo color tone (blue)
        dark: '#0a0a0a',
        light: '#ffffff',
        muted: '#808080',

        // ✅ New GenuinAI theme-friendly accent colors
        teal: '#88F0E0',
        purple: '#A98EFF',
        indigo: '#506DFF',
        lightblue: '#E6F0FF',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite', // ✅ added
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }, // ✅ added
      },
    },
  },
  plugins: [],
};

export default config;
