/**
 * icons-toolbar field.
 */

const { Toolbar } = wp.components;
const { BaseControl } = wp.components;

export default function iconsToolbar( props, config, attributeKey ) {
	const defaultAttributes = {};

	const fieldAttributes = _.extend( defaultAttributes, config );

	if ( ! _.isEmpty( config.controls ) ) {
		config.controls = config.controls.map( ( control ) => {
			const originalControl = _.extend( {}, control );
			control.onClick = ( event ) => {
				if ( originalControl.onClick ) {
					originalControl.onClick( event, props );
				} else {
					const newAttributes = {};
					newAttributes[ attributeKey ] = control.value;
					props.setAttributes( newAttributes );
				}
			};
			control.isActive = control.value === props.attributes[ attributeKey ];

			return control;
		} );
	}

	const help = fieldAttributes.help;
	const label = fieldAttributes.label;

	delete fieldAttributes.type;
	delete fieldAttributes.placement;
	delete fieldAttributes.help;
	delete fieldAttributes.label;

	const toolbarComponent = (
		<Toolbar
			{ ...fieldAttributes }
		/>
	);

	if ( 'inspector' === config.placement ) {
		return (
			<BaseControl label={ label } help={ help } >
				{ toolbarComponent }
			</BaseControl>
		);
	}

	return toolbarComponent;
}
