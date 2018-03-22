/**
 * Image, Video, Audio Field.
 */

const { MediaUpload } = wp.blocks;
const { Button } = wp.components;
const { __ } = wp.i18n;

import imagePlaceholder from './image-placeholder';

const mediaUpload = ( props, attribute, attributeKey ) => {
	const buttonText = attribute.field.buttonText ? attribute.field.buttonText : __( 'Open Media Library' );

	const defaultAttributes = {

		onSelect( media ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		},

		type: 'image',

		value: props.attributes[ attributeKey ],

		render( { open } ) {
			const buttons = [];

			if ( ! props.attributes[ attributeKey ] ) {
				if ( attribute.field.imagePlaceholder ) {
					buttons.push( imagePlaceholder( props, attribute, attributeKey ) );
				} else {
					buttons.push( (
						<Button className="button button-large button-upload" onClick={ open }>
							{ buttonText }
						</Button>
					) );
				}
			} else if ( !! attribute.field.removeButton ) {
				buttons.push( (
					<Button className="button button-large button-remove" onClick={ () => {
						const newAttributes = {};
						newAttributes[ attributeKey ] = '';
						props.setAttributes( newAttributes );
					} }>
						{ attribute.field.removeButton }
					</Button>
				) );
			}

			return buttons;
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.buttonText;
	delete fieldAttributes.imagePlaceholder;

	return (
		<MediaUpload
			{ ...fieldAttributes }
		/>
	);
};

export default mediaUpload;
