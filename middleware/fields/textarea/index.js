/**
 * Textarea field.
 */

const { TextareaControl } = wp.components;

import './editor.scss';

export default function textarea( props, config, attributeKey, middleware ) {
	const defaultAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), {
		className: 'middleware-input-field middleware-input-field-' + config.type,
	} );

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<TextareaControl
			{ ...fieldAttributes }
		/>
	);
}
