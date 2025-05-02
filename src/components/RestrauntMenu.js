import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const menuItems = resInfo?.data?.cards
    ?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.flatMap((card) => card?.card?.card?.itemCards || [])
    .map((itemCard) => itemCard.card.info)
    .filter(Boolean);

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name">{restaurantInfo?.name}</h1>
      <p className="restaurant-details">
        {restaurantInfo?.cuisines?.join(", ")} - {restaurantInfo?.costForTwoMessage}
      </p>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {menuItems?.length > 0 ? (
          menuItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No menu items found</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;