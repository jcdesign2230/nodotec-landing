/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F4EF',
        ink: '#12181D',
        panel: '#0D1418',
        teal: {
          DEFAULT: '#0E7C7B',
          dark: '#0A5F5E',
          light: '#E4F2F1',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#C6832A',
        },
        signal: {
          red: '#C4552C',
          redLight: '#F5E4DC',
        },
        line: '#DEDCD3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        card: '14px',
      },
      maxWidth: {
        'content': '1180px',
      },
    },
  },
  plugins: [],
}
