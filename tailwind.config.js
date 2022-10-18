/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16f70e",

          secondary: "#b3db57",

          accent: "#8defc8",

          neutral: "#291D2F",

          "base-100": "#EDEDED",

          info: "#4AABD9",

          success: "#23D77D",

          warning: "#A07A08",

          error: "#DD2260",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
