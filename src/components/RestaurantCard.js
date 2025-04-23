import {ImgUrl} from "../utils/constants";
const RestaurantCard = (prop) =>{
    const{cloudinaryImageId,name,dish,cuisines,avgRating,costForTwo,sla}=prop?.resData?.info;
    
        return (
            <div className="card">
                <img className="foodImage" src={ImgUrl+cloudinaryImageId}/>
                <div className="content">
                    <h3 className="name">{name}</h3>
                    <h4 className="cuisine">{cuisines.join(", ")}</h4>
                    <h4 className="rating">{avgRating}</h4>
                    <h4 className="cFTwo">{costForTwo}</h4>
                    <h4 className="delivery">{sla?.slaString}</h4>
                </div>
            </div>
        ); 
};
export default RestaurantCard;