# dropdown

#### className:

className of the global container

- Type: `String`
- Required: No

#### contentClassName:

If you want to target the dropdown menu for styling purposes, you need to provide a contentClassName because it's not being rendered as a children of the container node.

- Type: `String`
- Required: No

#### position:

The direction in which the popover should open relative to its parent node. Specify y- and x-axis as a space-separated string. Supports `"top"`, `"bottom"` y axis, and `"left"`, `"center"`, `"right"` x axis.

- Type: `String`
- Required: No
- Default: `"top center"`

#### renderToggle:

A callback invoked to render the dropdown Toggle Button.

- Type: `Function`
- Required: No

The first argument of the callback is an object containing the following properties:

- `isOpen`: whether the dropdown menu is opened or not
- `onToggle`: A function switching the dropdown menu's state from open to closed and vice versa
- `onClose`: A function that closes the menu if invoked

#### renderContent:

A callback invoked to render the content of the dropdown menu. Its first argument is the same as the `renderToggle` prop.

- Type: `Function`
- Required: No

#### expandOnMobile:

Opt-in prop to show popovers fullscreen on mobile, pass `false` in this prop to avoid this behavior.

- Type: `Boolean`
- Required: No
- Default: `false`

#### headerTitle:

Set this to customize the text that is shown in the dropdown's header when it is fullscreen on mobile.

- Type: `String`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/dropdown).

**Example:**

```js
dropdown: {
	type: 'string',
	field: {
		type: 'dropdown',
		position: 'top left',
	},
}
```
