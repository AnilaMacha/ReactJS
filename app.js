
import React from "react"
import ReactDOM from "react-dom/client"

const Title= () => (
  <h1 className="head">React JS</h1>
);
const num=100;
const Heading= () => (
  <div className="Container">
    <Title/>
    <h1>{num}</h1>
    <h1 className="head1">Namasthe React🚀</h1>
  </div>
  
);

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)