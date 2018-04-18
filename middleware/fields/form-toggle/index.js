/**
 * Switch field.
 */

const { FormToggle, BaseControl } = wp.components;

export default function formToggle( props, config, attributeKey ) {
	const defaultAttributes = {
		checked: 'on' === props.attributes[ attributeKey ],
		value: props.attributes[ attributeKey ] || 'off',
		onFocus() {
			props.setState( {
				editable: attributeKey,
			} );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( event ) => {
		if ( config.onChange ) {
			config.onChange( event, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<BaseControl
			label={ fieldAttributes.label }
			id={ fieldAttributes.id }
			help={ fieldAttributes.help }
			className="components-toggle-control"
		>
			<FormToggle
				{ ...fieldAttributes }
			/>
		</BaseControl>
	);
}
