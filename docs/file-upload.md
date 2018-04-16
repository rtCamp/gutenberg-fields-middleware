# file-upload

#### accept:

File types to accept with uploader.

- Type: `String`
- Required: No

#### fileType:

Selected file type to be upload on library.

- Type: `String`
- Required: No

#### onChange:

A function that receives the event object which has selected files..

- Type: `function`
- Required: No

#### isLarge:

Adds class `button-large` if set true.

- Type: `boolean`
- Required: No

#### buttonText:

Text of file-upload button.

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

- Type: `array`

```js
[
	{
		"id": 1544,
		"url": "https://example.org/wp-content/uploads/2018/04/Image-1.jpg",
		"link": "https://example.org/Image-1/",
		"name": "Image-1.jpg"
	},
	{
		"id": 1545,
		"url": "https://example.org/wp-content/uploads/2018/04/Image-2.jpeg",
		"link": "https://example.org/Image-2/",
		"name": "Image-2.jpeg"
	},
	{
		"id": 1546,
		"url": "https://example.org/wp-content/uploads/2018/04/Image-3.png",
		"link": "https://example.org/Image-3/",
		"name": "Image-3.png"
	},
]
```
