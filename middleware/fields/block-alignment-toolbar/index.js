/**
 * block-alignment-toolbar field.
 */

const { BlockAlignmentToolbar } = wp.editor;
import Field from './../../components/field';

export default function blockAlignmentToolbar( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<BlockAlignmentToolbar { ...fieldAttributes } />
		</Field>
	);
}
