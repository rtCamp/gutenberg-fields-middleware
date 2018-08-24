/**
 * media-icon field.
 */

import { getDashIconSuffixByType } from './../../utils';
import Field from './../../components/field';
const { MediaUpload } = wp.editor;
const { IconButton, Button } = wp.components;
const { __ } = wp.i18n;

export default function mediaIcon( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		mediaType: 'image',
		button: false,
		buttonText: __( 'Upload' ),
		buttonClass: '',
	} );

	delete defaultAttributes.onChange;

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.icon = config.icon ? config.icon : getDashIconSuffixByType( fieldAttributes.mediaType );
	fieldAttributes.iconLabel = config.iconLabel ? config.iconLabel : __( 'Add ' ) + fieldAttributes.mediaType;
	fieldAttributes.iconLabelAdded = config.iconLabelAdded ? config.iconLabelAdded : __( 'Edit ' ) + fieldAttributes.mediaType;

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
				label={ props.attributes[ attributeKey ] ? fieldAttributes.iconLabelAdded : fieldAttributes.iconLabel }
				icon={ fieldAttributes.icon }
				onClick={ open }
			/>
		);
	};

	fieldAttributes.onSelect = ( media ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = media;
		props.setAttributes( newAttributes );
	};

	fieldAttributes.type = fieldAttributes.mediaType;

	return (
		<Field
			config={ config }
			component={ MediaUpload }
			{ ...fieldAttributes }
		/>
	);
}
