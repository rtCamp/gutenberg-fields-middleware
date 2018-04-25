/**
 * Range field.
 */

const { RangeControl } = wp.components;

export default function range( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes ? props.attributes[ attributeKey ] || '' : '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {  };
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<RangeControl
			{ ...fieldAttributes }
		/>
	);
}
