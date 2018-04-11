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

		accept: "image/*",

		isLarge: true,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.buttonText;

	return (
		<FormFileUpload
			{ ...fieldAttributes }
		>
			{ buttonText }
		</FormFileUpload>
	);
}
