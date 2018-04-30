# range

#### label:

If set, a label will be generated using label property value as the content.
* Type: `String`
* Required: No

#### help:

Used to add help text below the field.
* Type: `String`
* Required: No

#### beforeIcon:

If set, a dashIcon component will be rendered before the slider with the icon equal to beforeIcon.
* Type: `String`
* Required: No

#### afterIcon:

If set, a dashIcon component will be rendered after the slider with the icon equal to afterIcon.
* Type: `String`
* Required: No

#### allowReset:

If set to `true`, a button to reset the the slider is rendered.
* Type: `Boolean`
* Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/range-control).

**Example:**

```js
range: {
	type: 'string',
	field: {
		type: 'range',
		label: 'Columns',
		value: columns,
		onChange: onChange,
		min: 2,
		max: 10
	},
}
```

### Return

This will return selected range number.

- Type: `string`
