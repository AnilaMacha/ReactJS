import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () => {

const [btnNameReact, setBtnNameReact] = useState("Login");
const onlineStatus= useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

//subscribing to the store using selector
const cartItems = useSelector((store)=>store.cart.items);
console.log(cartItems);
  return(
    <div className="flex justify-between bg-pink-100">
      <div>
      <img className="w-16 rounded-full m-2" src={LOGO_URL}/>
      <h4 className="m-2 font-bold">Foodie Fantasy🍔</h4>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="m-4 p-4">online status:{onlineStatus?"✅": "🔴"}</li>
          <li className="m-4 p-4">
            <Link to="/">Home</Link></li>
          <li className="m-4 p-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="m-4 p-4">
            <Link to = "/Grocery">Grocery</Link>
          </li>
          <li className="m-2 w-[30px]">
          {cartItems.length}<Link to="/Cart"><img src="https://img.icons8.com/?size=80&id=43327&format=png"/></Link>
          </li>
          <button className="m-4 px-4 bg-blue-200 rounded-lg" onClick = {()=>
            {
              btnNameReact ==="Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }
          }>{btnNameReact}</button>
          
        </ul>
      </div>
    </div>
    
  )
}

export default Header;