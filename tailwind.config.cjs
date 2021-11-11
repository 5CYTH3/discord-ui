const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        dark1:"#1F2225",
        dark2:"#2E3137",
        dark3:"#33353A",
        dark4:"#36393E",
        darkgray:"#72767D",
        lightgray:"#666A70",
        red:"#ED4245",
        green:"#3AA55D",
        orange:"#FDBC40",
        blue:"#02AFF4",
        blurple:"#5865F2",
      }
    },
  },

  plugins: [],
};

module.exports = config;
