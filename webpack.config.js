const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

	mode: 'production',

	entry: {
		main: [
			'./assets/js/theme.js',
			'./assets/scss/theme.scss'
		]
	},

	watch: true,

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/scripts.min.js'
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
					{loader: 'css-loader', options: {url: false, sourceMap: false}},
					{loader: 'postcss-loader'},
					{loader: 'sass-loader'}
				],
			},
		]
	},

	externals: {
		$: '$',
		jquery: 'jQuery'
	},


	plugins: [
		new UglifyJsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/theme.min.css',
			chunkFilename: '[id].css',
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
			canPrint: true
		}),
		new CopyWebpackPlugin([
			{from:'assets/img',to:'img/[path]/[name].[ext]'}
		]),
	]

}