/**
 * Textarea field.
 */

const { TextareaControl, BaseControl } = wp.components;

export default function textareaControl( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const label = fieldAttributes.label;

	delete fieldAttributes.type;
	delete fieldAttributes.label;

	return (
		<BaseControl
			label={ label }
			id={ fieldAttributes.id }
			help={ fieldAttributes.help }
		>
			<TextareaControl
				{ ...fieldAttributes }
			/>
		</BaseControl>
	);
}
