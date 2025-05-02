import {ImgUrl} from "../utils/constants";
const RestaurantCard = (prop) =>{
    const{cloudinaryImageId,name,dish,cuisines,avgRating,costForTwo,sla}=prop?.resData?.info;
    
        return (
            // <div className="h-[450px] w-[150px] p-[20px] m-[5px] bg-[#ebd1a2] flex items-center 
            //     rounded-[20px] rounded-tr-[40px] rounded-bl-[40px] border-2 border-transparent 
            //     hover:border-black hover:cursor-pointer hover:shadow-[5px_5px_15px_rgba(73,31,9,0.4)]">
            //     <img className="h-[200px] w-full rounded-[20px] rounded-tr-[40px] rounded-bl-[40px] mx-[20px] flex justify-center" src={ImgUrl+cloudinaryImageId}/>
            //     <div className="text-[#6B3E26]">
            //         <h3 className="name">{name}</h3>
            //         <h4 className="cuisine">{cuisines.join(", ")}</h4>
            //         <h4 className="rating">{avgRating}</h4>
            //         <h4 className="cFTwo">{costForTwo}</h4>
            //         <h4 className="delivery">{sla?.slaString}</h4>
            //     </div>
            // </div>

            <div className="h-[450px] w-[150px] p-[20px] m-[5px] bg-[#ebd1a2] flex flex-col items-center 
                rounded-[20px] rounded-tr-[40px] rounded-bl-[40px] border-2 border-transparent 
                hover:border-black hover:cursor-pointer hover:shadow-[5px_5px_15px_rgba(73,31,9,0.4)]">
  
  {/* Image */}
  <img className="h-[200px] w-full rounded-[20px] rounded-tr-[40px] rounded-bl-[40px] mb-2" 
       src={`${ImgUrl}${cloudinaryImageId}`} alt="Restaurant Image"/>

  {/* Restaurant details */}
  <div className="text-[#6B3E26] text-center">
    <h3 className="text-lg font-bold">{name}</h3>
    <h4 className="text-sm">{cuisines.join(", ")}</h4>
    <h4 className="text-sm font-semibold">{avgRating} ⭐</h4>
    <h4 className="text-sm">{costForTwo}</h4>
    <h4 className="text-sm">{sla?.slaString}</h4>
  </div>

</div>
        ); 
};
export default RestaurantCard;