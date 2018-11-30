# alignment-toolbar

Generally used in block-controls or inspector.  ( See Example Usage )

![block-alignment-toolbar](https://user-images.githubusercontent.com/1138833/39424133-c48ef1b0-4c92-11e8-9d15-1bdb976cb953.gif)


## Properties

#### label:

A label for the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No



For more read Gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/block-alignment-toolbar).

**Example:**

```js
alignment: {
	type: 'string',
	field: {
		type: 'block-alignment-toolbar',
		placement: 'block-controls',
		controls: [ 'left', 'center', 'right', 'wide', 'full' ],
	},
	default: 'center',
},
```



## Return value in `props.attribute`

- Type: `string`
- Possible Values: `left`, `center`, `right`, `wide`, `full`


## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-alignment', {
	title: 'Single Field Block Alignment.',
	attributes: {
		alignment: {
			type: 'string',
			field: {
				type: 'block-alignment-toolbar',
				placement: 'block-controls',
				controls: [ 'left', 'center', 'right', 'wide', 'full' ],
			},
			default: 'center',
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
			},
		},
	},

	edit: function( props, middleware ) {
		return [
			middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.
			middleware.fields.text,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'p', { className: 'align' + props.attributes.alignment }, props.attributes.text );
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/).
