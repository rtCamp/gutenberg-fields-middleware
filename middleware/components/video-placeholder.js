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
 * VideoPlaceholder component class.
 */
class VideoPlaceholder extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			editing: ! this.props.videoData,
			videoData: this.props.videoData || '',
		};

		this.uploadFromFiles = this.uploadFromFiles.bind( this );
		this.onSelectVideo = this.onSelectVideo.bind( this );
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
		mediaUpload( event.target.files, ( [ media ] ) => this.onSelectVideo( media ), this.props.type );
	}

	/**
	 * Callback method when video is selected.
	 *
	 * @param {Object} media Media.
	 *
	 * @return {void}
	 */
	onSelectVideo( media ) {
		if ( media && media.url ) {
			this.setState( { videoData: media, editing: false } );
			this.props.setVideoAttributes( media );
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

		if ( this.state.videoData ) {
			this.setState( {
				editing: false,
			} );
			this.props.setVideoAttributes( this.state.videoData );
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
		this.setState( { videoData: {
			url: event.target.value,
		} } );
	}

	render() {
		const {
			type,
			videoData,
			placeholderText,
			buttonText,
			className,
			isSelected,
			setCaption,
		} = this.props;

		const caption = videoData && videoData.videoCaption ? videoData.videoCaption[ 0 ] || '' : '';
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
			return [
				controls,
				<Placeholder
					key="placeholder"
					icon="media-video"
					label={ type }
					className={ 'wp-block-video ' + className }
					instructions={ placeholderText } >
					<form onSubmit={ this.onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of ') + type + __( ' file here…' ) }
							onChange={ this.onUrlChange }
							value={ this.state.videoData.url || '' } />
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
						onSelect={ this.onSelectVideo }
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
			mediaEle = ( <video controls src={ this.state.videoData.url }></video> );
		} else if ( 'audio' === type ) {
			mediaEle = ( <audio controls src={ this.state.videoData.url }></audio> );
		}

		return [
			controls,
			<figure key="video" className={ 'wp-block-video ' + className }>
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

export default VideoPlaceholder;
