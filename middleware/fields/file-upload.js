/**
 * File Upload.
 */

const { FormFileUpload } = wp.components;
const { __ } = wp.i18n;
const { mediaUpload } = wp.utils;

export default function fileUpload( props, config, attributeKey ) {
	const buttonText = config.buttonText ? config.buttonText : __( 'Upload' );

	const setMedia = ( file ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = file;
		props.setAttributes( newAttributes );
	};

	const defaultAttributes = {
		accept: '*',
		allowedTypes: [ 'image', 'video', 'audio', 'text', 'message', 'application' ],
		isLarge: true,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	const getAllowedType = ( files ) => {
		if ( files && _.first( files ) && _.first( files ).type ) {
			const fileType = _.first( files ).type;
			if ( fileType ) {
				const typeParts = fileType.split( '/' );
				return _.first( typeParts ) && _.contains( fieldAttributes.allowedTypes, _.first( typeParts ) ) ? _.first( typeParts ) : '';
			}
		}
	};

	fieldAttributes.onChange = ( event ) => {
		if ( config.onChange ) {
			config.onChange( event, props );
		} else {
			mediaUpload( event.target.files, setMedia, getAllowedType( event.target.files ) );
		}
	};

	delete fieldAttributes.buttonText;

	return (
		<div>
			<FormFileUpload
				{ ...fieldAttributes }
			>
				{ buttonText }
			</FormFileUpload>

			{ props.attributes[ attributeKey ] && props.attributes[ attributeKey ].map( ( file ) => {
				if ( file.id ) {
					const href = file.url;
					const name = href.substring( href.lastIndexOf( '/' ) + 1 );

					return (
						<a target="_blank" href={ href }>{ name }</a>
					);
				}
			} ) }
		</div>
	);
}
