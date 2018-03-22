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
			const elements = [];
			const image = props.attributes[ attributeKey ];

			if ( ! image ) {
				if ( attribute.field.imagePlaceholder ) {
					elements.push( imagePlaceholder( props, attribute, attributeKey ) );
				} else {
					elements.push( (
						<Button className="button button-large button-upload" onClick={ open }>
							{ buttonText }
						</Button>
					) );
				}
			} else {
				elements.push( (
					<img className="uploaded-image" src={ image.url } alt={ image.alt } />
				) );

				if ( !! attribute.field.removeButton ) {
					elements.push( (
						<Button className="button button-large button-remove" onClick={ () => {
							const newAttributes = {};
							newAttributes[ attributeKey ] = '';
							props.setAttributes( newAttributes );
						} }>
							{ attribute.field.removeButton }
						</Button>
					) );
				}
			}

			return (
				<div className={ 'blocks-' + attribute.field.type + '-upload' }>
					{ elements }
				</div>
			);
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
