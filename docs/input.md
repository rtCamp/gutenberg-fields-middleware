# email / number / hidden / search / tel

Creates input fields with input types. Types can be one of the following.

- email
- hidden
- number
- search
- tel
- time
- date
- datetime-local
- file
- month
- password
- time
- url
- week



## Properties

#### label:

If this property is added, a label will be generated using label property value as the content.

- Type: `String`
- Required: No

#### help:

If set, a help text will be generated using help property as the content.

- Type: `String`
- Required: No

**Examples:**

```js
email: {
	type: 'string',
	field: {
		type: 'email',
		label: __( 'Email' ),
		placement: 'inspector',
	},
},

hidden: {
	type: 'string',
	field: {
		type: 'hidden',
		placement: 'inspector',
	},
},

number: {
	type: 'string',
	field: {
		type: 'number',
		label: __( 'Number' ),
		placement: 'inspector',
	},
},

search: {
	type: 'string',
	field: {
		type: 'search',
		label: __( 'Search' ),
		placement: 'inspector',
	},
},

tel: {
	type: 'string',
	field: {
		type: 'tel',
		label: __( 'Telephone' ),
		placement: 'inspector',
	},
},

time: {
	type: 'string',
	field: {
		type: 'time',
		label: __( 'Time' ),
		placement: 'inspector',
	},
},

date: {
	type: 'string',
	field: {
		type: 'date',
		label: __( 'Date' ),
		placement: 'inspector',
	},
},

datetimeLocal: {
	type: 'string',
	field: {
		type: 'datetime-local',
		label: __( 'Date Time Local' ),
		placement: 'inspector',
	},
},

file: {
	type: 'string',
	field: {
		type: 'file',
		label: __( 'File' ),
		placement: 'inspector',
	},
},

month: {
	type: 'string',
	field: {
		type: 'month',
		label: __( 'Month' ),
		placement: 'inspector',
	},
},

week: {
	type: 'string',
	field: {
		type: 'week',
		label: __( 'Week' ),
		placement: 'inspector',
	},
},

url: {
	type: 'string',
	field: {
		type: 'url',
		label: __( 'URL Link' ),
		placement: 'inspector',
	},
},

password: {
	type: 'string',
	field: {
		type: 'password',
		label: __( 'Password' ),
		placement: 'inspector',
	},
},
```



## Return value in `props.attribute`

This will return string.

- Type: `string`
