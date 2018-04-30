# text

Render an auto-growing textarea allow users to fill any textual content.

You can also pass any extra prop to the textarea rendered by this field. 

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

If added, a help text will be added below the field.

- Type: `String`
- Required: No

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
