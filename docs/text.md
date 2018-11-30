# text

![image](https://user-images.githubusercontent.com/1138833/39434428-2884a3d6-4cb6-11e8-8dff-b35c9888afc9.png)

Render an auto-growing textarea allow users to fill any textual content.

You can also pass any extra prop to the textarea rendered by this field. 

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

For more read gutenberg [readme.](https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/plain-text)

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
