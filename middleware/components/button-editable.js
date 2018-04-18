const { Component } = wp.element;
const { RichText } = wp.blocks;
const { Dashicon, IconButton } = wp.components;
const { __ } = wp.i18n;

class ButtonEditable extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			displayForm: true,
		};

		this.onFocus = this.onFocus.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	onFocus() {
		this.setState( {
			displayForm: true,
		} );
	}

	onSubmit( event ) {
		event.preventDefault();
		this.setState( {
			displayForm: false,
		} );
	}

	render() {
		const link = this.props.linkField;
		const form = this.props.isSelected && this.state.displayForm && (
			<form
				key="form-link"
				className="blocks-button__inline-link"
				onSubmit={ this.onSubmit }>
				<Dashicon icon="admin-links" />
				{ link }
				<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
			</form>
		);

		return (
			<div className="button-editable">
				<span className="wp-block-button" key="button">
					<RichText
						onFocus={ this.onFocus }
						onClick={ this.onFocus } // Hack.
						{ ...this.props }
					/>
				</span>
				{ form }
			</div>
		);
	}
}

export default ButtonEditable;
