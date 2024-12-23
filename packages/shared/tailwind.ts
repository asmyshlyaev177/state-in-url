import type { Config } from "tailwindcss";

export const sharedConfig: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "Helvetica", "Arial", "sans-serif"],
      },

      animation: {
        // typewriter: "typewriter 6s steps(30) forwards",
        // caret: "typewriter 6s steps(30) forwards, blink 1s steps(11) 10 2s",
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      // keyframes: {
      //   typewriter: {
      //     to: {
      //       left: "100%",
      //     },
      //   },
      //   blink: {
      //     "0%": {
      //       opacity: "0",
      //     },
      //     "0.1%": {
      //       opacity: "1",
      //     },
      //     "50%": {
      //       opacity: "1",
      //     },
      //     "50.1%": {
      //       opacity: "0",
      //     },
      //     "100%": {
      //       opacity: "0",
      //     },
      //   },
      // },
    },
  },
};
