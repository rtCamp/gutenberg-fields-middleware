# audio

See Example Usage.

![image](https://user-images.githubusercontent.com/6297436/39362275-78fb9c68-4a43-11e8-8ba6-66b63025696d.png)



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

#### placeholderText:

Audio placeholder text.

- Type: `String`
- Required: No

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
audio: {
	type: 'object',
	field: {
		type: 'audio',
	},
},
```

**Example with caption:**

```js
audio: {
	type: 'object',
	field: {
		type: 'audio',
		helperFields: {
			caption: 'audioCaption',
		},
	},
},
audioCaption: {
	type: 'array',
	field: {
		type: 'rich-text',
	},
	source: 'children',
	selector: '.audio-caption',
},
```



## Return value in `props.attribute`

Returns complete audio object.

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




## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-audio', {
	title: 'Single Field Block Audio.',
	attributes: {
		audio: {
			type: 'object',
			field: {
				type: 'audio',
				helperFields: {
					caption: 'audioCaption', // If required.
				},
			},
		},
		audioCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.audio-caption',
		},
	},

	edit: function( props ) {
		return [
			props.middleware.fields.audio,
		];
	},

	save: function( props ) {
		var el = wp.element.createElement,
			attributes = props.attributes;

		return [
			el( 'audio', {
				className: 'audio',
				controls: true,
			}, el( 'source', {
				src: attributes.audio ? attributes.audio.url : null,
				type: attributes.audio ? attributes.audio.mime : null,
			}, null ) ),
			el( 'div', { 
				className: 'audio-caption' 
			}, attributes.audioCaption || '' ),
		];
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).



After uploading audio:

![image](https://user-images.githubusercontent.com/6297436/39365283-50925716-4a4e-11e8-8141-ffd2e2374a53.png)
