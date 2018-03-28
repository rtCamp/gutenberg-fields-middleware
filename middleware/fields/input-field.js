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
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId( attributeKey );

	delete fieldAttributes.id;
	delete fieldAttributes.position;

	return (
		<BaseControl id={ id } label={ fieldAttributes.label } help={ fieldAttributes.help } className={ fieldAttributes.className } >
			<input
				id={ id }
				{ ...fieldAttributes }
			/>
		</BaseControl>
	);
}
