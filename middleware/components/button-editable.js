const { Component } = wp.element;
const { RichText, UrlInput } = wp.blocks;
const { Dashicon, IconButton } = wp.components;
const { __ } = wp.i18n;

class ButtonEditable extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			displayForm: false,
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
		const form = this.state.displayForm && (
			<form
				key="form-link"
				className="blocks-button__inline-link"
				onSubmit={ this.onSubmit }>
				<Dashicon icon="admin-links" />
				<UrlInput
					value={ this.props.inputValue }
					onChange={ this.props.fieldAttributes.onInputChange }
				/>
				<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
			</form>
		);

		return (
			<div className="button-editable">
				<span className="wp-block-button" key="button">
					<RichText
						onFocus={ this.onFocus }
						{ ...this.props.fieldAttributes }
					/>
				</span>
				{ form }
			</div>
		);
	}
}

export default ButtonEditable;
