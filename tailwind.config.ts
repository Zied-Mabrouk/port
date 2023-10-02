import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191923",
        secondary: "#20202a",
        "grey-text": "#8c8c8e",
        main: "#ffc107",
        skill: "#cd88081a",
        dark: "#1e1e28",
      },
    },
  },
  plugins: [],
};
export default config;
