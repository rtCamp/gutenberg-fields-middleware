// Set up `wp.*` aliases.  Handled by Webpack outside of the test build.
global.wp = {
	shortcode: {
		next() {},
		regexp: jest.fn().mockReturnValue( new RegExp() ),
	},
};

global._ = require( 'underscore' );

[
	'element',
	'i18n',
	'components',
	'utils',
	'blocks',
	'date',
	'editor',
	'data',
	'core-data',
	'edit-post',
	'viewport',
	'plugins',
].forEach( entryPointName => {
	Object.defineProperty( global.wp, entryPointName, {
		get: () => require( '../../../gutenberg/' + entryPointName ),
	} );
} );

Object.defineProperty( global.wp, 'hooks', {
	get: () => require( '@wordpress/hooks' ),
} );
