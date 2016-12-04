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
      },
      {
        test: /\.(jpg)$/,
        loader: "url-loader"
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-simple-vars'),
      require('postcss-simple-extend')
    ];
  }
}
