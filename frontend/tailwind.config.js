/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'bg-cyan','bg-gilded','bg-abyss','bg-abyss2','bg-slate','bg-slateDark','bg-mist',
    'text-cyan','text-gilded','text-abyss','text-abyss2','text-slate','text-slateDark','text-mist',
    'border-cyan','border-gilded','border-abyss','border-slate','border-slateDark',
    'border-cyan/40','border-gilded/40','border-abyss/40','border-slateDark/40',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#06122B',
        abyss2: '#0a1c3d',
        cyan: '#00C8D6',
        cyan2: '#06a4af',
        gilded: '#E8A020',
        gilded2: '#c98512',
        slate: '#5A7080',
        slateDark: '#3e5060',
        mist: '#EEF3F7',
        paper: '#f7fafc',
        ink: '#0b1626',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        crafted: '0 1px 0 rgba(6,18,43,0.06), 0 14px 36px -18px rgba(6,18,43,0.22)',
        gold: '0 0 0 1px rgba(232,160,32,0.35), 0 10px 30px -12px rgba(232,160,32,0.35)',
      },
    },
  },
  plugins: [],
};
