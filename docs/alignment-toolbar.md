# alignment-toolbar

Generally used with block-controls or inspector.

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

If added, a help text will be added below the field.

- Type: `String`
- Required: No

#### placement:

Defines the placement of where we want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `function`
- Required: No



For more read Gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/alignment-toolbar).



**Example ( Minimum ):**

```js
alignment: {
	type: 'string',
	field: {
		type: 'alignment-toolbar',
		placement: 'block-controls',            
	},
}
```

**Example ( With more Options ):**

```js
alignment: {
	type: 'string',
	field: {
		type: 'alignment-toolbar',
		placement: 'inspector',
		label: 'Text Alignment',
		help: 'Changes text alignment.',
	},
}
```

**Example ( Full Example ):**
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

	edit( props ) {
		props.middleware.fields.text.props.style = {
			textAlign: props.attributes.alignment,
		};

		return [
			props.middleware.blockControls, // Contains ALL block controls.
			props.middleware.fields.text,
		];
	},

	save( props ) {
		return wp.element.createElement( 'p', { style: { 
				textAlign: props.attributes.alignment 
			} }, props.attributes.text );
	},
} );
```



### Return

- Type: `string`
- Possible Values: `left`, `right`, `center`
