/**
 * Checkbox field.
 */

const { CheckboxControl } = wp.components;

export default function checkbox( props, config, attributeKey ) {
	const defaultAttributes = {
		value: '1',
		checked: props.attributes[ attributeKey ],
		onFocus() {
			props.setState( {
				editable: attributeKey,
			} );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( checked ) => {
		if ( config.onChange ) {
			config.onChange( checked, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = checked ? defaultAttributes.value : false;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
