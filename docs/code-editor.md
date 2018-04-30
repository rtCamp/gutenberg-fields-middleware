# code-editor

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

If added, a help text will be added below the field.

- Type: `String`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/code-editor).

**Example:**

```js
editorContent: {
	type: 'string',
	field: {
		type: 'code-editor',
	},
}
```

### Return

This will return code-editor output.

- Type: `string`
