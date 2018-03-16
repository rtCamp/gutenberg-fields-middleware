<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_middleware_examples_enqueue_scripts() {
	wp_enqueue_script(
		'gutenberg-middleware-examples',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-middleware' ),
		filemtime( GUTENBERG_MIDDLEWARE_PLUGIN_DIR. '/examples/blocks.js' )
	);
}

add_action( 'enqueue_block_editor_assets', 'gutenberg_middleware_examples_enqueue_scripts' );
