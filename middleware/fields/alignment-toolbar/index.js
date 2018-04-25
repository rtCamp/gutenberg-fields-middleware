/**
 * alignment-toolbar field.
 */

const { AlignmentToolbar } = wp.blocks;

export default function alignmentToolbar( props, config, attributeKey, middleware ) {
	const fieldAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<AlignmentToolbar
			{ ...fieldAttributes }
		/>
	) );
}
