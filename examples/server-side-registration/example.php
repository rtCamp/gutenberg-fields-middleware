<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_server_side_registration_example() {
	wp_register_script(
		'gutenberg-middleware-server-side-examples',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/examples/server-side-registration/blocks.js' )
	);

	register_block_type( 'gb-m-example/simple-block-server-side', array(
		'editor_script' => 'gutenberg-middleware-server-side-examples',
		'title' => 'Example Block Server Side',
		'attributes' => array(
			'image' => array(
				'type' => 'object',
				'field' => array(
					'type' => 'image',
					'buttonText' => 'Upload',
					'imagePlaceholder' => true,
					'removeButtonText' => 'Remove',
				),
			),
			'color' => array(
				'type' => 'string',
				'field' => array(
					'type' => 'color'
				)
			)
		),
	) );
}

add_action( 'init', 'gutenberg_fields_middleware_server_side_registration_example' );
