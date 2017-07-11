const path = require('path');
const webpack = require('webpack');
const {removeEmpty} = require('webpack-config-utils');
const WebpackConfig = require('webpack-config').default;
const buildConfig = require('./build.config');

module.exports = new WebpackConfig().merge({
	context: path.resolve(__dirname, '../'),
	entry: {
		main: './index.js' // paths relative from context set above
	},
	output: {
		path: buildConfig.destination,
		filename: '[name]/bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
			{test: /(\.png|\.jpg)/, loader: 'file-loader'},
			{test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'}
		],
	},
	plugins: removeEmpty([])
});