const { RichText } = wp.blocks;

const richText = ( props, attribute, key ) => {
	const fieldAttributes = _.extend( {}, attribute.field );
	delete fieldAttributes.type;

	const onChange = ( newContent ) => {
		const newAttributes = {};
		newAttributes[ key ] = newContent;
		props.setAttributes( newAttributes );
	};

	return (
		<RichText
			onChange={ onChange }
			value={ props.attributes[ key ] }
			{ ...fieldAttributes }
		/>
	);
};

export default richText;
