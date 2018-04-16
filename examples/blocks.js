const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'link',
				placement: 'inspector',
				label: __( 'Enter Link' ),
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
		},
		richText: {
			type: 'string',
			field: {
				type: 'rich-text',
				placeholder: __( 'Enter rich text' ),
			},
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
		},
		video: {
			type: 'object',
			field: {
				type: 'video',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a video file from your library, or upload a new one' ),
			},
		},
		audio: {
			type: 'object',
			field: {
				type: 'audio',
				buttonText: __( 'Upload' ),
				placeholderText: __( 'Select a audio file from your library, or upload a new one' ),
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
		check: {
			type: 'boolean',
			field: {
				type: 'checkbox',
				heading: __( 'User' ),
				label: __( 'Is author' ),
				help: __( 'Is the user a author or not?' ),
			},
		},
		switch: {
			type: 'string',
			field: {
				type: 'switch',
				label: __( 'Form Toggle' ),
				placement: 'inspector',
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				label: __( 'Range' ),
			},
		},
		button: {
			type: 'string',
			field: {
				type: 'button',
				isLarge: true,
			},
		},
		buttonEditable: {
			type: 'object',
			field: {
				type: 'button-editable',
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
		dropdown: {
			type: 'string',
			field: {
				type: 'dropdown',
				position: 'top left',
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
		layoutOption: {
			type: 'string',
			field: {
				type: 'radio',
				placement: 'inspector',
				label: __( 'Layout Options' ),
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
		columns: {
			type: 'string',
			field: {
				type: 'range',
				label: __( 'Columns' ),
				placement: 'inspector',
			},
		},
	},

	/**
	 * This is optional, if not defined, save would be null.
	 *
	 * @param {Object} props Same properties we get in default edit method.
	 * @return {Object} React elements.
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
			}, attributes.text ),
		] );
	},

} );
