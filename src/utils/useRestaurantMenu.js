import { useEffect, useState } from "react";
import { MenuUrl } from "./constants";
const useRestaurantMenu = (resId)=>{
    
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
        const data = await fetch(`${MenuUrl}${resId}`);
        const json = await data.json();
        setResInfo(json);
        } catch (error) {
        console.error("Failed to fetch menu:", error);
        }
    };
    // const a ; 
    // const b ; 
    // var c ; 
    // c.a = a; 
    // c.b = b ; 
    // ret c ; 
    return resInfo;
};

export default useRestaurantMenu;

  