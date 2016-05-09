var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.(woff|woff2)$/,
        loader:"url?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  entry: [
    './src/index.js'
  ]
};
