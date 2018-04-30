<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_block_using_hoc_example() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'gutenberg-middleware-block-using-hoc',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/examples/block-using-hoc/blocks.js' )
	);

	register_block_type( 'gb-m-example/gutenberg-middleware-block-using-hoc', array(
		'editor_script' => 'gutenberg-middleware-block-using-hoc',
	) );
}

add_action( 'init', 'gutenberg_fields_middleware_block_using_hoc_example' );
