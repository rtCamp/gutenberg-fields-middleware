/**
 * icons-toolbar field.
 */

const { Toolbar } = wp.components;

export default function iconsToolbar( props, config, attributeKey, middleware ) {
	const defaultAttributes = {};

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
		<Toolbar
			{ ...fieldAttributes }
		/>
	) );
}
