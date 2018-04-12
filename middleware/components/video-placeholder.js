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

class VideoPlaceholder extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			editing: ! this.props.videoData,
			src: this.props.videoData || '',
		};

		this.uploadFromFiles = this.uploadFromFiles.bind( this );
		this.onSelectVideo = this.onSelectVideo.bind( this );
		this.switchToEditing = this.switchToEditing.bind( this );
		this.onSelectUrl = this.onSelectUrl.bind( this );
		this.onUrlChange = this.onUrlChange.bind( this );
	}

	uploadFromFiles( event ) {
		mediaUpload( event.target.files, ( [ audio ] ) => this.onSelectVideo( audio ), 'video' );
	}

	onSelectVideo( media ) {
		if ( media && media.url ) {
			this.setState( { src: media, editing: false } );
			this.props.setVideoAttributes( media );
		}
	}

	switchToEditing() {
		this.setState( { editing: true } );
	}

	onSelectUrl( event ) {
		event.preventDefault();

		if ( this.state.src ) {
			this.setState( {
				editing: false,
			} );
			this.props.setVideoAttributes( this.state.src );
		}
	}

	onUrlChange( event ) {
		this.setState( { src: {
			url: event.target.value,
		} } );
	}

	render() {
		const {
			videoData,
			placeholderText,
			buttonText,
			className,
			isSelected,
			setCaption,
		} = this.props;

		const caption = videoData && videoData.videoCaption ? videoData.videoCaption[ 0 ] || '' : '';

		const controls = (
			<BlockControls key="controls">
				{ ! this.state.editing && (
					<Toolbar>
						<IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Edit video' ) }
							onClick={ this.switchToEditing }
							icon="edit"
						/>
					</Toolbar>
				) }
			</BlockControls>
		);

		if ( this.state.editing ) {
			return [
				controls,
				<Placeholder
					key="placeholder"
					icon="media-video"
					label={ __( 'Video' ) }
					className={ 'wp-block-video ' + className }
					instructions={ placeholderText } >
					<form onSubmit={ this.onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of video file here…' ) }
							onChange={ this.onUrlChange }
							value={ this.state.src.url || '' } />
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
						accept="video/*"
					>
						{ buttonText }
					</FormFileUpload>
					<MediaUpload
						onSelect={ this.onSelectVideo }
						type="video"
						render={ ( { open } ) => (
							<Button isLarge onClick={ open } >
								{ __( 'Add from Media Library' ) }
							</Button>
						) }
					/>
				</Placeholder>,
			];
		}

		return [
			controls,
			<figure key="video" className={ 'wp-block-video ' + className }>
				<video controls src={ this.state.src.url } />
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
