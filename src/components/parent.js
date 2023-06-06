import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("header"));

const parent = React.createElement(
  "div",
  {
    id: "parent",
    key: "header0",
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
        key: "header01",
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
        key: "header02",
      },
      [React.createElement("h1", {}, "I am h1 tag")],
      [React.createElement("h2", {}, "I am h2 tag")]
    ),
  ]
);

console.log(parent);
root.render(parent);

export default parent;