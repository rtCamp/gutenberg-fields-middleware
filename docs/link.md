# link

#### value:

Value of url field.

- Type: `String`
- Required: No

#### onChange:

A function that receives the value of the new option that is being selected as input. It passes the new `value` as first argument and `props` as second argument.

- Type: `function`
- Required: No

#### label:

Label for input but applicable only when using it in inspector controls.

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
