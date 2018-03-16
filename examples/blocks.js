/*global gutenbergMiddleWare */

const { __ } = wp.i18n;
const el = wp.element.createElement;

gutenbergMiddleWare.registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates s simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter Url' ),
			},
		},
		copyright: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter copyright text' ),
			},
		},
	},

	/**
	 * This is optional, can define edit method if you want to to structure your block components differently.
	 * Make use of all middleware components as middleware.components.attributeKey and structure it however you want.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @param {object} middleware GutenbergMiddleWare instance.
	 * @return {*}
	 */
	edit( props, middleware ) {
		return [ middleware.components.url, middleware.components.copyright ];
	},

	/**
	 * This is optional, if not defined, save would be null.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @return {*}
	 */
	save( props ) {
		return el( 'p', {}, props.copyright );
	},

} );
