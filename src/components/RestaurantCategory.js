
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) => {
  return(
    <div className="w-6/12 text-center shadow-lg m-auto p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      <ItemsList items={data.itemCards}/>
    </div>
  )
}

export default RestaurantCategory;