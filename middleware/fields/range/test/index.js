/**
 * External dependencies.
 */
import { render } from 'enzyme';

/**
 * Internal dependencies.
 */
import { range } from '../../';

describe( 'RangeControl', () => {
	const config = {
		type: 'range',
		label: 'Select Range',
		help: 'This is your range control',
		beforeIcon: 'editor-textcolor',
		afterIcon: 'editor-textcolor',
		placement: 'inspector',
		min: 0,
		max: 20,
	};

	const wrapper = render( range( '', config, 'radio' ) );

	test( 'should render a range Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );

} );
