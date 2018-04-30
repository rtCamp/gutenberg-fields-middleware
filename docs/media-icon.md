# icons-toolbar

![image](https://user-images.githubusercontent.com/1138833/39433636-fea1863a-4cb3-11e8-99e4-f4e678506787.png)

Generally used in block-controls or inspector. 

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
				mediaType: 'image',
				placement: 'block-controls',
			},
		},
	},

	edit: function( props ) {
		var image = props.attributes.image,
			imageUrl = image ? 'url(' + image.url + ')' : undefined,
			imageHeight = image ? image.height : undefined;

		return [
			props.middleware.blockControls, // Contains ALL fields which has placement: 'block-controls'.

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
			imageUrl = image ? 'url(' + image.url + ')' : undefined,
			imageHeight = image ? image.height : undefined;

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


Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).
