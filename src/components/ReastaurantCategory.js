import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data,showItems,setShowIndex,dummy})=>{
    console.log(data);
    const handleClick=()=>{
        setShowIndex();              
    };

    // const[showItems,setShowItems]=useState(false);

    return(
        <div >
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}
                >
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            < ItemList items={data.itemCards}/>           
                
            </div>
            {/* Accordion Body */}           

        </div>
    )

}

export default RestaurantCategory;