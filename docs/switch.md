# switch

#### label:

Field Label

- Type: `string`
- Required: No

#### help:

If added, a help text will be added below the field.

- Type: `String`
- Required: No

#### checked:

Checked attribute of checkbox. Changes the accessibility text to "On/Off".

- Type: `bool`
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

This will return `on` or `off` in output.

- Type: `string`
