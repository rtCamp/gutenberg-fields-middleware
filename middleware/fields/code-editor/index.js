/**
 * Code editor field.
 */

const { codeEditor } = wp;
import Field from './../../components/field';

export default function CodeEditor( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<codeEditor { ...fieldAttributes } />
		</Field>
	);
}
