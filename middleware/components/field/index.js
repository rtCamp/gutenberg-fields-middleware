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

		const props = _.extend( {}, this.props );
		const FieldComponent = component;
		let field = null;

		delete props.component;

		if ( 'inspector' === config.placement || config.label || config.help ) {
			field = (
				<BaseControl label={ config.label } help={ config.help } id={ config.id } className={ this.props.baseControlClassName } >
					<FieldComponent { ...props } />
				</BaseControl>
			);
		} else if ( 'block-controls' === config.placement ) {
			field = (
				<Toolbar>
					<FieldComponent { ...props } />
				</Toolbar>
			);
		} else {
			field = <FieldComponent { ...props } />;
		}

		if ( 'color' === config.type && props.panel ) {
			field = (
				<PanelColor title={ props.label } colorValue={ props.value } initialOpen={ props.initialOpen }>
					<FieldComponent { ...props } />
				</PanelColor>
			);
		}

		if ( 'date-time' === config.type ) {
			if ( props.panel ) {
				field = (
					<PanelBody initialOpen={ props.initialOpen } title={ [
						props.label + ': ',
						<span key="label">{ props.getFormattedDate() }</span>,
					]
					}>
						<FieldComponent { ...props } />
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
