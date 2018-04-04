/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

export default function urlInput( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<UrlInput
			{ ...fieldAttributes }
		/>
	);
}
