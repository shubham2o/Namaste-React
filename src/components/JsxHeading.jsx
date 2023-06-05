import React from "react";
import ReactDOM from "react-dom/client";

const root1 = ReactDOM.createRoot(document.getElementById("header1"));
const heading = React.createElement(
  "h1",
  {
    className: "heading",
    xyz: "abc",
    key: "header11",
  },
  "Hello World from React!"
);
console.log(heading);

// React Element
// JSX => HTML-like Or XML-like syntax
const JsxHeading = (
  <h1 className="heading1" xyz="abc" key="header12">
    Hello world from JSX 🎉
  </h1>
);
console.log(JsxHeading);
root1.render(JsxHeading);

export default JsxHeading;