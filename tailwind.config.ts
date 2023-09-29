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
        primary: "hsl(82.7, 78%, 55.5%)",
        secondary: "hsl(258.3, 89.5%, 66.3%)",
      },
    },
  },
  plugins: [],
};
export default config;
