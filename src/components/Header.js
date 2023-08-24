import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header=()=>{

    const {loggedInUser} =useContext(UserContext);
    console.log(loggedInUser);
        
    let [btnName,setbtnName]=useState("login");
    return(
        <div className='flex justify-between bg-pink-50 shadow-lg mb-2'>
            <div className='logo'>
                <img className='w-28' src={LOGO_URL} />
            </div>
            <div className='flex items-center p'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    
                    <button className="px-4" onClick={()=>{
                        if(btnName==="login") setbtnName("logOut");
                        else
                        setbtnName("login");
                        
                    }}>{btnName}</button>

                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
 }

 export default Header;