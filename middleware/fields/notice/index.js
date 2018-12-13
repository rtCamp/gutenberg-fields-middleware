/**
 * Notice field.
 */

const { Notice } = wp.components;
import Field from './../../components/field';

export default function notice( props, config, defaultConfig, attributeKey, middleware ) {

	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field { ...config } >
			<Notice status="error" isDismissible={ false }>
				<p>An error occurred: </p>
			</Notice>
		</Field>
	);
}
