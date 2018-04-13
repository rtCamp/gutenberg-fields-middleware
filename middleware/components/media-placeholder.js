const { Component } = wp.element;
const { __ } = wp.i18n;

const {
	RichText,
	MediaUpload,
	BlockControls,
} = wp.blocks;

const {
	Placeholder,
	FormFileUpload,
	Button,
	Toolbar,
	IconButton,
} = wp.components;

const { mediaUpload } = wp.utils;

/**
 * MediaPlaceholder component class.
 */
class MediaPlaceholder extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			editing: ! this.props.mediaData,
			mediaData: this.props.mediaData || '',
		};

		this.uploadFromFiles = this.uploadFromFiles.bind( this );
		this.onSelectMedia = this.onSelectMedia.bind( this );
		this.switchToEditing = this.switchToEditing.bind( this );
		this.onSelectUrl = this.onSelectUrl.bind( this );
		this.onUrlChange = this.onUrlChange.bind( this );
	}

	/**
	 * Upload from file.
	 *
	 * @param {Object} event Event.
	 *
	 * @return {void}
	 */
	uploadFromFiles( event ) {
		mediaUpload( event.target.files, ( [ media ] ) => this.onSelectMedia( media ), this.props.type );
	}

	/**
	 * Callback method when media is selected.
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

		if ( this.state.mediaData ) {
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
			type,
			mediaData,
			placeholderText,
			buttonText,
			className,
			isSelected,
			setCaption,
		} = this.props;

		const caption = mediaData && mediaData.mediaCaption ? mediaData.mediaCaption[ 0 ] || '' : '';
		let mediaEle = '';

		const controls = (
			! this.state.editing && isSelected && (
				<BlockControls key="controls">
					<Toolbar>
						<IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Edit ' ) + type }
							onClick={ this.switchToEditing }
							icon="edit"
						/>
					</Toolbar>
				</BlockControls>
			)
		);

		if ( this.state.editing ) {
			const mediaIcon = 'media-' + type;

			return [
				controls,
				<Placeholder
					key="placeholder"
					icon={ mediaIcon }
					label={ type }
					className={ className + ' wp-block-' + type }
					instructions={ placeholderText } >
					<form onSubmit={ this.onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of ' ) + type + __( ' file here…' ) }
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
						accept={ type }
					>
						{ buttonText }
					</FormFileUpload>
					<MediaUpload
						onSelect={ this.onSelectMedia }
						type={ type }
						render={ ( { open } ) => (
							<Button isLarge onClick={ open } >
								{ __( 'Add from Media Library' ) }
							</Button>
						) }
					/>
				</Placeholder>,
			];
		}

		if ( 'video' === type ) {
			mediaEle = ( <video controls src={ this.state.mediaData.url }></video> );
		} else if ( 'audio' === type ) {
			mediaEle = ( <audio controls src={ this.state.mediaData.url }></audio> );
		}

		return [
			controls,
			<figure key={ type } className={ className + ' wp-block-' + type }>
				{ mediaEle }
				{ isSelected && (
					<RichText
						tagName="figcaption"
						placeholder={ __( 'Write caption…' ) }
						value={ caption }
						isSelected={ isSelected }
						onChange={ setCaption }
						inlineToolbar
					/>
				) }
			</figure>,
		];
	}
}

export default MediaPlaceholder;
