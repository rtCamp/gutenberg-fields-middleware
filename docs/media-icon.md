# icons-toolbar

Generally used in block-controls or inspector.  ( See example usage )

![icon-toolbar](https://user-images.githubusercontent.com/6297436/39447333-0a0f2a6a-4cdf-11e8-842b-cb326aeb3cbc.png)



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

#### **mediaType:**

Type of the media to be added.

- Accepts: `image`, `video`, `audio`
- Type: `String`
- Default: `image`
- Required: No

**Example:**

```js
backgroundImage: {
	type: 'object',
	field: {
		type: 'media-icon',
		mediaType: 'image',
		placement: 'block-controls',
	},
},
```



## Return value in `props.attribute`

Returns media object.

- Type: `Object`

## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-controls-image', {
	title: 'Single Field Block Controls Image.',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'media-icon',
				placement: 'block-controls',
			},
		},
	},

	edit: function( props, middleware ) {
		var image = props.attributes.image,
			imageUrl = image ? 'url(' + image.url + ')' : null,
			imageHeight = image ? image.height : null;

		return [
			middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.

			wp.element.createElement( 'div', {
				className: 'block-control-image',
				style: {
					backgroundImage: imageUrl,
					backgroundRepeat: 'no-repeat',
					height: imageHeight,
				}
			}, null ),
		];
	},

	save: function( props ) {
		var image = props.attributes.image,
			imageUrl = image ? 'url(' + image.url + ')' : null,
			imageHeight = image ? image.height : null;

		return wp.element.createElement( 'div', {
			className: 'block-control-image',
			style: {
				backgroundImage: imageUrl,
				backgroundRepeat: 'no-repeat',
				height: imageHeight,
			}
		}, null );
	},
} );
```


Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/).
