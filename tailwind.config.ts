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
        success: "hsl(160.1, 84.1%, 39.4%)",
        danger: "hsl(349.7, 89.2%, 60.2%)",
      },
    },
  },
  plugins: [],
};
export default config;
