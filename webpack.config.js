const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' ); // CSS loader for styles specific to block editing.
const glob = require( 'glob' );

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					require( 'autoprefixer' ),
				],
			},
		},
		{
			loader: 'sass-loader',
			query: {
				outputStyle: 'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
			},
		},
	],
};

const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: './build/middleware-editor.css',
} );

// CSS loader for styles specific to blocks in general.
const blocksCSSPlugin = new ExtractTextPlugin( {
	filename: './build/style.css',
} );

const externals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	'react-dom/server': 'ReactDOMServer',
	tinymce: 'tinymce',
	moment: 'moment',
	jquery: 'jQuery',
};

module.exports = {
	entry: {
		blocks: glob.sync( './middleware/index.js' ),
	},
	output: {
		filename: 'build/middleware.js',
		path: __dirname,
	},
	externals,
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	module: {
		rules: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /style\.s?css$/,
				include: [
					/middleware/,
				],
				use: blocksCSSPlugin.extract( extractConfig ),
			},
			{
				test: /editor\.s?css$/,
				include: [
					/middleware/,
				],
				use: editBlocksCSSPlugin.extract( extractConfig ),
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' ),
		} ),
		blocksCSSPlugin,
		editBlocksCSSPlugin,
	],
};

if ( process.env.NODE_ENV === 'production' ) {
	module.exports.plugins = ( module.exports.plugins || [] ).concat( [
		new webpack.optimize.UglifyJsPlugin( {
			sourceMap: true,
			compress: {
				warnings: false,
			},
		} ),
	] );
}
