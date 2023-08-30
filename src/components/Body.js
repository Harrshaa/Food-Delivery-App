import React from "react";
import { ReactDOM } from "react";
import { useState,useEffect,useContext} from "react";
import resList from "../utils/mockData";
import RestaurentCard,{withPromotedLabel} from "./Restaurentcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// import User from "./user";
import UserContext from "../utils/UserContext";






 

const Body =()=>{
    //Local State Variable - Super Powerful Variable//
    
    const [listOfRestaurents,setlistOfRestaurents]=useState([]);
    const [filteredRestaurents,setfilteredRestaurents]=useState([]);
    const [searchText,setsearchText]=useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);      
     

    useEffect(()=>{
        fetchData();  
    },[]);


    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        // console.log(json);
        //Optional Chaining//
        setlistOfRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const {loggedInUser,setUserName} =useContext(UserContext);


    
    return(
         <div className='body'>
            
            <div className='filter flex'>

            <div className="search  m-1 p-1 flex items-center">
                <input type="text" className="border border-solid border-black" placeholder="" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    //Filter the Restaurent cards and update UI//
                    const filtered=listOfRestaurents.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText)
                        );
                        setfilteredRestaurents(filtered);                  
                    
                }}>Search</button>
            </div>
            
            <div>
            <button className="search m-4 p-4 flex items-center" 
                onClick={()=>{
                    const filteredList=listOfRestaurents.filter(
                        (res)=> res.info.avgRating >4                       
                    );
                    setlistOfRestaurents(filteredList);               
                    }}>Top Rated Restaurents</button>
            </div>

            <div className=" search m-4 p-4 flex items-center">
                <label>UserName: </label>
                <input 
                className="border border-black p-2"
                value={loggedInUser}
                onChange={(e)=> setUserName(e.target.value)}                
                />
                
            </div>
            
            </div>

            




            <div className='res-container flex  flex-wrap'>              
                {filteredRestaurents.map((restaurent)=>(
                <Link
                 key={restaurent?.info.id}
                 to={"/restaurants/"+restaurent.info.id}
                 >
                    {(restaurent?.info.avgRating > 4.5) ? (
                        <RestaurantCardPromoted resData={restaurent} />
                    ):(
                        <RestaurentCard resData ={restaurent} />
                    )}             
                </Link>

                ))}              
            </div>


            </div>



    );
}
 export default Body;