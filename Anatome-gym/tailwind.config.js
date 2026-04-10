/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F7',
        surface: '#FFFFFF',
        muted: '#EFEFEF',
        ink: '#0B0B0B',
        accentGold: '#C9A24A',
        accentBlue: '#3B82F6',
      },
    },
  },
  plugins: [],
};
