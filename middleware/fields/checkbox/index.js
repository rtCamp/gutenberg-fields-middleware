/**
 * Checkbox field.
 */

const { CheckboxControl } = wp.components;

export default function checkbox( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: '1',
		checked: props.attributes[ attributeKey ],
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( checked ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = checked ? fieldAttributes.value : false;
		props.setAttributes( newAttributes );
	};

	delete fieldAttributes.type;

	return (
		<CheckboxControl { ...fieldAttributes } />
	);
}
