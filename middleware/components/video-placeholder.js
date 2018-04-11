const { Component } = wp.element;
const { __ } = wp.i18n;
const { RichText, MediaUpload, BlockControls, } = wp.blocks;
const { Placeholder, FormFileUpload, Button, Toolbar, IconButton, } = wp.components;
const { mediaUpload } = wp.utils;

class VideoPlaceholder extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			editing: ! this.props.videoData,
			src: this.props.videoData || '',
		};
	}

	render() {
		const setVideo = ( [ audio ] ) => onSelectVideo( audio );
		const uploadFromFiles = ( event ) => mediaUpload( event.target.files, setVideo, 'video' );
		const { editing, src } = this.state;
		const { videoData, placeholderText, buttonText, className, isSelected, setVideoAttributes, setCaption } = this.props;

		const switchToEditing = () => {
			this.setState( { editing: true } );
		};

		const onSelectVideo = ( media ) => {
			if ( media && media.url ) {
				this.setState( { src: media, editing: false } );
				setVideoAttributes( media );
			}
		};

		const onSelectUrl = ( event ) => {
			event.preventDefault();
			if ( src ) {
				this.setState( { editing: false } );
				setVideoAttributes( src );
			}
			return false;
		};

		const ontUrlChange = ( event ) => {
			this.setState( { src: {
				url: event.target.value,
			} } );
		};

		const caption = () => {
			if ( videoData && videoData.videoCaption ) {
				return videoData.videoCaption[0] || '';
			}
		}

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
					className={ className }
					instructions={ placeholderText } >
					<form onSubmit={ onSelectUrl }>
						<input
							type="url"
							className="components-placeholder__input"
							placeholder={ __( 'Enter URL of video file here…' ) }
							onChange={ ontUrlChange }
							value={ src.url || '' } />
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
						{ buttonText }
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

		return [
			controls,
			<figure key="video" className={ className }>
				<video controls src={ src.url } />
				{ isSelected && (
					<RichText
						tagName="figcaption"
						placeholder={ __( 'Write caption…' ) }
						value={ caption() }
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
