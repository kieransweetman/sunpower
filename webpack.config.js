const path = require("path");

module.exports = {
  entry: ["./index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
