import GutenbergFieldsMiddleWare from '../index';

const { createElement } = wp.element;

describe( 'GutenbergFieldsMiddleWare', () => {
	const settings = {
		title: 'Test Block',

		description: 'Test Block Description',

		icon: 'universal-access-alt',

		category: 'common',

		attributes: {
			url: {
				type: 'string',
				field: {
					type: 'link',
				},
			},
			text: {
				type: 'string',
				field: {
					type: 'text',
					placeholder: 'Enter link text',
				},
			},
			richText: {
				type: 'string',
				field: {
					type: 'rich-text',
					placeholder: 'Enter rich text',
				},
			},
			image: {
				type: 'object',
				field: {
					type: 'image',
					buttonText: 'Upload',
					imagePlaceholder: true,
					removeButtonText: 'Remove',
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
			check: {
				type: 'boolean',
				field: {
					type: 'checkbox',
					heading: 'User',
					label: 'Is author',
					help: 'Is the user a author or not?',
				},
			},
			switch: {
				type: 'string',
				field: {
					type: 'switch',
					label: 'Form Toggle',
					placement: 'inspector',
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
					label: 'Parent page',
					placement: 'inspector',
					tree: [
						{
							name: 'Page 1',
							id: 'p1',
							children: [
								{ name: 'Descend 1 of page 1', id: 'p11' },
								{ name: 'Descend 2 of page 1', id: 'p12' },
							],
						},
						{
							name: 'Page 2',
							id: 'p2',
							children: [
								{
									name: 'Descend 1 of page 2',
									id: 'p21',
									children: [
										{
											name: 'Descend 1 of Descend 1 of page 2',
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
					label: 'Textarea',
					help: 'Textarea help text',
					placement: 'inspector',
				},
			},
			email: {
				type: 'string',
				field: {
					type: 'email',
					label: 'Email',
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
					label: 'Number',
					placement: 'inspector',
				},
			},
			search: {
				type: 'string',
				field: {
					type: 'search',
					label: 'Search',
					placement: 'inspector',
				},
			},
			tel: {
				type: 'string',
				field: {
					type: 'tel',
					label: 'Telephone',
					placement: 'inspector',
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
					placement: 'inspector',
					label: 'Layout Options',
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
					label: 'Columns',
					placement: 'inspector',
				},
			},
		},

		save( props ) {
			const attributes = props.attributes;
			const image = attributes.image ? createElement( 'img', {
				src: attributes.image.url,
			}, null ) : '';

			return createElement( 'div', null, [
				image,
				createElement( 'a', {
					href: attributes.url,
				}, attributes.text ),
			] );
		},
	};

	const middlewareInstance = new GutenbergFieldsMiddleWare( settings );
	const middlewareSettings = middlewareInstance.getSettings();

	describe( 'getSettings()', () => {
		it( 'Should contains all required keys', () => {
			expect( _.keys( middlewareSettings ) ).toEqual( [ 'title', 'category', 'attributes', 'description', 'icon', 'save', 'edit', 'getEditWrapperProps' ] );
		} );

		it( 'edit is function', () => {
			expect( 'function' === typeof middlewareSettings.edit ).toBeTruthy();
		} );

		it( 'save is function', () => {
			expect( 'function' === typeof middlewareSettings.save ).toBeTruthy();
		} );
	} );

	// describe( 'Block Registration', () => {
	// 	const blockName = 'test-blocks/test-block';
	//
	// 	const wrapper = blockEditRender( blockName, settings );
	//
	// 	it( 'Should have all fields', () => {
	// 		expect( wrapper ).toEqual( '' );
	// 	} );
	// } );
} );
