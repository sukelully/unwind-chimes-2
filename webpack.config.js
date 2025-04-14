const path = require('path');

module.exports = {
  entry: './src/input.css', // Entry point for Tailwind CSS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Not used for CSS but required by Webpack
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Process CSS with PostCSS
      },
    ],
  },
  mode: 'development', // Change to 'production' for production builds
};