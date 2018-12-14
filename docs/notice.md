# Notice

This component is used to display notices in editor. ( See example usage )

![notice](https://user-images.githubusercontent.com/11607839/49986320-74d31280-ff95-11e8-826f-d40a4e40037f.png)



## Properties

#### status:

Can be warning (yellow), success (green), error (red).

- Type: `string`
- Required: No

#### onRemove:

Function called when dismissing the notice

- Type: `function`
- Required: No

#### isDismissible:

Whether the notice should be dismissible or not

- Type: `boolean`
- Default: `true`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No

#### **actions:**

An array of action objects. Each member object should contain a label and either a url link string or onClick callback function.

- Type: `Array`
- Required: No

**Example:**

```js
alignment: {
    type: 'boolean',
    field: {
        type: 'notice',
        status: 'error',
        message: 'An error occurred',
    },
},
```

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/notice).

Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/).
