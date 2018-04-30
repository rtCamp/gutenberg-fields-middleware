<?php

/**
 * Enqueue Example Block scripts.
 */
function gutenberg_fields_middleware_field_using_php_example() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'gutenberg-middleware-server-side-examples',
		plugins_url( 'blocks.js', __FILE__ ),
		array( 'gutenberg-fields-middleware' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/examples/fields-using-php/blocks.js' )
	);

	register_block_type( 'gb-m-example/simple-block-server-side', array(
		'editor_script' => 'gutenberg-middleware-server-side-examples',
		'title' => 'Example Block Fields Using PHP',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'field' => array(
					'type' => 'text',
				),
			),
			'color' => array(
				'type' => 'string',
				'field' => array(
					'type' => 'color',
					'placement' => 'inspector'
				)
			)
		),
	) );
}

add_action( 'init', 'gutenberg_fields_middleware_field_using_php_example' );
