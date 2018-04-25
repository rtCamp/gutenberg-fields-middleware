/**
 * Code editor field.
 */

const { CodeEditor } = wp.components;

export default function codeEditor( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<CodeEditor
			{ ...fieldAttributes }
		/>
	) );
}
