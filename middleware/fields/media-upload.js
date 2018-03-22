/**
 * Image, Video, Audio Field.
 */

const { MediaUpload } = wp.blocks;
const { Button } = wp.components;
const { __ } = wp.i18n;

import imagePlaceholder from './image-placeholder';

const mediaUpload = ( props, attribute, attributeKey ) => {
	const buttonText = attribute.field.buttonText ? attribute.field.buttonText : __( 'Open Media Library' );
	const image = props.attributes[ attributeKey ];

	const defaultAttributes = {

		onSelect( media ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		},

		type: 'image',

		value: image || '',

		render( { open } ) {
			const nodes = [];

			if ( ! image ) {
				if ( attribute.field.imagePlaceholder ) {
					nodes.push( imagePlaceholder( props, attribute, attributeKey ) );
				} else {
					nodes.push( (
						<Button className="button button-large button-upload" onClick={ open }>
							{ buttonText }
						</Button>
					) );
				}
			} else {
				nodes.push( (
					<img className="uploaded-image" src={ image.url } alt={ image.alt } />
				) );

				if ( !! attribute.field.removeButton ) {
					nodes.push( (
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
					{ nodes }
				</div>
			);
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.buttonText;
	delete fieldAttributes.imagePlaceholder;
	delete fieldAttributes.removeButton;

	return (
		<MediaUpload
			{ ...fieldAttributes }
		/>
	);
};

export default mediaUpload;
