const { Component } = wp.element;
const { Button, Dashicon } = wp.components;
const { MediaUpload } = wp.blocks;

import FileThumb from './file-thumb';
import './editor.scss';

class FileUpload extends Component {
	render() {
		let fieldWrapperClasses = 'file-upload-field';
		fieldWrapperClasses += 'inspector' !== this.props.config.placement ? ' block-field' : ' inspector-field';

		return (
			<div className={ fieldWrapperClasses } >
				<div className="file-upload-filed-actions">
					<MediaUpload
						{ ...this.props.fieldAttributes }
						onSelect={ this.props.setMedia }
						render={ ( { open } ) => {
							if ( _.isEmpty( this.props.value ) ) {
								return (
									<Button isLarge={ this.props.fieldAttributes.isLarge } onClick={ open } >
										<Dashicon icon="upload" />
										{ this.props.fieldAttributes.buttonText }
									</Button>
								);
							}
							return null;
						} }
					/>
				</div>

				{ ! _.isEmpty( this.props.value ) && (
					<ul className="file-upload-field-files" >
						{ _.isArray( this.props.value ) && this.props.value.map( ( file, key ) => {
							return <FileThumb file={ file } key={ key } dataKey={ key } removeFile={ this.props.removeFile } />;
						} ) }
						{ ! _.isArray( this.props.value ) && (
							<FileThumb file={ this.props.value } key={ 0 } removeFile={ this.props.removeFile } />
						) }
					</ul>
				) }
			</div>
		);
	}
}

export default FileUpload;
