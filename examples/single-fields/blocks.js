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

/**
 * Audio Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-audio', {
	title: 'Single Field Block Audio.',
	attributes: {
		audio: {
			type: 'object',
			field: {
				type: 'audio',
				helperFields: {
					caption: 'audioCaption', // If required.
				},
			},
		},
		audioCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.audio-caption',
		},
	},

	edit( props ) {
		return [
			props.middleware.fields.audio,
			props.middleware.fields.audioCaption,
		];
	},

	save( props ) {
		const el = wp.element;

		return [
			el.createElement( 'audio', {
				className: 'audio',
				controls: true,
			}, el.createElement( 'source', {
				src: props.attributes.audio ? props.attributes.audio.url : null,
				type: props.attributes.audio ? props.attributes.audio.mime : null,
			}, null ) ),
			el.createElement( 'div', { className: 'audio-caption' }, props.attributes.audioCaption || '' ),
		];
	},
} );
