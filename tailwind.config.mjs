/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141416',
        'surface-dark': '#1C1C1F',
        'surface-darker': '#202024',
        accent: {
          DEFAULT: '#1E6FE0',
          hover: '#1655B8',
        },
        cream: '#FAFAFA',
        'gray-soft': '#F1F1F0',
        body: '#1A1A1A',
        muted: '#55555A',
        line: '#E4E4E4',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
