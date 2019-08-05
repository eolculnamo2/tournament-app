const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.tsx',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  devServer: {
    contentBase: __dirname + '/assets/js',
    compress: true,
    open: true,
    inline: true,
    port: 3000,
    publicPath: '/',
    proxy: {
      '/': 'http://127.0.0.1:8080/',
    },
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.j(s|sx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',

      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}