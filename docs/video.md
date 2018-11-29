# video

See Example Usage.

![image](https://user-images.githubusercontent.com/6297436/39364929-4a268a42-4a4d-11e8-8ecf-a52743796583.png)



## Properties

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

#### buttonText:

Upload button text.

- Type: `String`
- Required: No

#### mediaButtonText:

Media button text.

- Type: `String`
- Required: No

#### placeholderText:

Video placeholder text.

- Type: `String`
- Required: No

#### fileUpload:

Show file upload button or not.

- Type: `Boolean`
- Required: No
- Default: `true`

#### mediaUploadButton:

Show file media upload button or not.

- Type: `Boolean`
- Required: No
- Default: `true`

#### inputUrl:

Show file input url button or not.

- Type: `Boolean`
- Required: No
- Default: `true`

#### placeholder:

Show placeholder or not.

- Type: `Boolean`
- Required: No
- Default: `true`

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` .

- Accepts: `inspector`
- Type: `string`
- Required: No

#### helperFields:

If caption field is required, define a new attribute field and use the attribute key name as 

`{ caption: 'yourCaptionAttributeKeyName' }` .

- Type: `Object`
- Required: No

**Example:**

```js
video: {
	type: 'object',
	field: {
		type: 'video',
	},
},
```

**Example with caption:**

```js
video: {
	type: 'object',
	field: {
		type: 'video',
		helperFields: {
			caption: 'videoCaption',
		},
	},
},
videoCaption: {
	type: 'array',
	field: {
		type: 'rich-text',
	},
	source: 'children',
	selector: '.video-caption',
},
```




## Return value in `props.attribute`

Returns complete video object.

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
	"mediaCaption": "Video Caption" // Caption added by user.
}
```



## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-video', {
	title: 'Single Field Block Video.',
	attributes: {
		video: {
			type: 'object',
			field: {
				type: 'video',
				fileUpload: true,
				inputUrl: true,
				mediaUploadButton: true,
				placeholder: true,
				helperFields: {
					caption: 'videoCaption', // If required.
				},
			},
		},
		videoCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.video-caption',
		},
	},

	edit: function( props, middleware ) {
		return [
			middleware.fields.video,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'div', {},
			wp.element.createElement( 'video', {
					className: 'video',
					controls: true,
				},
				wp.element.createElement( 'source', {
					src: props.attributes.video ? props.attributes.video.url : null,
					type: props.attributes.video ? props.attributes.video.mime : null,
				}, null )
			),
			wp.element.createElement( 'div', {
					className: 'video-caption'
				},
				props.attributes.videoCaption || ''
			)
		);
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/).



After uploading video:![image](https://user-images.githubusercontent.com/6297436/39365164-071ece7a-4a4e-11e8-8ed5-63d6ac3e978d.png)
