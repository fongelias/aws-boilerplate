//Dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


//Config
const appOutputPath = "../dist/public";
const serverOutputPath = '../dist';


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
		new webpack.DefinePlugin({ 
			"process.env": { NODE_ENV: "'production'" }
		}),
		new BabiliPlugin(),
	]
};

const serverConfig = {
	entry: {
		server: './src/server/index.js',
	},
	target: 'node', // Prevent node code from being bundled
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs', // Wrapper type
		path: path.resolve(__dirname, serverOutputPath),
	},
	/*externals: [ // Files to keep as imports
      /^(?!\.|\/).+/i, // Match any non-relative or absolute paths (npm packages)
    ],*/
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	//plugins: [],
}

module.exports = [appConfig, serverConfig];





