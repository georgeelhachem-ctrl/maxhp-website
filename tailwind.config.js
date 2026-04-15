/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#004ac6',
        'brand-dark': '#0038a0',
        'bg-base': '#f7f9fb',
        'text-base': '#191c1e',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-md': '0 4px 12px 0 rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.05)',
        'card-lg': '0 8px 24px 0 rgba(0,0,0,0.08), 0 2px 6px 0 rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
