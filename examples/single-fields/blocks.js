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
 * Image Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-image', {
	title: 'Single Field Block Image.',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'image',
				helperFields: {
					caption: 'imageCaption', // If required.
				},
			},
		},
		imageCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.image-caption',
		},
	},

	edit( props ) {
		return [
			props.middleware.fields.image,
			props.middleware.fields.imageCaption,
		];
	},

	save( props ) {
		const el = wp.element;
		const attributes = props.attributes;

		return [
			el( 'img', { // field: image.
				className: 'image',
				src: attributes.image ? attributes.image.url : null,
				alt: attributes.image ? attributes.image.alt : null,
				title: attributes.image ? attributes.image.title : null,
				width: attributes.image ? attributes.image.width : null,
				height: attributes.image ? attributes.image.height : null,
			}, null ),
			el( 'div', { className: 'image-caption' }, attributes.imageCaption || '' ), // field: imageCaption.
		];
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

/**
 * Video Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-video', {
	title: 'Single Field Block Video.',
	attributes: {
		video: {
			type: 'object',
			field: {
				type: 'video',
				helperFields: {
					caption: 'videoCaption', // If required.
				},
			},
		},
		videoCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.video-caption',
		},
	},

	edit( props ) {
		return [
			props.middleware.fields.video,
			props.middleware.fields.videoCaption,
		];
	},

	save( props ) {
		const el = wp.element;

		return [
			el.createElement( 'video', {
				className: 'video',
				controls: true,
			}, el.createElement( 'source', {
				src: props.attributes.video ? props.attributes.video.url : null,
				type: props.attributes.video ? props.attributes.video.mime : null,
			}, null ) ),
			el.createElement( 'div', { className: 'video-caption' }, props.attributes.videoCaption || '' ),
		];
	},
} );
