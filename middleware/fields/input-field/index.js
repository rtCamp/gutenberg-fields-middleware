/**
 * Input field for email, hidden, number, search, tel.
 */

const { TextControl } = wp.components;

export default function inputField( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		className: 'middleware-input-field middleware-input-field-' + config.type,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.id = fieldAttributes.id ? fieldAttributes.id : attributeKey;

	return (
		<TextControl
			{ ...fieldAttributes }
		/>
	);
}
