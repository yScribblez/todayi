import React from "react";

import { shallow } from "enzyme";
import App from "../App";

describe("App component renders", () => {
  it("renders without crashing", () => {
    const testApp = shallow(<App />);
    expect(testApp.exists()).toBeTruthy();
  });
});
