/**
 * Input field for email, hidden, number, search, tel.
 */

const { BaseControl } = wp.components;

export default function inputField( props, config, attributeKey ) {
	const defaultAttributes = {

		onChange( event ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = event.target.value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ],
		className: 'components-text-control__input',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId( attributeKey );
	const label = fieldAttributes.label;
	const help = fieldAttributes.help;

	delete fieldAttributes.id;
	delete fieldAttributes.position;
	delete fieldAttributes.label;
	delete fieldAttributes.help;

	return (
		<BaseControl id={ id } label={ label } help={ help } >
			<input
				id={ id }
				{ ...fieldAttributes }
			/>
		</BaseControl>
	);
}
