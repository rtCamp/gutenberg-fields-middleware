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
		placeholderText: __( 'Select an audio file from your library, or upload a new one' ),
		helperFields: {
			caption: 'audioCaption',
		},
	},
},
audioCaption: {
	type: 'array',
	field: {
		type: 'rich-text',
		placeholder: __( 'Enter caption' ),
	},
	source: 'children',
	selector: '.audio-caption',
},
```

### Return

This will return complete audio object.

- Type: `object`

```javascript
{
	"id": 153375,
	"title": "Audio Title",
	"filename": "audio-file-name.mp3",
	"url": "http://example.org/wp-content/uploads/2018/04/audio-file-name.mp3",
	"link": "http://example.org/audio-file-name/",
	"alt": "",
	"author": "3755",
	"description": "",
	"caption": "",
	"name": "audio-file-name",
	"status": "inherit",
	"uploadedTo": 0,
	"date": "2018-04-17T07:13:14.000Z",
	"modified": "2018-04-17T07:13:14.000Z",
	"menuOrder": 0,
	"mime": "audio/mpeg",
	"type": "audio",
	"subtype": "mpeg",
	"icon": "https://example.org/wp-includes/images/media/audio.png",
	"dateFormatted": "April 17, 2018",
	"nonces": {
		"update": "6d54241ae5",
		"delete": "f1a208a878",
		"edit": "f6721af69c"
	},
	"editLink": "https://example.org/wp-admin/post.php?post=153375&action=edit",
	"meta": {
		"artist": "Artist Name",
		"album": "Album name",
		"bitrate": 320055.29661016946,
		"bitrate_mode": "vbr"
	},
	"authorName": "Author Name",
	"filesizeInBytes": 6123133,
	"filesizeHumanReadable": "6 MB",
	"context": "",
	"fileLength": "2:31",
	"image": {
		"src": "http://example.org/wp-content/uploads/2018/04/audio-file-name-mp3-image.jpg",
		"width": 400,
		"height": 400
	},
	"thumb": {
		"src": "http://example.org/wp-content/uploads/2018/04/audio-file-name-mp3-image-240x184.jpg",
		"width": 240,
		"height": 184
	},
	"compat": {
		"item": "",
		"meta": ""
	}
}
```
