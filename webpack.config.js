var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: './index.ts'
	},
	
	output: {
		filename: 'bundle/[name].js',
		path: __dirname+""
	},
	
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},

	mode: "development",
	devtool: 'source-map'
};