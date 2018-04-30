# Gutenberg Fields Middleware

Register fields for Gutenberg blocks with a simple, declarative API.

This project is in its early stages. Please [open an issue](https://github.com/rtCamp/gutenberg-fields-middleware/issues) with questions, feedback, suggestions, and bug reports.

[Using](#using) | [Available Fields](#available-fields)

## Using

1. First, install the Gutenberg Fields Middleware as a standalone WordPress plugin. This will register a `gutenberg-fields-middleware` handle you can add as a dependency for your block script:

```php
wp_enqueue_script( 'script-handle', plugins_url( 'blocks.js', __FILE__ ), array( 'gutenberg-fields-middleware' ) );
```

2. Fields are now registered as attribute configuration details. Here's how you might register `url`, `text` and `range` fields:

```js
registerBlockType( 'example-namespace/example-block', {
	title: 'Example Block',
	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'link',
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: 'Enter link text',
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				label: 'Columns',
				placement: 'inspector', // To show in sidebar.
			},
		},
	},

	edit: function( props ) {
		return [
			props.middleware.inspectorControls, // Contains ALL inspector controls.
			props.middleware.fields.url,
			props.middleware.fields.text,
		];
	},
	
	save: function( props ) {}
});
```



✔️ Gutenberg Fields Middleware also works for PHP block registration:

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

✔️ Alternatively the middleware can also be used just by enqueuing `build/middleware.min.js` file as dependency. Be sure to use `array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date' )` as dependency. 



## Available Fields

Gutenberg Fields Middleware supports the following field types and type configuration.

- [image](docs/image.md)
- [audio](docs/audio.md)
- [video](docs/video.md)
- [button-editable](docs/button-editable.md)
- [checkbox](docs/checkbox.md)
- [code-editor](docs/code-editor.md)
- [color](docs/color.md)
- [date-time](docs/date-time.md)
- [file-upload](docs/file-upload.md)
- [input types: email / number/ hidden / search / tel etc.](docs/input.md)
- [link](docs/link.md)
- [radio](docs/radio.md)
- [range](docs/range.md)
- [rich-text](docs/rich-text.md)
- [select](docs/select.md)
- [switch](docs/switch.md)
- [text](docs/text.md)
- [textarea](docs/textarea.md)
- [tree-select](docs/tree-select.md)
- [alignment-toolbar](docs/alignment-toolbar.md)
- [icons-toolbar](docs/icons-toolbar.md)
- [media-icon](docs/media-icon.md)
- [dropdown-menu](docs/dropdown-menu.md)
- [url-input-button](docs/url-input.md)




#### Returning field in `edit` method:

- `props.middleware.fields.yourAttributeKeyName` for a **single** field when `placement` property is not defined.
- `props.middleware.blockControls` for **all** block-control fields. ( `placement: 'block-control'` ) 
- `props.middleware.inspectorControls` for **all** inspector fields. ( `placement: 'inspector'` )



#### Updating Field props:

```js
registerBlockType( 'gb-m-example/simple-block', {
	title: 'Simple Block',

	attributes: {
		button: {
			type: 'object',
			field: {
				type: 'button-editable',
			},
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				placement: 'inspector',
			},
		},
	},

	edit( props ) {
		props.middleware.fields.button.props.style = {
			backgroundColor: props.attributes.color,
		};

		return [
			props.middleware.inspectorControls,
			props.middleware.fields.button
		];
	}
} );
```

