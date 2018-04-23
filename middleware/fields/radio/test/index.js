import { shallow } from 'enzyme';
const { RadioControl } = wp.components;

describe( 'RadioControl', () => {
	const radioControl = {
		selected: 'two',
		label: 'Radio Options',
		options: [
			{
				value: 'one',
				label: 'One',
			},
			{
				value: 'two',
				label: 'Two',
			},
		],
	};

	const wrapper = shallow( <RadioControl { ...radioControl } /> );
	// @TODO: TO Be Continue.
	test( 'should render a radio Control', () => {
		expect( wrapper ).toMatchSnapshot();
	} );
} );
