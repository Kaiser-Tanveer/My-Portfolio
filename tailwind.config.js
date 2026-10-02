/** @type {import('tailwindcss').Config} */

/**
 * Merge this into your existing tailwind.config.js (theme.extend).
 * This only ADDS tokens — it won't remove your existing emerald setup,
 * so you can mix old and new classes while migrating.
 */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hack: {
          bg: '#050806',
          panel: '#0A100C',
          panel2: '#0E1712',
          line: '#1C3226',
          lineSoft: '#132419',
          green: '#3CFF9A',
          greenDim: '#1F8F5C',
          greenBright: '#B7FFDA',
          amber: '#FFB454',
          text: '#D9F7E6',
          textDim: '#6E8A7C',
          textFaint: '#3E5347',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        pulse2: 'pulse2 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("daisyui")],
};