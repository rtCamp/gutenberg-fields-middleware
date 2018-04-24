const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		align: {
			type: 'string',
			field: {
				type: 'block-alignment-toolbar',
				placement: 'block-controls',
				controls: [ 'left', 'center', 'right', 'wide', 'full' ],
			},
		},
		alignment: {
			type: 'string',
			field: {
				type: 'alignment-toolbar',
				placement: 'block-controls',
			},
		},
		view: {
			type: 'string',
			field: {
				type: 'icons-toolbar',
				placement: 'block-controls',
				controls: [
					{
						icon: 'list-view',
						title: __( 'List View' ),
						value: 'list',
					},
					{
						icon: 'grid-view',
						title: __( 'Grid View' ),
						value: 'grid',
					},
				],
			},
		},
		backgroundImage: {
			type: 'object',
			field: {
				type: 'media-icon',
				mediaType: 'image',
				placement: 'block-controls',
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
			source: 'children', // Read about attributes here https://wordpress.org/gutenberg/handbook/block-api/attributes/
			selector: '.text',
		},
		richText: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: __( 'Enter rich text' ),
			},
			source: 'children', // Read about Rich text api here https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.
			selector: '.rich-text',
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a image file from your library, or upload a new one' ),
				helperFields: {
					caption: 'imageCaption',
				},
			},
		},
		imageCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: __( 'Enter caption' ),
			},
			source: 'children', // Read about Rich text api here https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.
			selector: '.image-caption',
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
			source: 'children', // Read about attributes here https://wordpress.org/gutenberg/handbook/block-api/attributes/
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
		},
		audio: {
			type: 'object',
			field: {
				type: 'audio',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a audio file from your library, or upload a new one' ),
				caption: true,
			},
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
		},
		switch: {
			type: 'string',
			field: {
				type: 'switch',
				label: __( 'Form Toggle' ),
				placement: 'inspector',
			},
		},
		buttonEditable: {
			type: 'array',
			field: {
				type: 'button-editable',
				helperFields: {
					link: 'buttonEditableLink',
					backgroundColor: 'buttonBackgroundColor',
					color: 'buttonColor',
					class: 'buttonClasses',
				},
			},
			source: 'children',
			selector: '.button-link',
		},
		buttonBackgroundColor: {
			type: 'string',
			field: {
				type: 'color',
				label: __( 'Button Background Color' ),
				placement: 'inspector',
			},
		},
		buttonColor: {
			type: 'string',
			field: {
				type: 'color',
				label: __( 'Button Color' ),
				placement: 'inspector',
			},
		},
		buttonClasses: {
			type: 'string',
			field: {
				type: 'select',
				label: __( 'Button Type' ),
				options: [
					{
						value: 'button-large',
						label: __( 'Large' ),
					},
					{
						value: 'button-medium',
						label: __( 'Medium' ),
					},
					{
						value: 'button-small',
						label: __( 'Small' ),
					},
				],
				placement: 'inspector',
			},
		},
		buttonEditableLink: {
			type: 'string',
			field: {
				type: 'link',
			},
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
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				placement: 'inspector',
			},
		},
		dateTime: {
			type: 'string',
			field: {
				type: 'date-time',
				placement: 'inspector',
			},
		},
		textarea: {
			type: 'string',
			field: {
				type: 'textarea',
				label: __( 'Textarea' ),
				help: __( 'Textarea help text' ),
				placement: 'inspector',
			},
		},
		email: {
			type: 'string',
			field: {
				type: 'email',
				label: __( 'Email' ),
				placement: 'inspector',
			},
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
		},
		search: {
			type: 'string',
			field: {
				type: 'search',
				label: __( 'Search' ),
				placement: 'inspector',
			},
		},
		tel: {
			type: 'string',
			field: {
				type: 'tel',
				label: __( 'Telephone' ),
				placement: 'inspector',
			},
		},
		time: {
			type: 'string',
			field: {
				type: 'time',
				label: __( 'Time' ),
				placement: 'inspector',
			},
		},
		date: {
			type: 'string',
			field: {
				type: 'date',
				label: __( 'Date' ),
				placement: 'inspector',
			},
		},
		datetimeLocal: {
			type: 'string',
			field: {
				type: 'datetime-local',
				label: __( 'Date Time Local' ),
				placement: 'inspector',
			},
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
		},
		week: {
			type: 'string',
			field: {
				type: 'week',
				label: __( 'Week' ),
				placement: 'inspector',
			},
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
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				label: __( 'Select Range' ),
				placement: 'inspector',
				min: 0,
				max: 20,
			},
			default: 3,
		},
		fileUpload: {
			type: 'array',
			field: {
				type: 'file-upload',
				multiple: true,
			},
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

		const files = [];

		if ( attributes.fileUpload ) {
			_.each( attributes.fileUpload, function( file ) {
				files.push(
					el( 'a', {
						className: 'file-upload',
						href: file.url,
					}, file.name )
				);
			} );
		}

		return (
			el( 'div', { className: props.className },
				// field: text
				el( 'div', { className: 'text' }, attributes.text || '' ),

				// field: rich-text
				el( 'div', { className: 'rich-text' }, attributes.richText || '' ),

				// field: image
				el( 'img', {
					className: 'image',
					src: attributes.image ? attributes.image.url : null,
					alt: attributes.image ? attributes.image.alt : null,
					title: attributes.image ? attributes.image.title : null,
					width: attributes.image ? attributes.image.width : null,
					height: attributes.image ? attributes.image.height : null,
				}, null ),

				// field: imageCaption
				el( 'div', { className: 'image-caption' }, attributes.imageCaption || '' ),

				// field: select
				el( 'div', { className: 'option' }, attributes.option || '' ),

				// field: video
				el( 'video', {
					className: 'video',
					width: attributes.video ? attributes.video.width : null,
					height: attributes.video ? attributes.video.height : null,
					preload: 'auto',
					controls: true,
				}, el( 'source', {
					src: attributes.video ? attributes.video.url : null,
					type: attributes.video ? attributes.video.mime : null,
				}, null ) ),

				// field: audio
				el( 'audio', {
					className: 'audio',
					controls: true,
				}, el( 'source', {
					src: attributes.audio ? attributes.audio.url : null,
					type: attributes.audio ? attributes.audio.mime : null,
				}, null ) ),

				// field: radio
				el( 'div', { className: 'radio' }, attributes.radio || '' ),

				// field: switch
				el( 'div', { className: 'switch' }, attributes.switch || '' ),

				// field: button-editable
				el( 'a', {
					className: 'button-link',
					href: '',
				}, attributes.buttonEditable ),

				// field: tree-select
				el( 'div', { className: 'tree-select' }, attributes.treeSelect || '' ),

				// field: color
				el( 'div', { style: { color: attributes.color } }, __( 'Color output' ) ),

				// field: date-time
				el( 'time', { dateTime: attributes.dateTime }, attributes.dateTime ),

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
				files,
			)
		);
	},

} );

/**
 * Middleware works the same for HOC as well.
 */
const withAPIData = wp.components.withAPIData;

registerBlockType( 'my-plugin/latest-post', {
	title: 'Latest Post Test',
	icon: 'megaphone',
	category: 'widgets',
	attributes: {
		content: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: 'Enter some text',
			},
		},
	},

	edit: withAPIData( function() {
		return {
			posts: '/wp/v2/posts?per_page=1',
		};
	} )( function( props ) {
		if ( ! props.posts.data ) {
			return 'loading !';
		}

		if ( props.posts.data.length === 0 ) {
			return 'No posts';
		}

		const className = props.className;
		const post = props.posts.data[ 0 ];

		return [
			el( 'a', { className: className, href: post.link }, post.title.rendered ),
			props.middleware.fields.content,
		];
	} ),

	save: function() {
		return null; // Rendering in PHP
	},
} );
