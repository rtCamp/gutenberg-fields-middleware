/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

import './editor.scss';

export default function link( props, config, defaultConfig, attributeKey, middleware ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<div className="middleware-link-field">
			<UrlInput
				{ ...fieldAttributes }
			/>
		</div>
	) );
}
