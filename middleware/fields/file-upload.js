/**
 * File Upload.
 */

const { FormFileUpload } = wp.components;
const { __ } = wp.i18n;

export default function fileUpload( props, config, attributeKey ) {
	const buttonText = config.buttonText ? config.buttonText : __( 'Open Media Library' );

	const defaultAttributes = {

		onSelect( file ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = file;
			props.setAttributes( newAttributes );
		}
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
