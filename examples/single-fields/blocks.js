/**
 * Text Alignment Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-text-alignment', {
	title: 'Single Field Block Text Alignment.',
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

	edit: function( props ) {
		props.middleware.fields.text.props.style = {
			textAlign: props.attributes.alignment, // Set alignment whenever value changes.
		};

		return [
			props.middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.
			props.middleware.fields.text,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'p', { style: { textAlign: props.attributes.alignment } }, props.attributes.text );
	},
} );

/**
 * Block Alignment Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-alignment', {
	title: 'Single Field Block Alignment.',
	attributes: {
		alignment: {
			type: 'string',
			field: {
				type: 'block-alignment-toolbar',
				placement: 'block-controls',
				controls: [ 'left', 'center', 'right', 'wide', 'full' ],
			},
			default: 'center',
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
			},
		},
	},

	edit: function( props ) {
		return [
			props.middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.
			props.middleware.fields.text,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'p', { className: 'align' + props.attributes.alignment }, props.attributes.text );
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

	edit: function( props ) {
		return [
			props.middleware.fields.image,
		];
	},

	save: function( props ) {
		var el = wp.element.createElement,
			attributes = props.attributes;

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
 * Image Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-controls-image', {
	title: 'Single Field Block Controls Image.',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'media-icon',
				mediaType: 'image',
				placement: 'block-controls',
			},
			selector: '.image',
		},
	},

	edit: function( props ) {
		var el = wp.element.createElement,
			image = props.attributes.image,
			imageUrl = image ? 'url(' + image.url + ')' : undefined,
			imageHeight = image ? image.height : undefined;

		return [
			props.middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.

			el( 'div', { // field: image.
				className: 'block-control-image',
				style: {
					backgroundImage: imageUrl,
					height: imageHeight,
				}
			}, null ),
		];
	},

	save: function( props ) {
		var image = props.attributes.image,
			imageUrl = image ? 'url(' + image.url + ')' : undefined,
			imageHeight = image ? image.height : undefined;

		return wp.element.createElement(
			'div',
			{
				className: 'block-control-image',
				style: {
					backgroundImage: imageUrl,
					height: imageHeight,
				}
			},
			null
		);
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

	edit: function( props ) {
		return [
			props.middleware.fields.audio,
		];
	},

	save: function( props ) {
		var el = wp.element.createElement;

		return [
			el( 'audio', {
				className: 'audio',
				controls: true,
			}, el( 'source', {
				src: props.attributes.audio ? props.attributes.audio.url : null,
				type: props.attributes.audio ? props.attributes.audio.mime : null,
			}, null ) ),
			el( 'div', { className: 'audio-caption' }, props.attributes.audioCaption || '' ),
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

	edit: function( props ) {
		return [
			props.middleware.fields.video,
		];
	},

	save: function( props ) {
		var el = wp.element.createElement,
			attributes = props.attributes;

		return [
			el( 'video', {
				className: 'video',
				controls: true,
			}, el( 'source', {
				src: attributes.video ? attributes.video.url : null,
				type: attributes.video ? attributes.video.mime : null,
			}, null ) ),
			el( 'div', { className: 'video-caption' }, attributes.videoCaption || '' ),
		];
	},
} );

/**
 * Button Editable Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-button-editable', {
	title: 'Single Field Block Button Editable.',
	attributes: {
		buttonEditable: {
			type: 'array',
			field: {
				type: 'button-editable',
				helperFields: {
					link: 'buttonEditableLink',
				},
			},
			source: 'children',
			selector: '.button-link',
		},
		buttonEditableLink: {
			type: 'string',
			field: {
				type: 'link',
			},
		},
	},

	edit: function( props ) {
		return [
			props.middleware.fields.buttonEditable,
		];
	},

	save: function( props ) {
		var el = wp.element.createElement,
			attributes = props.attributes;

		return [
			el( 'a', {
				className: 'button-link',
				href: attributes.buttonEditable,
			}, attributes.buttonEditable ),
		];
	},
} );
