<?php
/**
 * Plugin Name: Gutenberg Fields Middleware
 * Plugin URI: https://github.com/rtCamp/gutenberg-fields-middleware
 * Description: Provides middleware to easily register fields for Gutenberg blocks.
 * Version: 0.2
 * Author:  rtCamp
 * Contributors: Sayed Taqui, Daniel Bachhuber
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: gutenberg-fields-middleware
 * Domain Path: /languages
 *
 * Copyright (c) 2018 rtCamp (http://rtcamp.com/)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * @package GutenbergFieldsMiddleware
 */

if ( ! defined( 'GUTENBERG_FIELDS_MIDDLEWARE_IS_DEV' ) ) {
	define( 'GUTENBERG_FIELDS_MIDDLEWARE_IS_DEV', false );
}

if ( ! defined( 'GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR' ) ) {
	define( 'GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

/**
 * Register Middleware Script.
 */
function gutenberg_fields_middleware_register_scripts() {
	wp_register_script(
		'gutenberg-fields-middleware',
		plugins_url( 'dist/middleware.js', __FILE__ ),
		array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'underscore' ),
		filemtime( GUTENBERG_FIELDS_MIDDLEWARE_PLUGIN_DIR. '/dist/middleware.js' )
	);

	wp_register_style( 'gutenberg-fields-middleware', plugins_url( 'dist/middleware-editor.css', __FILE__ ) );
	wp_enqueue_style( 'gutenberg-fields-middleware' );
	wp_enqueue_script( 'gutenberg-fields-middleware' );
}

add_action( 'enqueue_block_editor_assets', 'gutenberg_fields_middleware_register_scripts' );

if ( GUTENBERG_FIELDS_MIDDLEWARE_IS_DEV ) {
	include 'examples/all-fields-block/examples.php';
	include 'examples/fields-using-php/example.php';
	include 'examples/single-fields/example.php';
	include 'examples/block-using-hoc/example.php';
}
