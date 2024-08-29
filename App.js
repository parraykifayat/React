import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
            //if i have to create a siblings what i will do is i create array
            
            [
                React.createElement("h1",{},"this is react course "),
                React.createElement("h2",{},"this is heading 2"),
            ]
        ),
        React.createElement("div",{id:"child"},
            //if i have to create a siblings what i will do is i create array
            [
                React.createElement("h3",{},"this is heading 2 "),
                React.createElement("h4",{},"this is heading 2"),
            ]
        )
    ]
    
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);