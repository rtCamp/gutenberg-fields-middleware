# select

#### label:

If set, a label will be generated using label property value as the content.
* Type: `String`
* Required: No

#### help:

If set, a help text will be generated using help property value as the content.
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

#### onChange:

A function that receives the value of the new option that is being selected as input . If multiple is true the value received is an array of the selected value. If multiple is false the value received is a single value with the new selected value. It passes the new `value` as first argument and `props` as second argument.
* Type: `Function`
* Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/select-control).

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
