/**
 * icons-toolbar field.
 */

const { Toolbar } = wp.components;
import Field from './../../components/field';

export default function iconsToolbar( props, config, defaultConfig, attributeKey ) {
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

	const toolbarConfig = _.extend( {}, config );
	toolbarConfig.placement = 'block-controls' === config.placement ? '' : config.placement; // To avoid one more Toolbar wrapper.

	return (
		<Field { ...config } >
			<Toolbar { ...fieldAttributes } />
		</Field>
	);
}
