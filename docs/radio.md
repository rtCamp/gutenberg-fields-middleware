# radio

#### label:

If set, a label will be generated using label property as the content.
* Type: `String`
* Required: No

#### help:

If set, a help text will be generated using help property as the content.
* Type: `String`
* Required: No


#### selected:

The value property of the currently selected option.
* Type: `Object`
* Required: No

#### options:

An array of objects containing the following properties:
* label: (string) The label to be shown to the user.
* value: (Object) The internal value compared against select and passed to onChange.


* Type: `Array`
* Required: No

#### onChange:

A function that receives the value of the new option that is being selected as input. It passes the new `value` as first argument and `props` as second argument.
* Type: `function`
* Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/radio-control).

**Example:**

```js
radio: {
	type: 'string',
	field: {
		type: 'radio',
		label: 'User type',
		help: 'The type of the current user',
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
	default: 'one',
}
```

### Return

- Type: `string` - Print selected value
