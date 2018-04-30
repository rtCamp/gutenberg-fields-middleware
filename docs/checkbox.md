# checkbox

#### heading:

A heading for the input field, that appears above the checkbox. If the prop is not passed no heading will be rendered.
* Type: `String`
* Required: No

#### label:

A label for the input field, that appears at the side of the checkbox. The prop will be rendered as content a label element. If no prop is passed an empty label is rendered.
* Type: `String`
* Required: No


#### help:

Used to add help text below the field.
* Type: `String`
* Required: No

#### checked:

If checked is true the checkbox will be checked. If checked is false the checkbox will be unchecked. If no value is passed the checkbox will be unchecked.
* Type: `Boolean`
* Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/checkbox-control).

**Example:**

```js
check: {
	type: 'boolean',
	field: {
		type: 'checkbox',
		heading: 'User',
		label: 'Is author',
		help: 'Is the user a author or not?',
	},
	default: 1,
}
```

### Return

This will return true or false.

- Type: `boolean`
