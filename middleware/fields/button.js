/**
 * Button field.
 */

const { Button } = wp.components;
const { RichText } = wp.blocks;
const { __ } = wp.i18n;

export default function button( props, config, attributeKey ) {
	const defaultAttributes = {
		buttonText: __( 'Button' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const buttonText = fieldAttributes.buttonText;
	const editable = fieldAttributes.editable;

	const editableButton = (
		<span className="wp-block-button" key="button">
			<RichText
				tagName="span"
				placeholder={ __( 'Add text…' ) }
				value={ props.attributes[ attributeKey ] }
				onChange={ ( value ) => {
					const newAttributes = {};
					newAttributes[ attributeKey ] = value;
					props.setAttributes( newAttributes );
				} }
				className="wp-block-button__link"
				keepPlaceholderOnFocus
			/>
		</span>
	);

	delete fieldAttributes.buttonText;
	delete fieldAttributes.type;
	delete fieldAttributes.editable;

	if ( editable ) {
		return editableButton;
	}

	return (
		<Button
			{ ...fieldAttributes }
		>
			{ buttonText }
		</Button>
	);
}
