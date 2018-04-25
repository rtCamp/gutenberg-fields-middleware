/**
 * Switch field.
 */

const { FormToggle, BaseControl } = wp.components;

export default function formToggle( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		checked: 'on' === props.attributes[ attributeKey ],
		value: props.attributes[ attributeKey ] || 'off',
		onChange( event ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes( newAttributes );
		},
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

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
