/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#E8CD7A",
        "gold-dark": "#8C7128",
        silver: "#C0C0C0",
        "silver-light": "#E6E6E6",
        "silver-dark": "#8A8A8A",
        mblack: "#0A0A0A",
        charcoal: "#1A1A1A",
        bgdark: "#050505",
        baobab: "#8B5A2B",
        reserve: "#3F6B4F",
        "reserve-light": "#6FA283",
        rust: "#A6432E",
        "rust-light": "#C97158",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "img-baobab": "url('/src/assets/baobab.jpg')",
        "img-lion": "url('/src/assets/lion.jpg')",
        "img-rhino": "url('/src/assets/rhino.jpg')",
        "img-pyramids": "url('/src/assets/pyramids.jpg')",
        "img-tunisia": "url('/src/assets/tunisia.jpg')",
        "img-lake-retba": "url('/src/assets/lake-retba.jpg')",
        "img-kilimanjaro": "url('/src/assets/kilimanjaro.jpg')",
      },
      dropShadow: {
        gold: "0 0 10px rgba(212,175,55,0.6)",
        silver: "0 0 10px rgba(192,192,192,0.6)",
      },
    },
  },
  plugins: [],
};