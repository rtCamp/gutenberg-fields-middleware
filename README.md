# Gutenberg Fields Middleware

Register fields for Gutenberg blocks with a simple, declarative API.

This project is in its early stages. Please [open an issue](https://github.com/rtCamp/gutenberg-fields-middleware/issues) with questions, feedback, suggestions, and bug reports.

[Using](#using) | [Available Fields](#available-fields)



## Using 

Gutenberg fields middleware requires only two files `build/middleware.min.js` and `build/middleware.min.css` as dependency. 

There are two ways of using the middleware.

1. **As a Plugin:** Install the Gutenberg Fields Middleware as a standalone WordPress plugin which will register a `gutenberg-fields-middleware` handle you can add as a dependency for your block script.
2. **Using JS and CSS files:** Or you can use `middleware.min.js` and `middleware.min.css` and enqueue them as dependency for your block script. Be sure to use `array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks' )` handles as your dependency when enqueing middleware js file.

Fields are now registered as attribute configuration details. Here's how you might register `image`, `text`, `color` and `range` fields:

```js
wp.blocks.registerBlockType( 'example-namespace/example-block', {
	title: 'Example Block',
	category: 'common',
	attributes: {
		image: {
			type: 'object',
			field: {
				type: 'image',
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: 'Enter text..',
			},
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				placement: 'inspector',
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				label: 'Columns',
				placement: 'inspector', // To show in sidebar.
			},
			default: 20,
		},
	},

	edit: function( props ) {
		return [
			props.middleware.inspectorControls, // Contains ALL inspector controls.
			props.middleware.fields.image,
			props.middleware.fields.text,
		];
	},

	save: function( props ) {}
});
```

Which will create a block like this

![image](https://user-images.githubusercontent.com/6297436/39425478-4bdc6444-4c99-11e8-8691-bad892910678.png)



✔️ Fields can also be used in the same way when using `register_block_type` in PHP.

```php
register_block_type( 'example-namespace/example-block', array(
	'attributes' => array(
		'image' => array(
			'type' => 'object',
			'field' => array(
				'type' => 'image',
				'buttonText' => 'Upload',
				'imagePlaceholder' => true,
				'removeButtonText' => 'Remove',
			),
		),
		'color' => array(
			'type' => 'string',
			'field' => array(
				'type' => 'color'
			)
		)
	),
	'render_callback' => 'example_callback',
) );
```



## Available Fields

Gutenberg Fields Middleware supports the following field types and type configuration.

- [alignment-toolbar](docs/alignment-toolbar.md)
- [audio](docs/audio.md)
- [block-alignment-toolbar](docs/block-alignment-toolbar.md)
- [button-editable](docs/button-editable.md)
- [checkbox](docs/checkbox.md)
- [code-editor](docs/code-editor.md)
- [color](docs/color.md)
- [date-time](docs/date-time.md)
- [dropdown-menu](docs/dropdown-menu.md)
- [file-upload](docs/file-upload.md)
- [icons-toolbar](docs/icons-toolbar.md)
- [image](docs/image.md)
- [input types: email / number/ hidden / search / tel etc.](docs/input.md)
- [link](docs/link.md)
- [media-icon](docs/media-icon.md)
- [radio](docs/radio.md)
- [range](docs/range.md)
- [rich-text](docs/rich-text.md)
- [select](docs/select.md)
- [switch](docs/switch.md)
- [text](docs/text.md)
- [textarea](docs/textarea.md)
- [tree-select](docs/tree-select.md)
- [url-input-button](docs/url-input-button.md)
- [video](docs/video.md)




#### Returning field in `edit` method:

- `props.middleware.fields.key` for a **single** field when `placement` property is not defined.
- `props.middleware.blockControls` for **all** block-control fields. ( `placement: 'block-control'` ) 
  - Alternatively individual block control fields can be returned using `props.middleware.blockControlFields.key` but then you would need to wrap them in `<BlockControls>` yourself.
- `props.middleware.inspectorControls` for **all** inspector fields. ( `placement: 'inspector'` )
  - Alternatively individual inspector fields can be returned using `props.middleware.inspectorControlFields.key` but then you would need to wrap them in `<InspectorControls>` yourself.





#### Updating Field props:

See [example usage](docs/alignment-toolbar.md#example-usage--es5-) of alignment-toolbar.

