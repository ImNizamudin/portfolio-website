/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#3b82f6',
          background: '#f8fafc',
          surface: '#ffffff',
          text: '#1e293b',
          textSecondary: '#64748b',
          border: '#e2e8f0',
        }
      }
    },
  },
  plugins: [],
}