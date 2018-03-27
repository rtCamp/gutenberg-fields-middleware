/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

export default function urlInput( props, config, attributeKey ) {
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
		<UrlInput
			{ ...fieldAttributes }
		/>
	);
}
