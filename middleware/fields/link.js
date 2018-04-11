/**
 * Url field.
 */

const { UrlInput } = wp.blocks;
const { BaseControl } = wp.components;

export default function link( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	if ( 'inspector' === config.placement ) {
		delete fieldAttributes.placement;
		return (
			<BaseControl
				label={ fieldAttributes.label }
				id={ fieldAttributes.id }
				help={ fieldAttributes.help }
				className={ fieldAttributes.className }
			>
				<UrlInput
					{ ...fieldAttributes }
				/>
			</BaseControl>
		);
	}

	return (
		<UrlInput
			{ ...fieldAttributes }
		/>
	);
}
