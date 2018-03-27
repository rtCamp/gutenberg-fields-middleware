/**
 * Code editor field.
 */

const { CodeEditor } = wp.components;

export default function editor( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<CodeEditor
			{ ...fieldAttributes }
		/>
	);
}
