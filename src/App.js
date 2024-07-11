import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Grocery from "./components/Grocery.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js"
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

const Grocery = lazy(()=> import("./components/Grocery"))
const AppLayout=() => {
  return(
    <Provider store={appStore}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </Provider>
  )
}
<Provider/>

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/Cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error/>
  },
])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);

