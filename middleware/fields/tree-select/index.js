/**
 * tree-select field.
 */

const { TreeSelect } = wp.components;

export default function treeSelect( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ],
		onFocus() {
			props.setState( {
				editable: attributeKey,
			} );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<TreeSelect
			{ ...fieldAttributes }
		/>
	);
}
