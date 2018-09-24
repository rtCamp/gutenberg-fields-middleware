const { Component } = wp.element;
const { RichText } = wp.editor;
const { Dashicon, IconButton } = wp.components;
const { __ } = wp.i18n;

import './editor.scss';

class ButtonEditable extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			displayForm: true,
		};

		this.onClick = this.onClick.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	onClick() {
		this.setState( {
			displayForm: true,
		} );

		this.props.setEditable();
	}

	onSubmit( event ) {
		event.preventDefault();
		this.setState( {
			displayForm: false,
		} );
	}

	render() {
		const link = this.props.linkField;

		const buttonClass = this.props.buttonClass ? ' ' + this.props.buttonClass : '';

		const form = link && this.props.isSelected && this.state.displayForm && (
			<form
				key="form-link"
				className="block-library-button__inline-link"
				onSubmit={ this.onSubmit }>
				<Dashicon icon="admin-links" />
				{ link }
				<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
			</form>
		);

		return (
			<div className="button-editable middleware-button-editable">
				<span className="wp-block-button" key="button" onClick={ this.onClick }>
					<RichText
						className={ this.props.className + buttonClass }
						style={ {
							backgroundColor: this.props.backgroundColor,
							color: this.props.textColor
						} }
						{ ...this.props }
					/>
				</span>
				{ form }
			</div>
		);
	}
}

export default ButtonEditable;
