# file-upload

#### fileType:

Selected file type to be upload on library like `application`, `image`, `video`, `audio`

- Type: `String`
- Required: No
- Default: `application`

#### isLarge:

Adds class `button-large` if set true.

- Type: `boolean`
- Required: No

#### buttonText:

Text of file-upload button.

- Type: `String`
- Required: No

#### multiple:

Allow multiple files to be uploaded

- Type: `Boolean`
- Required: No
- Default: `false`

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

**Example:**

```js
fileUpload: {
    type: 'array',
    field: {
        type: 'file-upload',
        multiple: true,
        placement: 'inspector',
    },
}
```

### Return

This will return array of uploaded file / files.

- Type: `array` ( If `multiple: true` )

```js
[
	{
		"id": 534,
		"title": "video1",
		"filename": "video1.mp4",
		"url": "https://rtcamp.test/wp-content/uploads/2018/04/video1.mp4",
		"link": "https://rtcamp.test/video1-2/",
		"alt": "",
		"author": "1",
		"description": "",
		"caption": "",
		"name": "video1-2",
		"status": "inherit",
		"uploadedTo": 0,
		"date": "2018-04-16T11:37:25.000Z",
		"modified": "2018-04-16T11:37:25.000Z",
		"menuOrder": 0,
		"mime": "video/mp4",
		"type": "video",
		"subtype": "mp4",
		"icon": "https://rtcamp.test/wp-includes/images/media/video.png",
		"dateFormatted": "April 16, 2018",
		"nonces": {
			"update": "818edf9570",
			"delete": "2877fe3f9a",
			"edit": "6214e67e05"
		},
		"editLink": "https://rtcamp.test/wp-admin/post.php?post=534&action=edit",
		"meta": {
			"artist": false,
			"album": false,
			"bitrate": false,
			"bitrate_mode": false
		},
		"authorName": "dev",
		"filesizeInBytes": 1055736,
		"filesizeHumanReadable": "1 MB",
		"context": "",
		"width": 1280,
		"height": 720,
		"fileLength": "0:05",
		"image": {
			"src": "https://rtcamp.test/wp-includes/images/media/video.png",
			"width": 48,
			"height": 64
		},
		"thumb": {
			"src": "https://rtcamp.test/wp-includes/images/media/video.png",
			"width": 48,
			"height": 64
		},
		"compat": {
			"item": "",
			"meta": ""
		}
	},
	{ ... }
]
```

- Type: `Object` ( If  `multiple: false` )

## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-file-upload', {
	title: 'Single Field Block File Upload.',
	attributes: {
		fileUpload: {
			type: 'array',
			field: {
				type: 'file-upload',
				fileType: [ 'video', 'audio', 'image' ],
				multiple: true,
				label: 'Upload File',
			},
		},
	},

	edit: function( props ) {
		return [
			props.middleware.fields.fileUpload,
		];
	},

	save: function( props ) {
		var attributes = props.attributes,
			files = [];

		if ( attributes.fileUpload ) {
			_.each( attributes.fileUpload, function( file ) {
				files.push(
					wp.element.createElement( 'li', {},
						wp.element.createElement( 'a', {
							className: 'file-upload',
							href: file.url,
						}, file.name )
					)
				);
			} );
		}

		return (
			wp.element.createElement( 'ul', {}, files )
		);
	},
} );
```
