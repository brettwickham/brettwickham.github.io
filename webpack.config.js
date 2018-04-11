var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, 'webpack') + '/index.jsx',
  output: {
    path: path.resolve(__dirname, 'assets/scripts'),
    filename: 'main.js'
  },
  module: {
    rules: [
    	{
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
     	}
    ]
	},
};

module.exports = config;
