import React from 'react';
import { render } from 'enzyme';
const { RadioControl } = wp.components;
import { radio } from '../../';

describe( 'RadioControl', () => {
	const onChange = jest.fn();
	const attributeKey = 'radio';
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

	const wrapper = render( radio( '', config, attributeKey ) );

	beforeEach( () => {
		onChange.mockClear();
	} );

	test( 'should render a radio Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );
} );
