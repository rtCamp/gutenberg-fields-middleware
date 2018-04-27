/**
 * Block registration.
 */

/**
 * Alignment Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-alignment', {
	title: 'Single Field Block Alignment.',
	attributes: {
		alignment: {
			type: 'string',
			field: {
				type: 'alignment-toolbar',
				placement: 'block-controls',
			},
			default: 'left',
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
			},
		},
	},

	edit( props ) {
		props.middleware.fields.text.props.style = {
			textAlign: props.attributes.alignment, // Set alignment whenever value changes.
		};

		return [
			props.middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.
			props.middleware.fields.text,
		];
	},

	save( props ) {
		return wp.element.createElement( 'p', { style: { textAlign: props.attributes.alignment } }, props.attributes.text );
	},
} );
