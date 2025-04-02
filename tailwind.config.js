/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
    xs: "400px",
    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
};
