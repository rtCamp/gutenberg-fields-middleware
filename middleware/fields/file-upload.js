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

	const updateMedia = ( files ) => {
		const newAttributes = {};
		newAttributes[ attributeKey ] = files;

		props.setAttributes( newAttributes );
	};

	const getAllowedType = ( files ) => {
		if ( files && ! _.isEmpty( files ) && _.first( files ).type ) {
			const fileType = _.first( files ).type;
			if ( fileType ) {
				const typeParts = fileType.split( '/' );
				return _.first( typeParts ) && _.contains( fieldAttributes.allowedTypes, _.first( typeParts ) ) ? _.first( typeParts ) : '';
			}
		}
	};

	const removeFiles = ( event ) => {
		if ( config.removeFiles ) {
			config.removeFiles( event, props );
		} else {
			updateMedia( '' );
		}
	};

	const removeFile = ( event ) => {
		if ( config.removeFile ) {
			config.removeFile( event, props );
		} else {
			const key = parseInt( event.currentTarget.dataset.key, 10 );
			const newValues = props.attributes[ attributeKey ].splice( key, 1 );
			updateMedia( '' ); // To force update.
			updateMedia( newValues );
			if ( _.isEmpty( newValues ) ) {
				updateMedia( '' ); // To remove 'remove' button.
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

	const getDashIcon = ( fileName ) => {
		const fileExtension = fileName.split( '.' ).pop();

		if ( 'zip' === fileExtension ) {
			return 'dashicons-media-archive';
		} else if ( _.contains( [ 'pdf', 'epub', 'azw', 'indd' ], fileExtension ) ) {
			return 'dashicons-book';
		} else if ( _.contains( [ 'jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg' ], fileExtension ) ) {
			return 'dashicons-format-image';
		} else if ( _.contains( [ 'mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v' ], fileExtension ) ) {
			return 'dashicons-media-video';
		} else if ( _.contains( [ 'pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx' ], fileExtension ) ) {
			return 'dashicons-media-interactive';
		} else if ( _.contains( [ 'mp3', 'm4a', 'ogg', 'wav' ], fileExtension ) ) {
			return 'dashicons-media-audio';
		} else if ( _.contains( [ 'xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers' ], fileExtension ) ) {
			return 'dashicons-media-spreadsheet';
		} else if ( _.contains( [ 'doc', 'docx', 'docm', 'pages' ], fileExtension ) ) {
			return 'dashicons-media-document';
		} else if ( _.contains( [ 'txt', 'odt', 'rtf', 'log' ], fileExtension ) ) {
			return 'dashicons-media-text';
		}

		return 'dashicons-media-default';
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
							const href = file.url;
							const name = file.name;
							const dashIcon = getDashIcon( name );

							return (
								<li>
									<button className="dashicons dashicons-no-alt middleware-remove-file" data-key={ key } onClick={ removeFile } />
									<div className="middleware-field-media-thumbnail">
										<span className={ 'dashicons ' + dashIcon } />
									</div>
									<div className="middleware-file">
										<a target="_blank" href={ href }>{ name }</a>
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
