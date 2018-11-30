# select

![image](https://user-images.githubusercontent.com/1138833/39434214-8c12589a-4cb5-11e8-9192-c4b9c9c31541.png)

#### label:

If set, a label will be generated using label property value as the content.
* Type: `String`
* Required: No

#### help:

Used to add help text below the field.
* Type: `String`
* Required: No

#### multiple:

If set, multiple values can be selected.
* Type: `Boolean`
* Required: No

#### options:

An array of objects containing the following properties:
* `label:` (string) The label to be shown to the user.
* `value:` (Object) The internal value used to choose the selected value. This is also the value passed to onChange when the option is selected.


* Type: `Array`
* Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/select-control).

**Example:**

```js
selectOption: {
	type: 'string',
	field: {
		type: 'select',
		label: 'Select Numbers',
		options: [
			{
				value: 'one',
				label: 'one',
			},
			{
				value: 'two',
				label: 'two',
			},
		],
	},
}
```

### Return

This will return selected value.

- Type: `string`
