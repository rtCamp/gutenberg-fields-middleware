# radio

![image](https://user-images.githubusercontent.com/1138833/39433832-8f317c64-4cb4-11e8-8322-989499418f06.png)

#### label:

If set, a label will be generated using label property as the content.
* Type: `String`
* Required: No

#### help:

Used to add help text below the field.
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

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/radio-control).

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
				label: 'Option One',
			},
			{
				value: 'two',
				label: 'Option Two',
			},
		],
	},
	default: 'one',
}
```

### Return

This will return selected value.

- Type: `string`
