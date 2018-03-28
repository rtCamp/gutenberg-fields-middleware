/**
 * Tab Panel field.
 */

const { TabPanel } = wp.components;

export default function tabPanel( props, config, attributeKey ) {
	const defaultAttributes = {

		onSelect( tabName ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = tabName;
			props.setAttributes( newAttributes );
		},

		children( tabName ) {
			return ( wp.element.createElement( 'div', {}, 'Selected : ' + tabName ) );
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	const tabData = fieldAttributes.children;

	console.warn( props.attributes[ attributeKey ] );

	if ( fieldAttributes.tabs ) {
		fieldAttributes.tabs.forEach( ( tab ) => {
			if ( props.attributes[ attributeKey ] === tab.name ) {
				tab.className = fieldAttributes.tabs.className +  ' ' + 'is-active';
			}
		} );
	}

	delete fieldAttributes.type;
	delete fieldAttributes.children;

	return (
		<TabPanel { ...fieldAttributes } >
			{ tabData }
		</TabPanel>
	);
}
