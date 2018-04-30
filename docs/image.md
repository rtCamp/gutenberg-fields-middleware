# image

See Example Usage.

![image](https://user-images.githubusercontent.com/6297436/39365641-5268ea86-4a4f-11e8-82b9-ff06446bd946.png)



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

Image placeholder text.

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
image: {
	type: 'object',
	field: {
		type: 'image',
		buttonText: 'Upload',
	},
},
```

**Example with caption:**

```js
image: {
	type: 'object',
	field: {
		type: 'image',
		fileUpload: true,
		inputUrl: true,
		mediaUploadButton: true,
		placeholder: true,
		helperFields: {
			caption: 'imageCaption',
		},
	},
},
imageCaption: {
	type: 'array',
	field: {
		type: 'rich-text',
	},
	source: 'children',
	selector: '.image-caption',
},
```



## Return value in `props.attribute`

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



## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-image', {
	title: 'Single Field Block Image.',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: 'Upload',
				fileUpload: true,
				inputUrl: true,
				mediaUploadButton: true,
				placeholder: true,
				helperFields: {
					caption: 'imageCaption', // If required.
				},
			},
		},
		imageCaption: {
			type: 'array',
			field: {
				type: 'rich-text',
				placeholder: 'Enter caption',
			},
			source: 'children',
			selector: '.image-caption',
		},
	},

	edit: function( props ) {
		return [
			props.middleware.fields.image,
		];
	},

	save: function( props ) {
		var attributes = props.attributes;

		return wp.element.createElement( 'figure', {
				className: props.className
			},
			wp.element.createElement( 'img', { // field: image.
				className: 'image',
				src: attributes.image ? attributes.image.url : null,
				alt: attributes.image ? attributes.image.alt : null,
				title: attributes.image ? attributes.image.title : null,
				width: attributes.image ? attributes.image.width : null,
				height: attributes.image ? attributes.image.height : null,
			}, null ),
			wp.element.createElement( 'figcaption', {
				className: 'image-caption'
			}, attributes.imageCaption || '' ), // field: imageCaption.
		);
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).



After uploading image:

![image](https://user-images.githubusercontent.com/6297436/39366327-3f91caa2-4a51-11e8-9612-839ae3bae20b.png)



