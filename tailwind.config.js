// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  theme: {
    screens: {
      xs: "370px", // => @media (min-width: 370px) { ... }
      tablet: "1024px", // => @media (min-width: 1024px) { ... }
      laptop: "1280px", // => @media (min-width: 1280px) { ... }
      "giant-screen": "1536px", // => @media (min-width: 1536px) { ... }
    },
  },
};
