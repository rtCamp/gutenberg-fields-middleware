/**
 * File Upload.
 */

import FileUpload from './../../components/file-upload';

const { __ } = wp.i18n;

export default function fileUpload( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		fileType: 'application',
		isLarge: true,
		buttonText: __( 'Upload' ),
	} );

	delete defaultAttributes.onChange;
	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onSelect = ( files ) => {
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

	return middleware.createField( fieldAttributes, (
		<FileUpload
			config={ config }
			fieldAttributes={ fieldAttributes }
			value={ props.attributes[ attributeKey ] }
			removeFile={ removeFile }
		/>
	) );
}
