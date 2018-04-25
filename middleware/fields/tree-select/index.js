/**
 * tree-select field.
 */

const { TreeSelect } = wp.components;

export default function treeSelect( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<TreeSelect
			{ ...fieldAttributes }
		/>
	);
}
