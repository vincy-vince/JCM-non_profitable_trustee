/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "loop-scroll 50s linear infinite",
      },
    },
    fontFamily: {
      // Note: This is @notapatch and not the docs
      //       I think what it is trying to say is that if you define
      //       a custom font here you are also removing the default
      //       font families sans, serif and mono.
      //
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Inter", "sans-serif"],
      body: ['"Open Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "320px",
        s: "400px",
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
};
