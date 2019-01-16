module.exports = {
  mode: "development",
  // mode: 'production',
  entry: `${__dirname}/assets/js/main.tsx`,
  output: {
    path: `${__dirname}/dist/js`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
