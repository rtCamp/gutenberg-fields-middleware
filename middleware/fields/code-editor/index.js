/**
 * Code editor field.
 */

const { CodeEditor } = wp.components;
import Field from './../../components/field';

export default function codeEditor( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ CodeEditor }
			{ ...fieldAttributes }
		/>
	);
}
