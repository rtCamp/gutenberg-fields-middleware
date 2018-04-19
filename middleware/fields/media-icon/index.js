/**
 * media-icon field.
 */

const { MediaUpload } = wp.blocks;
const { BaseControl, Toolbar, IconButton, Button } = wp.components;
const { __ } = wp.i18n;

export default function mediaIcon( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ],
		mediaType: 'image',
		iconLabel: __( 'Edit image' ),
		icon: 'edit',
		button: false,
		buttonText: __( 'Upload' ),
		buttonClass: '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.render = ( { open } ) => {
		if ( defaultAttributes.button ) {
			return (
				<Button onClick={ open } className={ fieldAttributes.buttonClass } >
					{ fieldAttributes.buttonText }
				</Button>
			);
		}

		return (
			<IconButton
				className="components-toolbar__control"
				label={ fieldAttributes.iconLabel }
				icon={ fieldAttributes.icon }
				onClick={ open }
			/>
		);
	};

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

	fieldAttributes.type = fieldAttributes.mediaType;
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

	if ( 'block-controls' !== config.placement ) {
		return (
			<BaseControl label={ label } help={ help } >
				{ toolbarComponent }
			</BaseControl>
		);
	}

	return toolbarComponent;
}
