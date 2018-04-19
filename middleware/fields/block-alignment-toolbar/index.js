/**
 * block-alignment-toolbar field.
 */

const { BlockAlignmentToolbar } = wp.blocks;

export default function blockAlignmentToolbar( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( nextAlign ) => {
		if ( config.onChange ) {
			config.onChange( nextAlign, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = nextAlign;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;
	delete fieldAttributes.placement;

	return (
		<BlockAlignmentToolbar
			{ ...fieldAttributes }
		/>
	);
}
