/**
 * Button field.
 */

const { __ } = wp.i18n;
import ButtonEditable from './../../components/button-editable';

export default function buttonEditable( props, config, attributeKey, middleware ) {
	const defaultAttributes = {
		placeholder: __( 'Add text…' ),
		tagName: 'span',
		value: props.attributes[ attributeKey ] ? props.attributes[ attributeKey ] : '',
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true,
		inlineToolbar: true,
		formattingControls: [ 'bold', 'italic', 'strikethrough' ],
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const helperFields = middleware.getInnerFields( attributeKey );
	const backgroundColorAttributeKey = config.helperFields ? config.helperFields.backgroundColor : '';
	const textColorAttributeKey = config.helperFields ? config.helperFields.color : '';
	const buttonClassAttributeKey = config.helperFields ? config.helperFields.class : '';

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	return (
		<ButtonEditable
			{ ...fieldAttributes }
			buttonValue={ fieldAttributes.value }
			isSelected={ props.isSelected && attributeKey === props.editable }
			linkField={ helperFields.link }
			backgroundColor={ backgroundColorAttributeKey ? props.attributes[ backgroundColorAttributeKey ] : null }
			textColor={ textColorAttributeKey ? props.attributes[ textColorAttributeKey ] : null }
			buttonClass={ buttonClassAttributeKey ? props.attributes[ buttonClassAttributeKey ] : null }
		/>
	);
}
