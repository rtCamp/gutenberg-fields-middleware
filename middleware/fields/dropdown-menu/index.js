/**
 * icons-toolbar field.
 */

const { DropdownMenu } = wp.components;

export default function dropDownMenu( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( {}, defaultConfig );
	delete defaultAttributes.value;
	delete defaultAttributes.onChange;

	const fieldAttributes = _.extend( defaultAttributes, config );

	if ( ! _.isEmpty( config.controls ) ) {
		config.controls = config.controls.map( ( control ) => {
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

	return middleware.createField( config, (
		<DropdownMenu { ...fieldAttributes } />
	) );
}
