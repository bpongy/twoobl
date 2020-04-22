const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {

	mode: 'production',

	performance: {
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000,
		hints: "warning"
	},

	entry: {
		theme: [
			'./assets/js/theme.js',
			'./assets/scss/theme.scss'
		],
		custom: [
			'./assets/js/custom.js',
			'./assets/scss/custom.scss'
		]
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].min.js'
	},

	module: {
		rules: [
			{

				test: /\.js$/,
				use: ['babel-loader'],
			},

			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: false
						}
					},
					{loader: 'postcss-loader'},
					{loader: 'sass-loader'}
				],
			},
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
			chunkFilename: '[id].css',
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', {discardComments: {removeAll: true}}],
			},
			canPrint: true
		}),
	]

}
