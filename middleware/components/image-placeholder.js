/**
 * Image Placeholder.
 */

const { ImagePlaceholder } = wp.blocks;
const { __ } = wp.i18n;

const imagePlaceholder = ( props, config, attributeKey ) => {
	const defaultAttributes = {

		onSelectImage( media ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = media;
			props.setAttributes( newAttributes );
		},

		className: 'image-placeholder',

		icon: 'format-gallery',

		label: __( 'Image' ),

		multiple: false,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	return (
		<ImagePlaceholder
			{ ...fieldAttributes }
		/>
	);
};

export default imagePlaceholder;
