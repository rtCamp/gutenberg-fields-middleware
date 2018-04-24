/**
 * External dependencies.
 */
import { render } from 'enzyme';

/**
 * Internal dependencies.
 */
import { radio } from '../../';

describe( 'RadioControl', () => {
	const onChange = jest.fn();
	const config = {
		type: 'radio',
		label: 'User type',
		help: 'The type of the current user',
		options: [
			{
				value: 'one',
				label: 'one',
			},
			{
				value: 'two',
				label: 'two',
			},
		],
	};

	const wrapper = render( radio( '', config, 'radio' ) );
	const radioEl = wrapper.find( '.components-radio-control__option > input[type=\'radio\']' );

	beforeEach( () => {
		onChange.mockClear();
	} );

	test( 'should render a radio Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );

	test( 'should render two radio button options', () => {
		expect( radioEl ).toHaveLength( 2 );
	} );

} );
