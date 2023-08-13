import UserClass from "./UserClass";
import User from "./user";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor")
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
    }

    async componentDidMount(){
        // console.log("Parent component did mount");
        const data =await fetch("https://api.github.com/users/Harrshaa");
        
        const json=await data.json();


        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("Component got unMounted")
    }


    render(){
        // console.log("Parent Render")
        const {name,location,id,avatar_url}=this.state.userInfo;
        return(          
              
            <div>            
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <img src={avatar_url}></img>
            <h3>{name}</h3>
            <h3>{location}</h3>
            <h3>{id}</h3>
            {/* <User name={"Harsha (functional)"} location={"Hyderabad"} contact={"7780791364"} /> */}
            {/* <UserClass name={"First (class)"} location={"Hyderabad"} contact={"7780791364"}/> */}
            {/* <UserClass name={"Second (class)"} location={"Hyderabad"} contact={"7780791364"}/>             */}
        </div>
        );
    }
}




// const About =()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"Harsha (functional)"} location={"Hyderabad"} contact={"7780791364"} />
//             <UserClass name={"Harsha (class)"} location={"Hyderabad"} contact={"7780791364"}/>            
//         </div>
//     )
// }
export default About;



/****
 * ---MOUNTING---
 * 
 * Constructor (dummy)
 * Render (dummy)
 * <HTML Dummy/>
 * 
 * Component Did Mount
 * <API CALL>
 * <this.setState> ->State variable is updated
 * 
 * ----UPDATE---
 * 
 * render (API Data)
 * <HTML (new API Data)
 * Component did Update
 * 
 */
