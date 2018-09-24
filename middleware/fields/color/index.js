/**
 * Color Palette field.
 */

const { PanelColor } = wp.editor;
const { __ } = wp.i18n;

import './editor.scss';
import Field from './../../components/field';

export default function color( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ] || '',
		title: __( 'Color' ),
		initialOpen: false,
		panel: 'inspector' === config.placement,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<PanelColor { ...fieldAttributes } />
		</Field>
	);
}
