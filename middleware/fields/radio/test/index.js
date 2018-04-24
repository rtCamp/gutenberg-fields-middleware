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
		default: 'one',
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
	const defaultRadio = wrapper.find( '.components-radio-control__option > input[type=\'radio\'][value=\'one\']' );

	beforeEach( () => {
		onChange.mockClear();
	} );

	test( 'should render a radio Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );

	test( 'should render two radio options', () => {
		expect( radioEl ).toHaveLength( 2 );
	} );

	test( 'should have default selected', () => {
		expect( defaultRadio ).toHaveLength( 1 );
	} );
} );
