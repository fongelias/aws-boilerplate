//Dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

//Config
const appOutputPath = "../public";


//Modules
const appConfig = {
	entry: {
		app: './src/app/js/index.jsx',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, appOutputPath),
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './src/app/index.html', to: './index.html'},
		]),
		new ExtractTextPlugin({
			filename: './css/[name].css',
			allChunks: true
		}),
	]
};



module.exports = [appConfig]





