/**
 * alignment-toolbar field.
 */

const { AlignmentToolbar } = wp.blocks;

export default function alignmentToolbar( props, config, defaultConfig, attributeKey, middleware ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<AlignmentToolbar
			{ ...fieldAttributes }
		/>
	) );
}
