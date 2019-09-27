const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const watch = process.env.NODE_ENV;

module.exports = {

	mode: 'development',

	entry: {
		main: [
			'./assets/js/dev.js',
			'./assets/js/theme.js',
			'./assets/scss/theme.scss',
		]
	},

	devtool: 'source-map',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/scripts.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader'],
			},

			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader', options: {url: false, sourceMap: true}},
					{loader: 'postcss-loader'},
					{loader: "group-css-media-queries-loader", options: { sourceMap: true }},
					{loader: 'sass-loader'}
				],
			},


		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/theme.css',
			chunkFilename: '[id].css',
		}),
		new CopyWebpackPlugin([
			{from:'assets/img',to:'img/[path]/[name].[ext]'}
		]),
	]
}