/**
 * image/video/audio field.
 */
const { __ } = wp.i18n;
import MediaPlaceholder from './../../components/media-placeholder';
import select from './../select';

export default function mediaUpload( props, config, attributeKey, middleware ) {
	const defaultAttributes = {
		placeholderText: __( 'Select a ' ) + config.type + __( ' file from your library, or upload a new one' ),
		buttonText: __( 'Upload' ),
		isSelected: props.isSelected,
	};
	const fieldAttributes = _.extend( defaultAttributes, config );
	const helperFields = middleware.getHelperFields( attributeKey );
	const sizesAttributeKey = config.helperFields ? config.helperFields.sizes : '';

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

	const pushSizesField = ( sizes ) => {
		if ( sizesAttributeKey && ! _.isEmpty( sizes ) ) {
			const sizesOptions = _.keys( sizes ).map( ( size ) => {
				return {
					value: size,
					label: size,
				};
			} );

			if ( ! middleware.inspectorControlFields[ sizesAttributeKey ].props.options ) {
				const newAttributes = {};
				middleware.inspectorControlFields[ sizesAttributeKey ].props.options = sizesOptions;
				newAttributes[ sizesAttributeKey ] = '';
				props.setAttributes( newAttributes );
			}
		}
	};

	return (
		<MediaPlaceholder
			{ ...fieldAttributes }
			mediaData={ props.attributes[ attributeKey ] }
			captionField={ helperFields.caption }
			pushSizesField={ pushSizesField }
		/>
	);
}
