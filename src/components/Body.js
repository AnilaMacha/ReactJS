import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import {useState , useEffect} from "react";


const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await info.json();

  console.log(json);

  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
          const filteredList = ListOfRestaurants.filter(
            (res)=> res?.info?.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}
          >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant)=>
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        )}
      </div>
    </div>

  )
}

export default Body;