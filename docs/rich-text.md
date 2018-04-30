# rich-text

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

For full documentation read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/rich-text).

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
Read more about RichText api on Gutenberg handbook [here](https://wordpress.org/gutenberg/handbook/block-api/rich-text-api/.) for `source ` and `selector`.

### Return

This will return rich-text output.

- Type: `string`
