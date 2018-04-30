# link

#### label:

Label for input but applicable only when using it in inspector controls.

- Type: `String`
- Required: No

#### help:

If added, a help text will be added below the field.

- Type: `String`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/url-input).

**Example:**

```js
url: {
	type: 'string',
	field: {
		type: 'link',
	},
}
```

### Return

This will return link.

- Type: `string`
