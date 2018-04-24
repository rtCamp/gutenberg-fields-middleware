// Set up `wp.*` aliases.  Handled by Webpack outside of the test build.
global.wp = {
	shortcode: {
		next() {},
		regexp: jest.fn().mockReturnValue( new RegExp() ),
	},
};

global._ = require( 'underscore' );
global.React = require( 'react' );
global.ReactDOM = require( 'react-dom' );

[
	'element',
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

Object.defineProperty( global.wp, 'i18n', {
	get: () => require( '@wordpress/i18n' ),
} );

Object.defineProperty( global.wp, 'React', {
	get: () => require( 'react' ),
} );

Object.defineProperty( global.wp, 'ReactDOM', {
	get: () => require( 'react-dom' ),
} );
