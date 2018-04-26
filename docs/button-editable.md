# button-editable

#### onChange:

A function that receives the new value when button text changes. It passes the new `value` as first argument and `props` as second argument.

- Type: `function`
- Required: No

#### style:

The style applies to the button.

- Type: `object`
- Required: No

**Example:**

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
		initialOpen: true,
	},
},
buttonColor: {
	type: 'string',
	field: {
		type: 'color',
		label: __( 'Button Color' ),
		placement: 'inspector',
		initialOpen: false,
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

### Return

This will return complete button object.

- Type: `object`

```javascript
{
  "text": [ "Action" ],
  "link": "http://example.org/"
}
```
