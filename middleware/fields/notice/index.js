/**
 * Notice field.
 */

import Field from './../../components/field';

const { Notice } = wp.components;

export default function notice( props, config, defaultConfig, attributeKey, middleware ) {

	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;
	delete fieldAttributes.message;

	return (
		<Field { ...config } >
			<Notice { ...fieldAttributes }>
				<p>{ config.message }</p>
			</Notice>
		</Field>
	);
}
