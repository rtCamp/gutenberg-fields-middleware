# button-editable

See Example Usage

![image](https://user-images.githubusercontent.com/6297436/39367532-9f094584-4a54-11e8-8531-6825cb642d00.png)



## Properties

#### label:

A label for the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No

#### helperFields:

If some helper fields are required, define a new attribute field and use the attribute key name as 

`{ link: 'buttonEditableLink' }` . Check Example below to see what helper fields it supports

- Type: `Object`
- Required: No

**Example:**

```js
buttonEditable: {
	type: 'array',
	field: {
		type: 'button-editable',
	},
	source: 'children',
	selector: '.button-link',
}
```

**Example with helperFields**
```js
buttonEditable: {
	type: 'array',
	field: {
		type: 'button-editable',
		helperFields: {
			link: 'buttonEditableLink',
			backgroundColor: 'buttonBackgroundColor',
			color: 'buttonColor',
			class: 'buttonClasses',
		},
	},
	source: 'children',
	selector: '.button-link',
},
buttonEditableLink: {
	type: 'string',
	field: {
		type: 'link',
	},
},
buttonBackgroundColor: {
	type: 'string',
	field: {
		type: 'color',
		label: __( 'Button Background Color' ),
		placement: 'inspector',
	},
},
buttonColor: {
	type: 'string',
	field: {
		type: 'color',
		label: __( 'Button Color' ),
		placement: 'inspector',
	},
},
buttonClasses: {
	type: 'string',
	field: {
		type: 'select',
		label: __( 'Button Type' ),
		options: [
			{
				value: 'button-large',
				label: __( 'Large' ),
			},
			{
				value: 'button-medium',
				label: __( 'Medium' ),
			},
			{
				value: 'button-small',
				label: __( 'Small' ),
			},
		],
		placement: 'inspector',
	},
},
```




## Return value in `props.attribute`

- Type: `object`

```javascript
{
  "text": [ "Action" ],
  "link": "http://example.org/"
}
```



## Example Usage ( ES5 )

```js
wp.blocks.registerBlockType( 'gb-m-example/single-field-block-button-editable', {
	title: 'Single Field Block Button Editable.',
	attributes: {
		buttonEditable: {
			type: 'array',
			field: {
				type: 'button-editable',
				helperFields: {
					link: 'buttonEditableLink',
				},
			},
			source: 'children',
			selector: '.button-link',
		},
		buttonEditableLink: {
			type: 'string',
			field: {
				type: 'link',
			},
		},
	},

	edit: function( props, middleware ) {
		return [
			middleware.fields.buttonEditable,
		];
	},

	save: function( props ) {
		return wp.element.createElement( 'a', {
			className: 'button-link',
			href: props.attributes.buttonEditableLink,
		}, props.attributes.buttonEditable );
	},
} );
```

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).
