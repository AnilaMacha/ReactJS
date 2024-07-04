import {useState, useEffect} from "react";
import {Shimmer} from "./Shimmer.js";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu =()=>{

  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(()=>{
    fetchMenu();
  }, [])

  const fetchMenu = async () =>{
    const data= await fetch(MENU_URL+resId)
    const json= await data.json();
    console.log(json);
  setResInfo(json.data);
  }

  const resData = resInfo?.cards[2]?.card?.card?.info;
  const resItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (resInfo === null)?<Shimmer/> : (
    <div className="menu">
      <h1>{resData?.name}</h1>
      <p>{resData?.cuisines}-{resData?.costForTwoMessage}</p>
      <ul>
        {resItems?.itemCards.map(item=>
        <li key={item.card?.info?.id} >{item.card?.info?.name}-{" Rs."}{item.card?.info?.price/100}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;