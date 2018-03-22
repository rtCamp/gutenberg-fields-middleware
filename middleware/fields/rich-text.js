const { RichText } = wp.blocks;

const richText = ( props, attribute, attributeKey ) => {
	const fieldAttributes = _.extend( {
		onChange( newContent ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = newContent;
			props.setAttributes( newAttributes );
		},
		value: props.attributes[ attributeKey ],
	}, attribute.field );

	delete fieldAttributes.type;

	return (
		<RichText
			{ ...fieldAttributes }
		/>
	);
};

export default richText;
