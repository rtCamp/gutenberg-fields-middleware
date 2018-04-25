/**
 * url-input-button field.
 */

const { UrlInputButton } = wp.blocks;

export default function urlInputButton( props, config, defaultConfig, attributeKey, middleware ) {
	const defaultAttributes = _.extend( defaultConfig, {
		url: props.attributes[ attributeKey ],
	} );

	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );

	return middleware.createField( config, (
		<UrlInputButton
			{ ...fieldAttributes }
		/>
	) );
}
