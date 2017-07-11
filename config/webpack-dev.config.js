const WebpackConfig = require('webpack-config').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var newConfig = new WebpackConfig().extend('./config/webpack-base.config').merge({
	debug: true,
	output: {
		pathinfo: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['main'],
			template: path.resolve(__dirname, '../index.ejs')
		})
	]
});

module.exports = newConfig;