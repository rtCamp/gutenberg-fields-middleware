/**
 * image/video/audio field.
 */
const { __ } = wp.i18n;
import MediaPlaceholder from './../../components/media-placeholder';

export default function mediaUpload( props, config, attributeKey, middleware ) {
	const defaultAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), {
		placeholderText: __( 'Select a ' ) + config.type + __( ' file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	} );

	delete defaultAttributes.onChange;
	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );
	const helperFields = middleware.getHelperFields( attributeKey );

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

	return middleware.createField( config, (
		<MediaPlaceholder
			{ ...fieldAttributes }
			mediaData={ props.attributes[ attributeKey ] }
			captionField={ helperFields.caption }
		/>
	) );
}
