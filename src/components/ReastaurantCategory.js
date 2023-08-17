import ItemList from "./ItemList";

const RestaurantCategory =({data})=>{
    console.log(data);
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
                <div className="flex justify-between">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <ItemList items={data.itemCards}/>              
                
            </div>
            {/* Accordion Body */}

           

        </div>
    )

}

export default RestaurantCategory;