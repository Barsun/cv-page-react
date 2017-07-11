const webpack = require("webpack");
const WebpackConfig = require('webpack-config').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var newConfig = new WebpackConfig().extend('./config/webpack-base.config').merge({
	output: {
		filename: '[name]/bundle.[chunkhash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['main'],
			template: path.resolve(__dirname, '../index.ejs')
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
			quiet: true,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				screw_ie8: true, // eslint-disable-line
				warnings: false,
			},
		}),
	]
});

module.exports = newConfig;