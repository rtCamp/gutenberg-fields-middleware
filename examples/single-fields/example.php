<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_single_fields_examples() {
	wp_enqueue_script(
		'gutenberg-middleware-single-fields',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. 'examples/single-fields/blocks.js' )
	);
}

add_action( 'enqueue_block_editor_assets', 'gutenberg_fields_middleware_single_fields_examples' );
