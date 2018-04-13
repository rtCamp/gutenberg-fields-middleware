# email / number / hidden / search / tel

Creates input fields with above types. You can pass key value pairs will be passed to the input. 

#### onChange:

A function that receives the new value of the input field each time it changes. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

#### label:

If this property is added, a label will be generated using label property value as the content.

- Type: `String`
- Required: No

#### help:

If set, a help text will be generated using help property as the content.

- Type: `String`
- Required: No

#### className:

CSS class name for the input field.

- Type: `String`
- Required: No

**Examples:**

```js
email: {
	type: 'string',
	field: {
		type: 'email',
		label: __( 'Email' ),
		placement: 'inspector',
	},
},
hidden: {
	type: 'string',
	field: {
		type: 'hidden',
		placement: 'inspector',
	},
},
number: {
	type: 'string',
	field: {
		type: 'number',
		label: __( 'Number' ),
		placement: 'inspector',
	},
},
search: {
	type: 'string',
	field: {
		type: 'search',
		label: __( 'Search' ),
		placement: 'inspector',
	},
},
tel: {
	type: 'string',
	field: {
		type: 'tel',
		label: __( 'Telephone' ),
		placement: 'inspector',
	},
},
```

:heavy_check_mark: The following input type field are also supported `'email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week'`
