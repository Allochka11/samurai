import React from "react";
import ReactDOM from "react-dom";
import SamuraiApp from "App";

test("renders App component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
