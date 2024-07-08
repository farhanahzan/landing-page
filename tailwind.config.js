/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        buttonsone: 'var(--color-buttonsone)',
        buttonstwo: 'var(--color-buttonstwo)',
        typography: 'var(--color-typography)',
      },
      fontSize: {
        primary: 'var(--font-size-primary)',
        secondary: 'var(--font-size-secondary)',
        buttonsone: 'var(--font-size-buttonsone)',
        buttonstwo: 'var(--font-size-buttonstwo)',
        typography: 'var(--font-size-typography)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        buttonsone: 'var(--bg-buttonsone)',
        buttonstwo: 'var(--bg-buttonstwo)',
      },
      borderRadius: {
        buttonsone: 'var(--rad-buttonsone)',
        buttonstwo: 'var(--rad-buttonstwo)',
      },
      fontFamily: {
        primary: 'var(--font-family-primary)',
      },
    },
  },
  plugins: [],
};
