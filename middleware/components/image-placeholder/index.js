import './editor.scss';

const { Component } = wp.element;
const { __ } = wp.i18n;

const {
	PlainText,
	MediaUpload,
} = wp.blocks;

const {
	Placeholder,
	FormFileUpload,
	Button,
	Toolbar,
	IconButton,
	DropZone,
} = wp.components;

const { mediaUpload } = wp.utils;

/**
 * ImagePlaceholder component class.
 */
class ImagePlaceholder extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			editing: ! ( this.props.mediaData && this.props.mediaData.url ),
			mediaData: this.props.mediaData || '',
		};

		this.uploadFromFiles = this.uploadFromFiles.bind( this );
		this.onSelectMedia = this.onSelectMedia.bind( this );
		this.switchToEditing = this.switchToEditing.bind( this );
		this.onSelectUrl = this.onSelectUrl.bind( this );
		this.onUrlChange = this.onUrlChange.bind( this );
		this.onFilesDrop = this.onFilesDrop.bind( this );
	}

	/**
	 * Upload from file.
	 *
	 * @param {Object} event Event.
	 *
	 * @return {void}
	 */
	uploadFromFiles( event ) {
		mediaUpload( event.target.files, ( [ media ] ) => this.onSelectMedia( media ), 'image' );
	}

	/**
	 * Dropping a file into the DropZone.
	 *
	 * @param {Array} files dropped file.
	 *
	 * @return {void}
	 */
	onFilesDrop( files ) {
		mediaUpload( files, ( [ media ] ) => this.onSelectMedia( media ), 'image' );
	}

	/**
	 * Callback method when image is selected.
	 *
	 * @param {Object} media Media.
	 *
	 * @return {void}
	 */
	onSelectMedia( media ) {
		if ( media && media.url ) {
			this.setState( { mediaData: media, editing: false } );
			this.props.setMediaAttributes( media );
		}
	}

	/**
	 * Set editing state to true.
	 *
	 * @return {void}
	 */
	switchToEditing() {
		this.setState( { editing: true } );
		this.props.removeMediaAttributes();
	}

	/**
	 * Handles when url is selected.
	 *
	 * @param {Object} event Event
	 *
	 * @return {void}
	 */
	onSelectUrl( event ) {
		event.preventDefault();

		if ( this.state.mediaData && this.state.mediaData.url ) {
			this.setState( {
				editing: false,
			} );
			this.props.setMediaAttributes( this.state.mediaData );
		}
	}

	/**
	 * Callback method when url changes.
	 *
	 * @param {Object} event Event.
	 *
	 * @return {void}
	 */
	onUrlChange( event ) {
		this.setState( { mediaData: {
			url: event.target.value,
		} } );
	}

	render() {
		const {
			caption,
			mediaData,
			placeholderText,
			buttonText,
			className,
			isSelected,
			setCaption,
		} = this.props;

		const mediaCaption = mediaData && mediaData.mediaCaption ? mediaData.mediaCaption || '' : '';

		const controls = (
			this.props.isSelected && (
				<Toolbar key="image">
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Edit image' ) }
						onClick={ this.switchToEditing }
						icon="edit"
					/>
				</Toolbar>
			)
		);

		if ( this.state.editing ) {
			const mediaIcon = 'format-image';

			return (
				<Placeholder
					key="placeholder"
					icon={ mediaIcon }
					label="image"
					className={ 'wp-middleware-block-image ' + className }
					instructions={ placeholderText } >
					<DropZone onFilesDrop={ this.onFilesDrop } />
					<form onSubmit={ this.onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of image file here…' ) }
							onChange={ this.onUrlChange }
							value={ this.state.mediaData.url || '' } />
						<Button
							isLarge
							type="submit">
							{ __( 'Use URL' ) }
						</Button>
					</form>
					<FormFileUpload
						isLarge
						className="wp-block-video__upload-button"
						onChange={ this.uploadFromFiles }
						accept={ 'image/*' }
					>
						{ buttonText }
					</FormFileUpload>
					<MediaUpload
						onSelect={ this.onSelectMedia }
						type="image"
						render={ ( { open } ) => (
							<Button isLarge onClick={ open } >
								{ __( 'Add from Media Library' ) }
							</Button>
						) }
					/>
				</Placeholder>
			);
		}

		return (
			<div className="middleware-media-field">
				{ controls }
				{
					<figure key="image" className={ 'wp-middleware-block-image ' + className }>
						<img src={ this.state.mediaData.url } alt={ this.state.mediaData.title || '' } />
						{ isSelected && caption && (
							<PlainText
								placeholder={ __( 'Write caption…' ) }
								value={ mediaCaption }
								isSelected={ isSelected }
								onChange={ setCaption }
							/>
						) }
					</figure>
				}
			</div>
		);
	}
}

export default ImagePlaceholder;
