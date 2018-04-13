# button

#### buttonText:

Fallback button text.
* Type: `string`
* Required: No
* Default: null

#### isPrimary:

Button class. Other button classes are `isPrimary`, `isSmall`, `isToggled`, `isBusy`.

* Type: `bool`
* Required: No
* Default: null

#### disabled:

- Type: `bool`
- Required: No
- Default: null

#### href:

If set, `button` will be replaced with `a`
* Type: `bool`
* Required: No
* Default: null

For more read gutenberg [readme](https://github.com/WordPress/gutenberg/tree/master/components/button).

**Example:**

```js
button: {
	type: 'string',
	field: {
		type: 'button',
	},
}
```

### Return

- Type: `object`

```javascript
{
  "text": [ "Action" ],
  "link": "http://example.org/"
}
```
