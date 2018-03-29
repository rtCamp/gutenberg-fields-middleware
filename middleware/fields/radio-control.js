/**
 * Radio Control field.
 */

const { RadioControl } = wp.components;

export default function radioControl( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		selected: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<RadioControl
			{ ...fieldAttributes }
		/>
	);
}
