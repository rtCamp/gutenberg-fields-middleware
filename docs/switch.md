# switch

#### label:

Field Label

- Type: `string`
- Required: No

#### checked:

Checked attribute of checkbox. Changes the accessibility text to "On/Off".

- Type: `bool`
- Required: No

#### onChange:

The function called when switch toggles. It passes the new `value` as first argument and `props` as second argument.

- Type: `Function`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/form-toggle ).

**Example:**

```js
switch: {
	type: 'string',
	field: {
		type: 'switch',
		label: __( 'Form Toggle' ),
		placement: 'inspector',
	},
}
```

### Return

- Type: `string` - Print `on` or `off` in output
