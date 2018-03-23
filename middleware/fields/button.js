/**
 * Button field.
 */

const { Button } = wp.components;
const { __ } = wp.i18n;

const button = ( props, config ) => {
	const defaultAttributes = {
		buttonText: __( 'Button' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const buttonText = fieldAttributes.buttonText;

	delete fieldAttributes.buttonText;
	delete fieldAttributes.type;

	return (
		<Button
			{ ...fieldAttributes }
		>
			{ buttonText }
		</Button>
	);
};

export default button;
