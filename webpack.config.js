module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [require('postcss-import')];
  }
}
