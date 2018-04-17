const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' ); // CSS loader for styles specific to block editing.
const glob = require( 'glob' );
const isProd = 'production' === process.env.NODE_ENV;

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
				outputStyle: isProd ? 'compressed' : 'nested',
			},
		},
	],
};

const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: isProd ? './build/middleware-editor.min.css' : './build/middleware-editor.css',
} );

// CSS loader for styles specific to blocks in general.
const blocksCSSPlugin = new ExtractTextPlugin( {
	filename: isProd ? './build/style.min.css' : './build/style.css',
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
		filename: isProd ? 'build/middleware.min.js' : 'build/middleware.js',
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

if ( isProd ) {
	module.exports.plugins = ( module.exports.plugins || [] ).concat( [
		new webpack.optimize.UglifyJsPlugin( {
			sourceMap: true,
			compress: {
				warnings: false,
			},
		} ),
	] );
}
