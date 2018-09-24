# Gutenberg Fields Middleware

Register fields for Gutenberg blocks with a simple, declarative API.

This project is in its early stages. Please [open an issue](https://github.com/rtCamp/gutenberg-fields-middleware/issues) with questions, feedback, suggestions, and bug reports.

[Using](#using) | [Available Fields](#available-fields)



## Using 

Gutenberg fields middleware requires only two files `build/middleware.min.js` and `build/middleware.min.css` as dependency. 

There are two ways of using the middleware.

1. **As a Plugin:** Install the Gutenberg Fields Middleware as a standalone WordPress plugin which will register a `gutenberg-fields-middleware` handle you can add as a dependency for your block script.
2. **Using JS and CSS files:** Or you can use `middleware.min.js` and `middleware.min.css` and enqueue them as dependency for your block script. Be sure to use `array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks' )` handles as your dependency when enqueing middleware js file.

Fields are now registered as attribute configuration details. Here's how you might register `url`, `text` and `range` fields:

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

	edit: function( props, middleware ) {
		return [
			middleware.inspectorControls, // Contains ALL inspector controls.
			middleware.fields.image,
			middleware.fields.text,
		];
	},

	save: function( props ) {}
});
```

Which will create a block like this

![image](https://user-images.githubusercontent.com/6297436/39425913-3c4c7260-4c9b-11e8-8e68-7e19b6df1d43.png)



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

- [alignment-toolbar](alignment-toolbar.md)
- [audio](audio.md)
- [block-alignment-toolbar](block-alignment-toolbar.md)
- [button-editable](button-editable.md)
- [checkbox](checkbox.md)
- [code-editor](code-editor.md)
- [color](color.md)
- [date-time](date-time.md)
- [dropdown-menu](dropdown-menu.md)
- [file-upload](file-upload.md)
- [icons-toolbar](icons-toolbar.md)
- [image](image.md)
- [input types: email / number/ hidden / search / tel etc.](input.md)
- [link](link.md)
- [media-icon](media-icon.md)
- [radio](radio.md)
- [range](range.md)
- [rich-text](rich-text.md)
- [select](select.md)
- [switch](switch.md)
- [text](text.md)
- [textarea](textarea.md)
- [tree-select](tree-select.md)
- [url-input-button](url-input-button.md)
- [video](video.md)



#### Returning field in `edit` method:

- `middleware.fields.arrtibuteKeyName` for a **single** field when `placement` property is not defined.
- `middleware.blockControls` for **all** block-control fields. ( where `placement` is `block-control` ) 
- `middleware.inspectorControls` for **all** inspector fields. ( where `placement` is `inspector` )



#### Getting more control over fields:

There are two ways of getting a field, one is simply use `middleware.fields.arrtibuteKeyName` or `middleware.getField( props, 'arrtibuteKeyName', config )` when you need more control over a field, here you can use all configuration options in `config` parameter given in the fields doc.

The same can be done for block controls and inspector controls as `middleware.getBlockControls( props, fields )` and `middleware.getInspectorControls( props, fields )` where `fields` can be defined as an array of fields.

See [example usage](alignment-toolbar.md#example-usage--es5-) of alignment-toolbar.



#### Example Usage:

- See [examples](examples/)
- Check [gutenberg-supplements](https://github.com/rtCamp/gutenberg-supplements) plugin where we have created some actual blocks using middleware.

