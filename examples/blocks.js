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
				richText: true,
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
		color: {
			type: 'string',
			field: {
				type: 'color',
			},
		},
		dropdown: {
			type: 'string',
			field: {
				type: 'dropdown',
				position: 'top left',
				renderContent() {
					return (
						wp.element.createElement( 'div', {}, 'Hello World' ) );
				},
			},
		},
		editor: {
			type: 'string',
			field: {
				type: 'editor',
				value() { return ( wp.element.createElement( 'div', {}, 'Hello World' ) ) },
			},
		},
		backgroundImage: {
			type: 'string',
			field: {
				type: 'background-image',
			},
		},
		backgroundColor: {
			type: 'string',
			field: {
				type: 'background-color',
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
