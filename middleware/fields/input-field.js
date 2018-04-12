/**
 * Input field for email, hidden, number, search, tel.
 */

const { BaseControl, TextControl } = wp.components;

export default function inputField( props, config, attributeKey ) {
	const defaultAttributes = {

		value: props.attributes[ attributeKey ],

		className: 'components-text-control__input',
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

	const id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId( attributeKey );
	const label = fieldAttributes.label;
	const help = fieldAttributes.help;

	delete fieldAttributes.id;
	delete fieldAttributes.placement;
	delete fieldAttributes.label;
	delete fieldAttributes.help;

	return (
		<BaseControl id={ id } label={ label } help={ help } >
			<TextControl
				id={ id }
				{ ...fieldAttributes }
			/>
		</BaseControl>
	);
}
