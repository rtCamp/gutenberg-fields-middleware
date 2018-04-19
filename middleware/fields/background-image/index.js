/**
 * background-image field.
 */

const { MediaUpload } = wp.blocks;
const { BaseControl, Toolbar, IconButton } = wp.components;
const { __ } = wp.i18n;

export default function backgroundImage( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ],
		type: 'image',
		iconLabel: __( 'Edit image' ),
	};

	defaultAttributes.render = ( { open } ) => {
		return (
			<IconButton
				className="components-toolbar__control"
				label={ defaultAttributes.iconLabel }
				icon="edit"
				onClick={ open }
			/>
		);
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onSelect = ( media ) => {
		if ( config.onSelect ) {
			config.onSelect( media, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		}
	};

	const help = fieldAttributes.help;
	const label = fieldAttributes.label;

	delete fieldAttributes.type;
	delete fieldAttributes.placement;
	delete fieldAttributes.help;
	delete fieldAttributes.label;

	const toolbarComponent = (
		<Toolbar>
			<MediaUpload
				{ ...fieldAttributes }
			/>
		</Toolbar>
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
