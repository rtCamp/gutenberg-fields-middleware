const { Component } = wp.element;
const { BaseControl, Toolbar, PanelBody } = wp.components;
const { PanelColor } = wp.components;

/**
 * Field component as a wrapper for some fields so that the props can be dynamically updated from edit method if required.
 */
class Field extends Component {
	render() {
		const {
			id,
			placement,
			label,
			help,
			baseControlClassName,
			type,
			panel,
			initialOpen
		} = this.props;

		let field = null;

		if ( 'inspector' === placement || label || help ) {
			field = (
				<BaseControl label={ label } help={ help } id={ id } className={ baseControlClassName } >
					{ this.props.children }
				</BaseControl>
			);
		} else if ( 'block-controls' === placement ) {
			field = (
				<Toolbar>
					{ this.props.children }
				</Toolbar>
			);
		} else {
			field = this.props.children;
		}

		if ( 'color' === type && panel ) {
			field = (
				<PanelColor title={ label } colorValue={ value } initialOpen={ initialOpen }>
					{ this.props.children }
				</PanelColor>
			);
		}

		if ( 'date-time' === type ) {
			if ( panel ) {
				field = (
					<PanelBody initialOpen={ initialOpen } title={ [
						props.label + ': ',
						<span key="label">{ props.getFormattedDate() }</span>,
					]
					}>
						{ this.props.children }
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

		if ( 'color' === type ) {
			field = (
				<div className="middleware-color-field">
					{ field }
				</div>
			);
		}

		if ( 'link' === type ) {
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
