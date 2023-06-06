import React from "react";
import ReactDOM from "react-dom/client";

const root3 = ReactDOM.createRoot(document.getElementById("header3"));

// React Fragment (Helps to have more than one parent element and it behaves like an empty tag)
const ReactFrag = () => (
  // <React.Fragment>
  <>
    <div>
      <h1 className="heading3" key="header31">
        I am inside parent element (div1) using React Fragment 💯
      </h1>
    </div>
    <div>
      <h1 className="heading3" key="header32">
        I am inside another parent element (div2) using React Fragment 💯
      </h1>
    </div>
  </>
  // </React.Fragment>
);

console.log(ReactFrag());
root3.render(<ReactFrag />);

export default ReactFrag;