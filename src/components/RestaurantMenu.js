import { useState, useEffect } from "react";
import {Shimmer} from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+3324+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const resData = resInfo?.cards[2]?.card?.card?.info;

  const { name, cuisines, costForTwoMessage} = resData ? resData : [];
  
  // if (resData) {
  //   var { name, cuisines } = resData && resData;
  //   console.log(name);
  // }

  const resItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const {itemCards} = resItems ? resItems : [];
  console.log(resItems);
  console.log(itemCards);
  
  if (resData===null) return <Shimmer/> ;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines}-{costForTwoMessage}</p>

      <ul>
      {Array.isArray(itemCards) ? 
        itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price/100}</li>
        ))
        : <li>No items available</li>
      }
        {/* {itemCards.map((item)=>(<li>{item?.card?.info?.name}-{"Rs."}{item?.card?.info?.price/100}</li>))} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
