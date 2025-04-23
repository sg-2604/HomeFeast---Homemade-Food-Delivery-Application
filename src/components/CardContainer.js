import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 

const CardContainer = ()=>{
  const [listOfRestaurants, setlistOfRestaurants]=useState([]);
  const [searchText, setSearchText]=useState("");
  const [filteredRestaurant, setFilteredRestaurants]=useState([]);

  useEffect( ()=> {fetchData()},[]);

  const fetchData = async() => {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    // console.log(json); 
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRestaurants.length==0){
    return (
      <Shimmer/>
    );
  }
  else {
    return (
      <>
        <div className="search-filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="search-btn" onClick={()=>{console.log(searchText);
              const filteredListOfRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredListOfRestaurant);
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() =>{
            const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating >4.5
            );
            setFilteredRestaurants(filteredList);
          }}>Top Rated Restaurant</button>
        </div> 
        
        <div className="cardcontainer">
          {filteredRestaurant.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={resObj} />
        ))}
        </div>
      </>
    );
  }
  
};
export default CardContainer; 