/**
 * Video/Audio field.
 */
const { __ } = wp.i18n;
import MediaPlaceholder from './../components/media-placeholder';

export default function mediaPlaceholder( props, config, attributeKey ) {
	const defaultAttributes = {
		placeholderText: __( 'Select a ' ) + config.type + __( ' file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	};
	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.className = props.className;

	fieldAttributes.setMediaAttributes = ( media ) => {
		if ( media && media.url ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.setCaption = ( caption ) => {
		if ( props.attributes[ attributeKey ] ) {
			props.attributes[ attributeKey ].mediaCaption = caption;
			props.setAttributes( attributeKey, props.attributes[ attributeKey ] );
		}
	};

	fieldAttributes.mediaData = props.attributes[ attributeKey ];

	return (
		<MediaPlaceholder { ...fieldAttributes } />
	);
}
