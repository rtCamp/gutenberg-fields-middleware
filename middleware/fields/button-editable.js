/**
 * Button field.
 */

const { __ } = wp.i18n;
import ButtonEditable from './../components/button-editable';

export default function buttonEditable( props, config, attributeKey ) {
	const defaultValue = config.default || '';
	const defaultAttributes = {
		placeholder: __( 'Add text…' ),
		tagName: 'span',
		value: props.attributes[ attributeKey ] ? props.attributes[ attributeKey ].text : defaultValue,
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			const buttonValue = _.extend( {}, props.attributes[ attributeKey ] || {} );
			buttonValue.text = value;
			newAttributes[ attributeKey ] = buttonValue;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.onInputChange = ( value ) => {
		if ( config.onInputChange ) {
			config.onInputChange( value, props );
		} else {
			const newAttributes = {};
			const buttonValue = _.extend( {}, props.attributes[ attributeKey ] || {} );
			buttonValue.link = value;
			newAttributes[ attributeKey ] = buttonValue;
			props.setAttributes( newAttributes );
		}
	};

	return (
		<ButtonEditable
			fieldAttributes={ fieldAttributes }
			inputValue={ props.attributes[ attributeKey ] ? props.attributes[ attributeKey ].link : '' }
			buttonValue={ fieldAttributes.value }
			isSelected={ props.isSelected }
		/>
	);
}
