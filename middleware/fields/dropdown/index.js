/**
 * Dropdown field.
 */

const { Dropdown } = wp.components;
const { __ } = wp.i18n;

export default function dropdown( props, config ) {
	const defaultAttributes = {

		renderToggle( { isOpen, onToggle } ) {
			return (
				<button className="button-primary button" onClick={ onToggle } aria-expanded={ isOpen }>
					{ __( 'Toggle Popover!' ) }
				</button>
			);
		},

		renderContent() {
			return (
				<div>
					{ __( 'Dummy Popover Content!' ) }
				</div>
			);
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Dropdown
			{ ...fieldAttributes }
		/>
	);
}
