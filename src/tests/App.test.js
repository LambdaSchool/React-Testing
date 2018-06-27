import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
it('should render a Panel', () => {
  const app = shallow(<App />);
  const panel = app.find('Panel');
  expect(panel.length).toEqual(1);
});

it('should render a Display', () => {
  const app = shallow(<App />);
  const display = app.find('Display');
  expect(display.length).toEqual(1);
});

it('should return default state', () => {
  const app = shallow(<App />);
  const instance = app.instance();

  expect(instance.state.total).toBe('0');
  expect(instance.state.next).toBe(null);
  expect(instance.state.operation).toBe(null);
})

});
