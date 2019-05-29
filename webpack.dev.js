const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

	mode: 'development',

	entry: {
		main: [
			'./assets/js/dev.js',
			'./assets/js/theme.js',
			'./assets/scss/theme.scss',
			'./assets/scss/debug.scss'
		]
	},

	devtool: 'source-map',

	watch: true,

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