# switch

![image](https://user-images.githubusercontent.com/1138833/39434339-f851cb80-4cb5-11e8-9953-89aa9070fae9.png)

#### label:

Field Label

- Type: `string`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

#### checked:

Checked attribute of checkbox. Changes the accessibility text to "On/Off".

- Type: `bool`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/form-toggle).

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
