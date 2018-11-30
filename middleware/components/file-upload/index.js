const { Component } = wp.element;
const { Button, Dashicon } = wp.components;
const { MediaUpload } = wp.editor;

import FileThumb from './file-thumb';
import './editor.scss';

class FileUpload extends Component {
	render() {
		const {
			config,
			value,
			fieldAttributes,
			removeFile,
		} = this.props;

		let fieldWrapperClasses = 'file-upload-field';
		fieldWrapperClasses += 'inspector' !== config.placement ? ' block-field' : ' inspector-field';

		const mediaUploadProps = _.extend( {
			render( { open } ) {
				if ( _.isEmpty( value ) ) {
					return (
						<Button isLarge={ fieldAttributes.isLarge } onClick={ open } >
							<Dashicon icon="upload" />
							{ fieldAttributes.buttonText }
						</Button>
					);
				}
				return null;
			},
		}, fieldAttributes );

		return (
			<div className={ fieldWrapperClasses } >
				<div className="file-upload-filed-actions">
					<MediaUpload
						{ ...mediaUploadProps }
					/>
				</div>

				{ ! _.isEmpty( value ) && (
					<ul className="file-upload-field-files" >
						{ _.isArray( value ) && value.map( ( file, key ) => {
							return <FileThumb file={ file } key={ key } dataKey={ key } removeFile={ removeFile } />;
						} ) }
						{ ! _.isArray( value ) && (
							<FileThumb file={ value } key={ 0 } removeFile={ removeFile } />
						) }
					</ul>
				) }
			</div>
		);
	}
}

export default FileUpload;
