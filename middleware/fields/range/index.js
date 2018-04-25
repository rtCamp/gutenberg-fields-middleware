/**
 * Range field.
 */

const { RangeControl } = wp.components;

export default function range( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<RangeControl
			{ ...fieldAttributes }
		/>
	);
}
