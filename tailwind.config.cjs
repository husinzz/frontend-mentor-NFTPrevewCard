const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        blue : {
          "soft" : "hsl(215, 51%, 70%)",
          "very-dark-1" : "hsl(217, 54%, 11%)",
          "very-dark-2" : "hsl(216, 50%, 16%)",
          "very-dark-3" : "hsl(215, 32%, 27%)",
        }
      }
    },
    fontFamily : {
      'outfits' : ['Outfit', 'ui-sans-serif']
    }
  },

  plugins: [],
};

module.exports = config;
