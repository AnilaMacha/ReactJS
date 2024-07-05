
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {resData}=props;
  const{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    }=resData?.info;

    const {
      deliveryTime
    }=resData?.info?.sla;
    
  return(
    <div className="m-4 p-4 w-[216px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="res-logo rounded-lg mb-2" src={CDN_URL + cloudinaryImageId}/>
      <h3 className="font-bold mb-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
};

export const WithPromotedLabel = (RestaurantCard) =>{
  return (props) =>{
    return(
      <div>
        <label>Promoted</label>
        <Restaurant {...props}/>
      </div>
    )
  };
};

export default RestaurantCard;
