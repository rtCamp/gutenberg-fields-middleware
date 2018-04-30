# color

![image](https://user-images.githubusercontent.com/6297436/39417779-225607bc-4c74-11e8-87af-5402ce2064cf.png)



## Properties

#### label:

The title of color control

- Type: `string`
- Required: No
- Default: 'Color'

#### initialOpen:

- Type: `bool`
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
