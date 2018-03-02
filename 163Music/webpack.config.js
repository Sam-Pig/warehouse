const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader",
            options: { importLoaders: 1 } // translates CSS into CommonJS
        },{loader: "postcss-loader"
        },{
            loader: "sass-loader" // compiles Sass to CSS
        }]
        })
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/',
            },
          }
        ]
      },

    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
};