# rich-text

#### placeholder:

- Type: `String`
- Required: No

#### value:

The current value of rich text field.

- Type: `array`
- Required: No

#### onChange:

A function that receives the new value of the rich text field each time it changes. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

For full documentation read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/rich-text).

**Example:**

```js
text: {
	type: 'string',
	field: {
		type: 'rich-text',
		placeholder: __( 'Enter text' ),
	},
}
```
