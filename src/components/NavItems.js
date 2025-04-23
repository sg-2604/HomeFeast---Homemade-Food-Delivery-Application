import { useState } from "react";

const NavItems = () => {
    const [btnName,setbtnName]=useState("Login");
    let clickCount=0;
    return (<div className="navitems">
        <a href="#"><button>Home</button></a>
        <a href="#"><button>About Us</button></a>
        <a href="#"><button>Contact Us</button></a>
        <a href="#"><button>Cart</button></a>
        <a href="#"><button onClick={()=> {
            clickCount=!clickCount;
            clickCount==1?setbtnName("Logout"):setbtnName("Login");
        }}>{btnName}</button></a>
        
    </div>)
    
};

export default NavItems;