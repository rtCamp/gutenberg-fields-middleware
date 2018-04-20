const { Component } = wp.element;
const { BaseControl, withInstanceId } = wp.components;

class CheckboxControl extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			options: this.props.options,
		};
		this.onChange = this.onChange.bind( this );
		this.props.setAtt();
	}

	/**
	* Handles when Checkbox checked.
	*
	* @param {int}  index Index of object.
	* @param {bool} value True when checkbox is checked. Else false.
	*
	* @return {void}
	*/
	onChange( index, value ) {
		const options = this.props.options;
		options[ index ].value = ! value;
		this.setState( {
			options,
		} );
		this.props.onChange( index, value );
	}

	render() {
		const {
			heading,
			help,
			instanceId = 0,
			options = [],
		} = this.props;
		const id = `checkbox-control-${ instanceId }`;

		return (
			<BaseControl label={ heading } id={ id } help={ help }>
				{ options.map( ( option, index ) =>
					<div key={ `${ id }-${ index }` }>
						<input
							className="components-checkbox-control__input"
							id={ `${ id }-${ index }` }
							name={ id }
							type="checkbox"
							value={ option.value }
							onClick={ () => this.onChange( index, option.value ) }
							checked={ option.value }
							aria-describedby={ !! help ? id + '__help' : undefined }
						/>
						<label htmlFor={ `${ id }-${ index }` }>{ option.label }</label>
					</div>
				) }
			</BaseControl>
		);
	}
}

export default withInstanceId( CheckboxControl );
