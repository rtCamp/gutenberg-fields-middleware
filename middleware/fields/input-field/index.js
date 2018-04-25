/**
 * Input field for email, hidden, number, search, tel.
 */

const { TextControl } = wp.components;

export default function inputField( props, config, attributeKey, middleware ) {
	const defaultAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), {
		className: 'middleware-input-field middleware-input-field-' + config.type,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId( attributeKey );

	// Already has BaseControl wrapper.
	return (
		<TextControl
			{ ...fieldAttributes }
		/>
	);
}
