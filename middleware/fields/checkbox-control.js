/**
 * Url field.
 */

const { CheckboxControl } = wp.components;

export default function checkboxControl( props, config, attributeKey ) {
	const defaultAttributes = {
		value: '1',
	};

	// @todo not working correctly.
	defaultAttributes.onChange = ( checked ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = checked ? defaultAttributes.value : false;
		props.setAttributes( newAttributes );
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
