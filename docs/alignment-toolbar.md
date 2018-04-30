# alignment-toolbar

Generally used in block-controls or inspector.  ( See Example Usage )

![alignment-toolbar](https://user-images.githubusercontent.com/6297436/39360805-451366a2-4a3d-11e8-8a2e-2b9900228284.gif)



## Properties

#### label:

A label for the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### help:

If added, a help text will be added below the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No



For more read Gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/alignment-toolbar).

**Example:**

```js
alignment: {
	type: 'string',
	field: {
		type: 'alignment-toolbar',
		placement: 'block-controls',            
	},
}
```



## Return value in `props.attribute`

- Type: `string`
- Possible Values: `left`, `right`, `center`




## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-alignment', {
	title: 'Single Field Block Alignment.',
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

	edit: function( props ) {
		props.middleware.fields.text.props.style = {
			textAlign: props.attributes.alignment,
		};

		return [
			props.middleware.blockControls, // Contains ALL block controls.
			props.middleware.fields.text,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'p', { style: { 
				textAlign: props.attributes.alignment 
			} }, props.attributes.text );
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).
