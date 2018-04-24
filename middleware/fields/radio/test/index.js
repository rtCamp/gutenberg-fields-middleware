import React from 'react';
import { render } from 'enzyme';
const { RadioControl } = wp.components;

describe( 'RadioControl', () => {
	const onChange = jest.fn();
	const wrapper = render(
		<RadioControl
			label="User type"
			help="The type of the current user"
			selected={ 'a' }
			options={ [
				{
					label: 'Author',
					value: 'a',
				},
				{
					label: 'Editor',
					value: 'e',
				},
			] }
			onChange={ onChange } /> );

	beforeEach( () => {
		onChange.mockClear();
	} );

	test( 'should render a radio Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );
} );
