# date-time

![image](https://user-images.githubusercontent.com/6297436/39417816-64e5dbca-4c74-11e8-852e-f3d05205f06d.png)



## Properties

#### label:

Field Label

- Type: `string`
- Required: No
- Default: 'Date'

#### currentDate:

The current date and time at initialization.

- Type: `string`
- Required: No

#### locale:

The localization for the display of the date and time.

- Type:`string`
- Required: No

#### is12Hour:

Whether the current timezone is a 12 hour time.

- Type: `bool`
- Required: No

#### initialOpen:

- Type: `bool`
- Required: No

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/date-time).

**Example:**

```js
dateTime: {
	type: 'string',
	field: {
		type: 'date-time',
		placement: 'inspector',
	},
}
```

### Return

This will return date and time as string. For eg. `2018-04-13T18:09:59`

- Type: `string`
