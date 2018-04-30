# dropdown-menu

Generally used in block-controls or inspector. 

![image](https://user-images.githubusercontent.com/6297436/39417930-097416f2-4c75-11e8-8b75-68fc6e8231f7.png)



## Properties

#### label:

A label for the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No

#### **controls:**

Add dropdown opitions to be added for selection. 

- Type: `Object`
- Required: Yes

**Example:**

```js
dropdownMenu: {
	type: 'string',
	field: {
		type: 'dropdown-menu',
		placement: 'block-controls',
		controls: [
			{
				icon: 'list-view', // Dashicon.
				title: __( 'List View' ),
				value: 'list',
			},
			{
				icon: 'grid-view',
				title: __( 'Grid View' ),
				value: 'grid',
			},
		],
	},
},
```



## Return value in `props.attribute`

- Type: `string`



Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).
