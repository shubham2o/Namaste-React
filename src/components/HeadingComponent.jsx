import React from "react";
import ReactDOM from "react-dom/client";
import JsxHeading from "./JsxHeading";

const root2 = ReactDOM.createRoot(document.getElementById("header2"));
// React Functional Component
const Title = () => (
  <h3 className="title" key="header21">
    I am inside Title
  </h3>
);

// Component Composition (Component inside component)
const number = 2000000;
const fullName = "I am under COMPONENT COMPOSITION.";

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading2" key="header22">
      Namaste React Functional Component 🔥
    </h1>
    <Title key="title" />
    <Title key="title1" ></Title>
    {Title()}
    {JsxHeading}
    {1 + 2 + 3 + 4 + 5 + 15}
    <h3 key="fullName" >{fullName}</h3>
    {number}
    {console.log(`You can console log in functional composition too.`)}
  </div>
);
console.log(HeadingComponent());
root2.render(<HeadingComponent />);

export default HeadingComponent;