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

  it("renders one display component", () => {
    const app = shallow(<App />);
    const display = app.find("Panel");
    
    expect(display.length).toEqual(1);
    });

    it("renders one panel component", () => {
      const app = shallow(<App />);
      const panel = app.find("Panel");
      
      expect(panel.length).toEqual(1);
      });

});
