const webpack = require( 'webpack' );
const glob = require( 'glob' );
const PROD = JSON.parse( process.env.PROD_ENV || '0' );

const externals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	jquery: 'jQuery',
};

module.exports = [
	{
		entry: {
			blocks: glob.sync( './middleware/index.js' ),
		},
		output: {
			path: __dirname + '/build/',
			filename: PROD ? 'middleware.min.js' : 'middleware.js',
		},
		externals,
		devtool: 'source-map',
		module: {
			loaders: [
				{
					test: /.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: [ 'react' ],
					},
				},
			],
		},
		plugins: PROD ? [
			new webpack.optimize.UglifyJsPlugin( {
				compress: { warnings: false },
			} ),
		] : [],
	},
];
