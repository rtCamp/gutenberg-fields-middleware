# text

Render an auto-growing textarea allow users to fill any textual content.

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
