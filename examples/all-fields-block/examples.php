<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_examples_enqueue_scripts() {
	wp_enqueue_script(
		'gutenberg-middleware-examples',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/examples/all-fields-block/blocks.js' )
	);
}

add_action( 'enqueue_block_editor_assets', 'gutenberg_fields_middleware_examples_enqueue_scripts' );
