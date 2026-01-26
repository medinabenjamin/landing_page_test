import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAFAFA",
        brand: "#0B5C5B",
        accent: "#E4AF26",
        support: "#B3E9CF"
      }
    }
  },
  plugins: []
};

export default config;
