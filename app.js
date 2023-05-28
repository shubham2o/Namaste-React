import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("header"));
const parent = React.createElement(
  "div",
  {
    id: "parent",
    style: {
      backgroundColor: "red",
      color: "white",
    },
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [React.createElement("h1", {}, "This is Namaste React 🚀")],
      [React.createElement("h2", {}, "By Shubham Sharma")]
    ),
  ],
  [
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [React.createElement("h1", {}, "I am h1 tag")],
      [React.createElement("h2", {}, "I am h2 tag")]
    ),
  ]
);
root.render(parent);

const root1 = ReactDOM.createRoot(document.getElementById("header1"));
const heading = React.createElement(
  "h1",
  {
    className: "heading",
    xyz: "abc",
  },
  "Hello World from React!"
);
console.log(heading);

// React Element
// JSX => HTML-like Or XML-like syntax
const jsxHeading = (
  <h1 className="heading1" xyz="abc">
    Hello world from JSX 🎉
  </h1>
);
console.log(jsxHeading);
root1.render(jsxHeading);

// React Functional Components
const Title = () => <h3 className="title">I am inside Title</h3>;

const number = 2000000;
const fullName = "Stephen Curry";

// Component Composition (Component inside component)
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading2">Namaste React Functional Component🔥</h1>
    <Title />
    {jsxHeading}
    <h3>{number}</h3>
    {fullName}
    {1 + 2 + 3 + 4 + 5 + 15}
    {console.log(`Console log inside Functional Component.`)}
  </div>
);
console.log(HeadingComponent());

const root2 = ReactDOM.createRoot(document.getElementById("header2"));
root2.render(<HeadingComponent />);