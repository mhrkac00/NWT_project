/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hand: ["Just Another Hand", "sans-serif"],
        jaldi: ["Jaldi", "sans-serif"]
      },
      colors: {
        "green-1": "#E7F5F3",
        "green-2": "#B6DFDB",
        "green-3": "#92D0C9",
        "purple-1": "#9747FF",
        "purple-2": "#6E359B"
         
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};