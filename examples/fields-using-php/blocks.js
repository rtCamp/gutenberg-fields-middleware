/**
 * Block registration.
 */

wp.blocks.registerBlockType( 'gb-m-example/simple-block-server-side', {
	save: function( props ) {
		return wp.blocks.createElement( 'p', {}, props.attributes.text );
	},
} );
