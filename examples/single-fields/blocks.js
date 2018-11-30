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

	edit: function( props, middleware ) {
		return [
			middleware.getBlockControls( props, [
				middleware.getField( props, 'alignment' )
			] ),
			middleware.getField( props, 'text', {
				style: {
					textAlign: props.attributes.alignment
				}
			} )
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'p', { style: { textAlign: props.attributes.alignment } }, props.attributes.text );
	},
} );

/**
 * Block Alignment Example.
 * Make sure theme support added for 'wide' and 'full' alignment.
 * Ref. https://wordpress.org/gutenberg/handbook/extensibility/theme-support/#wide-alignment
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

	edit: function( props, middleware ) {
		return [
			middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.
			middleware.fields.text,
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
				fileUpload: true,
				inputUrl: true,
				mediaUploadButton: true,
				placeholder: true,
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

	edit: function( props, middleware ) {
		return [
			middleware.fields.image,
		];
	},

	save: function( props ) {
		const attributes = props.attributes;

		return wp.element.createElement( 'figure', {
			className: props.className,
		},
		wp.element.createElement( 'img', { // field: image.
			className: 'image',
			src: attributes.image ? attributes.image.url : null,
			alt: attributes.image ? attributes.image.alt : null,
			title: attributes.image ? attributes.image.title : null,
			width: attributes.image ? attributes.image.width : null,
			height: attributes.image ? attributes.image.height : null,
		}, null ),
		wp.element.createElement( 'figcaption', {
			className: 'image-caption',
		}, attributes.imageCaption || '' ), // field: imageCaption.
		);
	},
} );

/**
 * Block control Image Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-controls-image', {
	title: 'Single Field Block Controls Image.',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'media-icon',
				placement: 'block-controls',
			},
		},
	},

	edit: function( props, middleware ) {
		const image = props.attributes.image;
		const imageUrl = image ? 'url(' + image.url + ')' : null;
		const imageHeight = image ? image.height : null;

		return [
			middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.

			wp.element.createElement( 'div', { // field: image.
				className: 'block-control-image',
				style: {
					backgroundImage: imageUrl,
					backgroundRepeat: 'no-repeat',
					height: imageHeight,
				},
			}, null ),
		];
	},

	save: function( props ) {
		const image = props.attributes.image;
		const imageUrl = image ? 'url(' + image.url + ')' : null;
		const imageHeight = image ? image.height : null;

		return wp.element.createElement( 'div', {
			className: 'block-control-image',
			style: {
				backgroundImage: imageUrl,
				backgroundRepeat: 'no-repeat',
				height: imageHeight,
			},
		}, null );
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
				fileUpload: true,
				inputUrl: true,
				mediaUploadButton: true,
				placeholder: true,
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

	edit: function( props, middleware ) {
		return [
			middleware.fields.audio,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'div', {},
			wp.element.createElement( 'audio', {
				className: 'audio',
				controls: true,
			},
			wp.element.createElement( 'source', {
				src: props.attributes.audio ? props.attributes.audio.url : null,
				type: props.attributes.audio ? props.attributes.audio.mime : null,
			}, null )
			),
			wp.element.createElement( 'div', {
				className: 'audio-caption',
			},
			props.attributes.audioCaption || ''
			)
		);
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
				fileUpload: true,
				inputUrl: true,
				mediaUploadButton: true,
				placeholder: true,
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

	edit: function( props, middleware ) {
		return [
			middleware.fields.video,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'div', {},
			wp.element.createElement( 'video', {
				className: 'video',
				controls: true,
			},
			wp.element.createElement( 'source', {
				src: props.attributes.video ? props.attributes.video.url : null,
				type: props.attributes.video ? props.attributes.video.mime : null,
			}, null )
			),
			wp.element.createElement( 'div', {
				className: 'video-caption',
			},
			props.attributes.videoCaption || ''
			)
		);
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

	edit: function( props, middleware ) {
		return [
			middleware.fields.buttonEditable,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'a', {
			className: 'button-link',
			href: props.attributes.buttonEditableLink,
		}, props.attributes.buttonEditable );
	},
} );

/**
 * File Upload Example.
 */
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-file-upload', {
	title: 'Single Field Block File Upload.',
	attributes: {
		fileUpload: {
			type: 'array',
			field: {
				type: 'file-upload',
				fileType: [ 'video', 'audio', 'image' ],
				multiple: true,
				label: 'Upload File',
			},
		},
	},

	edit: function( props, middleware ) {
		return [
			middleware.fields.fileUpload,
		];
	},

	save: function( props ) {
		const attributes = props.attributes;
		const files = [];

		if ( attributes.fileUpload ) {
			_.each( attributes.fileUpload, function( file ) {
				files.push(
					wp.element.createElement( 'li', {},
						wp.element.createElement( 'a', {
							className: 'file-upload',
							href: file.url,
						}, file.name )
					)
				);
			} );
		}

		return (
			wp.element.createElement( 'ul', {}, files )
		);
	},
} );
