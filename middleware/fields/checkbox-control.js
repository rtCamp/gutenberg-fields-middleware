/**
 * Checkbox field.
 */

const { CheckboxControl } = wp.components;

const checkboxControl = ( props, attribute, attributeKey ) => {
	const defaultAttributes = {
		value: '1',
	};

	// @todo not working correctly.
	defaultAttributes.onChange = ( checked ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = checked ? defaultAttributes.value : false;
		props.setAttributes( newAttributes );
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
};

export default checkboxControl;
