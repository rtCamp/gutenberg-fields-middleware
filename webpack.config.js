const glob = require( "glob" );

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
			filename: 'middleware.js',
		},
		externals,
		module: {
			loaders: [
				{
					test: /.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['react']
					}
				},
			],
		},
	},
];
