import React from "react";
import { shallow } from "enzyme";
import Regist from "./regist";

describe("Regist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Regist />);
    expect(wrapper).toMatchSnapshot();
  });
});
