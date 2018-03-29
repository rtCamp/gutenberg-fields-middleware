/**
 * Checkbox field.
 */

const { CheckboxControl } = wp.components;

export default function checkboxControl( props, config, attributeKey ) {
	const defaultAttributes = {
		value: '1',

		onChange( checked ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = checked ? defaultAttributes.value : false;
			props.setAttributes( newAttributes );
		},

		checked: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
