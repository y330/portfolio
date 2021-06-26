const sveltePreprocess = require("svelte-preprocess");
const makeAttractionsImporter = require("attractions/importer.js");
const path = require("path");

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      importer: makeAttractionsImporter({
        themeFile: path.join(__dirname, "/src/css/theme.scss"),
        nodeModulesPath: path.join(__dirname, "/node_modules"),
      }),
      includePaths: [path.join(__dirname, "/src/css")],
    },
  }),
};
