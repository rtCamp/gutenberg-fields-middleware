/**
 * Checkbox field.
 */

import CheckboxControl from '../../components/checkbox-control';

export default function checkbox( props, config, attributeKey ) {
	const fieldAttributes = _.extend( {}, config );

	if ( props.attributes[ attributeKey ] ) {
		fieldAttributes.options = props.attributes[ attributeKey ];
	}

	fieldAttributes.setAtt = () => {
		if ( ! props.attributes[ attributeKey ] ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = config.options;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.onChange = ( index = null, value = null ) => {
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
