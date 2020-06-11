const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/index.tsx'],
		vendor: ['react', 'react-dom'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
};
