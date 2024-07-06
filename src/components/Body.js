import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard.js";
import {useState , useEffect} from "react";
import {Shimmer} from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await info.json();

  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return (
    <h1>Looks like you're Offline!! Please check your internet connection;</h1>
  );

  return ListOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="flex">
        <div className="search m-2 p-4">
          <input 
          type="text" 
          className="border border-solid border-black" 
          value={searchText}
          onChange = {(e)=>{
            setSearchText(e.target.value);
          }}/>
          
          <button 
          className="bg-green-100 px-4 py-2 m-2 rounded-lg"
          onClick = {()=>{
            const filteredRestaurant = ListOfRestaurants.filter(
              (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="flex items-center">
          <button 
          className="px-4 py-2 mx-4 bg-yellow-100 rounded-lg" 
          onClick={()=>{
            const filteredList = ListOfRestaurants.filter(
              (res)=> res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
            >Top Rated Restaurant</button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant)=>
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>

          {restaurant.info.promoted ? <RestaurantCardPromoted resData ={restaurant} /> : <RestaurantCard resData={restaurant}/>}
           </Link>
        )}
      </div>
    </div>
  )
}

export default Body;
