/**
 * Color Palette field.
 */

const { ColorPalette } = wp.blocks;
const { PanelColor } = wp.components;
const { __ } = wp.i18n;

export default function color( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
		label: __( 'Color' ),
		initialOpen: false,
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
		<PanelColor title={ fieldAttributes.label } colorValue={ fieldAttributes.value } initialOpen={ fieldAttributes.initialOpen }>
			<ColorPalette
				{ ...fieldAttributes }
			/>
		</PanelColor>
	);
}
