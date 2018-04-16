# text

Render an auto-growing textarea allow users to fill any textual content.

#### value:

The current value of text field.

- Type: `string`
- Required: No

#### onChange:

A function that receives the new value of the text field each time it changes. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

You can also pass any extra prop to the textarea rendered by this field. 

For more read gutenberg [readme.](https://github.com/WordPress/gutenberg/tree/master/blocks/plain-text)

**Example:**

```js
text: {
	type: 'string',
	field: {
		type: 'text',
		placeholder: __( 'Enter text' ),
	},
}
```

### Return

This will return text.

- Type: `string`
