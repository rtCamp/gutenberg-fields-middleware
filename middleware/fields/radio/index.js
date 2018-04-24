/**
 * Radio Control field.
 */
import React from 'react';
const { RadioControl } = wp.components;

export default function radio( props, config, attributeKey ) {
	const defaultAttributes = {
		selected: props.attributes ? props.attributes[ attributeKey ] || '' : '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<RadioControl
			{ ...fieldAttributes }
		/>
	);
}
