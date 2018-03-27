/**
 * Dropdown field.
 */

const { Dropdown } = wp.components;
const { __ } = wp.i18n;

const dropdown = ( props, config ) => {
	const defaultAttributes = {

		renderToggle( { isOpen, onToggle } ) {
			return ( <button className="button-primary button" onClick={ onToggle } aria-expanded={ isOpen }>Toggle Popover!</button> );
		},

		renderContent() {
			return ( <div>This is the content of the popover!</div> );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<Dropdown
			{ ...fieldAttributes }
		/>
	);
};

export default dropdown;