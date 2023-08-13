import React from "react";
import { ReactDOM } from "react";
import { useState,useEffect} from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./Restaurentcard";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";


 

const Body =()=>{
    //Local State Variable - Super Powerful Variable//
    const [listOfRestaurents,setlistOfRestaurents]=useState([]);
    const [filteredRestaurents,setfilteredRestaurents]=useState([]);
    const [searchText,setsearchText]=useState("");   
     

    useEffect(()=>{
        fetchData();  
    },[]);


    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        //Optional Chaining//
        setlistOfRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return(
         <div className='body'>
            
            <div className='filter'>

            <div className="search">
                <input type="text" className="search-box" placeholder="search it" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                <button className="searchButton" onClick={()=>{
                    //Filter the Restaurent cards and update UI//
                    const filtered=listOfRestaurents.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText)
                        );
                        setfilteredRestaurents(filtered);                  
                    
                }}>Search</button>
            </div>

            
            <button className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOfRestaurents.filter(
                        (res)=> res.info.avgRating >4                       
                    );
                    setlistOfRestaurents(filteredList);               
                    }}>Top Rated Restaurents</button>

            </div>



            <div className='res-container'>              
                {filteredRestaurents.map((restaurent)=>(
                <Link to={"/restaurants/"+restaurent.info.id}><RestaurentCard key={restaurent.info.id} resData ={restaurent} /></Link>
                ))}              
            </div>



         </div>
    );
}
 export default Body;