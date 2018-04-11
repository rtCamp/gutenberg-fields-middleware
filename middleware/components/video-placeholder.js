const { Component } = wp.element;
const { __ } = wp.i18n;

const {
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

	constructor( props ) {
		super( ...arguments );

		this.state = {
			editing: ( this.props.videoData ) ? false : true,
			src: ( this.props.videoData ) ? this.props.videoData : '',
		};
	}

	render() {
		const switchToEditing = () => {
			this.setState( { editing: true } );
		};

		const onSelectVideo = ( media ) => {
			if ( media && media.url ) {
				this.setState( { src: media.url, editing: false } );
				this.props.setVideoAttributes( media.url );
			}
		};
		const onSelectUrl = ( event ) => {
			event.preventDefault();
			if ( src ) {
				// set the block's src from the edit component's state, and switch off the editing UI
				this.setState( { editing: false } );
				this.props.setVideoAttributes( src );
			}
			return false;
		};

		const setVideo = ( [ audio ] ) => onSelectVideo( audio );
		const uploadFromFiles = ( event ) => mediaUpload( event.target.files, setVideo, 'video' );
		const { editing, src } = this.state;
		const controls = (
			<BlockControls key="controls">
				{ ! editing && (
					<Toolbar>
						<IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Edit video' ) }
							onClick={ switchToEditing }
							icon="edit"
						/>
					</Toolbar>
				) }
			</BlockControls>
		);
		if ( editing ) {
			return [
		        controls,
				<Placeholder
					key="placeholder"
					icon="media-video"
					label={ __( 'Video' ) }
					instructions={ __( 'Select a video file from your library, or upload a new one' ) } >
					<form onSubmit={ onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of video file here…' ) }
							onChange={ event => this.setState( { src: event.target.value } ) }
							value={ src || '' } />
						<Button
							isLarge
							type="submit">
							{ __( 'Use URL' ) }
						</Button>
					</form>
					<FormFileUpload
						isLarge
						className="wp-block-video__upload-button"
						onChange={ uploadFromFiles }
						accept="video/*"
					>
						{ __( 'Upload' ) }
					</FormFileUpload>
					<MediaUpload
						onSelect={ onSelectVideo }
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

		return[
			controls,
			<figure key="video" className={ this.props.className }>
				<video controls src={ src } />
			</figure>,
		];
	}
}

export default VideoPlaceholder;
