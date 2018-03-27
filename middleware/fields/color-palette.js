/**
 * Range field.
 */

const { ColorPalette } = wp.blocks;

const colorPalette = ( props, config, attributeKey ) => {
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
		<ColorPalette
			{ ...fieldAttributes }
		/>
	);
};

export default colorPalette;
