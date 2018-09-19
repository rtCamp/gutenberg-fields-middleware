/**
 * alignment-toolbar field.
 */

const { AlignmentToolbar } = wp.editor;
import Field from './../../components/field';

export default function alignmentToolbar( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<AlignmentToolbar { ...fieldAttributes  } />
		</Field>
	);
}
