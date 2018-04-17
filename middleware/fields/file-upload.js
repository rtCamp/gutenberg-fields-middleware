/**
 * File Upload.
 */

const { FormFileUpload, Button } = wp.components;
const { __ } = wp.i18n;
const { mediaUpload } = wp.utils;

export default function fileUpload( props, config, attributeKey ) {
	const buttonText = config.buttonText ? config.buttonText : __( 'Upload' );

	const defaultAttributes = {
		accept: '*',
		allowedTypes: [ 'image', 'video', 'audio', 'text', 'message', 'application' ],
		isLarge: true,
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

		if ( ! _.isEmpty( props.attributes[ attributeKey ] ) && ! _.isEmpty( files ) ) {
			files = [ ...props.attributes[ attributeKey ], ...files ];
		}

		if ( ! _.isEmpty( files ) ) {
			files = files.map( ( file ) => {
				file.name = file.url ? file.url.substring( file.url.lastIndexOf( '/' ) + 1 ) : '';
				return file;
			} );
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
	 * Get allowed file type with file name.
	 *
	 * @param {String} fileName File url.
	 * @return {String} Allowed file type.
	 */
	const getAllowedType = ( fileName ) => {
		if ( fileName && ! _.isEmpty( fileName ) && _.first( fileName ).type ) {
			const fileType = _.first( fileName ).type;
			if ( fileType ) {
				const typeParts = fileType.split( '/' );
				return _.first( typeParts ) && _.contains( fieldAttributes.allowedTypes, _.first( typeParts ) ) ? _.first( typeParts ) : '';
			}
		}
	};

	/**
	 * Remove files.
	 *
	 * @param {Object} event Event Object.
	 * @return {void}
	 */
	const removeFiles = ( event ) => {
		if ( config.removeFiles ) {
			config.removeFiles( event, props );
		} else {
			updateMedia( [] );
		}
	};

	/**
	 * Remove single file.
	 *
	 * @param {Object} event Event Object.
	 * @return {void}
	 */
	const removeFile = ( event ) => {
		if ( config.removeFile ) {
			config.removeFile( event, props );
		} else {
			const key = parseInt( event.currentTarget.dataset.key, 10 );
			props.attributes[ attributeKey ].splice( key, 1 );
			updateMedia( [] ); // To force update.
			updateMedia( props.attributes[ attributeKey ] );
			if ( _.isEmpty( props.attributes[ attributeKey ] ) ) {
				updateMedia( [] ); // To remove 'remove' button.
			}
		}
	};

	/**
	 * Get dash icon for the given file name.
	 *
	 * @param {String} fileName File name.
	 * @return {String} Dash Icon class.
	 */
	const getDashIcon = ( fileName ) => {
		const fileExtension = fileName.split( '.' ).pop();
		let dashiconSuffix = 'media-default';

		if ( 'zip' === fileExtension ) {
			dashiconSuffix = 'media-archive';
		} else if ( _.contains( [ 'pdf', 'epub', 'azw', 'indd' ], fileExtension ) ) {
			dashiconSuffix = 'book';
		} else if ( _.contains( [ 'jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg' ], fileExtension ) ) {
			dashiconSuffix = 'format-image';
		} else if ( _.contains( [ 'mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v' ], fileExtension ) ) {
			dashiconSuffix = 'media-video';
		} else if ( _.contains( [ 'pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx' ], fileExtension ) ) {
			dashiconSuffix = 'media-interactive';
		} else if ( _.contains( [ 'mp3', 'm4a', 'ogg', 'wav' ], fileExtension ) ) {
			dashiconSuffix = 'media-audio';
		} else if ( _.contains( [ 'xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers' ], fileExtension ) ) {
			dashiconSuffix = 'media-spreadsheet';
		} else if ( _.contains( [ 'doc', 'docx', 'docm', 'pages' ], fileExtension ) ) {
			dashiconSuffix = 'media-document';
		} else if ( _.contains( [ 'txt', 'odt', 'rtf', 'log' ], fileExtension ) ) {
			dashiconSuffix = 'media-text';
		}

		return 'dashicons-' + dashiconSuffix;
	};

	/**
	 * Handles when the file is uploaded.
	 *
	 * @param {Object} event Event object.
	 * @return {void}
	 */
	fieldAttributes.onChange = ( event ) => {
		if ( config.onChange ) {
			config.onChange( event, props, setMedia, getAllowedType );
		} else {
			mediaUpload( event.target.files, setMedia, getAllowedType( event.target.files ) );
		}
	};

	let fieldWrapperClasses = 'file-upload-field';
	fieldWrapperClasses += 'inspector' !== config.placement ? ' block-field' : ' inspector-field';

	delete fieldAttributes.buttonText;

	return (
		<div className={ fieldWrapperClasses }>
			<div className="file-upload-filed-actions">
				<FormFileUpload
					{ ...fieldAttributes }
				>
					{ buttonText }
				</FormFileUpload>

				{ ! _.isEmpty( props.attributes[ attributeKey ] ) && (
					<Button isLarge onClick={ removeFiles } >
						{ __( 'Remove' ) }
					</Button>
				) }
			</div>

			{ props.attributes[ attributeKey ] && ! _.isEmpty( props.attributes[ attributeKey ] ) && (
				<ul className="file-upload-field-files">
					{ props.attributes[ attributeKey ].map( ( file, key ) => {
						if ( file.id && file.name ) {
							const dashIcon = getDashIcon( file.name );

							return (
								<li>
									<button className="dashicons dashicons-no-alt middleware-remove-file" data-key={ key } onClick={ removeFile } />
									<div className="middleware-field-media-thumbnail">
										<span className={ 'dashicons ' + dashIcon } />
									</div>
									<div className="middleware-file">
										<a target="_blank" href={ file.url }>{ file.name }</a>
									</div>
								</li>
							);
						}
					} ) }
				</ul>
			) }
		</div>
	);
}
