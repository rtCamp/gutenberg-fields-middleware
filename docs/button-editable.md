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
	type: 'object',
	field: {
		type: 'button-editable',
		style: {
			backgroundColor: 'red',
		},
	},
},
```
