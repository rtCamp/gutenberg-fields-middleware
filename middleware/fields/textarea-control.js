/**
 * Textarea field.
 */

const { TextareaControl } = wp.components;

export default function textareaControl( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<TextareaControl
			{ ...fieldAttributes }
		/>
	);
}
