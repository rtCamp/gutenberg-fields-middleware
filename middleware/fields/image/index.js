/**
 * Video/Audio field.
 */
const { __ } = wp.i18n;
import ImagePlaceholder from '../../components/image-placeholder';

export default function mediaUpload( props, config, attributeKey, middleware ) {
	const defaultAttributes = {
		placeholderText: __( 'Select a image file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	};
	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.className = props.className;
	const helperFields = middleware.getHelperFields( attributeKey );

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

	fieldAttributes.mediaData = props.attributes[ attributeKey ];

	return (
		<ImagePlaceholder
			{ ...fieldAttributes }
			captionField={ helperFields.caption }
		/>
	);
}
