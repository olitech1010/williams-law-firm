import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#1E3A8A",
        },
        amber: {
          700: "#B45309",
        },
        slate: {
          50: "#F8FAFC",
          500: "#64748B",
          900: "#0F172A",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
