# date-time

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

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/date-time).

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
