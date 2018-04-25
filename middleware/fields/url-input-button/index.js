/**
 * url-input-button field.
 */

const { UrlInputButton } = wp.blocks;
const { BaseControl, Toolbar } = wp.components;

export default function urlInputButton( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = {
		url: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( media ) => {
		if ( config.onChange ) {
			config.onChange( media, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		}
	};

	const help = fieldAttributes.help;
	const label = fieldAttributes.label;

	delete fieldAttributes.placement;
	delete fieldAttributes.help;
	delete fieldAttributes.label;

	const toolbarComponent = (
		<Toolbar>
			<UrlInputButton
				{ ...fieldAttributes }
			/>
		</Toolbar>
	);

	if ( 'block-controls' !== config.placement ) {
		return (
			<BaseControl label={ label } help={ help } >
				{ toolbarComponent }
			</BaseControl>
		);
	}

	return toolbarComponent;
}
