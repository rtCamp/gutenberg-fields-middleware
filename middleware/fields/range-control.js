/**
 * Range field.
 */

const { RangeControl } = wp.components;

const rangeControl = ( props, attribute, attributeKey ) => {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.type;

	return (
		<RangeControl
			{ ...fieldAttributes }
		/>
	);
};

export default rangeControl;
