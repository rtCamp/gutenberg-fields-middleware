/**
 * url-input-button field.
 */

const { URLInput } = wp.editor;
import Field from './../../components/field';

export default function urlInputButton( props, config, defaultConfig, attributeKey ) {
	const defaultAttributes = _.extend( defaultConfig, {
		value: props.attributes[ attributeKey ],
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	return (
		<Field { ...config } >
			<URLInput { ...fieldAttributes } />
		</Field>
	);
}
