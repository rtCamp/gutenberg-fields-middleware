/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

import './editor.scss';

export default function link( props, config, attributeKey, middleware ) {
	const fieldAttributes = _.extend( middleware.getDefaultConfig( props, config, attributeKey ), config );

	delete fieldAttributes.type;

	return middleware.createField( config, (
		<div className="middleware-link-field">
			<UrlInput
				{ ...fieldAttributes }
			/>
		</div>
	) );
}
