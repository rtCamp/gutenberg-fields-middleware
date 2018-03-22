/*global gutenbergFieldsMiddleWare */

const { __ } = wp.i18n;
const el = wp.element.createElement;

gutenbergFieldsMiddleWare.registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter Url' ),
				tagName: 'h1',
			},
		},
		linkText: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
			},
		},
	},

	/**
	 * This is optional, can define edit method if you want to to structure your block components differently.
	 * Make use of all middleware components as middleware.fields.attributeKey and structure it however you want.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @param {object} middleware GutenbergMiddleWare instance.
	 * @return {*}
	 */
	edit( props, middleware ) {
		const image = props.attributes.image ? el( 'img', {
			src: props.attributes.image.url,
		}, null ) : '';

		return [
			middleware.fields.url,
			middleware.fields.linkText,
			image,
			middleware.fields.image,
		];
	},

	/**
	 * This is optional, if not defined, save would be null.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @return {*}
	 */
	save( props ) {
		const attributes = props.attributes;
		const image = attributes.image ? el( 'img', {
			src: attributes.image.url,
		}, null ) : '';

		return el( 'div', null, [
			image,
			el( 'a', {
				href: attributes.url,
			}, attributes.linkText ),
		] );
	},

} );
