/*global gutenbergMiddleWare */

const { __ } = wp.i18n;

gutenbergMiddleWare.registerBlockType( 'rtgb/simple-block', {

	title: __( 'Simple Block' ),

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
			text: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter copyright text' )
			},
		},
	},
} );
