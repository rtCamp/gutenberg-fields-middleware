import { getDashIconSuffix } from './../../utils';

const { Component } = wp.element;

class FileThumb extends Component {
	render() {
		if ( _.isEmpty( this.props.file ) || ! this.props.file.id ) {
			return null;
		}

		const dashIcon = 'dashicons dashicons-' + getDashIconSuffix( this.props.file.subtype );

		return (
			<li>
				<button className="dashicons dashicons-no-alt middleware-remove-file" data-key={ this.props.dataKey } onClick={ this.props.removeFile } />
				<div className="middleware-field-media-thumbnail">
					<span className={ dashIcon } />
				</div>
				<div className="middleware-file">
					<a target="_blank" href={ this.props.file.url }>{ this.props.file.filename }</a>
				</div>
			</li>
		);
	}
}

export default FileThumb;
