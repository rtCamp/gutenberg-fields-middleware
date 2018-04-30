# color

#### label:

The title of color control

- Type: `string`
- Required: No
- Default: 'Color'

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
