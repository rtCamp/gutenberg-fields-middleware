/**
 * Code editor field.
 */

const { CodeEditor } = wp.components;

export default function codeEditor( props, config, attributeKey, middleware ) {
	const defaultAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), {
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
