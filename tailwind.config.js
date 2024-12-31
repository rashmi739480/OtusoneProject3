/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'gutter-x': '1.5rem', // Custom gutter spacing for x-axis
        'gutter-y': '1rem',   // Custom gutter spacing for y-axis
      },
    },
    screens: {
      xsm:'317px',
      xs: '425px', 
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      'inset-custom': 'inset 0 0 0 rgba(0, 0, 0, 0.075)',
    },
  
  },
  plugins: [ require("tailwind-scrollbar-hide") ],
}

