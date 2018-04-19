const { Component } = wp.element;
const { BaseControl } = wp.components;

class CheckboxControl extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			editing: ! ( this.props.mediaData && this.props.mediaData.url ),
			mediaData: this.props.mediaData || '',
		};
	}
	render() {
		const {
			heading,
			help,
			options,
			onChange,
		} = this.props;

		return (
			<BaseControl label={ heading } help={ help }>
				{ options.map( ( option, index ) =>
					<div>
						<input
							className="components-checkbox-control__input"
							type="checkbox"
							value={ option.value }
							onChange={ onChange }
							checked={ option.value }
							// aria-describedby={ !! help ? id + '__help' : undefined }
						/>
						<label>{ option.label }</label>
					</div>
				) }
			</BaseControl>
		);
	}
}

export default CheckboxControl;
