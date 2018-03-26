# Gutenberg Fields Middleware

Provides middleware to easily register fields for Gutenberg blocks.

After activating the plugin use `'gutenberg-fields-middleware'` handle as dependency when enqueueing your block js file.    

define your fields inside `attributes: { field }` and then use ( Optionally ) those fields inside `edit` method as `middleware.fields.attributeKey`

## Example Usage


```js
registerBlockType( 'example-namespace/example-block', {

	title: 'Block Title',
	description: 'Block Description',
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
		range: {
			type: 'string',
			field: {
				type: 'range',
				position: 'inspector',
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

	// Optional.
	edit( props, middleware ) {
		return [
				middleware.fields.url,
				middleware.fields.text,
				middleware.fields.image,
				middleware.fields.option,
				middleware.fields.radio,
				middleware.fields.range,
			];
	},

	// Optional.
	save( props ) {
		return el( 'p', {}, props.attributes.text );
	},

} );
```

### Fields

**button**
* type: (string) your component type.
* editable: (bool) false, Allow user to edit button text with button it self.
* buttonText: (string) null, fallback text.
* isPrimary: (bool) whether the button is styled as a primary button.
* href: (string) if this property is added, it will use an a rather than a button element.

For more [read gutenberg readme](https://github.com/WordPress/gutenberg/tree/master/components/button).


```
button: {
	type: 'string',
	field: {
		type: 'button',
		isLarge: true,
		editable: true,
	},
}
```

The plugin is currently just a proof of concept of the idea suggested by Daniel in his post [fields-middleware-for-gutenberg](https://danielbachhuber.com/2018/02/27/fields-middleware-for-gutenberg/)
