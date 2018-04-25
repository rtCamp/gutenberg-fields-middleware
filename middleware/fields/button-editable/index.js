/**
 * Button field.
 */

const { __ } = wp.i18n;
import ButtonEditable from './../../components/button-editable';

export default function buttonEditable( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		placeholder: __( 'Add text…' ),
		tagName: 'span',
		value: props.attributes[ attributeKey ] ? props.attributes[ attributeKey ] : '',
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true,
		inlineToolbar: true,
		formattingControls: [ 'bold', 'italic', 'strikethrough' ],
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );
	const helperFields = middleware.getHelperFields( attributeKey );

	return middleware.createField( config, (
		<ButtonEditable
			{ ...fieldAttributes }
			buttonValue={ fieldAttributes.value }
			isSelected={ props.isSelected && attributeKey === props.editable }
			linkField={ helperFields.link }
			backgroundColor={ middleware.getHelperFieldValue( props, config, 'backgroundColor' ) }
			textColor={ middleware.getHelperFieldValue( props, config, 'color' ) }
			buttonClass={ middleware.getHelperFieldValue( props, config, 'class' ) }
		/>
	) );
}
