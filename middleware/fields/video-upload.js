/**
 * Video field.
 */
const { __ } = wp.i18n;
import VideoPlaceholder from './../components/video-placeholder';

export default function videoPlaceholder( props, config, attributeKey ) {
	const defaultAttributes = {
		placeholderText: __( 'Select a video file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.setVideoAttributes = ( media ) => {
		if ( media && media.url ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.setCaption = ( caption ) => {
		if ( props.attributes[ attributeKey ] ) {
			props.attributes[ attributeKey ].videoCaption = caption;
			props.setAttributes( attributeKey, props.attributes[ attributeKey ] );
		}
	};

	fieldAttributes.videoData = props.attributes[ attributeKey ];

	// delete fieldAttributes.type;

	return (
		<VideoPlaceholder { ...fieldAttributes } />
	);
}
