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
				type: 'url',
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
				placeholder: __( 'Enter text' ),
			},
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
				imagePlaceholder: true,
				removeButton: __( 'Remove' ),
			},
		},
		option: {
			type: 'string',
			field: {
				type: 'select',
				label: 'Select Numbers',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		radio: {
			type: 'string',
			field: {
				type: 'radio',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		checkbox: {
			type: 'string',
			field: {
				type: 'checkbox',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
			},
		},
		button: {
			type: 'string',
			field: {
				type: 'button',
				isLarge: true,
				editable: true,
			},
		},
		treeSelect: {
			type: 'string',
			field: {
				type: 'tree-select',
				label: __( 'Parent page' ),
				position: 'inspector',
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
		switch: {
			type: 'string',
			field: {
				type: 'switch',
				label: __( 'Form Toggle' ),
				position: 'inspector',
			},
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				position: 'inspector',
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
				position: 'inspector',
			},
		},
		textarea: {
			type: 'string',
			field: {
				type: 'textarea',
				label: __( 'Textarea' ),
				position: 'inspector',
			},
		},
		email: {
			type: 'string',
			field: {
				type: 'email',
				label: __( 'Email' ),
				position: 'inspector',
			},
		},
		hidden: {
			type: 'string',
			field: {
				type: 'hidden',
				label: __( 'Hidden' ),
				position: 'inspector',
			},
		},
		number: {
			type: 'string',
			field: {
				type: 'number',
				label: __( 'Number' ),
				position: 'inspector',
			},
		},
		search: {
			type: 'string',
			field: {
				type: 'search',
				label: __( 'Search' ),
				position: 'inspector',
			},
		},
		tel: {
			type: 'string',
			field: {
				type: 'tel',
				label: __( 'Telephone' ),
				position: 'inspector',
			},
		},
		editor: {
			type: 'string',
			field: {
				type: 'editor',
			},
		},
		layoutOption: {
			type: 'string',
			field: {
				type: 'radio',
				position: 'inspector',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		columns: {
			type: 'string',
			field: {
				type: 'range',
				position: 'inspector',
			},
		},
	},

	/**
	 * This is optional, if not defined, save would be null.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @return {*}
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
