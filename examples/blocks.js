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
				inspector: true,
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

	edit( props, middleware ) {
		return [ middleware.components.url, middleware.components.copyright ];
	},

	save( props ) {
		return el( 'p', {}, props.copyright );
	},

} );
