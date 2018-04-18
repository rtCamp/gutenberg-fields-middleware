/**
 * Video/Audio field.
 */
const { __ } = wp.i18n;
import ImagePlaceholder from '../../components/image-placeholder';

export default function mediaUpload( props, config, attributeKey ) {
	const defaultAttributes = {
		placeholderText: __( 'Select a image file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	};
	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.className = props.className;

	fieldAttributes.removeMediaAttributes = () => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = '';
		props.setAttributes( newAttributes );
	};

	fieldAttributes.setMediaAttributes = ( media ) => {
		if ( media && media.url ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.setCaption = ( caption ) => {
		const attributeValue = _.extend( {}, props.attributes[ attributeKey ] );
		if ( attributeValue ) {
			const newAttributes = {};
			attributeValue.mediaCaption = caption;
			newAttributes[ attributeKey ] = attributeValue;
			props.setAttributes( newAttributes );
		}
	};

	fieldAttributes.mediaData = props.attributes[ attributeKey ];

	return (
		<ImagePlaceholder{ ...fieldAttributes } />
	);
}
