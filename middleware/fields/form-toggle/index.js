/**
 * Switch field.
 */

const { FormToggle } = wp.components;
import Field from './../../components/field';

export default function formToggle( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		checked: 'on' === props.attributes[ attributeKey ],
		value: props.attributes[ attributeKey ] || 'off',
		onChange( event ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes( newAttributes );
		},
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ FormToggle }
			{ ...fieldAttributes }
		/>
	);
}
