import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurnatMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const Dummy = "Dummy data";

  // Fetching API here using Custom Hooks
  const resInfo = useRestaurnatMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer></Shimmer>;

  const {
    name,
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const handleCategoryClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold py-2 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name || "Default Name"}
      </h1>
      <p className="font-bold">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ")} {" -- "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // controlled component

        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleCategoryClick(index)}
          dummy={Dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
