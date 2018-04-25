/**
 * block-alignment-toolbar field.
 */

const { BlockAlignmentToolbar } = wp.blocks;

export default function blockAlignmentToolbar( props, config, defaultConfig, attributeKey, middleware ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<BlockAlignmentToolbar
			{ ...fieldAttributes }
		/>
	) );
}
