import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurentCard from './components/Restaurentcard';
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

import Cart from './components/cart';




const AppLayout=()=>{
    const [userName,setUserName] =useState();

    //Authentication//
     useEffect(()=>{
    //Make an API Call and send username & password//
    const data ={
        name:"Harsha",
    };
    setUserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <UserContext.Provider value={{loggedInUser: "Elon Musk"}}>
                {/* Elon Musk */}
            <Header/>

            </UserContext.Provider>
            
            <Outlet/>        
        </div>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ],
        errorElement:<Error />
    },
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);