# image

#### buttonText:

Upload button text.  Only applicable when `imagePlaceholder` is not set to true.

- Type: `string`
- Required: No
- Default: null

#### imagePlaceholder:

Show image placeholder.

- Type: `bool`
- Required: No
- Default: false

#### removeButtonText:

Remove media button text. Remove button is visible only when `removeButtonText` is set.

- Type: `string`
- Required: No
- Default: null

#### multiple:

Whether to allow multiple selections or not.

- Type: `Boolean`
- Required: No
- Default: false

#### value:

Media ID (or media IDs if multiple is true) to be selected by default when opening the media library.

- Type: `Number|Array`
- Required: No

#### onSelect:

Callback when the media modal is closed, the selected `media` are passed as the first argument and `props` as second argument.

- Type: `Function`
- Required: No

#### render:

A callback invoked to render the Button opening the media library.

- Type: `Function`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/media-upload).

**Example:**

```js
image: {
	type: 'object',
	field: {
		type: 'image',
		buttonText: __( 'Upload' ),
		imagePlaceholder: true,
		removeButtonText: __( 'Remove' ),
	},
}
```
