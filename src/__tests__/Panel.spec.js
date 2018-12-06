import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should render 19 Button components', () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.find('Button').length).toBe(19);
  });
});
