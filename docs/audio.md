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
	"id": 153246,
	"title": "audio title",
	"filename": "audio-file.mp4",
	"url": "http://example.org/wp-content/uploads/2018/04/audio-file.mp4",
	"link": "http://example.org/audio-file/",
	"alt": "audio alt",
	"author": "3755",
	"description": "",
	"caption": "",
	"name": "audio-file",
	"status": "inherit",
	"uploadedTo": 0,
	"date": "2018-04-12T13:42:46.000Z",
	"modified": "2018-04-12T13:42:46.000Z",
	"menuOrder": 0,
	"mime": "audio/mp4",
	"type": "audio",
	"subtype": "mp4",
	"icon": "https://example.org/wp-includes/images/media/audio.png",
	"dateFormatted": "April 12, 2018",
	"nonces": {
		"update": "e402d7083d",
		"delete": "8289c9bbf4",
		"edit": "12dcc0115a"
	},
	"editLink": "https://example.org/wp-admin/post.php?post=153246&action=edit",
	"meta": {
		"artist": false,
		"album": false,
		"bitrate": 239869,
		"bitrate_mode": false
	},
	"authorName": "Author Name",
	"filesizeInBytes": 549177,
	"filesizeHumanReadable": "536 KB",
	"context": "",
	"width": 1280,
	"height": 720,
	"fileLength": "0:18",
	"image": {
		"src": "https://example.org/wp-includes/images/media/audio.png",
		"width": 48,
		"height": 64
	},
	"thumb": {
		"src": "https://example.org/wp-includes/images/media/audio.png",
		"width": 48,
		"height": 64
	},
	"compat": {
		"item": "",
		"meta": ""
	},
	"audioCaption": []
}
```
