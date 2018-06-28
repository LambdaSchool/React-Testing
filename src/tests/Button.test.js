import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  const component = shallow(<Button />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should have siblings', () => {
    expect(component.find('div').children()).toHaveLength(1);
  })

  it('should return props.wide', () => {
    const wrap = shallow(<Button />);
    expect(wrap.find('.component-button').exists()).toBeTruthy();
    expect(wrap.find('.wide').exists()).toBeFalsy();
    expect(wrap.find('.orange').exists()).toBeFalsy();
    expect(component.find('div').children()).toHaveLength(1);
  })

  it('should return props.wide', () => {
    const wrap = shallow(<Button wide />);
    expect(wrap.find('.component-button').exists()).toBeTruthy();
    expect(wrap.find('.wide').exists()).toBeTruthy();
    expect(wrap.find('.orange').exists()).toBeFalsy();
    expect(component.find('div').children()).toHaveLength(1);
  })
});
