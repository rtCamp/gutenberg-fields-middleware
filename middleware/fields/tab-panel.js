/**
 * Tab Panel field.
 */

const { TabPanel } = wp.components;

export default function tabPanel( props, config ) {
	const defaultAttributes = {

		onSelect( tabName ) {
			console.log( 'Selecting tab', tabName );
		},

		children( tabName ) {
			return ( wp.element.createElement( 'div', {}, 'Selected : ' + tabName ) );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	const tabData = fieldAttributes.children;

	delete fieldAttributes.type;
	delete fieldAttributes.children();

	return (
		<TabPanel { ...fieldAttributes } >
			{ tabData }
		</TabPanel>
	);
}
