import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
const onlineStatus= useOnlineStatus();

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
          <li className="m-4 p-4">Cart</li>
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