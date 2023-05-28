import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('header'));

const parent =
    React.createElement(
        "div", {
            id: 'parent',
            style: {
                backgroundColor: "red",
                color: "white"
            }
        }, [React.createElement(
            "div", {
                id: 'child1'
            }, [React.createElement("h1", {}, "This is Namaste React 🚀")], [React.createElement("h2", {}, "By Shubham Sharma")]
        )], [React.createElement(
            "div", {
                id: 'child2'
            }, [React.createElement("h1", {}, "I am h1 tag")], [React.createElement("h2", {}, "I am h2 tag")]
        )]
    );

root.render(parent);

const heading = React.createElement('h1', {
        id: 'heading',
        xyz: "abc"
    },
    "Hello World from React!"
);