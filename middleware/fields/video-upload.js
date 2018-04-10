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

	fieldAttributes.abcd = ( media ) => {

		if ( media && media.url ) {
			props.setAttributes( { src: media.url, id: media.id } );
		}
	};

	return (
			<VideoPlaceholder 
				{ ...fieldAttributes }
			/>
	);
}
