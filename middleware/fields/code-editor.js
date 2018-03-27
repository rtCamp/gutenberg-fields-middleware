/**
 * Code editor field.
 */

const { CodeEditor } = wp.components;

const editor = ( props, config, attributeKey ) => {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<CodeEditor
			{ ...fieldAttributes }
		/>
	);
};

export default editor;