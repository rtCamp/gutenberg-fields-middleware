<?php
/**
 * Plugin Name: Gutenberg Middleware
 * Plugin URI: https://github.com/sayedtaqui/gutenberg-middleware
 * Description: Middleware for Gutenberg.
 * Version: 0.1
 * Author:  Sayed Taqui
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: rt-gutenberg-blocks
 * Domain Path: /languages
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
 * @package GutenbergMiddleware
 */

if ( ! defined( 'IS_GUTENBERG_MIDDLEWARE_DEV' ) ) {
	define( 'IS_GUTENBERG_MIDDLEWARE_DEV', true );
}

if ( ! defined( 'GUTENBERG_MIDDLEWARE_PLUGIN_DIR' ) ) {
	define( 'GUTENBERG_MIDDLEWARE_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

/**
 * Register Middleware Script.
 */
function gutenberg_middleware_register_scripts() {
	wp_register_script(
		'gutenberg-middleware',
		plugins_url( 'build/middleware.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( GUTENBERG_MIDDLEWARE_PLUGIN_DIR. '/build/middleware.js' )
	);
}

add_action( 'enqueue_block_editor_assets', 'gutenberg_middleware_register_scripts' );

if ( IS_GUTENBERG_MIDDLEWARE_DEV ) {
	include 'examples/examples.php';
}
