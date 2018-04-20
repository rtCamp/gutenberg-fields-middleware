/**
 * Checkbox field.
 */

import CheckboxControl from '../../components/checkbox-control';

export default function checkbox( props, config, attributeKey ) {
	const fieldAttributes = _.extend( {}, config );

	if ( props.attributes[ attributeKey ] ) {
		fieldAttributes.options = props.attributes[ attributeKey ];
	}

	/**
	* Set Attributes value form config setting for first time.
	*
	* @return {void}
	*/
	fieldAttributes.setAttributes = () => {
		if ( ! props.attributes[ attributeKey ] ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = config.options;
			props.setAttributes( newAttributes );
		}
	};

	/**
	* Set Attribute on change.
	*
	* @param {int}  index Index of object.
	* @param {bool} value True when checkbox is checked. Else false.
	*
	* @return {void}
	*/
	fieldAttributes.onClick = ( index = null, value = null ) => {
		const options = props.attributes[ attributeKey ];
		options[ index ].value = ! value;
		props.setAttributes( options );
	};

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
