/**
 * External dependencie
 */
import React from 'react';
import { render } from 'enzyme';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
const {
	createBlock,
	getBlockType,
	registerBlockType,
	BlockEdit,
} = wp.blocks;

export const blockEditRender = ( name, settings ) => {
	if ( ! getBlockType( name ) ) {
		registerBlockType( name, settings );
	}
	const block = createBlock( name );

	return render(
		<BlockEdit
			name={ name }
			isSelected={ false }
			attributes={ block.attributes }
			setAttributes={ noop }
			user={ {} }
			createInnerBlockList={ noop }
		/>
	);
};
