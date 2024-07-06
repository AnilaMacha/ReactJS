import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) => {

  const [showItems, setShowItems] = useState(false);
  const handleClick = () =>{
    setShowItems(!showItems);
  }
  return(
    <div className="w-6/12 text-center shadow-lg m-auto p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      
      {showItems && <ItemsList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory;