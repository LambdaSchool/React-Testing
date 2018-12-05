import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
  it("renders one button", () => {
    const wrapper = shallow(<Button />);
	const elements = wrapper.find("div.component-button");
	
    expect(elements.length).toBe(1);
  });
  it("simulates button click", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button name="AC" clickHandler={handleClick} />);
	wrapper.find("button").simulate("click");
	
    expect(handleClick).toBeCalled();
  });
  it("should return props", () => {
    const renderMock = jest.fn();
    const wrapper = shallow(<Button render={renderMock} />);

    expect(wrapper.props()).toBeDefined();
  });
  it("should return class property", () => {
    const wrapper = shallow(<Button orange />);
    const elements = wrapper.find(".orange");

    expect(elements.length).toEqual(1);
  });
});
