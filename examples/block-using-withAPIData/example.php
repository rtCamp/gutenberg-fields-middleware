<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_block_using_withapidata_example() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'gutenberg-middleware-block-using-withapidata',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/examples/block-using-withAPIData/blocks.js' )
	);

	register_block_type( 'gb-m-example/gutenberg-middleware-block-using-withapidata', array(
		'editor_script' => 'gutenberg-middleware-block-using-withapidata',
	) );
}

add_action( 'init', 'gutenberg_fields_middleware_block_using_withapidata_example' );
