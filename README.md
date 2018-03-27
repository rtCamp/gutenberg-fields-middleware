# Gutenberg Fields Middleware

Provides middleware to easily register fields for Gutenberg blocks.

After activating the plugin use `'gutenberg-fields-middleware'` handle as dependency when enqueueing your block js file.    

define your fields inside `attributes: { field }` and then use ( Optionally ) those fields inside `edit` method as `middleware.fields.attributeKey`

## Example Usage


```js
registerBlockType( 'example-namespace/example-block', {

	title: 'Block Title',
	description: 'Block Description',
	icon: 'universal-access-alt',
	category: 'common',
	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'url',
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
				imagePlaceholder: true,
				removeButtonText: __( 'Remove' ),
			},
		},
		option: {
			type: 'string',
			field: {
				type: 'select',
				label: 'Select Numbers',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		radio: {
			type: 'string',
			field: {
				type: 'radio',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
				position: 'inspector',
			},
		},
		columns: {
			type: 'string',
			field: {
				type: 'range',
				position: 'inspector',
			},
		},
	},

	// Optional.
	edit( props, middleware ) {
		return [
			middleware.fields.url,
			middleware.fields.text,
			middleware.fields.image,
			middleware.fields.option,
			middleware.fields.radio,
			middleware.fields.range,
		];
	},

	// Optional.
	save( props ) {
		return el( 'p', {}, props.attributes.text );
	},

} );
```

## Fields


#### button

###### type

Field Type.
* Type: `String`
* Required: Yes
* Default: Null

###### editable

Make button editable.
* Type: `Bool`
* Required: No
* Default: false

###### buttonText

Fallback text.
* Type: `string`
* Required: No
* Default: null

###### isPrimary

whether the button is styled as a primary button.
* Type: `bool`
* Required: No
* Default: null

###### href

if this property is added, it will use an `a` rather than a `button` element.
* Type: `string`
* Required: No
* Default: null


For more [read gutenberg readme](https://github.com/WordPress/gutenberg/tree/master/components/button).

**Example:**

```
button: {
	type: 'string',
	field: {
		type: 'button',
		isLarge: true,
		editable: true,
	},
}
```

#### image / video / audio

###### type

Field type.
* Type: `string`
* Required: Yes
* Default: null

###### buttonText

Upload button text.
* Type: `string`
* Required: No
* Default: null

###### imagePlaceholder

Enable imagePlaceholder.
* Type: `bool`
* Required: No
* Default: false

###### removeButtonText

Remove media button text. it will be showing only if there is string available.
* Type: `string`
* Required: No
* Default: null

###### multiple

Whether to allow multiple selections or not.
* Type: `Boolean`
* Required: No
* Default: false

###### value

Media ID (or media IDs if multiple is true) to be selected by default when opening the media library.
* Type: `Number|Array`
* Required: No

###### onSelect

Callback called when the media modal is closed, the selected media are passed as an argument.
* Type: `Func`
* Required: Yes

###### render

A callback invoked to render the Button opening the media library.
* Type: `Function`
* Required: Yes


For more [read gutenberg readme](https://github.com/WordPress/gutenberg/tree/master/blocks/media-upload).

**Example:**

```
image: {
	type: 'object',
	field: {
		type: 'image',
		buttonText: __( 'Upload' ),
		imagePlaceholder: true,
		removeButtonText: __( 'Remove' ),
	},
},
```

#### radio

###### type

Field Type.
* Type: `String`
* Required: Yes
* Default: Null

###### label

If this property is added, a label will be generated using label property as the content.
* Type: `String`
* Required: No

###### help

If this property is added, a help text will be generated using help property as the content.
* Type: `String`
* Required: No


###### selected

The value property of the currently selected option.
* Type: `Object`
* Required: No

###### options

An array of objects containing the following properties:
* label: (string) The label to be shown to the user.
* value: (Object) The internal value compared against select and passed to onChange.


* Type: `Array`
* Required: No

###### onChange

A function that receives the value of the new option that is being selected as input.
* Type: `function`
* Required: Yes

For more [read gutenberg readme](https://github.com/WordPress/gutenberg/tree/master/components/radio-control).

**Example:**

```
radio: {
	type: 'string',
	field: {
		type: 'radio',
		label: 'User type',
		help: 'The type of the current user',
		options: [
			{
				value: 'one',
				label: 'one',
			},
			{
				value: 'two',
				label: 'two',
			},
		],
	},
}
```

The plugin is currently just a proof of concept of the idea suggested by Daniel in his post [fields-middleware-for-gutenberg](https://danielbachhuber.com/2018/02/27/fields-middleware-for-gutenberg/)
