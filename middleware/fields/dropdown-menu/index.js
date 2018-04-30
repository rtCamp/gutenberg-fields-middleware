/**
 * icons-toolbar field.
 */

const { DropdownMenu } = wp.components;

import Field from './../../components/field';

export default function dropDownMenu( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( {}, defaultConfig );
	delete defaultAttributes.value;
	delete defaultAttributes.onChange;

	const fieldAttributes = _.extend( defaultAttributes, config );

	if ( ! _.isEmpty( config.controls ) ) {
		fieldAttributes.controls = config.controls.map( ( control ) => {
			control.onClick = () => {
				const newAttributes = {};
				newAttributes[ attributeKey ] = control.isActive ? '' : control.value;
				props.setAttributes( newAttributes );
			};

			control.isActive = control.value === props.attributes[ attributeKey ];

			return control;
		} );
	}

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ DropdownMenu }
			{ ...fieldAttributes }
		/>
	);
}
