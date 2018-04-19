/**
 * Checkbox field.
 */

import CheckboxControl from '../../components/checkbox-control';

export default function checkbox( props, config, attributeKey ) {

	const fieldAttributes = _.extend( {}, config );

	fieldAttributes.onChange = () => {
		const { options } = config;
		const newAttributes = {};

		newAttributes[ attributeKey ] = {};
		options.map( ( option, index ) =>
			newAttributes[ attributeKey ][ index ] = option.value,
		);
	};

	delete fieldAttributes.type;

	return (
		<CheckboxControl
			{ ...fieldAttributes }
		/>
	);
}
