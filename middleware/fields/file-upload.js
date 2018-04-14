/**
 * File Upload.
 */

const { FormFileUpload } = wp.components;
const { __ } = wp.i18n;
const { mediaUpload } = wp.utils;

export default function fileUpload( props, config, attributeKey ) {
	const buttonText = config.buttonText ? config.buttonText : __( 'Upload' );
	const fileType = config.fileType ? config.fileType : 'image';

	const setMedia = ( file ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = file;
		props.setAttributes( newAttributes );
	};

	const defaultAttributes = {

		onChange( event ) {
			mediaUpload( event.target.files, setMedia, fileType );
		},

		fileType: fileType,

		accept: 'image/*',

		isLarge: true,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.buttonText;
	delete fieldAttributes.fileType;

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
