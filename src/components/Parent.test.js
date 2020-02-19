import Parent from "./Parent";
import Child from "./Child";
import React from "react";
import { shallow, mount } from "enzyme";

describe("Parent Component", () => {
  const parent = {
    firstName: "Parent firstname",
    lastName: "Parent lastname"
  };

  // test not coupled to specific html element such as h1
  it("displays first name", () => {
    const wrapper = shallow(<Parent parent={parent} />);
    expect(wrapper.find('[data-test="firstName"]').text()).toEqual(
      "Parent firstname"
    );
  });

  it("displays last name name", () => {
    const wrapper = shallow(<Parent parent={parent} />);

    expect(wrapper.find('[data-test="lastName"]').text()).toEqual(
      "Parent lastname"
    );
  });

  // Full rendering opposed to shallow rendering
  it("counter button text", () => {
    const onClick = () => {};
    const wrapper = mount(<Parent parent={parent} onClick={onClick} />);
    console.log(wrapper.debug());
    expect(wrapper.find('[data-test="counter-button"]').text()).toEqual(
      "click me"
    );
  });

  // simulate button click
  it("simulate click on counter button", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<Parent parent={parent} onClick={mockCallBack} />);

    wrapper.find('[data-test="counter-button"]').simulate("click");

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
