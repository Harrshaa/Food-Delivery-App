import { CDN_URL } from "../utils/constants";

const RestaurentCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,area,cuisines,deliveryTime,avgRating,costForTwo}=resData?.info
    return(
        
        <div className='res-card m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200'>
             <img 
             className='rounded-lg' 
             src={CDN_URL+cloudinaryImageId}
             />
             <h3 className="font-bold py-3 text-lg">{name}</h3>
             <h4>{area}</h4>
             <h4>{cuisines.join(",")}</h4>
             <h4>{deliveryTime} MINS away</h4>
             <h4>{avgRating} Stars</h4>
             <h4>{costForTwo/100} FOR TWO</h4>
        </div>
    )
 }

 export default RestaurentCard;