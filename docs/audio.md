# audio

#### buttonText:

Upload button text.

- Type: `string`
- Required: No
- Default: null

#### placeholderText:

Audio placeholder text.

- Type: `string`
- Required: No
- Default: null

**Example:**

```js
audio: {
	type: 'object',
	field: {
		type: 'audio',
		buttonText: __( 'Upload' ),
		placeholderText: __( 'Select a audio file from your library, or upload a new one' ),
	},
}
```

### Return

This will return complete audio object.

- Type: `object`

```javascript
{
	"id": 153357,
	"url": "https://example.org/wp-content/uploads/2018/04/audio-file.mp3",
	"link": "https://example.org/audio-file/"
}
```
