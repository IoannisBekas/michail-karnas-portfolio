/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)"
      },
      boxShadow: {
        luxury: "0 0 24px rgba(212, 175, 55, 0.25)",
        soft: "0 30px 80px rgba(3, 7, 18, 0.45)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 10% 20%, rgba(212,175,55,0.14), transparent 0 35%), radial-gradient(circle at 85% 12%, rgba(87,104,141,0.18), transparent 0 30%), radial-gradient(circle at 55% 72%, rgba(212,175,55,0.08), transparent 0 32%)"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
