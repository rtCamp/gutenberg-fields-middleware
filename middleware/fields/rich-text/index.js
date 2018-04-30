/**
 * Text field.
 */

import './editor.scss';
const { RichText } = wp.blocks;
import Field from './../../components/field';

export default function richText( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		inlineToolbar: true,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ RichText }
			{ ...fieldAttributes }
			isSelected={ props.isSelected && attributeKey === props.editable }
		/>
	);
}
