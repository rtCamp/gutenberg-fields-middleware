# textarea

![image](https://user-images.githubusercontent.com/1138833/39434561-89fddf9c-4cb6-11e8-92cd-9d47c6c6cc47.png)

#### label:

If this property is added, a label will be generated using label property as the content.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

#### row:

The number of rows the textarea should contain. Defaults to four.

- Type: `String`
- Required: No
- Default: 4

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/textarea-control).

**Example:**

```js
textarea: {
	type: 'string',
	field: {
		type: 'textarea',
		label: __( 'Textarea' ),
		placement: 'inspector',
	},
},
```

### Return

This will return string.

- Type: `string`
