/**
 * Text field.
 */

const { RichText, PlainText } = wp.blocks;

export default function richText( props, config, attributeKey ) {
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

	if ( fieldAttributes.richText ) {
		delete fieldAttributes.richText;
		return (
			<RichText
				{ ...fieldAttributes }
			/>
		);
	}

	return (
		<PlainText
			{ ...fieldAttributes }
		/>
	);
}
