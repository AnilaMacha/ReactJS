import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js"


/**
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -Restaurant Container
 * --Restaurant card
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 */

const AppLayout=() => {
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

