import React from "react";
import reactDom from "react-dom";
import App from "./App__OLD";

it("rendering without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  reactDom.unmountComponentAtNode(div);
});
