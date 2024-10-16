/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E05',
        'primary-foreground': '#E3E3E3',
        surface: '#FFFFFF',
        foreground: '#252525',
        'foreground-secondary': '#78716C',
        accent: '#E5E7EB'
      },
      height: {
        'calcNav': 'calc(100vh - 64px)',
      }
    }
  },
  plugins: []
};
