/**
 * url-input-button field.
 */

const { UrlInputButton } = wp.blocks;
import Field from './../../components/field';

export default function urlInputButton( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		url: props.attributes[ attributeKey ],
	} );

	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );

	return (
		<Field
			config={ config }
			component={ UrlInputButton }
			{ ...fieldAttributes }
		/>
	);
}
