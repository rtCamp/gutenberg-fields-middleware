/**
 * Range field.
 */

const { ColorPalette } = wp.blocks;
const { PanelColor } = wp.components;
const { __ } = wp.i18n;

export default function colorPalette( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',

		label: __( 'Color' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<PanelColor title={ fieldAttributes.label } colorValue={ fieldAttributes.value } >
			<ColorPalette
				{ ...fieldAttributes }
			/>
		</PanelColor>
	);
}
