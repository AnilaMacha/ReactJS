import {useState, useEffect } from "react";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] =useState("null");
  useEffect(()=>{
    fetchMenu();
  }, []);

  const fetchMenu=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info);
    
  };

  const { name, cuisines, costForTwo} = resInfo;
  return resInfo===null ? <Shimmer/> : (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwo}</p>
    
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Beverages</li>
      </ul>    
    </div>
  )
}

export default RestaurantMenu;
