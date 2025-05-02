// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const NavItems = () => {
//     const [btnName,setbtnName]=useState("Login");
//     let clickCount=0;
//     const status= useOnlineStatus();
//     return (
//     <div className="navitems">
//         <p>{status === true ?  "🟢" : "🔴" }</p>
//         <button><Link to="/">Home</Link></button>
//         <button><Link to="/about">About Us</Link></button>
//         <button><Link to="/contact">Contact Us</Link></button>
//         <button>Cart</button>
//         <button onClick={()=> {
//             clickCount= !clickCount;
//             clickCount===1?setbtnName("Logout"):setbtnName("Login");
//         }}>{btnName}</button>
        
//     </div>)
    
// };

// export default NavItems;


import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavItems = () => {
  const [btnName, setBtnName] = useState("Login");
  let clickCount = 0;
  const status = useOnlineStatus();

  return (
    <div className="flex items-center">
      <p>{status ? "🟢" : "🔴"}</p>

      <button className="rounded-[20px] px-[10px] py-[5px] m-[5px] text-[#9d603e] bg-[#f8f5f2] 
                         hover:bg-[#f2cdb9] hover:text-[#a1591a]"><Link to="/" className="mx-[10px] text-lg no-underline text-inherit">Home</Link></button>
      <button className="rounded-[20px] px-[10px] py-[5px] m-[5px] text-[#9d603e] bg-[#f8f5f2] 
                         hover:bg-[#f2cdb9] hover:text-[#a1591a]"><Link to="/about" className="mx-[10px] text-lg no-underline text-inherit">About Us</Link></button>
      <button className="rounded-[20px] px-[10px] py-[5px] m-[5px] text-[#9d603e] bg-[#f8f5f2] 
                         hover:bg-[#f2cdb9] hover:text-[#a1591a]"><Link to="/contact" className="mx-[10px] text-lg no-underline text-inherit">Contact Us</Link></button>

      <button className="rounded-[20px] px-[10px] py-[10px] m-[5px] text-[#9d603e] bg-[#f8f5f2] 
                         hover:bg-[#f2cdb9] hover:text-[#a1591a]">
        Cart
      </button>

      <button 
        onClick={() => {
          clickCount = !clickCount;
          clickCount === 1 ? setBtnName("Logout") : setBtnName("Login");
        }} 
        className="rounded-[20px] px-[10px] py-[10px] m-[5px] text-[#9d603e] bg-[#f8f5f2] 
                   hover:bg-[#f2cdb9] hover:text-[#a1591a]"
      >
        {btnName}
      </button>
    </div>
  );
};

export default NavItems;
