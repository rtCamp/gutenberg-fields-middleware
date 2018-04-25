/**
 * Text field.
 */

const { PlainText } = wp.blocks;
import inputField from './../input-field';

export default function text( props, config, defaultConfig, attributeKey ) {
	if ( 'inspector' === config.placement ) {
		return inputField( props, config, attributeKey );
	}

	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
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
		<PlainText
			{ ...fieldAttributes }
		/>
	);
}
