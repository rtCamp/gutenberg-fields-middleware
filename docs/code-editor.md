# code-editor

#### value:

The source code to load into the code editor.

- Type: `string`
- Required: No

#### focus:

Whether or not the code editor should be focused.

- Type: `bool`
- Required: No
- Default: false

#### onFocus:

The function called when the editor is focused.

- Type: Function
- Required: No

#### onChange:

The function called when the user has modified the source code via the editor. It passes the new `value ` as an argument and `props` as second param.

- Type: `Function`
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
