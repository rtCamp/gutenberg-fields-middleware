/**
 * Switch field.
 */

const { FormToggle, BaseControl } = wp.components;

export default function formToggle( props, config, attributeKey ) {
	const defaultAttributes = {
		onChange: ( event ) => {
			const newAttributes = {};
			newAttributes[ attributeKey ] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes( newAttributes );
		},
		checked: 'on' === props.attributes[ attributeKey ],
		value: props.attributes[ attributeKey ] || 'off',
	};

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
