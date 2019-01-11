import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./layouts/Desktop";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Desktop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
