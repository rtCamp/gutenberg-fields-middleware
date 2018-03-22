/**
 * Text field.
 */

const { RichText } = wp.blocks;

const richText = ( props, attribute, attributeKey ) => {
	const defaultAttributes = {

		onChange( newContent ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = newContent;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.type;

	return (
		<RichText
			{ ...fieldAttributes }
		/>
	);
};

export default richText;
