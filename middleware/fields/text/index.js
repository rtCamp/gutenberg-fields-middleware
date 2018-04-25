/**
 * text field.
 */

const { PlainText } = wp.blocks;
import inputField from './../input-field';

export default function text( props, config, defaultConfig, attributeKey, middleware ) {
	if ( 'inspector' === config.placement ) {
		return inputField( props, config, defaultConfig, attributeKey, middleware );
	}

	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<PlainText
			{ ...fieldAttributes }
		/>
	) );
}
