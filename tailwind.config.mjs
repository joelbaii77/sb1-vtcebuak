/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#A86C90',
          hover: '#8E5276',
          light: '#C190AE'
        },
        neutral: {
          DEFAULT: '#1F2937',
          light: '#6B7280',
          lighter: '#F3F4F6'
        }
      }
    },
  },
  plugins: [],
}