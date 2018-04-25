/**
 * Select field.
 */

const { SelectControl } = wp.components;

export default function select( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<SelectControl
			{ ...fieldAttributes }
		/>
	);
}
