# Gutenberg Fields Middleware

Provides middleware to easily register fields for Gutenberg blocks.

After activating the plugin use `'gutenberg-fields-middleware'` handle as dependency when enqueueing your block js file. 

And then Instead of using `wp.blocks.registerBlockType` use `gutenbergFieldsMiddleWare.registerBlockType`.
  

```js
gutenbergFieldsMiddleWare.registerBlockType( 'namespace/block-name', {
	// Add Block Configuration.
} );
``` 

define your fields inside `attributes: { field }` and then use ( Optionally ) those fields inside `edit` method as `middleware.fields.attributeKey`

## Example Usage


```js
gutenbergFieldsMiddleWare.registerBlockType( 'gb-m-example/simple-block', {

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
			},
		},

		inspectorControls: {
			type: 'object',
			controls: {
				columns: {
					type: 'range',
				},
				layout: {
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
		},
	},

	// Optional.
	edit( props, middleware ) {
		return [
	            middleware.inspectorControls,
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
		return el( 'p', {}, props.copyright );
	},

} );
```

The plugin is currently just a proof of concept of the idea suggested by Daniel in his post [fields-middleware-for-gutenberg](https://danielbachhuber.com/2018/02/27/fields-middleware-for-gutenberg/)
