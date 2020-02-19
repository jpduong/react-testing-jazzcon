import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App Component", () => {
  const user = {
    firstName: "James",
    lastName: "Duong"
  };

  it("displays first name", () => {
    const wrapper = shallow(<App user={user} />);

    // expect(wrapper.find("h1").text()).toEqual("James");
    // expect(wrapper.contains("James")).toBe(true);
    expect(wrapper.find('[data-test="firstName"]').text()).toEqual("James");
  });

  it("displays last name name", () => {
    const wrapper = shallow(<App user={user} />);

    // expect(wrapper.find("h2").text()).toEqual("Duong");
    // expect(wrapper.contains("Duong")).toBe(true);
    expect(wrapper.find('[data-test="lastName"]').text()).toEqual("Duong");
  });
});
