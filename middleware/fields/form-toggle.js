/**
 * Switch field.
 */

const { FormToggle } = wp.components;

export default function formToggle( props, config, attributeKey ) {
	const defaultAttributes = {
		value: '1',
	};

	// @todo not working correctly.
	defaultAttributes.onChange = ( event ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = event.target.value;
		props.setAttributes( newAttributes );
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<FormToggle
			{ ...fieldAttributes }
		/>
	);
}
