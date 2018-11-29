# code-editor

![image](https://user-images.githubusercontent.com/6297436/39417719-d00fa648-4c73-11e8-97ab-c91d742d3244.png)

## Properties

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

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
