# color

#### label:

The title of color control

- Type: `string`
- Required: No
- Default: 'Color'

#### value:

The value of color.

- Type: `string`
- Required: No

#### onChange:

The function called when a new color has been selected. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/blocks/color-palette ).

**Example:**

```js
color: {
	type: 'string',
	field: {
		type: 'color',
		placement: 'inspector',
	},
}
```

### Return

This will return color hex code. For eg. `#000000`

- Type: `string` 
