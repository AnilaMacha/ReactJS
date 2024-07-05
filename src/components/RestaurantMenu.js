import {Shimmer} from "./Shimmer.js";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu =()=>{

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const resData = resInfo?.cards[2]?.card?.card?.info;
  const resItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  console.log(categories);
  
  return (resInfo === null)?<Shimmer/> : (
    <div>
      <h1 className="font-bold text-2xl text-center m-4">{resData?.name}</h1>
      <p className="font-bold text-center"><u>{resData?.cuisines.join(", ")} - {resData?.costForTwoMessage}</u></p>
      {categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;