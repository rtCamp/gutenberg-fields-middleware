# range

#### label:

If set, a label will be generated using label property value as the content.
* Type: `String`
* Required: No

#### help:

If set, a help text will be generated using help property value as the content.
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

#### value:

The current value of the range slider.
* Type: `Number`
* Required: Yes

#### onChange:

A function that receives the new value. If allowReset is true, when onChange is called without any parameter passed it should reset the value. It passes the new `value` as first argument and `props` as second argument.
* Type: `function`
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
