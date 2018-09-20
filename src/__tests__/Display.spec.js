import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  it("renders display text", () => {
    const wrapper = shallow(<Display value="1" />);
    expect(
      wrapper
        .find("div")
        .not(".component-display")
        .text()
    ).toEqual("1");
  });
});
