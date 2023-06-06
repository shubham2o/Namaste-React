import React from "react";
import ReactDOM from "react-dom/client";
import { heading } from "./JsxHeading";
import { JsxHeading } from "./JsxHeading";

const root4 = ReactDOM.createRoot(document.getElementById("header4"));

const NamedImportExport = () => (
    <div>
        <h1 className="heading4" key="header41">I am using Named Import-Export 💪🏽</h1>
        {heading}
        {JsxHeading}
    </div>
)

console.log(NamedImportExport());
root4.render(<NamedImportExport/>);

export default NamedImportExport;