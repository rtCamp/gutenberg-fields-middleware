/**
 * File Upload.
 * @todo Create a component for file upload.
 */

const { FormFileUpload, Button } = wp.components;
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

	const removeFiles = ( event ) => {
		if ( config.removeFiles ) {
			config.removeFiles( event, props );
		} else {
			setMedia( '' );
		}
	};

	const removeFile = ( event ) => {
		if ( config.removeFile ) {
			config.removeFile( event, props );
		} else {
			const key = event.currentTarget.dataset.key;
			props.attributes[ attributeKey ].splice( key, 1 );
			setMedia( '' ); // To force update.
			setMedia( props.attributes[ attributeKey ] );
			if ( _.isEmpty( props.attributes[ attributeKey ] ) ) {
				setMedia( '' ); // To remove 'remove' button.
			}
		}
	};

	// @todo Needs more work.
	const getDashIcon = ( fileName ) => {
		const fileExtenstion = fileName.split( '.' ).pop();

		if ( 'zip' === fileExtenstion ) {
			return 'dashicons-media-archive';
		} else if ( 'pdf' === fileExtenstion ) {
			return 'dashicons-media-document';
		} else if ( 'jpg' === fileExtenstion ) {
			return 'dashicons-format-image';
		} else if ( 'mp4' === fileExtenstion ) {
			return 'dashicons-media-video';
		}

		return 'dashicons-media-default';
	};

	let fieldWrapperClasses = 'file-upload-field';
	fieldWrapperClasses += 'inspector' !== config.placement ? ' block-field' : '';

	delete fieldAttributes.buttonText;

	return (
		<div className={ fieldWrapperClasses }>
			<div className="file-upload-filed-actions">
				<FormFileUpload
					{ ...fieldAttributes }
				>
					{ buttonText }
				</FormFileUpload>

				{ props.attributes[ attributeKey ] && (
					<Button isLarge onClick={ removeFiles } >
						{ __( 'Remove' ) }
					</Button>
				) }
			</div>

			{ props.attributes[ attributeKey ] && (
				<ul className="file-upload-field-files">
					{ props.attributes[ attributeKey ].map( ( file, key ) => {
						if ( file.id ) {
							const href = file.url;
							const name = href.substring( href.lastIndexOf( '/' ) + 1 );
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
