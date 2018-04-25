/**
 * Checkbox field.
 */

const { CheckboxControl } = wp.components;

export default function checkbox( props, config, attributeKey, middleware ) {
	const defaultAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), {
		value: '1',
		checked: props.attributes[ attributeKey ],
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( checked ) => {
		if ( config.onChange ) {
			config.onChange( checked, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = checked ? defaultAttributes.value : false;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	// Checkbox already has base control.
	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
