import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 
import { Link } from "react-router-dom";
import { RestaurantUrl } from "../utils/constants";

const CardContainer = ()=>{
  const [listOfRestaurants, setlistOfRestaurants]=useState([]);
  const [searchText, setSearchText]=useState("");
  const [filteredRestaurant, setFilteredRestaurants]=useState([]);

  useEffect( ()=> {fetchData()},[]);

  const fetchData = async () => {
    try {
      const data = await fetch(RestaurantUrl);
      const json = await data.json();
  
      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
      if (restaurants) {
        setlistOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        setlistOfRestaurants([]);
        setFilteredRestaurants([]);
        console.warn("No restaurants found in API response");
      }
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setlistOfRestaurants([]);
      setFilteredRestaurants([]);
    }
  };
  
  
  if(listOfRestaurants.length===0){
    return (
      <Shimmer/>
    );
  }
  else {
    return (
      <>
        <div className="flex justify-center p-[10px] m-[5px]">
          <div className=" flex justify-center">
              <input
      type="text"
      className="p-2 rounded-md border border-[#c9a682] bg-[#fdf7ee] text-[#6B3E26] 
                focus:border-[#a8754a] focus:ring-1 focus:ring-[#a8754a] w-[600px]"
      placeholder="Search restaurants..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
            <button
              className="ml-2 px-4 py-2 bg-[#7a3E18] text-white rounded-xl hover:bg-[#6B3E36] transition"
              onClick={() => {
                console.log(searchText);
                const filteredListOfRestaurant = listOfRestaurants.filter((res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredListOfRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <button className="ml-2 px-4 py-2 bg-[#7a3E18] text-white rounded-xl hover:bg-[#6B3E36] transition" onClick={() =>{
            const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating >4.5
            );
            setFilteredRestaurants(filteredList);
          }}>Top Rated Restaurant</button>
        </div> 
        
        <div className="flex flex-wrap m-[10px]">
          {filteredRestaurant.map((resObj) => (
          <Link key={resObj.info.id} to={"/restaurant/" + resObj.info.id} className="restaurant_link">
          <RestaurantCard  resData={resObj} />
        </Link>
        ))}
        </div>
      </>
    );
  }
  
};
export default CardContainer; 