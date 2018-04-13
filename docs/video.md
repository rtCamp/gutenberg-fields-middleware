# video

#### buttonText:

Upload button text.

- Type: `string`
- Required: No
- Default: null

#### placeholderText:

Video placeholder text.

- Type: `string`
- Required: No
- Default: null

**Example:**

```js
video: {
	type: 'object',
	field: {
		type: 'video',
		buttonText: __( 'Upload' ),
		placeholderText: __( 'Select a video file from your library, or upload a new one' ),
	},
}
```
