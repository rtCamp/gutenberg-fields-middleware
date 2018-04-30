/**
 * alignment-toolbar field.
 */

const { AlignmentToolbar } = wp.blocks;
import Field from './../../components/field';

export default function alignmentToolbar( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ AlignmentToolbar }
			{ ...fieldAttributes }
		/>
	);
}
