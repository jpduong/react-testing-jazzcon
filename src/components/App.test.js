import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App", () => {
  const user = {
    firstName: "James",
    lastName: "Duong"
  };
  it("displays first name", () => {
    const wrapper = shallow(<App user={user} />);

    expect(wrapper.find("h1").text()).toEqual("James");
  });
});
