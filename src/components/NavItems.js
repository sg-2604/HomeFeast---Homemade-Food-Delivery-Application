import { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    const [btnName,setbtnName]=useState("Login");
    let clickCount=0;
    return (<div className="navitems">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About Us</Link></button>
        <button><Link to="/contact">Contact Us</Link></button>
        <button>Cart</button>
        <button onClick={()=> {
            clickCount= !clickCount;
            clickCount===1?setbtnName("Logout"):setbtnName("Login");
        }}>{btnName}</button>
        
    </div>)
    
};

export default NavItems;