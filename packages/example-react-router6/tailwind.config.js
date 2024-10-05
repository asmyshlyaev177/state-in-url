import { sharedConfig } from "../shared/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
