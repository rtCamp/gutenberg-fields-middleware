/**
 * Color Palette field.
 */

const { ColorPalette } = wp.blocks;
const { PanelColor } = wp.components;
const { __ } = wp.i18n;

export default function color( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
		label: __( 'Color' ),
		initialOpen: false,
		panel: 'inspector' === config.placement,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	const colorEl = (
		<ColorPalette
			{ ...fieldAttributes }
		/>
	);

	if ( fieldAttributes.panel ) {
		return (
			<PanelColor title={ fieldAttributes.label } colorValue={ fieldAttributes.value } initialOpen={ fieldAttributes.initialOpen }>
				{ colorEl }
			</PanelColor>
		);
	}

	return middleware.createField( config, colorEl );
}
