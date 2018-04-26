# image

#### buttonText:

Upload button text.

- Type: `string`
- Required: No
- Default: null

#### placeholderText:

Image placeholder text.

- Type: `string`
- Required: No
- Default: null

**Example:**

```js
image: {
	type: 'object',
	field: {
		type: 'image',
		buttonText: __( 'Upload' ),
		placeholderText: __( 'Select an image file from your library, or upload a new one' ),
		helperFields: {
			caption: 'imageCaption',
		},
	},
},
imageCaption: {
	type: 'array',
	field: {
		type: 'rich-text',
		placeholder: __( 'Enter caption' ),
	},
	source: 'children',
	selector: '.image-caption',
},
```

### Return

This will return complete image object.

- Type: `object`

```js
{
	"date": 1523621298000,
	"filename": "image-file-name.jpeg",
	"menuOrder": 0,
	"uploadedTo": 153268,
	"type": "image",
	"subtype": "jpeg",
	"id": 153290,
	"title": "image title",
	"url": "http://example.org/wp-content/uploads/2018/04/image-file-name.jpeg",
	"link": "http://example.org/blog/gutenberg/attachment/354/",
	"alt": "image alt",
	"author": "Author Name",
	"description": "",
	"caption": "image caption",
	"name": "image file name",
	"status": "inherit",
	"modified": 1523621298000,
	"mime": "image/jpeg",
	"icon": "https://example.org/wp-includes/images/media/default.png",
	"dateFormatted": "April 13, 2018",
	"nonces": {
		"update": "4591f54030",
		"delete": "51c4f13dda",
		"edit": "8482c7b2f4"
	},
	"editLink": "https://example.org/wp-admin/post.php?post=153290&action=edit",
	"meta": false,
	"authorName": "Author Name",
	"uploadedToLink": "https://example.org/wp-admin/post.php?post=153268&action=edit",
	"uploadedToTitle": "Post Title",
	"filesizeInBytes": 16872,
	"filesizeHumanReadable": "16 KB",
	"context": "",
	"height": 354,
	"width": 458,
	"orientation": "landscape",
	"sizes": {
		"thumbnail": {
			"height": 184,
			"width": 240,
			"url": "http://example.org/wp-content/uploads/2018/04/354-240x184.jpeg",
			"orientation": "landscape"
		},
		"medium": {
			"height": 309,
			"width": 400,
			"url": "http://example.org/wp-content/uploads/2018/04/354-400x309.jpeg",
			"orientation": "landscape"
		},
		"full": {
			"url": "http://example.org/wp-content/uploads/2018/04/image-file-name.jpeg",
			"height": 354,
			"width": 458,
			"orientation": "landscape"
		}
	},
	"compat": {
		"item": "",
		"meta": ""
	}
}
```
