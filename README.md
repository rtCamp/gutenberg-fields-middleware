# Gutenberg Fields Middleware

Provides middleware to easily register fields for Gutenberg blocks.

After activating the plugin use `'gutenberg-fields-middleware'` handle as dependency when enqueueing your block js file. 

And then Instead of using `wp.blocks.registerBlockType` use `gutenbergFieldsMiddleWare.registerBlockType`.
  

```js
gutenbergFieldsMiddleWare.registerBlockType( 'namespace/block-name', {
	// Add Block Configuration.
} );
``` 

define your fields inside `attributes: { field }` and then use ( Optionally ) those fields inside `edit` method as `middleware.components.attributeKey`

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
				type: 'text',
				placeholder: 'Enter Url',
			},
		},
		copyright: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: 'Enter copyright text',
			},
		},
	},

	// Optional.
	edit( props, middleware ) {
		return [ middleware.components.url, middleware.components.copyright ];
	},

	// Optional.
	save( props ) {
		return el( 'p', {}, props.copyright );
	},

} );
```

The plugin is currently just a proof of concept of the idea suggested by Daniel in his post [fields-middleware-for-gutenberg](https://danielbachhuber.com/2018/02/27/fields-middleware-for-gutenberg/)
