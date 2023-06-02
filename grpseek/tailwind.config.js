/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)'],
      },
      colors: {
        'bone': '#F9F6EE',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi", "light", "dark"]
  }
}
