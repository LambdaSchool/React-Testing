import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button />);
  it('should  return component-button ', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
  });

  it('should  return props.orange ', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });

  it('should  return props.wide ', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide').exists()).toBeTruthy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });
});