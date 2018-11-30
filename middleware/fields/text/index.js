/**
 * text field.
 */

const { PlainText } = wp.editor;
import inputField from './../input-field';
import Field from './../../components/field';

export default function text( props, config, defaultConfig, attributeKey, middleware ) {
	if ( 'inspector' === config.placement ) {
		return inputField( props, config, defaultConfig, attributeKey, middleware );
	}

	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<PlainText
				{ ...fieldAttributes }
			/>
		</Field>
	);
}
