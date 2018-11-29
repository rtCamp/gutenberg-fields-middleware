# rich-text

![image](https://user-images.githubusercontent.com/1138833/39434143-5d665eb0-4cb5-11e8-9ddc-3efcd8c81cd4.png)

#### placeholder:

- Type: `String`
- Required: No

#### label:

A label for the field.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

For full documentation read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/rich-text).

**Example:**

```js
text: {
	type: 'string',
	field: {
		type: 'rich-text',
		placeholder: __( 'Enter text' ),
	},
	source: 'children',
	selector: '.rich-text',
}
```

### Return

This will return rich-text output.

- Type: `string`
