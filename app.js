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

const root2 = ReactDOM.createRoot(document.getElementById("header2"));
// React Functional Component
const Title = () => <h3 className="title">I am inside Title</h3>;

// Component Composition (Component inside component)
const number = 2000000;
const fullName = "I am under COMPONENT COMPOSITION.";

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading2">Namaste React Functional Component 🔥</h1>
    <Title />
    <Title></Title>
    {Title()}
    {jsxHeading}
    {1 + 2 + 3 + 4 + 5 + 15}
    <h3>{fullName}</h3>
    {number}
    {console.log(`You can console log in functional composition too.`)}
  </div>
);
console.log(HeadingComponent());
root2.render(<HeadingComponent />);

const root3 = ReactDOM.createRoot(document.getElementById("header3"));
// React Fragment (Helps to have more than one parent element and it behaves like an empty tag)
const ReactFrag = () => (
  // <React.Fragment>
  <>
    <div>
      <h1 className="heading3">
        I am inside parent element (div1) using React Fragment 💯
      </h1>
    </div>
    <div>
      <h1 className="heading3">
        I am inside another parent element (div2) using React Fragment 💯
      </h1>
    </div>
  </>
  // </React.Fragment>
);
console.log(ReactFrag());
root3.render(<ReactFrag />);
