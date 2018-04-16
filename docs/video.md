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

### Return

This will return complete video object.

- Type: `object`

```javascript
{
	"id": 153246,
	"title": "video title",
	"filename": "video-file.mp4",
	"url": "http://example.org/wp-content/uploads/2018/04/video-file.mp4",
	"link": "http://example.org/video-file/",
	"alt": "video alt",
	"author": "3755",
	"description": "",
	"caption": "",
	"name": "video-file",
	"status": "inherit",
	"uploadedTo": 0,
	"date": "2018-04-12T13:42:46.000Z",
	"modified": "2018-04-12T13:42:46.000Z",
	"menuOrder": 0,
	"mime": "video/mp4",
	"type": "video",
	"subtype": "mp4",
	"icon": "https://example.org/wp-includes/images/media/video.png",
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
		"src": "https://example.org/wp-includes/images/media/video.png",
		"width": 48,
		"height": 64
	},
	"thumb": {
		"src": "https://example.org/wp-includes/images/media/video.png",
		"width": 48,
		"height": 64
	},
	"compat": {
		"item": "",
		"meta": ""
	},
	"videoCaption": []
}
```
