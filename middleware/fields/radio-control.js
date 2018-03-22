/**
 * Url field.
 */

const { RadioControl } = wp.components;

const radioControl = ( props, attribute, attributeKey ) => {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		selected: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.type;

	return (
		<RadioControl
			{ ...fieldAttributes }
		/>
	);
};

export default radioControl;
