/**
 * Text field.
 */

import './editor.scss';
const { RichText } = wp.blocks;

export default function richText( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		inlineToolbar: true,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<RichText
			{ ...fieldAttributes }
			isSelected={ props.isSelected && attributeKey === props.editable }
		/>
	) );
}
