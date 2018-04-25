/**
 * Radio Control field.
 */
const { RadioControl } = wp.components;

export default function radio( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		selected: props.attributes ? props.attributes[ attributeKey ] || '' : '',
	} );

	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<RadioControl
			{ ...fieldAttributes }
		/>
	);
}
