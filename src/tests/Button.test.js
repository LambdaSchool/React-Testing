import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });
  it("should be able to display an orange button", () => {
    const element = shallow(<Button orange={true} />);
    expect(element.find(".orange")).toHaveLength(1);
  });
  it("should be able to display a wide button", () => {
    const element = shallow(<Button wide={true} />);
    expect(element.find(".wide")).toHaveLength(1);
  });
  // it('runs the this.props.clickHandler(this.props.name) when clicked', () => {

  // });
});
