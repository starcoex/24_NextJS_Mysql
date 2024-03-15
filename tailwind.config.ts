import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui"), require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
export default config;

// const withMT = require("@material-tailwind/react/utils/withMT");
// const colors = require("tailwindcss/colors");

// /** @type {import('tailwindcss').Config} */
// module.exports = withMT({
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {},
//   plugins: [require("daisyui"), require("@tailwindcss/forms")],
// });
