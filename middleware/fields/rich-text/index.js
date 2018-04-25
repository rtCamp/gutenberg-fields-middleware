/**
 * Text field.
 */

import './editor.scss';
const { RichText } = wp.blocks;

export default function richText( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
		inlineToolbar: true,
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
		<RichText
			{ ...fieldAttributes }
			isSelected={ props.isSelected && attributeKey === props.editable }
		/>
	);
}
