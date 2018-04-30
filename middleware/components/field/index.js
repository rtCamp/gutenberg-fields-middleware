const { Component } = wp.element;
const { BaseControl, Toolbar, PanelBody } = wp.components;
const { PanelColor } = wp.components;

/**
 * Field component as a wrapper for some fields so that the props can be dynamically updated from edit method if required.
 */
class Field extends Component {
	render() {
		const {
			config,
			component,
		} = this.props;

		const FieldComponent = component;
		let field = null;

		if ( 'inspector' === config.placement || config.label || config.help ) {
			field = (
				<BaseControl label={ config.label } help={ config.help } id={ config.id } className={ this.props.baseControlClassName } >
					<FieldComponent { ...this.props } />
				</BaseControl>
			);
		} else if ( 'block-controls' === config.placement ) {
			field = (
				<Toolbar>
					<FieldComponent { ...this.props } />
				</Toolbar>
			);
		} else {
			field = <FieldComponent { ...this.props } />;
		}

		if ( 'color' === config.type && this.props.panel ) {
			field = (
				<PanelColor title={ this.props.label } colorValue={ this.props.value } initialOpen={ this.props.initialOpen }>
					<FieldComponent { ...this.props } />
				</PanelColor>
			);
		}

		if ( 'date-time' === config.type ) {
			if ( this.props.panel ) {
				field = (
					<PanelBody initialOpen={ this.props.initialOpen } title={ [
						this.props.label + ': ',
						<span key="label">{ this.props.getFormattedDate() }</span>,
					]
					}>
						<FieldComponent { ...this.props } />
					</PanelBody>
				);
			} else {
				field = (
					<div className="middleware-date-time-no-panel">
						{ field }
					</div>
				);
			}
		}

		if ( 'link' === config.type ) {
			field = (
				<div className="middleware-link-field">
					{ field }
				</div>
			);
		}

		return field;
	}
}

export default Field;
