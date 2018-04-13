# textarea

#### value:

The current value of the textarea.

- Type: `string`
- Required: No

#### onChange:

A function that receives the new value of the textarea each time it changes. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

#### label:

If this property is added, a label will be generated using label property as the content.

- Type: `String`
- Required: No

#### help:

If set, a help text will be generated using help property as the content.

- Type: `String`
- Required: No

#### row:

The number of rows the textarea should contain. Defaults to four.

- Type: `String`
- Required: No
- Default: 4

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/textarea-control).

**Example:**

```js
textarea: {
	type: 'string',
	field: {
		type: 'textarea',
		label: __( 'Textarea' ),
		placement: 'inspector',
	},
},
```

### Return

- Type: `string` - Print text
