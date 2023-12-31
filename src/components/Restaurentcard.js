import React from "react";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard=(props)=>{
    const {resData}=props;
    const {loggedInUser}= useContext(UserContext);
    const{cloudinaryImageId,name,areaName,cuisines,avgRating,costForTwo,sla}=resData?.info
    return(
        
        <div className='res-card m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200'>
             <img 
             className='rounded-lg' 
             src={CDN_URL+cloudinaryImageId}
             />
             <h3 className="font-bold py-3 text-lg">{name}</h3>
             <h4>{areaName}</h4>
             <h4>{cuisines.join(",")}</h4>
             <h4>{sla.deliveryTime} MINS away</h4>
             <h4>{avgRating} Stars</h4>
             <h4>{costForTwo}</h4>
             <h4> User: {loggedInUser}</h4>
        </div>
    )
 }

//Higher Order Component
//Input - Restaurant Card   ==> Reastaurant Card promoted //

export const withPromotedLabel =(RestaurentCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-1 p-2 rounded-lg">Promoted</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}

 export default RestaurentCard;