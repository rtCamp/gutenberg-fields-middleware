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

#### onChange:

The function called when a new date or time has been selected.It passes the `currentDate` as the first argument and `props` as second argument.

- Type: `Function`
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
