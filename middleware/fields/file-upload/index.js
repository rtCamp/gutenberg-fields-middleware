/**
 * File Upload.
 */

import FileUpload from './../../components/file-upload';
const { BaseControl } = wp.components;

const { __ } = wp.i18n;

export default function fileUpload( props, config, attributeKey ) {
	const defaultAttributes = {
		fileType: 'application',
		isLarge: true,
		buttonText: __( 'Upload' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	/**
	 * Set media when the file is uploaded.
	 *
	 * @param {Array} files Uploaded Files.
	 * @return {void}
	 */
	const setMedia = ( files ) => {
		const newAttributes = {};

		if ( ! _.isEmpty( props.attributes[ attributeKey ] ) && ! _.isEmpty( files ) && _.isArray( files ) ) {
			files = [ ...props.attributes[ attributeKey ], ...files ];
		}

		newAttributes[ attributeKey ] = files;

		props.setAttributes( newAttributes );
	};

	/**
	 * Update media when files are removed.
	 *
	 * @param {Array} files Updated files.
	 * @return {void}
	 */
	const updateMedia = ( files ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = files;

		props.setAttributes( newAttributes );
	};

	/**
	 * Remove single file.
	 *
	 * @param {Object} event Event Object.
	 * @return {void}
	 */
	const removeFile = ( event ) => {
		if ( fieldAttributes.multiple ) {
			const key = parseInt( event.currentTarget.dataset.key, 10 );
			props.attributes[ attributeKey ].splice( key, 1 );
			updateMedia( [] ); // To force update.
			updateMedia( props.attributes[ attributeKey ] );
		} else {
			updateMedia( '' );
		}
	};

	fieldAttributes.type = fieldAttributes.fileType;

	const fileUploadComponent = (
		<FileUpload
			config={ config }
			fieldAttributes={ fieldAttributes }
			setMedia={ setMedia }
			value={ props.attributes[ attributeKey ] }
			removeFile={ removeFile }
		/>
	);

	if ( 'inspector' === config.placement ) {
		delete fieldAttributes.placement;
		return (
			<BaseControl
				label={ fieldAttributes.label }
				help={ fieldAttributes.help }
				className={ fieldAttributes.className }
			>
				{ fileUploadComponent }
			</BaseControl>
		);
	}

	return fileUploadComponent;
}
