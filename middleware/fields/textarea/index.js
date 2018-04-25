/**
 * Textarea field.
 */

const { TextareaControl } = wp.components;

import './editor.scss';

export default function textarea( props, config, defaultConfig ) {
	const defaultAttributes = _.extend( defaultConfig, {
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
