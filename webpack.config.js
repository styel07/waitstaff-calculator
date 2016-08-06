module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  watch: true,
  alias: {
    Main: 'public/js/controller/main.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(woff|woff2|eot|svg|ttf)/, loader: "url" }
    ]
  }
};
