/**
 * block-alignment-toolbar field.
 */

const { BlockAlignmentToolbar } = wp.blocks;

export default function blockAlignmentToolbar( props, config, attributeKey, middleware ) {
	const fieldAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<BlockAlignmentToolbar
			{ ...fieldAttributes }
		/>
	) );
}
