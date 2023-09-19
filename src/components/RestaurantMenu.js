import React from "react";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ReastaurantCategory";

const RestaurantMenu = () => {    
    // const [resInfo,setResInfo]=useState(null);
    // const { resId } =useParams();
    // console.log(resId);
    
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu =async()=>{
    //     const data=await fetch(MENU_API+ resId);
    //     const json=await data.json();        
    //     setResInfo(json.data);
    //     console.log(resInfo) ;       
    // };
    const dummy= "Dummy Data";
    const [showIndex,setShowIndex]= useState(1);
    const {resId} =useParams();
    const resInfo =useRestaurantMenu(resId)
    if(resInfo === null) return <Shimmer />;


    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
        c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);

  
  return (
    <div className="text-center">
        
        <h1 className="font-bold my-10 text-2xl">{name}</h1> 
        <p className="font-bold text-lg">{cuisines.join(",")}</p>
        <h3>{costForTwoMessage}</h3>

        {/* Categories Accordions */}
        {categories.map((category,index)=>
            //Controllled Component//
            <RestaurantCategory  
            key={category?.card?.card.title}            
            data={category?.card.card}
            showItems={index=== showIndex ? true:false}
            setShowIndex={()=> setShowIndex(index)} 
            dummy={dummy}/>
            
        )}


        
        {/* <ul>
            {itemCards.map((item) =>(
                <li key={item.card.info.id}>
                    {item.card.info.name} -{"Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>

            ))}
                      
        </ul> */}

    </div>
  
  );
  
}
export default RestaurantMenu