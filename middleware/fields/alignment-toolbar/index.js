/**
 * alignment-toolbar field.
 */

const { AlignmentToolbar } = wp.blocks;
const { BaseControl } = wp.components;

export default function alignmentToolbar( props, config, attributeKey ) {
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

	const help = fieldAttributes.help;
	const label = fieldAttributes.label;

	delete fieldAttributes.type;
	delete fieldAttributes.placement;
	delete fieldAttributes.help;
	delete fieldAttributes.label;

	const toolbarComponent = (
		<AlignmentToolbar
			{ ...fieldAttributes }
		/>
	);

	if ( 'inspector' === config.placement ) {
		return (
			<BaseControl label={ label } help={ help } >
				{ toolbarComponent }
			</BaseControl>
		);
	}

	return toolbarComponent;
}
