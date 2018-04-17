const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
			source: 'children', // Read more about Rich text api here https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.
			selector: '.text',
		},
		richText: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: __( 'Enter rich text' ),
			},
			source: 'children', // Read more about Rich text api here https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.
			selector: '.rich-text',
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
				imagePlaceholder: true,
				removeButtonText: __( 'Remove' ),
			},
		},
		option: {
			type: 'string',
			field: {
				type: 'select',
				label: __( 'Select Numbers' ),
				options: [
					{
						value: 'one',
						label: __( 'One' ),
					},
					{
						value: 'two',
						label: __( 'Two' ),
					},
				],
			},
			source: 'children', // Read more about Rich text api here https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.
			selector: '.option',
		},
		video: {
			type: 'object',
			field: {
				type: 'video',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a video file from your library, or upload a new one' ),
				caption: true,
			},
			selector: '.video',
		},
		audio: {
			type: 'object',
			field: {
				type: 'audio',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a audio file from your library, or upload a new one' ),
				caption: true,
			},
			selector: '.audio',
		},
		radio: {
			type: 'string',
			field: {
				label: __( 'Radio Options' ),
				type: 'radio',
				options: [
					{
						value: 'one',
						label: __( 'One' ),
					},
					{
						value: 'two',
						label: __( 'Two' ),
					},
				],
			},
			default: 'one',
			selector: '.radio',
		},
		switch: {
			type: 'string',
			field: {
				type: 'switch',
				label: __( 'Form Toggle' ),
				placement: 'inspector',
			},
			selector: '.switch',
		},
		buttonEditable: {
			type: 'object',
			field: {
				type: 'button-editable',
			},
			selector: '.button-editable',
		},
		treeSelect: {
			type: 'string',
			field: {
				type: 'tree-select',
				label: __( 'Parent page' ),
				placement: 'inspector',
				tree: [
					{
						name: __( 'Page 1' ),
						id: 'p1',
						children: [
							{ name: __( 'Descend 1 of page 1' ), id: 'p11' },
							{ name: __( 'Descend 2 of page 1' ), id: 'p12' },
						],
					},
					{
						name: __( 'Page 2' ),
						id: 'p2',
						children: [
							{
								name: __( 'Descend 1 of page 2' ),
								id: 'p21',
								children: [
									{
										name: __( 'Descend 1 of Descend 1 of page 2' ),
										id: 'p211',
									},
								],
							},
						],
					},
				],
			},
			selector: '.tree-select',
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				placement: 'inspector',
			},
			selector: '.color',
		},
		dateTime: {
			type: 'string',
			field: {
				type: 'date-time',
				placement: 'inspector',
			},
			selector: '.date-time',
		},
		textarea: {
			type: 'string',
			field: {
				type: 'textarea',
				label: __( 'Textarea' ),
				help: __( 'Textarea help text' ),
				placement: 'inspector',
			},
			selector: '.textarea',
		},
		email: {
			type: 'string',
			field: {
				type: 'email',
				label: __( 'Email' ),
				placement: 'inspector',
			},
			selector: '.email',
		},
		hidden: {
			type: 'string',
			field: {
				type: 'hidden',
				placement: 'inspector',
			},
		},
		number: {
			type: 'string',
			field: {
				type: 'number',
				label: __( 'Number' ),
				min: 20,
				max: 40,
				placement: 'inspector',
				placeholder: __( 'Enter number' ),
			},
			selector: '.number',
		},
		check: {
			type: 'boolean',
			field: {
				type: 'checkbox',
				heading: __( 'User' ),
				label: __( 'Is author' ),
				help: __( 'Is the user a author or not?' ),
				placement: 'inspector',
			},
			default: 1,
			selector: '.check',
		},
		search: {
			type: 'string',
			field: {
				type: 'search',
				label: __( 'Search' ),
				placement: 'inspector',
			},
			selector: '.search',
		},
		tel: {
			type: 'string',
			field: {
				type: 'tel',
				label: __( 'Telephone' ),
				placement: 'inspector',
			},
			selector: '.tel',
		},
		time: {
			type: 'string',
			field: {
				type: 'time',
				label: __( 'Time' ),
				placement: 'inspector',
			},
			selector: '.time',
		},
		date: {
			type: 'string',
			field: {
				type: 'date',
				label: __( 'Date' ),
				placement: 'inspector',
			},
			selector: '.date',
		},
		datetimeLocal: {
			type: 'string',
			field: {
				type: 'datetime-local',
				label: __( 'Date Time Local' ),
				placement: 'inspector',
			},
			selector: '.datetime-local',
		},
		file: {
			type: 'string',
			field: {
				type: 'file',
				label: __( 'File' ),
				placement: 'inspector',
			},
		},
		month: {
			type: 'string',
			field: {
				type: 'month',
				label: __( 'Month' ),
				placement: 'inspector',
			},
			selector: '.month',
		},
		week: {
			type: 'string',
			field: {
				type: 'week',
				label: __( 'Week' ),
				placement: 'inspector',
			},
			selector: '.week',
		},
		password: {
			type: 'string',
			field: {
				type: 'password',
				label: __( 'Password' ),
				placement: 'inspector',
			},
		},
		codeEditor: {
			type: 'string',
			field: {
				type: 'code-editor',
			},
			selector: '.code-editor',
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				label: __( 'Select Range' ),
				placement: 'inspector',
				min: 1,
				max: 20,
			},
			default: 3,
			selector: '.range',
		},
		fileUpload: {
			type: 'array',
			field: {
				type: 'file-upload',
				multiple: true,
			},
			selector: '.file-upload',
		},
		fileUploadInspector: {
			type: 'array',
			field: {
				type: 'file-upload',
				placement: 'inspector',
				multiple: true,
			},
			selector: '.file-upload-inspector',
		},
	},

	/**
	 * If not defined, save would be null.
	 *
	 * @param {Object} props Same properties we get in default edit method.
	 * @return {Object} React elements.
	 */
	save( props ) {
		const attributes = props.attributes;

		return (
			el( 'div', { className: props.className },
				el( 'div', { className: 'gutenberg-fields-middleware-wrapper' },

					// field: text
					el( 'div', { className: 'text' }, attributes.text || '' ),

					// field: rich-text
					el( 'div', { className: 'rich-text' }, attributes.richText || '' ),

					// field: image
					attributes.image &&
					el( 'img', {
						className: 'image',
						src: attributes.image.url,
						alt: attributes.image.alt,
						title: attributes.image.title,
						width: attributes.image.width,
						height: attributes.image.height,
					}, null ),

					// field: select
					el( 'div', { className: 'option' }, attributes.option || '' ),

					// field: video
					attributes.video &&
					el( 'video', {
						className: 'video',
						width: attributes.video.width,
						height: attributes.video.height,
						preload: 'auto',
						controls: true,
					},
					el( 'source', { src: attributes.video.url, type: attributes.video.mime }, null )
					),

					// field: audio
					attributes.audio &&
					el( 'audio', {
						className: 'audio',
						controls: true,
					},
					el( 'source', { src: attributes.audio.url, type: attributes.audio.mime }, null )
					),

					// field: radio
					el( 'div', { className: 'radio' }, attributes.radio || '' ),

					// field: switch
					el( 'div', { className: 'switch' }, attributes.switch || '' ),

					// field: button-editable
					attributes.buttonEditable &&
					el( 'a', {
						className: 'button button-editable',
						href: attributes.buttonEditable.link,
					},
					attributes.buttonEditable.text
					),

					// field: tree-select
					el( 'div', { className: 'tree-select' }, attributes.treeSelect || '' ),

					// field: color
					el( 'div', {
						className: 'color',
						style: { color: attributes.color },
					}, __( 'Color output' )
					),

					// field: date-time
					el( 'time', {
						className: 'date-time',
						dateTime: attributes.dateTime,
					},
					attributes.dateTime ),

					// field: textarea
					el( 'div', { className: 'textarea' }, attributes.textarea || '' ),

					// field: email
					el( 'div', { className: 'email' }, attributes.email || '' ),

					// field: number
					el( 'div', { className: 'number' }, attributes.number || '' ),

					// field: search
					el( 'div', { className: 'search' }, attributes.search || '' ),

					// field: checkbox
					el( 'div', { className: 'check' }, attributes.check || '' ),

					// field: tel
					el( 'div', { className: 'tel' }, attributes.tel || '' ),

					// field: time
					el( 'time', { className: 'time' }, attributes.time || '' ),

					// field: date
					el( 'div', { className: 'date' }, attributes.date || '' ),

					// field: datetime-local
					el( 'div', { className: 'datetime-local' }, attributes.datetimeLocal || '' ),

					// field: month
					el( 'div', { className: 'month' }, attributes.month || '' ),

					// field: week
					el( 'div', { className: 'week' }, attributes.week || '' ),

					// field: code-editor
					el( 'pre', { className: 'code-editor' }, attributes.codeEditor || '' ),

					// field: range
					el( 'div', { className: 'range' }, attributes.range || '' ),

					// field: file-upload
					attributes.fileUpload &&
					el( 'a', {
						className: 'file-upload',
						href: attributes.fileUpload[ 0 ].url,
					}, attributes.fileUpload[ 0 ].name ),

					// field: file-upload
					attributes.fileUploadInspector &&
					el( 'a', {
						className: 'file-upload-inspector',
						href: attributes.fileUploadInspector[ 0 ].url,
					}, attributes.fileUploadInspector[ 0 ].name ),

				)
			)
		);
	},

} );
