# tree-select

#### label:

If this property is added, a label will be generated using label property as the content.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field.

- Type: `String`
- Required: No

#### noOptionLabel:

If this property is added, an option will be added with this label to represent empty selection.

- Type: `String`
- Required: No

#### selectedId:

The id of the currently selected node.

- Type: `Object`
- Required: No

#### tree:

An array containing the tree objects with the possible nodes the user can select.

- Type: `String`
- Required: No


For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/tree-select).

**Example:**

```js
treeSelect: {
	type: 'string',
	field: {
		type: 'tree-select',
		label: 'Parent page',
		placement: 'inspector',
		tree: [
			{
				name: 'Page 1',
				id: 'p1',
				children: [
					{ name: 'Descend 1 of page 1', id: 'p11' },
					{ name: 'Descend 2 of page 1', id: 'p12' },
				],
			},
			{
				name: 'Page 2',
				id: 'p2',
				children: [
					{
						name: 'Descend 1 of page 2',
						id: 'p21',
						children: [
							{
								name: 'Descend 1 of Descend 1 of page 2',
								id: 'p211',
							},
						],
					},
				],
			},
		],
	},
}
```

### Return

This will return selected value.

- Type: `string`
