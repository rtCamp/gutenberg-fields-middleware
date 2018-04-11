/**
 * @TODO: Add Description here.
 */
const { __ } = wp.i18n;
import VideoPlaceholder from './../components/video-placeholder';

export default function videoPlaceholder( props, config, attributeKey ) {

	const buttonText = config.buttonText ? config.buttonText : __( 'Open Media Library' );
	const defaultAttributes = {

		icon: 'media-video',

		label: __( 'Video' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.videoData = props.attributes[attributeKey];

	fieldAttributes.setVideoAttributes = ( src ) => {
		if ( src ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = src;
			props.setAttributes( newAttributes );
		}
	};

	return (
			<VideoPlaceholder 
				{ ...fieldAttributes }
			/>
	);
}
