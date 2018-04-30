/**
 * Color Palette field.
 */

const { ColorPalette } = wp.blocks;
const { __ } = wp.i18n;

import Field from './../../components/field';

export default function color( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
		label: __( 'Color' ),
		initialOpen: false,
		panel: 'inspector' === config.placement,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ ColorPalette }
			{ ...fieldAttributes }
		/>
	);
}
