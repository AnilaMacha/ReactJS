import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import {useState , useEffect} from "react";
import {Shimmer} from "./Shimmer.js";


const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await info.json();

  console.log(json);

  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  return ListOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText}
          onChange = {(e)=>{
            setSearchText(e.target.value);
          }}/>
          
          <button 
          onClick = {()=>{
            const filteredRestaurant = ListOfRestaurants.filter(
              (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>

        <button 
        className="filter-btn" 
        onClick={()=>{
          const filteredList = ListOfRestaurants.filter(
            (res)=> res?.info?.avgRating > 4
          );
          setFilteredRestaurant(filteredList);
        }}
          >Top Rated Restaurant</button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant)=>
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        )}
      </div>
    </div>

  )
}

export default Body;