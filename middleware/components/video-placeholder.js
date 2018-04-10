const { Component } = wp.element;
const { __ } = wp.i18n;

const {
	ImagePlaceholder,
	MediaUpload,
} = wp.blocks;

const {
	Placeholder,
	FormFileUpload,
	Button,
} = wp.components;

const { mediaUpload } = wp.utils;


class VideoPlaceholder extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const onSelectVideo = ( media ) => {
			if ( media && media.url ) {
				this.setState( { src: media.url, editing: false } );
				this.props.abcd( media );
			}
		};

		const setVideo = ( [ audio ] ) => onSelectVideo( audio );
		const uploadFromFiles = ( event ) => mediaUpload( event.target.files, setVideo, 'video' );

		return (
			<Placeholder
				key="placeholder"
				icon="media-video"
				label={ __( 'Video' ) }
				instructions={ __( 'Select a video file from your library, or upload a new one' ) } >
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
			</Placeholder>
		);
	}
}

export default VideoPlaceholder;
